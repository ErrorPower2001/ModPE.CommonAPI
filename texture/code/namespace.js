/**
 * CraftLib API - 命名空间
 * 定义全局命名空间和 API 便捷访问别名。
 * 由 main.js 按顺序加载。
 */

var CraftLibAPI = [];

/**
 * 全局命名空间
 * [0] CraftLibAPI  [1] ModPE      [2] Level    [3] Player
 * [4] Entity             [5] Item       [6] Block    [7] Server
 */
var CraftLib = [CraftLibAPI, ModPE, Level, Player, Entity, Item, Block, Server];

var API = CraftLib[0];
var _ModPE = CraftLib[1];
var _Level = CraftLib[2];
var _Player = CraftLib[3];
var _Entity = CraftLib[4];
var _Item = CraftLib[5];
var _Block = CraftLib[6];
var _Server = CraftLib[7];
