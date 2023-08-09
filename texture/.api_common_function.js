// Variable
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();


var 附魔类型_武器 = EnchantType.weapon;
var 附魔类型_弓箭 = EnchantType.bow;
var 附魔类型_锄头 = EnchantType.hoe;
var 附魔类型_剪刀 = EnchantType.shears;
var 附魔类型_打火石 = EnchantType.flintAndSteel;
var 附魔类型_斧子 = EnchantType.axe;
var 附魔类型_镐子 = EnchantType.pickaxe;
var 附魔类型_铲子 = EnchantType.shovel;
var 附魔类型_鱼竿 = EnchantType.fishingRod;
var 附魔类型_书本 = EnchantType.book;

var 附魔属性_水下速掘 = Enchantment.AQUA_AFFINITY;
var 附魔属性_节肢杀手 = Enchantment.BANE_OF_ARTHROPODS;
var 附魔属性_爆炸保护 = Enchantment.BLAST_PROTECTION;
var 附魔属性_海洋探索者 = Enchantment.DEPTH_STRIDER;
var 附魔属性_挖掘效率 = Enchantment.EFFICIENCY;
var 附魔属性_摔落保护 = Enchantment.FEATHER_FALLING;
var 附魔属性_火焰附加 = Enchantment.FIRE_ASPECT;
var 附魔属性_火焰保护 = Enchantment.FIRE_PROTECTION;
var 附魔属性_火矢 = Enchantment.FLAME;
var 附魔属性_时运 = Enchantment.FORTUNE;
var 附魔属性_无限 = Enchantment.INFINITY;
var 附魔属性_击退 = Enchantment.KNOCKBACK;
var 附魔属性_抢夺 = Enchantment.LOOTING;
var 附魔属性_海之眷顾 = Enchantment.LUCK_OF_THE_SEA;
var 附魔属性_钓饵 = Enchantment.LURE;
var 附魔属性_力量 = Enchantment.POWER;
var 附魔属性_远程保护 = Enchantment.PROJECTILE_PROTECTION;
var 附魔属性_保护 = Enchantment.PROTECTION;
var 附魔属性_弓箭击退 = Enchantment.PUNCH;
var 附魔属性_水下呼吸 = Enchantment.RESPIRATION;
var 附魔属性_锋利 = Enchantment.SHARPNESS;
var 附魔属性_精准采集 = Enchantment.SILK_TOUCH;
var 附魔属性_灵亡杀手 = Enchantment.SMITE;
var 附魔属性_荆棘 = Enchantment.THORNS;
var 附魔属性_耐久 = Enchantment.UNBREAKING;


item_id = [];
block_id = [];

block_name_id = [];
item_name_id = [];

tool_id = [[], [], [], []];

Minecraft_Tool = [[270, 274, 257, 278, 285], [271, 275, 258, 279, 286], [269, 273, 256, 277, 284], [268, 272, 267, 276, 283]];

for(var i = 0; i <= 5; ++ i){
    Minecraft_Tool[Minecraft_Tool[0][i]] = Minecraft_Tool[0][i];
    Minecraft_Tool[Minecraft_Tool[1][i]] = Minecraft_Tool[1][i];
    Minecraft_Tool[Minecraft_Tool[2][i]] = Minecraft_Tool[2][i];
    Minecraft_Tool[Minecraft_Tool[3][i]] = Minecraft_Tool[3][i];
    Minecraft_Tool[0][Minecraft_Tool[0][i]] = Minecraft_Tool[0][i];
    Minecraft_Tool[1][Minecraft_Tool[1][i]] = Minecraft_Tool[1][i];
    Minecraft_Tool[2][Minecraft_Tool[2][i]] = Minecraft_Tool[2][i];
    Minecraft_Tool[3][Minecraft_Tool[3][i]] = Minecraft_Tool[3][i];
}


ItemType.Item = "Item";
ItemType.Tool = "Tool";

BlockType.Block = "Block";
BlockType.Water = "Water";
BlockType.Lava = "Lava";



