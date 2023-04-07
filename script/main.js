/*Variable*/
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
minecraft_version = String(ModPE.getMinecraftVersion()).split(".");



// define function
function loadJsFileInTexture(file_name) {
    eval(new java.lang.String(ModPE.getBytesFromTexturePack(file_name), "UTF-8") + "");
}

//loadJsFileInTexture("ForgottenCraftFunction.js");
//loadJsFileInTexture("GUI.js");



////BlockLauncher hook function
/*can use preventDefault()*/
function attackHook(attacker, victim) {
    BloodWolf.ForgottenCraftFunction.DefaultTool.attackHook(attacker, victim);
}

/*can use preventDefault()*/
//function chatHook(str){}

/*can use preventDefault()*/
function continueDestroyBlock(x, y, z, side, progress) {
    BloodWolf.ForgottenCraftFunction.DefaultTool.continueDestroyBlock(x, y, z, side, progress);
}

/*can use preventDefault()*/
function destroyBlock(x, y, z, side) {
    BloodWolf.ForgottenCraftFunction.DefaultTool.destroyBlock(x, y, z, side);
}

/*can use preventDefault()*/
//function leaveGame(){}

//function projectileHitEntityHook(projectile , targetEntity){}

//function eatHook(hearts , saturationRatio){}

//function entityAddedHook(entity){}

/*can use preventDefault()*/
//function entityHurtHook(attacker , victim , halfhearts){}

//function entityRemovedHook(entity){}

/*can use preventDefault()*/
//function explodeHook(entity , x , y , z , power , onFire){}

/*can use preventDefault()*/
//function serverMessageReceiveHook(str){}

/*can use preventDefault()*/
//function deathHook(attacker , victim){}

/*can use preventDefault()*/
//function playerAddExpHook(player , experienceAdded){}

/*can use preventDefault()*/
//function playerExpLevelChangeHook(player , levelsAdded){}

//function redstoneUpdateHook(x , y , z , newCurrent , someBooleanIDontKnow , blockId , blockData){}

function newLevel() {
}

/*can use preventDefault()*/
function startDestroyBlock(x, y, z, side) {
    BloodWolf.ForgottenCraftFunction.DefaultTool.startDestroyBlock(x, y, z, side);
}

//function projectileHitBlockHook(projectile , blockX , blockY , blockZ , side){}

function modTick() {
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
function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
    // Todo something.
}
