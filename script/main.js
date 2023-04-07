/*---------------------------------------------*/
/*---------------------------------------------*/
/* 尊重他人劳动成果 , 禁止抄袭 */
/* Don't Copy , please */
/*---------------------------------------------*/
/*---------------------------------------------*/
/* 作者我的百度贴吧用户名 : 我的世界之血狼 */
/* 作者我的QQ : 1366329192 */
/* Make by 我的世界之血狼 in Chinese Baidu Tieba */
/* Maker's Gmail : pengchenxiang@gmail.com */
/*---------------------------------------------*/
/*---------------------------------------------*/
/* 如果你能从我的源码这里改进了一些算法或者灵感或者其他什么的 */
/* 我会很为你高兴的 */
/* 但是请你不要抄袭 */
/* 谢谢 */
/* I will be happy for you if you can get something here */
/* But don't copy my ModPE */
/* That all , thanks */
/*---------------------------------------------*/
/*---------------------------------------------*/

/*Variable*/
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

//define function
TexturePackFile = function(_Forgotten0Craft_){
    eval(new java["lang"]["String"](ModPE["getBytesFromTexturePack"]("[ForgottenCraft]" + _Forgotten0Craft_ + ".BloodWolf") , "UTF-8") + "");
}
TexturePackFile("BloodWolf");
MinecraftVersion = String(ForgottenCraft(BloodWolf["ForgottenCraftModPE"] , "getMinecraftVersion")()).split(".");
if(MinecraftVersion[0] !== "1" || MinecraftVersion[1] !== "1"){
    TexturePackFile("BloodWolf.ForgottenCraftFunction");
}
if(MinecraftVersion[0] == "1" && MinecraftVersion[1] == "1"){
    TexturePackFile("BloodWolf.ForgottenCraftFunction_");
}
TexturePackFile("BloodWolfFunction");
TexturePackFile("GUI");

//BlockLauncher function
/*can use preventDefault()*/
attackHook = function(attacker , victim){
    BloodWolf.ForgottenCraftFunction.DefaultTool.attackHook(attacker , victim);
}

/*can use preventDefault()*/
//chatHook = function(str){}

/*can use preventDefault()*/
continueDestroyBlock = function(x , y , z , side , progress){
    BloodWolf.ForgottenCraftFunction.DefaultTool.continueDestroyBlock(x , y , z , side , progress);
}

/*can use preventDefault()*/
destroyBlock = function(x , y , z , side){
    BloodWolf.ForgottenCraftFunction.DefaultTool.destroyBlock(x , y , z , side);
}

/*can use preventDefault()*/
//leaveGame = function(){}

//projectileHitEntityHook = function(projectile , targetEntity){}

//eatHook = function(hearts , saturationRatio){}

//entityAddedHook = function(entity){}

/*can use preventDefault()*/
//entityHurtHook = function(attacker , victim , halfhearts){}

//entityRemovedHook = function(entity){}

/*can use preventDefault()*/
//explodeHook = function(entity , x , y , z , power , onFire){}

/*can use preventDefault()*/
//serverMessageReceiveHook = function(str){}

/*can use preventDefault()*/
//deathHook = function(attacker , victim){}

/*can use preventDefault()*/
//playerAddExpHook = function(player , experienceAdded){}

/*can use preventDefault()*/
//playerExpLevelChangeHook = function(player , levelsAdded){}

//redstoneUpdateHook = function(x , y , z , newCurrent , someBooleanIDontKnow , blockId , blockData){}

newLevel = function(){
}

/*can use preventDefault()*/
startDestroyBlock = function(x , y , z , side){
    BloodWolf.ForgottenCraftFunction.DefaultTool.startDestroyBlock(x , y , z , side);
}

//projectileHitBlockHook = function(projectile , blockX , blockY , blockZ , side){}

modTick = function(){
    BloodWolf.ForgottenCraftFunction.DefaultTool.modTick();
    
    /*ModPE["showTipMessage"](
        "\n当前所指方块ID: " + Player["getPointedBlockId"]()
        + "\n当前所指方块特殊值: " + Player["getPointedBlockData"]()
        + "\n当前手持物品ID: " + Player["getCarriedItem"]()
        + "\n当前手持物品特殊值: " + Player["getCarriedItemData"]()
        + "\n当前所指生物类型ID: " + Entity["getEntityTypeId"](Player["getPointedEntity"]())
        + "\n当前所指生物模型ID: " + Entity["getRenderType"](Player["getPointedEntity"]())
        + "\n当前所指生物的皮肤路径: " + Entity["getMobSkin"](Player["getPointedEntity"]())
        + "\n"
 );
    ModPE["showTipMessage"](
        "\n当前玩家X轴: " + getPlayerX()
        + "\n当前玩家Y轴: " + getPlayerY()
        + "\n当前玩家Z轴: " + getPlayerZ()
        + "\n当前玩家横向视角: " + getYaw(getPlayerEnt())
        + "\n当前玩家纵向视角: " + getPitch(getPlayerEnt())
        + "\n"
    );*/
    //ModPE["showTipMessage"](ForgottenCraft(BloodWolf["ForgottenCraftBlock"] , "getRenderType")(ForgottenCraft(BloodWolf["ForgottenCraftPlayer"] , "getPointedBlockId")()));
    //ModPE["showTipMessage"](ForgottenCraft(BloodWolf["ForgottenCraftItem"] , "getName")(ForgottenCraft(BloodWolf["ForgottenCraftPlayer"] , "getCarriedItem")() , ForgottenCraft(BloodWolf["ForgottenCraftPlayer"] , "getCarriedItemData")() , true));
}

/*can use preventDefault()*/
useItem = function(x , y , z , itemid , blockid , side , itemDamage , blockDamage){
    if(side == 0){BloodWolfFunction["_LayBlock"](x , y - 1 , z);}
    if(side == 1){BloodWolfFunction["_LayBlock"](x , y + 1 , z);}
    if(side == 2){BloodWolfFunction["_LayBlock"](x , y , z - 1);}
    if(side == 3){BloodWolfFunction["_LayBlock"](x , y , z + 1);}
    if(side == 4){BloodWolfFunction["_LayBlock"](x - 1 , y , z);}
    if(side == 5){BloodWolfFunction["_LayBlock"](x + 1 , y , z);}
}
