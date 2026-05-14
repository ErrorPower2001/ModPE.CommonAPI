/**
 * ForgottenCraft API - 钩子声明
 * 用户扩展钩子 (xxxHook_) 和框架内部钩子 (hookXxx) 的声明。
 * 由 main.js 在 Function.js 之前加载。
 */

// ========================= 用户扩展钩子 =========================
// 用户在外部配置文件中定义这些函数，框架会自动调用。

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

// ========================= 框架内部钩子 =========================
// 其他模块可赋值这些变量以在钩子执行时被调用。

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