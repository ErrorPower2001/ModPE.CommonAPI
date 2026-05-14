/**
 * ForgottenCraft API - 钩子模块
 * 用户扩展钩子声明、框架内部钩子声明、以及所有钩子实现。
 * 由 main.js 按顺序加载。
 *
 * 钩子调用顺序:
 *   1. xxxHook_   - 用户扩展钩子 (可通过 preventDefault() 阻止后续)
 *   2. hookXxx    - 框架内部钩子
 */

// ========================= 用户扩展钩子声明 =========================

var attackHook_ = null;
var chatHook_ = null;
var continueDestroyBlock_ = null;
var destroyBlock_ = null;
var projectileHitEntityHook_ = null;
var eatHook_ = null;
var entityAddedHook_ = null;
var entityHurtHook_ = null;
var entityRemovedHook_ = null;
var explodeHook_ = null;
var serverMessageReceiveHook_ = null;
var deathHook_ = null;
var playerAddExpHook_ = null;
var playerExpLevelChangeHook_ = null;
var redstoneUpdateHook_ = null;
var newLevel_ = null;
var startDestroyBlock_ = null;
var projectileHitBlockHook_ = null;
var modTick_ = null;
var useItem_ = null;

// ========================= 框架内部钩子声明 =========================

var hookAttack = null;
var hookChat = null;
var hookContinueDestroyBlock = null;
var hookDestroyBlock = null;
var hookProjectileHitEntity = null;
var hookEat = null;
var hookEntityAdded = null;
var hookEntityHurt = null;
var hookEntityRemoved = null;
var hookExplode = null;
var hookServerMessageReceive = null;
var hookDeath = null;
var hookPlayerAddExp = null;
var hookPlayerExpLevelChange = null;
var hookRedstoneUpdate = null;
var hookNewLevel = null;
var hookStartDestroyBlock = null;
var hookProjectileHitBlock = null;
var hookModTick = null;
var hookUseItem = null;

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
  if (hookContinueDestroyBlock)
    hookContinueDestroyBlock(x, y, z, side, progress);
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
  if (projectileHitEntityHook_)
    projectileHitEntityHook_(projectile, targetEntity);
  if (hookProjectileHitEntity)
    hookProjectileHitEntity(projectile, targetEntity);
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

redstoneUpdateHook = function (
  x,
  y,
  z,
  newCurrent,
  isWorldGen,
  blockId,
  blockData,
) {
  if (redstoneUpdateHook_)
    redstoneUpdateHook_(x, y, z, newCurrent, isWorldGen, blockId, blockData);
  if (hookRedstoneUpdate)
    hookRedstoneUpdate(x, y, z, newCurrent, isWorldGen, blockId, blockData);
};

newLevel = function () {
  if (newLevel_) newLevel_();
  if (hookNewLevel) hookNewLevel();
};

startDestroyBlock = function (x, y, z, side) {
  if (startDestroyBlock_) startDestroyBlock_(x, y, z, side);
  if (hookStartDestroyBlock) hookStartDestroyBlock(x, y, z, side);
  var carriedId = _Player.getCarriedItem();
  if (carriedId === CustomTools[TOOL_PICKAXE][carriedId])
    API.setToolDestroyTime_Pickaxe(6.0);
  if (carriedId === CustomTools[TOOL_AXE][carriedId])
    API.setToolDestroyTime_Axe(6.0);
  if (carriedId === CustomTools[TOOL_SHOVEL][carriedId])
    API.setToolDestroyTime_Shovel(6.0);
  if (carriedId === CustomTools[TOOL_SWORD][carriedId])
    API.setToolDestroyTime_Shears(6.0);
};

projectileHitBlockHook = function (projectile, blockX, blockY, blockZ, side) {
  if (projectileHitBlockHook_)
    projectileHitBlockHook_(projectile, blockX, blockY, blockZ, side);
  if (hookProjectileHitBlock)
    hookProjectileHitBlock(projectile, blockX, blockY, blockZ, side);
};

modTick = function () {
  if (modTick_) modTick_();
  if (hookModTick) hookModTick();
  var carriedId = _Player.getCarriedItem();
  var carriedData = _Player.getCarriedItemData();
  var slotId = _Player.getSelectedSlotId();
  var enchList = _Player.getEnchantments(slotId);
  if (carriedId !== CustomTools[TOOL_PICKAXE][carriedId])
    API.setToolDestroyTime_Pickaxe(1.0);
  if (carriedId !== CustomTools[TOOL_AXE][carriedId])
    API.setToolDestroyTime_Axe(1.0);
  if (carriedId !== CustomTools[TOOL_SHOVEL][carriedId])
    API.setToolDestroyTime_Shovel(1.0);
  if (carriedId !== CustomTools[TOOL_SWORD][carriedId])
    API.setToolDestroyTime_Shears(1.0);
  if (tempToolId) {
    if (carriedId === VanillaToolIDs[carriedId]) {
      _Entity.setCarriedItem(
        _Player.getEntity(),
        tempToolId[0],
        1,
        tempToolId[1] + 1,
      );
      for (var i = 0; i < enchList.length; i++) {
        _Player.enchant(slotId, enchList[i].type, enchList[i].level);
      }
      tempToolId = null;
    }
  }
};

useItem = function (x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
  if (useItem_)
    useItem_(x, y, z, itemId, blockId, side, itemDamage, blockDamage);
  if (hookUseItem)
    hookUseItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage);
};
