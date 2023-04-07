/*Variable*/
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


ItemType = {
    Item : "Item",
    Tool : "Tool"
};
BlockType = {
    Block : "Block",
    Water : "Water",
    Lava : "Lava"
};


var 工具ID = null;


var LightLevel = [0, 7, 15];



ErrorPower.Function = {
    /*setIDName_Item : function(_ForgottenCraft0_, _ForgottenCraft1_){
        item_name_id[_ForgottenCraft0_] = _ForgottenCraft1_;
        item_name_id[_ForgottenCraft1_] = _ForgottenCraft0_;
        return _ForgottenCraft0_;
    },
    setIDName_Block : function(_ForgottenCraft0_, _ForgottenCraft1_){
        block_name_id[_ForgottenCraft0_] = _ForgottenCraft1_;
        block_name_id[_ForgottenCraft1_] = _ForgottenCraft0_;
        return _ForgottenCraft0_;
    }, */
    DefaultTool: {
        //BloodWolf.ForgottenCraftFunction.DefaultTool.setItem([ID, NameString名字串字符], [TextureString材质串字符, 材质排列值], [ItemType物品类型, 物品类型排列值]);
        setItem : function(id_and_name, texture_and_sorting, item_type_and_sorting, item_damage){
            item_name_id[id_and_name[0]] = id_and_name[1];
            item_name_id[id_and_name[1]] = id_and_name[0];
            if(item_type_and_sorting[0] == "Item"){
                if(item_type_and_sorting[1] == 0){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[物品]" + " " + id_and_name[1], 64);
                    Item.setCategory(id_and_name[0], 2, 0);
                    Player.addItemCreativeInv(id_and_name[0], 64, 0);
                }
                if(item_type_and_sorting[1] == 1){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[物品]" + " " + id_and_name[1], 16);
                    Item.setCategory(id_and_name[0], 2, 0);
                    Player.addItemCreativeInv(id_and_name[0], 16, 0);
                }
                if(item_type_and_sorting[1] == 2){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[物品]" + " " + id_and_name[1], 64);
                    Item.setCategory(id_and_name[0], 4, 0);
                    Player.addItemCreativeInv(id_and_name[0], 64, 0);
                }
                if(item_type_and_sorting[1] == 3){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[物品]" + " " + id_and_name[1], 16);
                    Item.setCategory(id_and_name[0], 4, 0);
                    Player.addItemCreativeInv(id_and_name[0], 16, 0);
                }
                Item.setHandEquipped(id_and_name[0], false);
            }
            if(item_type_and_sorting[0] == "Tool"){
                if(item_type_and_sorting[1] == 0){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[工具][镐]" + " " + id_and_name[1], 1);
                    Item.setEnchantType(id_and_name[0], 附魔类型_镐子, 1);
                    tool_id[0][id_and_name[0]] = id_and_name[0];
                }
                if(item_type_and_sorting[1] == 1){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[工具][斧]" + " " + id_and_name[1], 1);
                    Item.setEnchantType(id_and_name[0], 附魔类型_斧子, 1);
                    tool_id[1][id_and_name[0]] = id_and_name[0];
                }
                if(item_type_and_sorting[1] == 2){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[工具][铲]" + " " + id_and_name[1], 1);
                    Item.setEnchantType(id_and_name[0], 附魔类型_铲子, 1);
                    tool_id[2][id_and_name[0]] = id_and_name[0];
                }
                if(item_type_and_sorting[1] == 3){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], "[工具][剑]" + " " + id_and_name[1], 1);
                    Item.setEnchantType(id_and_name[0], 附魔类型_武器, 1);
                    tool_id[3][id_and_name[0]] = id_and_name[0];
                }
                if(item_type_and_sorting[1] == 4){
                    ModPE.setItem(id_and_name[0], texture_and_sorting[0], texture_and_sorting[1], id_and_name[1], 1);
                }
                Item.setHandEquipped(id_and_name[0], true);
                Item.setCategory(id_and_name[0], 3, 0);
                Player.addItemCreativeInv(id_and_name[0], 1, 0);
                Item.setMaxDamage(id_and_name[0], item_damage);
            }
            item_id[id_and_name[0]] = id_and_name[0];
        },

        setToolDestroyBlockTime_0 : function(speed){
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
        },
        setToolDestroyBlockTime_1 : function(speed){
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
        },
        setToolDestroyBlockTime_2 : function(speed){
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
        },
        setToolDestroyBlockTime_3 : function(speed){
            final_speed = speed*20;
            Block.setDestroyTime(30, 20 / final_speed);
        },
        attackHook : function(attacker, victim){
            player_carried_item = Player.getCarriedItem();
            player_carried_item_data = Player.getCarriedItemData();

            player_selected_slot_id = Player.getSelectedSlotId();

            附魔项目 = Player.getEnchantments(player_selected_slot_id);


            if(Player.getCarriedItem() == tool_id[0][player_carried_item]){
                工具ID = [Player.getCarriedItem(), Player.getCarriedItemData()];
                Entity.setCarriedItem(Player.getEntity(), 278, 1, 0);
                for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                    Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                }
            }
            if(Player.getCarriedItem() == tool_id[1][player_carried_item]){
                工具ID = [Player.getCarriedItem(), Player.getCarriedItemData()];
                Entity.setCarriedItem(Player.getEntity(), 279, 1, 0);
                for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                    Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                }
            }
            if(Player.getCarriedItem() == tool_id[2][player_carried_item]){
                工具ID = [Player.getCarriedItem(), Player.getCarriedItemData()];
                Entity.setCarriedItem(Player.getEntity(), 277, 1, 0);
                for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                    Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                }
            }
            if(Player.getCarriedItem() == tool_id[3][player_carried_item]){
                工具ID = [Player.getCarriedItem(), Player.getCarriedItemData()];
                Entity.setCarriedItem(Player.getEntity(), 276, 1, 0);
                for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                    Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                }
            }
        },
        
        continueDestroyBlock : function(x, y, z, side, progress){
            /*player_carried_item = Player.getCarriedItem();
            player_carried_item_data = Player.getCarriedItemData();
            player_selected_slot_id = Player.getSelectedSlotId();
            附魔项目 = Player.getEnchantments(player_selected_slot_id);
            if(Player.getCarriedItem() == tool_id[0][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_0(6.0);
            }
            else if(Player.getCarriedItem() !== tool_id[0][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_0(0.25);
            }
            if(Player.getCarriedItem() == tool_id[1][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_1(6.0);
            }
            else if(Player.getCarriedItem() !== tool_id[1][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_1(1.0);
            }
            if(Player.getCarriedItem() == tool_id[2][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_2(6.0);
            }
            else if(Player.getCarriedItem() !== tool_id[2][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_2(1.0);
            }
            if(Player.getCarriedItem() == tool_id[3][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_3(6.0);
            }
            else if(Player.getCarriedItem() !== tool_id[3][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_3(1.0);
            }*/
            if(Item.getName(Player.getCarriedItem(), Player.getCarriedItemData(), true) != null){
                ItemName = Item.getName(Player.getCarriedItem(), Player.getCarriedItemData(), true).split("");
                if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] == "item.[工具][镐]"){
                    Function.DefaultTool.setToolDestroyBlockTime_0(6.0);
                }
                else if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] !== "item.[工具][镐]"){
                    Function.DefaultTool.setToolDestroyBlockTime_0(0.25);
                }
                if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] == "item.[工具][斧]"){
                    Function.DefaultTool.setToolDestroyBlockTime_1(6.0);
                }
                else if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] !== "item.[工具][斧]"){
                    Function.DefaultTool.setToolDestroyBlockTime_1(1.0);
                }
                if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] == "item.[工具][铲]"){
                    Function.DefaultTool.setToolDestroyBlockTime_2(6.0);
                }
                else if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] !== "item.[工具][铲]"){
                    Function.DefaultTool.setToolDestroyBlockTime_2(1.0);
                }
                if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] == "item.[工具][剑]"){
                    Function.DefaultTool.setToolDestroyBlockTime_3(6.0);
                }
                else if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] !== "item.[工具][剑]"){
                    Function.DefaultTool.setToolDestroyBlockTime_3(1.0);
                }
            }
        },
        destroyBlock : function(x, y, z, side){
            player_carried_item = Player.getCarriedItem();
            player_carried_item_data = Player.getCarriedItemData();
            player_selected_slot_id = Player.getSelectedSlotId();
            附魔项目 = Player.getEnchantments(player_selected_slot_id);
            if(Player.getCarriedItem() == tool_id[0][player_carried_item]){
                工具ID = [Player.getCarriedItem(), Player.getCarriedItemData()];
                Entity.setCarriedItem(Player.getEntity(), 278, 1, 0);
                for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                    Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                }
                if(Level.getTile(x, y, z) == block_name_id["矿物"]){
                    if(Level.getData(x, y, z) == 0){
                        Function.dropItem([x, y, z], [item_name_id["矿物铜"], 1, 0]);
                    }
                    if(Level.getData(x, y, z) == 1){
                        Function.dropItem([x, y, z], [item_name_id["矿物铝"], 1, 0]);
                    }
                    if(Level.getData(x, y, z) == 2){
                        Function.dropItem([x, y, z], [item_name_id["矿物锡"], 1, 0]);
                    }
                }
            }
            if(Player.getCarriedItem() == tool_id[1][player_carried_item]){
                工具ID = [Player.getCarriedItem(), Player.getCarriedItemData()];
                Entity.setCarriedItem(Player.getEntity(), 279, 1, 0);
                for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                    Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                }
            }
            if(Player.getCarriedItem() == tool_id[2][player_carried_item]){
                工具ID = [Player.getCarriedItem(), Player.getCarriedItemData()];
                Entity.setCarriedItem(Player.getEntity(), 277, 1, 0);
                for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                    Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                }
            }
            if(Player.getCarriedItem() == tool_id[3][player_carried_item]){
                工具ID = [Player.getCarriedItem(), Player.getCarriedItemData()];
                Entity.setCarriedItem(Player.getEntity(), 276, 1, 0);
                for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                    Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                }
            }
        },
        startDestroyBlock : function(x, y, z, side){
            /*player_carried_item = Player.getCarriedItem();
            player_carried_item_data = Player.getCarriedItemData();
            player_selected_slot_id = Player.getSelectedSlotId();
            附魔项目 = Player.getEnchantments(player_selected_slot_id);
            if(Player.getCarriedItem() == tool_id[0][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_0(6.0);
            }
            else if(Player.getCarriedItem() !== tool_id[0][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_0(0.25);
            }
            if(Player.getCarriedItem() == tool_id[1][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_1(6.0);
            }
            else if(Player.getCarriedItem() !== tool_id[1][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_1(1.0);
            }
            if(Player.getCarriedItem() == tool_id[2][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_2(6.0);
            }
            else if(Player.getCarriedItem() !== tool_id[2][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_2(1.0);
            }
            if(Player.getCarriedItem() == tool_id[3][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_3(6.0);
            }
            else if(Player.getCarriedItem() !== tool_id[3][player_carried_item]){
                Function.DefaultTool.setToolDestroyBlockTime_3(1.0);
            }*/
            if(Item"], "getName")(ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItem(), Player.getCarriedItemData(), true) != null){
                ItemName = Item"], "getName")(ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItem(), ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItemData")(), true).split(";
                if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] == "item.[工具][镐]"){
                    Function.DefaultTool.setToolDestroyBlockTime_0(6.0);
                }
                else if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] !== "item.[工具][镐]"){
                    Function.DefaultTool.setToolDestroyBlockTime_0(0.25);
                }
                if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] == "item.[工具][斧]"){
                    Function.DefaultTool.setToolDestroyBlockTime_1(6.0);
                }
                else if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] !== "item.[工具][斧]"){
                    Function.DefaultTool.setToolDestroyBlockTime_1(1.0);
                }
                if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] == "item.[工具][铲]"){
                    Function.DefaultTool.setToolDestroyBlockTime_2(6.0);
                }
                else if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] !== "item.[工具][铲]"){
                    Function.DefaultTool.setToolDestroyBlockTime_2(1.0);
                }
                if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] == "item.[工具][剑]"){
                    Function.DefaultTool.setToolDestroyBlockTime_3(6.0);
                }
                else if(ItemName[0] + ItemName[1] + ItemName[2] + ItemName[3] + ItemName[4] + ItemName[5] + ItemName[6] + ItemName[7] + ItemName[8] + ItemName[9] + ItemName[10] + ItemName[11] !== "item.[工具][剑]"){
                    Function.DefaultTool.setToolDestroyBlockTime_3(1.0);
                }
            }
            if(Player.getCarriedItem() == 0){
                Function.DefaultTool.setToolDestroyBlockTime_0(0.25);
                Function.DefaultTool.setToolDestroyBlockTime_1(1.0);
                Function.DefaultTool.setToolDestroyBlockTime_2(1.0);
                Function.DefaultTool.setToolDestroyBlockTime_3(1.0);
            }
        },
        modTick : function(){
            player_carried_item = Player.getCarriedItem();
            player_carried_item_data = Player.getCarriedItemData();
            player_selected_slot_id = Player.getSelectedSlotId();
            附魔项目 = Player.getEnchantments(player_selected_slot_id);
            if(工具ID){
                if(Player.getCarriedItem() == 278 || ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItem() == 279 || ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItem() == 277 || ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItem() == 276){
                    if(Level.getGameMode() == 0){
                        Entity.setCarriedItem(Player.getEntity(), 工具ID[0], 1, 工具ID[1] + 1);
                    }
                    if(Level.getGameMode() !== 0){
                        Entity.setCarriedItem(Player.getEntity(), 工具ID[0], 1, 工具ID[1]);
                    }
                    for(附魔 = 0; 附魔 < 附魔项目.length; 附魔 ++){
                        Player.enchant(player_selected_slot_id, 附魔项目[附魔].type, 附魔项目[附魔].level);
                    }
                    工具ID = null;
                }
            }
            if(Player.getCarriedItem() == tool_id[0][player_carried_item] || ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItem() == tool_id[1][player_carried_item] || ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItem() == tool_id[2][player_carried_item] || ForgottenCraft(BloodWolf["ForgottenCraftPlayer.getCarriedItem() == tool_id[3][player_carried_item]){
                if(Player"], "getCarriedItemData")() >= ForgottenCraft(BloodWolf["ForgottenCraftItem.getMaxDamage(player_carried_item)){
                    Entity.setCarriedItem(Player.getEntity(), 0);
                    Level.playSound(BloodWolf["ForgottenCraftPlayer"]["getX"](), BloodWolf["ForgottenCraftPlayer"]["getY"](), BloodWolf["ForgottenCraftPlayer"]["getZ"](), "random.break", 100, 0);
                }
            }
        }
    },
    //BloodWolf.ForgottenCraftFunction.setBlock([[ID, NameString名字串字符], BlockType方块类型], [[TextureString材质串字符, 材质排列值]], LightLevel[], BlockModel方块模型);
    setBlock : function(_ForgottenCraft0_, _ForgottenCraft1_, _ForgottenCraft2_, _ForgottenCraft3_){
        block_name_id[_ForgottenCraft0_[0][0]] = _ForgottenCraft0_[0][1];
        block_name_id[_ForgottenCraft0_[0][1]] = _ForgottenCraft0_[0][0];
        if(_ForgottenCraft0_[1] == "Block"){
            Block.defineBlock(_ForgottenCraft0_[0][0], _ForgottenCraft0_[0][1], _ForgottenCraft1_, 49, false, _ForgottenCraft3_);
        }
        if(_ForgottenCraft0_[1] == "Water"){
            Block.defineLiquidBlock(_ForgottenCraft0_[0][0], _ForgottenCraft0_[0][1], _ForgottenCraft1_, 8);
            Item.setCategory(_ForgottenCraft0_[0][0], 2, 0);
        }
        if(_ForgottenCraft0_[1] == "Lava"){
            Block.defineLiquidBlock(_ForgottenCraft0_[0][0], _ForgottenCraft0_[0][1], _ForgottenCraft1_, 10);
            Item.setCategory(_ForgottenCraft0_[0][0], 2, 0);
        }
        Block.setLightOpacity(_ForgottenCraft0_[0][0], 0);
        Block.setLightLevel(_ForgottenCraft0_[0][0], _ForgottenCraft2_);
        block_id[_ForgottenCraft0_[0][0]] = _ForgottenCraft0_[0][0];
    },
    AddMine1 : function(生成方块, 数量, 高度, 替换方块){
        生成 = 0;生成 ++;
        几率 = Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]())// + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]());
        x = getPlayerX() + Math["random"]() * 256
        y = Math["random"]() * 高度
        z = getPlayerZ() + Math["random"]() * 256
        if(Level["getTile"](x, y, z) == 替换方块[0] && Level["getData"](x, y, z) == 替换方块[1]){
            if(生成 <= 数量){
                Level["setTile"](x, y, z, 生成方块[0], 生成方块[1]);
                if(几率 == 0){
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y + 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 1){
                    Level["setTile"](x - 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 2){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 3){
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 4){
                    Level["setTile"](x - 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 5){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 6){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x  + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 7){
                }
                if(几率 == 8){
                }
                if(几率 == 9){
                }
                if(几率 == 10){
                }
            }
            else if(生成 > 数量){生成 = 0}
        }
    },
    AddMine2 : function(生成方块, 数量, 高度, 替换方块){
        生成 = 0;生成 ++;
        几率 = Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]())// + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]());
        x = getPlayerX() + Math["random"]() * 256
        y = Math["random"]() * 高度
        z = getPlayerZ() - Math["random"]() * 256
        if(Level["getTile"](x, y, z) == 替换方块[0] && Level["getData"](x, y, z) == 替换方块[1]){
            if(生成 <= 数量){
                Level["setTile"](x, y, z, 生成方块[0], 生成方块[1]);
                if(几率 == 0){
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y + 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 1){
                    Level["setTile"](x - 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 2){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 3){
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 4){
                    Level["setTile"](x - 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 5){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 6){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x  + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 7){
                }
                if(几率 == 8){
                }
                if(几率 == 9){
                }
                if(几率 == 10){
                }
            }
            else if(生成 > 数量){生成 = 0}
        }
    },
    AddMine3 : function(生成方块, 数量, 高度, 替换方块){
        生成 = 0;生成 ++;
        几率 = Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]())// + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]());
        x = getPlayerX() - Math["random"]() * 256
        y = Math["random"]() * 高度
        z = getPlayerZ() + Math["random"]() * 256
        if(Level["getTile"](x, y, z) == 替换方块[0] && Level["getData"](x, y, z) == 替换方块[1]){
            if(生成 <= 数量){
                Level["setTile"](x, y, z, 生成方块[0], 生成方块[1]);
                if(几率 == 0){
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y + 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 1){
                    Level["setTile"](x - 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 2){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 3){
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 4){
                    Level["setTile"](x - 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 5){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 6){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x  + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 7){
                }
                if(几率 == 8){
                }
                if(几率 == 9){
                }
                if(几率 == 10){
                }
            }
            else if(生成 > 数量){生成 = 0}
        }
    },
    AddMine4 : function(生成方块, 数量, 高度, 替换方块){
        生成 = 0;生成 ++;
        几率 = Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]())// + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]()) + Math["round"](Math["random"]());
        x = getPlayerX() - Math["random"]() * 256
        y = Math["random"]() * 高度
        z = getPlayerZ() - Math["random"]() * 256
        if(Level["getTile"](x, y, z) == 替换方块[0] && Level["getData"](x, y, z) == 替换方块[1]){
            if(生成 <= 数量){
                Level["setTile"](x, y, z, 生成方块[0], 生成方块[1]);
                if(几率 == 0){
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y + 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 1){
                    Level["setTile"](x - 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 2){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 3){
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 4){
                    Level["setTile"](x - 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x - 1, y - 1, z - 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 5){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z - 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 6){
                    Level["setTile"](x, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x + 1, y, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y, z + 1, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x  + 1, y - 1, z, 生成方块[0], 生成方块[1]);
                    Level["setTile"](x, y - 1, z + 1, 生成方块[0], 生成方块[1]);
                }
                if(几率 == 7){
                }
                if(几率 == 8){
                }
                if(几率 == 9){
                }
                if(几率 == 10){
                }
            }
            else if(生成 > 数量){生成 = 0}
        }
    },
    AddMine : function(生成方块, 数量, 高度, 替换方块){
        BloodWolf["ForgottenCraftFunction"]["AddMine1"](生成方块, 数量, 高度, 替换方块);
        BloodWolf["ForgottenCraftFunction"]["AddMine2"](生成方块, 数量, 高度, 替换方块);
        BloodWolf["ForgottenCraftFunction"]["AddMine3"](生成方块, 数量, 高度, 替换方块);
        BloodWolf["ForgottenCraftFunction"]["AddMine4"](生成方块, 数量, 高度, 替换方块);
    },
    //BloodWolf.ForgottenCraftFunction.setBlockShape([ID, Data], [[X开始, X结束], [Y开始, Y结束], [Z开始, Z结束]]);
    setBlockShape : function(_ForgottenCraft0_, _ForgottenCraft1_){
        Block.setShape(_ForgottenCraft0_[0], _ForgottenCraft1_[0][0] / 16, _ForgottenCraft1_[1][0] / 16, _ForgottenCraft1_[2][0] / 16, _ForgottenCraft1_[0][1] / 16, _ForgottenCraft1_[1][1] / 16, _ForgottenCraft1_[2][1] / 16, _ForgottenCraft0_[1]);
    },
    //BloodWolf.ForgottenCraftFunction.dropItem([x, y, z], [ID, Count数量, Data特殊值]);
    dropItem : function(_ForgottenCraft0_, _ForgottenCraft1_){
        for(i = 0;i < _ForgottenCraft1_[1];++ i){
            Level.dropItem(_ForgottenCraft0_[0] + 0.5, _ForgottenCraft0_[1] + 0.5, _ForgottenCraft0_[2] + 0.5, 0, _ForgottenCraft1_[0], 1, _ForgottenCraft1_[2]);
        }
    },
    canSeeSky : function(_ForgottenCraft0_, _ForgottenCraft1_, _ForgottenCraft2_){
        for(_ForgottenCraft3_ = 1; _ForgottenCraft3_ <= 256; _ForgottenCraft3_ ++){
            if(Level.getTile(_ForgottenCraft0_, _ForgottenCraft1_ + _ForgottenCraft3_, _ForgottenCraft2_) == 0){
                return true;
            }
            else{
                return false;
            }
        }
    },
    saveData : function(_ForgottenCraft0_, _ForgottenCraft1_){
        try{
            var _ForgottenCraft2_ = new java["io"]["File"](/*android["os"]["Environment"]["getExternalStorageDirectory"]()["getAbsolutePath"]() +*/ _ForgottenCraft0_);
            _ForgottenCraft2_["getParentFile"]()["mkdirs"]();
            _ForgottenCraft2_["createNewFile"]();
            var _ForgottenCraft3_ = new java["io"]["FileWriter"](_ForgottenCraft2_);
            _ForgottenCraft3_["write"](_ForgottenCraft1_);
            _ForgottenCraft3_["close"]();
        }
        catch(e){
            print("写入:" + e);
        }
    },
    readData : function(_ForgottenCraft0_, _ForgottenCraft1_){
        var _ForgottenCraft2_ = new java["io"]["File"](_ForgottenCraft0_);
        if(_ForgottenCraft2_["exists"]()){
            if(_ForgottenCraft2_["isFile"]()){
                var _ForgottenCraft3_ = "";
                var _ForgottenCraft4_ = new java["io"]["InputStreamReader"](new java["io"]["FileInputStream"](_ForgottenCraft2_), _ForgottenCraft1_);
                var _ForgottenCraft5_ = new java["io"]["BufferedReader"](_ForgottenCraft4_);
                var _ForgottenCraft6_ = null;
                while((_ForgottenCraft6_ = _ForgottenCraft5_["readLine"]()) != null){
                    _ForgottenCraft3_ += _ForgottenCraft6_ /*+ "\n"*/;
                }
                _ForgottenCraft4_["close"]();
                return _ForgottenCraft3_;
            }
        }
    }
}