ErrorPower.Item.setItem = function(id_and_name, texture_and_sorting, type_and_sorting, item_damage){
    item_name_id[id_and_name[0]] = id_and_name[1];
    item_name_id[id_and_name[1]] = id_and_name[0];

    if(type_and_sorting[0] == "Item"){
        if(type_and_sorting[1] == 0){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[物品]" + " " + id_and_name[1], 64);
            Item.setCategory(id_and_name[0], 2, 0);
            Player.addItemCreativeInv(id_and_name[0], 64, 0);
        }
        if(type_and_sorting[1] == 1){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[物品]" + " " + id_and_name[1], 16);
            Item.setCategory(id_and_name[0], 2, 0);
            Player.addItemCreativeInv(id_and_name[0], 16, 0);
        }
        if(type_and_sorting[1] == 2){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[物品]" + " " + id_and_name[1], 64);
            Item.setCategory(id_and_name[0], 4, 0);
            Player.addItemCreativeInv(id_and_name[0], 64, 0);
        }
        if(type_and_sorting[1] == 3){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[物品]" + " " + id_and_name[1], 16);
            Item.setCategory(id_and_name[0], 4, 0);
            Player.addItemCreativeInv(id_and_name[0], 16, 0);
        }
        Item.setHandEquipped(id_and_name[0], false);
    }
    if(type_and_sorting[0] == "Tool"){
        if(type_and_sorting[1] == 0){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[工具][镐]" + " " + id_and_name[1], 1);
            Item.setEnchantType(id_and_name[0], 附魔类型_镐子, 1);
            tool_id[0][id_and_name[0]] = id_and_name[0];
        }
        if(type_and_sorting[1] == 1){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[工具][斧]" + " " + id_and_name[1], 1);
            Item.setEnchantType(id_and_name[0], 附魔类型_斧子, 1);
            tool_id[1][id_and_name[0]] = id_and_name[0];
        }
        if(type_and_sorting[1] == 2){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[工具][铲]" + " " + id_and_name[1], 1);
            Item.setEnchantType(id_and_name[0], 附魔类型_铲子, 1);
            tool_id[2][id_and_name[0]] = id_and_name[0];
        }
        if(type_and_sorting[1] == 3){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[工具][剑]" + " " + id_and_name[1], 1);
            Item.setEnchantType(id_and_name[0], 附魔类型_武器, 1);
            tool_id[3][id_and_name[0]] = id_and_name[0];
        }
        if(type_and_sorting[1] == 4){
            ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], id_and_name[1], 1);
        }
        Item.setHandEquipped(id_and_name[0], true);
        Item.setCategory(id_and_name[0], 3, 0);
        Player.addItemCreativeInv(id_and_name[0], 1, 0);
        Item.setMaxDamage(id_and_name[0], item_damage);
    }
    item_id[id_and_name[0]] = id_and_name[0];
}

