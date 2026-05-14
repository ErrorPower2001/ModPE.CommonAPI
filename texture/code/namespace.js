/**
 * ForgottenCraft API - 命名空间
 * 定义全局命名空间和 API 便捷访问别名。
 * 由 main.js 按顺序加载。
 */

var ForgottenCraftAPI = [];

/**
 * 全局命名空间
 * [0] ForgottenCraftAPI  [1] ModPE      [2] Level    [3] Player
 * [4] Entity             [5] Item       [6] Block    [7] Server
 */
var ForgottenCraft = [
  ForgottenCraftAPI,
  ModPE,
  Level,
  Player,
  Entity,
  Item,
  Block,
  Server,
];

var API = ForgottenCraft[0];
var _ModPE = ForgottenCraft[1];
var _Level = ForgottenCraft[2];
var _Player = ForgottenCraft[3];
var _Entity = ForgottenCraft[4];
var _Item = ForgottenCraft[5];
var _Block = ForgottenCraft[6];
var _Server = ForgottenCraft[7];
