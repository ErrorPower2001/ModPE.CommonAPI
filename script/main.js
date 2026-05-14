/**
 * ForgottenCraft API - 入口文件
 * 作者: 我的世界之血狼 (QQ: 1366329192)
 *
 * 此文件是 ModPE 脚本的入口点。
 * 按顺序加载 code/ 目录中的模块，初始化用户配置。
 */

// ========================= 代码加载器 =========================

function loadScript(filename) {
  var code = ModPE.getBytesFromTexturePack(filename);
  eval(new java.lang.String(code, "UTF-8") + "");
}

// 按依赖顺序加载模块
loadScript("code/constants.js");
loadScript("code/hooks.js");
loadScript("code/state.js");
loadScript("code/Function.js");

// ========================= 用户配置文件初始化 =========================

var CONFIG_PATH = "/sdcard/games/com.mojang/[ModPE]ForgottenCraft/[ModPE][API]ForgottenCraft.JS";

var DEFAULT_CONFIG = [
  "/*attackHook_ = function(attacker, victim) {}*/",
  "",
  "/*chatHook_ = function(str) {}*/",
  "",
  "/*continueDestroyBlock_ = function(x, y, z, side, progress) {}*/",
  "",
  "/*destroyBlock_ = function(x, y, z, side) {}*/",
  "",
  "/*projectileHitEntityHook_ = function(projectile, targetEntity) {}*/",
  "",
  "/*eatHook_ = function(hearts, saturationRatio) {}*/",
  "",
  "/*entityAddedHook_ = function(entity) {}*/",
  "",
  "/*entityHurtHook_ = function(attacker, victim, halfhearts) {}*/",
  "",
  "/*entityRemovedHook_ = function(entity) {}*/",
  "",
  "/*explodeHook_ = function(entity, x, y, z, power, onFire) {}*/",
  "",
  "/*serverMessageReceiveHook_ = function(str) {}*/",
  "",
  "/*deathHook_ = function(attacker, victim) {}*/",
  "",
  "/*playerAddExpHook_ = function(player, experienceAdded) {}*/",
  "",
  "/*playerExpLevelChangeHook_ = function(player, levelsAdded) {}*/",
  "",
  "/*redstoneUpdateHook_ = function(x, y, z, newCurrent, isWorldGen, blockId, blockData) {}*/",
  "",
  "/*newLevel_ = function() {}*/",
  "",
  "/*startDestroyBlock_ = function(x, y, z, side) {}*/",
  "",
  "/*projectileHitBlockHook_ = function(projectile, blockX, blockY, blockZ, side) {}*/",
  "",
  "/*modTick_ = function() {}*/",
  "",
  "/*useItem_ = function(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {}*/",
  "",
  "// Example: register a set of tools",
  "// API.setItem(500, ['texture', 0], 'My Pickaxe', [1, 0], 250);",
  "// API.setItem(501, ['texture', 1], 'My Axe', [1, 1], 250);",
  "// API.setItem(502, ['texture', 2], 'My Shovel', [1, 2], 250);",
  "// API.setItem(503, ['texture', 3], 'My Sword', [1, 3], 250);",
].join("\n");

if (!API.readData(CONFIG_PATH, "UTF-8")) {
  API.saveData(CONFIG_PATH, DEFAULT_CONFIG);
}

eval(API.readData(CONFIG_PATH, "UTF-8"));