ErrorPower.Block.setPickaxeDestroyBlockTime = function(speed){
    final_speed = speed * 20;
    Block.setDestroyTime(1, 7.5 / final_speed);
    Block.setDestroyTime(4, 10 / final_speed);
    Block.setDestroyTime(14, 15 / final_speed);
    Block.setDestroyTime(15, 15 / final_speed);
    Block.setDestroyTime(16, 15 / final_speed);
    Block.setDestroyTime(21, 15 / final_speed);
    Block.setDestroyTime(22, 15 / final_speed);
    Block.setDestroyTime(23, 17.5 / final_speed);
    Block.setDestroyTime(24, 4 / final_speed);
    Block.setDestroyTime(41, 15 / final_speed);
    Block.setDestroyTime(42, 25 / final_speed);
    Block.setDestroyTime(43, 10 / final_speed);
    Block.setDestroyTime(44, 10 / final_speed);
    Block.setDestroyTime(45, 10 / final_speed);
    Block.setDestroyTime(48, 7.5 / final_speed);
    Block.setDestroyTime(49, 250 / final_speed);
    Block.setDestroyTime(52, 25 / final_speed);
    Block.setDestroyTime(56, 15 / final_speed);
    Block.setDestroyTime(57, 15 / final_speed);
    Block.setDestroyTime(61, 17.5 / final_speed);
    Block.setDestroyTime(62, 17.5 / final_speed);
    Block.setDestroyTime(67, 10 / final_speed);
    Block.setDestroyTime(71, 25 / final_speed);
    Block.setDestroyTime(73, 15 / final_speed);
    Block.setDestroyTime(74, 15 / final_speed);
    Block.setDestroyTime(87, 2 / final_speed);
    Block.setDestroyTime(98, 7.5 / final_speed);
    Block.setDestroyTime(101, 25 / final_speed);
    Block.setDestroyTime(108, 10 / final_speed);
    Block.setDestroyTime(109, 10 / final_speed);
    Block.setDestroyTime(112, 10 / final_speed);
    Block.setDestroyTime(113, 10 / final_speed);
    Block.setDestroyTime(114, 10 / final_speed);
    Block.setDestroyTime(116, 25 / final_speed);
    Block.setDestroyTime(118, 10 / final_speed);
    Block.setDestroyTime(121, 15 / final_speed);
    Block.setDestroyTime(125, 17.5 / final_speed);
    Block.setDestroyTime(129, 15 / final_speed);
    Block.setDestroyTime(139, 15 / final_speed);
    Block.setDestroyTime(145, 25 / final_speed);
    Block.setDestroyTime(152, 25 / final_speed);
    Block.setDestroyTime(153, 15 / final_speed);
    Block.setDestroyTime(154, 15 / final_speed);
    Block.setDestroyTime(155, 4 / final_speed);
    Block.setDestroyTime(156, 4 / final_speed);
    Block.setDestroyTime(159, 6.25 / final_speed);
    Block.setDestroyTime(172, 6.25 / final_speed);
    Block.setDestroyTime(173, 15 / final_speed);
    Block.setDestroyTime(block_name_id["矿物"], 15 / final_speed);
}
ErrorPower.Block.setAxeDestroyBlockTime = function(speed){
    final_speed = speed;
    Block.setDestroyTime(5, 3 / final_speed);
    Block.setDestroyTime(17, 3 / final_speed);
    Block.setDestroyTime(18, 0.35 / final_speed);
    Block.setDestroyTime(47, 2.25 / final_speed);
    Block.setDestroyTime(53, 3 / final_speed);
    Block.setDestroyTime(54, 3.75 / final_speed);
    Block.setDestroyTime(58, 3.75 / final_speed);
    Block.setDestroyTime(63, 1.5 / final_speed);
    Block.setDestroyTime(64, 4.5 / final_speed);
    Block.setDestroyTime(65, 0.65 / final_speed);
    Block.setDestroyTime(68, 1.5 / final_speed);
    Block.setDestroyTime(85, 3 / final_speed);
    Block.setDestroyTime(96, 4.5 / final_speed);
    Block.setDestroyTime(103, 1.5 / final_speed);
    Block.setDestroyTime(107, 3 / final_speed);
    Block.setDestroyTime(134, 3 / final_speed);
    Block.setDestroyTime(135, 3 / final_speed);
    Block.setDestroyTime(136, 3 / final_speed);
    Block.setDestroyTime(157, 3 / final_speed);
    Block.setDestroyTime(158, 3 / final_speed);
    Block.setDestroyTime(161, 0.35 / final_speed);
    Block.setDestroyTime(162, 3 / final_speed);
    Block.setDestroyTime(163, 3 / final_speed);
    Block.setDestroyTime(164, 3 / final_speed);
    Block.setDestroyTime(183, 4 / final_speed);
    Block.setDestroyTime(184, 4 / final_speed);
    Block.setDestroyTime(185, 4 / final_speed);
    Block.setDestroyTime(186, 4 / final_speed);
    Block.setDestroyTime(187, 4 / final_speed);
    Block.setDestroyTime(block_name_id["图纸绘制台"], 3 / final_speed);
}
ErrorPower.Block.setShovelDestroyBlockTime = function(speed){
    final_speed = speed;
    Block.setDestroyTime(2, 0.9 / final_speed);
    Block.setDestroyTime(3, 0.75 / final_speed);
    Block.setDestroyTime(12, 0.75 / final_speed);
    Block.setDestroyTime(13, 0.9 / final_speed);
    Block.setDestroyTime(78, 0.5 / final_speed);
    Block.setDestroyTime(80, 1 / final_speed);
    Block.setDestroyTime(82, 0.9 / final_speed);
    Block.setDestroyTime(88, 0.75 / final_speed);
    Block.setDestroyTime(110, 0.9 / final_speed);
    Block.setDestroyTime(198, 0.9 / final_speed);
    Block.setDestroyTime(243, 0.9 / final_speed);
}
ErrorPower.Block.setSwordDestroyBlockTime = function(speed){
    final_speed = speed*20;
    Block.setDestroyTime(30, 20 / final_speed);
}