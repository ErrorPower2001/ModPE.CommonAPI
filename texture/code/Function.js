/**
 * ForgottenCraft API - 核心模块
 * 作者: 我的世界之血狼 (QQ: 1366329192)
 *
 * 提供自定义物品/方块注册、工具速度修正、矿石生成、文件读写等功能。
 * 依赖: constants.js, hooks.js, state.js (由 main.js 按顺序加载)
 */

// ========================= 命名空间初始化 =========================

var ForgottenCraftAPI = [];

/**
 * 全局命名空间
 * [0] ForgottenCraftAPI  [1] ModPE      [2] Level    [3] Player
 * [4] Entity             [5] Item       [6] Block    [7] Server
 */
var ForgottenCraft = [
  ForgottenCraftAPI, ModPE, Level, Player,
  Entity, Item, Block, Server,
];

// ========================= API 便捷访问 =========================

var API = ForgottenCraft[0];
var _ModPE = ForgottenCraft[1];
var _Level = ForgottenCraft[2];
var _Player = ForgottenCraft[3];
var _Entity = ForgottenCraft[4];
var _Item = ForgottenCraft[5];
var _Block = ForgottenCraft[6];
var _Server = ForgottenCraft[7];

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
      case ITEM_DECO_STACK64:     stackSize = 64; category = 2; break;
      case ITEM_DECO_STACK16:     stackSize = 16; category = 2; break;
      case ITEM_MATERIAL_STACK64: stackSize = 64; category = 4; break;
      case ITEM_MATERIAL_STACK16: stackSize = 16; category = 4; break;
      default: return;
    }
    _ModPE.setItem(id, texture[0], texture[1], name, stackSize);
    _Item.setCategory(id, category, 0);
    _Player.addItemCreativeInv(id, stackSize, 0);
    _Item.setHandEquipped(id, false);
  }

  if (type[0] === ItemType_Tool) {
    var enchantType;
    switch (type[1]) {
      case TOOL_PICKAXE: enchantType = EnchantType_pickaxe; break;
      case TOOL_AXE:     enchantType = EnchantType_axe;     break;
      case TOOL_SHOVEL:  enchantType = EnchantType_shovel;  break;
      case TOOL_SWORD:   enchantType = EnchantType_weapon;  break;
      default: return;
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

function generateOreDirection(blockId, blockData, veinCount, maxHeight, replaceBlock, dirX, dirZ) {
  var veinSize = 0;
  veinSize++;
  var veinType = 0;
  for (var r = 0; r < 6; r++) {
    veinType += Math.round(Math.random());
  }
  var x = getPlayerX() + dirX * Math.random() * 256;
  var y = Math.random() * maxHeight;
  var z = getPlayerZ() + dirZ * Math.random() * 256;
  if (Level.getTile(x, y, z) !== replaceBlock) return;
  if (veinSize > veinCount) {
    veinSize = 0;
    return;
  }
  Level.setTile(x, y, z, blockId, blockData);
  if (veinType >= 0 && veinType < VEIN_SHAPES.length) {
    var shape = VEIN_SHAPES[veinType];
    for (var s = 0; s < shape.length; s++) {
      Level.setTile(x + shape[s][0], y + shape[s][1], z + shape[s][2], blockId, blockData);
    }
  }
}

API.generateOre = function (blockId, blockData, veinCount, maxHeight, replaceBlock) {
  generateOreDirection(blockId, blockData, veinCount, maxHeight, replaceBlock, 1, 1);
  generateOreDirection(blockId, blockData, veinCount, maxHeight, replaceBlock, 1, -1);
  generateOreDirection(blockId, blockData, veinCount, maxHeight, replaceBlock, -1, 1);
  generateOreDirection(blockId, blockData, veinCount, maxHeight, replaceBlock, -1, -1);
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
    print("[ForgottenCraft] write error: " + e);
  }
};

API.readData = function (path, encoding) {
  var file = new java.io.File(path);
  if (!file.exists() || !file.isFile()) return null;
  var result = "";
  var reader = new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding);
  var buffer = new java.io.BufferedReader(reader);
  var line;
  while ((line = buffer.readLine()) !== null) {
    result += line;
  }
  reader.close();
  return result;
};

// ========================= 钩子实现 =========================

attackHook = function (attacker, victim) {
  if (attackHook_) attackHook_(attacker, victim);
  if (hookAttack) hookAttack(attacker, victim);
  swapToVanillaTool(TOOL_PICKAXE, 278);
  swapToVanillaTool(TOOL_AXE, 279);
  swapToVanillaTool(TOOL_SHOVEL, 277);
  swapToVanillaTool(TOOL_SWORD, 276);
};

chatHook = function (str) {
  if (chatHook_) chatHook_(str);
  if (hookChat) hookChat(str);
};

continueDestroyBlock = function (x, y, z, side, progress) {
  if (continueDestroyBlock_) continueDestroyBlock_(x, y, z, side, progress);
  if (hookContinueDestroyBlock) hookContinueDestroyBlock(x, y, z, side, progress);
};

destroyBlock = function (x, y, z, side) {
  if (destroyBlock_) destroyBlock_(x, y, z, side);
  if (hookDestroyBlock) hookDestroyBlock(x, y, z, side);
  swapToVanillaTool(TOOL_PICKAXE, 278);
  swapToVanillaTool(TOOL_AXE, 279);
  swapToVanillaTool(TOOL_SHOVEL, 277);
  swapToVanillaTool(TOOL_SWORD, 276);
};

