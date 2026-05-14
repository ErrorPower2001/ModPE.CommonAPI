/**
 * CraftLib API - 函数模块
 * 作者: 我的世界之血狼 (QQ: 1366329192)
 *
 * 提供自定义物品/方块注册、工具速度修正、矿石生成、文件读写等功能。
 * 依赖: constants.js, hooks.js, state.js, namespace.js (由 main.js 按顺序加载)
 */

// ========================= 内部辅助函数 =========================

/**
 * 将自定义工具临时替换为原版工具，以利用原版挖掘速度。
 * @param {number} toolType - 工具类型 (0=pickaxe, 1=axe, 2=shovel, 3=sword)
 * @param {number} vanillaId - 对应的原版工具 ID
 */
function swapToVanillaTool(toolType, vanillaId) {
  var carriedId = _Player.getCarriedItem();
  if (carriedId !== CustomTools[toolType][carriedId]) return;
  var carriedData = _Player.getCarriedItemData();
  var slotId = _Player.getSelectedSlotId();
  var enchList = _Player.getEnchantments(slotId);
  tempToolId = [carriedId, carriedData];
  _Entity.setCarriedItem(_Player.getEntity(), vanillaId, 1, 0);
  for (var i = 0; i < enchList.length; i++) {
    _Player.enchant(slotId, enchList[i].type, enchList[i].level);
  }
}

/**
 * 批量设置方块挖掘时间。
 * @param {Array} blocks - [[blockId, baseTime], ...]
 * @param {number} speed - 速度乘数
 */
function setBlockDestroyTimes(blocks, speed) {
  for (var i = 0; i < blocks.length; i++) {
    _Block.setDestroyTime(blocks[i][0], blocks[i][1] / speed);
  }
}

// ========================= 核心 API 函数 =========================

/**
 * 注册自定义物品或工具。
 * @param {number} id - 物品 ID
 * @param {Array} texture - [材质名, 材质特殊值]
 * @param {string} name - 显示名称
 * @param {Array} type - [物品类型, 子类型]
 * @param {number} [maxDamage] - 工具最大耐久
 */
API.setItem = function (id, texture, name, type, maxDamage) {
  if (type[0] === ItemType_Item) {
    var stackSize, category;
    switch (type[1]) {
      case ITEM_DECO_STACK64:
        stackSize = 64;
        category = 2;
        break;
      case ITEM_DECO_STACK16:
        stackSize = 16;
        category = 2;
        break;
      case ITEM_MATERIAL_STACK64:
        stackSize = 64;
        category = 4;
        break;
      case ITEM_MATERIAL_STACK16:
        stackSize = 16;
        category = 4;
        break;
      default:
        return;
    }
    _ModPE.setItem(id, texture[0], texture[1], name, stackSize);
    _Item.setCategory(id, category, 0);
    _Player.addItemCreativeInv(id, stackSize, 0);
    _Item.setHandEquipped(id, false);
  }

  if (type[0] === ItemType_Tool) {
    var enchantType;
    switch (type[1]) {
      case TOOL_PICKAXE:
        enchantType = EnchantType_pickaxe;
        break;
      case TOOL_AXE:
        enchantType = EnchantType_axe;
        break;
      case TOOL_SHOVEL:
        enchantType = EnchantType_shovel;
        break;
      case TOOL_SWORD:
        enchantType = EnchantType_weapon;
        break;
      default:
        return;
    }
    _ModPE.setItem(id, texture[0], texture[1], name, 1);
    _Item.setEnchantType(id, enchantType, 1);
    _Item.setHandEquipped(id, true);
    _Item.setCategory(id, 3, 0);
    _Player.addItemCreativeInv(id, 1, 0);
    _Item.setMaxDamage(id, maxDamage);
    CustomTools[type[1]][id] = id;
  }

  RegisteredItems[id] = id;
};

// ========================= 工具速度修正 =========================

API.setToolDestroyTime_Pickaxe = function (speed) {
  setBlockDestroyTimes(PICKAXE_BLOCKS, speed * 20);
};

API.setToolDestroyTime_Axe = function (speed) {
  setBlockDestroyTimes(AXE_BLOCKS, speed);
};

API.setToolDestroyTime_Shovel = function (speed) {
  setBlockDestroyTimes(SHOVEL_BLOCKS, speed);
};

API.setToolDestroyTime_Shears = function (speed) {
  setBlockDestroyTimes(SHEAR_BLOCKS, speed * 20);
};

// ========================= 矿石生成 =========================

function generateOreDirection(
  blockId,
  blockData,
  veinCount,
  maxHeight,
  replaceBlock,
  dirX,
  dirZ,
) {
  var veinSize = 0;
  veinSize++;
  var veinType = 0;
  for (var r = 0; r < 6; r++) {
    veinType += Math.round(Math.random());
  }
  var x = Math.floor(getPlayerX() + dirX * Math.random() * 256);
  var y = Math.floor(Math.random() * maxHeight);
  var z = Math.floor(getPlayerZ() + dirZ * Math.random() * 256);
  if (Level.getTile(x, y, z) !== replaceBlock) return;
  if (veinSize > veinCount) {
    veinSize = 0;
    return;
  }
  Level.setTile(x, y, z, blockId, blockData);
  if (veinType >= 0 && veinType < VEIN_SHAPES.length) {
    var shape = VEIN_SHAPES[veinType];
    for (var s = 0; s < shape.length; s++) {
      Level.setTile(
        x + shape[s][0],
        y + shape[s][1],
        z + shape[s][2],
        blockId,
        blockData,
      );
    }
  }
}

API.generateOre = function (
  blockId,
  blockData,
  veinCount,
  maxHeight,
  replaceBlock,
) {
  generateOreDirection(
    blockId,
    blockData,
    veinCount,
    maxHeight,
    replaceBlock,
    1,
    1,
  );
  generateOreDirection(
    blockId,
    blockData,
    veinCount,
    maxHeight,
    replaceBlock,
    1,
    -1,
  );
  generateOreDirection(
    blockId,
    blockData,
    veinCount,
    maxHeight,
    replaceBlock,
    -1,
    1,
  );
  generateOreDirection(
    blockId,
    blockData,
    veinCount,
    maxHeight,
    replaceBlock,
    -1,
    -1,
  );
};

API.MineBeProduced = API.generateOre;

// ========================= 文件读写 =========================

API.saveData = function (path, content) {
  try {
    var file = new java.io.File(path);
    file.getParentFile().mkdirs();
    file.createNewFile();
    var writer = new java.io.FileWriter(file);
    writer.write(content);
    writer.close();
  } catch (e) {
    print("[CraftLib] write error: " + e);
  }
};

API.readData = function (path, encoding) {
  var file = new java.io.File(path);
  if (!file.exists() || !file.isFile()) return null;
  var result = "";
  var reader = new java.io.InputStreamReader(
    new java.io.FileInputStream(file),
    encoding,
  );
  var buffer = new java.io.BufferedReader(reader);
  var line;
  while ((line = buffer.readLine()) !== null) {
    result += line;
  }
  reader.close();
  return result;
};