projectileHitEntityHook = function (projectile, targetEntity) {
  if (projectileHitEntityHook_) projectileHitEntityHook_(projectile, targetEntity);
  if (hookProjectileHitEntity) hookProjectileHitEntity(projectile, targetEntity);
};

eatHook = function (hearts, saturationRatio) {
  if (eatHook_) eatHook_(hearts, saturationRatio);
  if (hookEat) hookEat(hearts, saturationRatio);
};

entityAddedHook = function (entity) {
  if (entityAddedHook_) entityAddedHook_(entity);
  if (hookEntityAdded) hookEntityAdded(entity);
};

entityHurtHook = function (attacker, victim, halfhearts) {
  if (entityHurtHook_) entityHurtHook_(attacker, victim, halfhearts);
  if (hookEntityHurt) hookEntityHurt(attacker, victim, halfhearts);
};

entityRemovedHook = function (entity) {
  if (entityRemovedHook_) entityRemovedHook_(entity);
  if (hookEntityRemoved) hookEntityRemoved(entity);
};

explodeHook = function (entity, x, y, z, power, onFire) {
  if (explodeHook_) explodeHook_(entity, x, y, z, power, onFire);
  if (hookExplode) hookExplode(entity, x, y, z, power, onFire);
};

serverMessageReceiveHook = function (str) {
  if (serverMessageReceiveHook_) serverMessageReceiveHook_(str);
  if (hookServerMessageReceive) hookServerMessageReceive(str);
};

deathHook = function (attacker, victim) {
  if (deathHook_) deathHook_(attacker, victim);
  if (hookDeath) hookDeath(attacker, victim);
};

playerAddExpHook = function (player, experienceAdded) {
  if (playerAddExpHook_) playerAddExpHook_(player, experienceAdded);
  if (hookPlayerAddExp) hookPlayerAddExp(player, experienceAdded);
};

playerExpLevelChangeHook = function (player, levelsAdded) {
  if (playerExpLevelChangeHook_) playerExpLevelChangeHook_(player, levelsAdded);
  if (hookPlayerExpLevelChange) hookPlayerExpLevelChange(player, levelsAdded);
};

redstoneUpdateHook = function (x, y, z, newCurrent, isWorldGen, blockId, blockData) {
  if (redstoneUpdateHook_) redstoneUpdateHook_(x, y, z, newCurrent, isWorldGen, blockId, blockData);
  if (hookRedstoneUpdate) hookRedstoneUpdate(x, y, z, newCurrent, isWorldGen, blockId, blockData);
};

newLevel = function () {
  if (newLevel_) newLevel_();
  if (hookNewLevel) hookNewLevel();
};

startDestroyBlock = function (x, y, z, side) {
  if (startDestroyBlock_) startDestroyBlock_(x, y, z, side);
  if (hookStartDestroyBlock) hookStartDestroyBlock(x, y, z, side);
  var carriedId = _Player.getCarriedItem();
  if (carriedId === CustomTools[TOOL_PICKAXE][carriedId]) API.setToolDestroyTime_Pickaxe(6.0);
  if (carriedId === CustomTools[TOOL_AXE][carriedId]) API.setToolDestroyTime_Axe(6.0);
  if (carriedId === CustomTools[TOOL_SHOVEL][carriedId]) API.setToolDestroyTime_Shovel(6.0);
  if (carriedId === CustomTools[TOOL_SWORD][carriedId]) API.setToolDestroyTime_Shears(6.0);
};

projectileHitBlockHook = function (projectile, blockX, blockY, blockZ, side) {
  if (projectileHitBlockHook_) projectileHitBlockHook_(projectile, blockX, blockY, blockZ, side);
  if (hookProjectileHitBlock) hookProjectileHitBlock(projectile, blockX, blockY, blockZ, side);
};

modTick = function () {
  if (modTick_) modTick_();
  if (hookModTick) hookModTick();
  var carriedId = _Player.getCarriedItem();
  var carriedData = _Player.getCarriedItemData();
  var slotId = _Player.getSelectedSlotId();
  var enchList = _Player.getEnchantments(slotId);
  if (carriedId !== CustomTools[TOOL_PICKAXE][carriedId]) API.setToolDestroyTime_Pickaxe(1.0);
  if (carriedId !== CustomTools[TOOL_AXE][carriedId]) API.setToolDestroyTime_Axe(1.0);
  if (carriedId !== CustomTools[TOOL_SHOVEL][carriedId]) API.setToolDestroyTime_Shovel(1.0);
  if (carriedId !== CustomTools[TOOL_SWORD][carriedId]) API.setToolDestroyTime_Shears(1.0);
  if (tempToolId) {
    if (carriedId === VanillaToolIDs[carriedId]) {
      _Entity.setCarriedItem(_Player.getEntity(), tempToolId[0], 1, tempToolId[1] + 1);
      for (var i = 0; i < enchList.length; i++) {
        _Player.enchant(slotId, enchList[i].type, enchList[i].level);
      }
      tempToolId = null;
    }
  }
};

useItem = function (x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
  if (useItem_) useItem_(x, y, z, itemId, blockId, side, itemDamage, blockDamage);
  if (hookUseItem) hookUseItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage);
};