/*---------------------------------------------*/
/*---------------------------------------------*/
/*__尊重他人劳动成果，禁止抄袭__*/
/*---------------------------------------------*/
/*---------------------------------------------*/
/*__如果你需要我的源码，可以找我要__*/
/*__作者我的百度贴吧用户名:我的世界之血狼__*/
/*__作者我的QQ:1366329192__*/
/*__请注明来意,如:我想知道ModPE(加上ModPE名字)的源码__*/
/*---------------------------------------------*/
/*---------------------------------------------*/
/*__如果你能从我的源码这里改进了一些算法或者灵感或者其他什么的__*/
/*__我会很为你高兴的__*/
/*__但是请你在发布你自己的ModPE的时候注明作者__*/
/*__谢谢__*/
/*---------------------------------------------*/
/*---------------------------------------------*/

/*Variable*/
var ItemType_Item;// = 0;
var ItemType_Tool;// = 1;

//define function
RunTexturePackFile = function(_Forgotten0Craft_ , _Forgotten1Craft_){
 if(_Forgotten1Craft_ == 0){
  eval(new java["lang"]["String"](ModPE["getBytesFromTexturePack"](_Forgotten0Craft_ + ".BloodWolf.X") , "UTF-8") + "");
 }
 if(_Forgotten1Craft_ == 1){
  eval(new java["lang"]["String"](ModPE["getBytesFromTexturePack"](_Forgotten0Craft_ + ".BloodWolf") , "UTF-8") + "");
 }
}
RunTexturePackFile("ForgottenCraft.Function" , 0);
RunTexturePackFile("ForgottenCraft.Function" , 1);

if(! ForgottenCraft(BloodWolf[_ForgottenCraft0Function_] , "readData")("/sdcard/games/com.mojang/[ModPE]ForgottenCraft/[ModPE][API]ForgottenCraft.JS" , "UTF-8")){
 ForgottenCraft(BloodWolf[_ForgottenCraft0Function_] , "saveData")("/sdcard/games/com.mojang/[ModPE]ForgottenCraft/[ModPE][API]ForgottenCraft.JS" , "\/*attackHook_BloodWolf = function(attacker , victim){}*\/\n\n\/*chatHook_BloodWolf = function(str){}*\/\n\n\/*continueDestroyBlock_BloodWolf = function(x , y , z , side , progress){}*\/\n\n\/*destroyBlock_BloodWolf = function(x , y , z , side){}*\/\n\n\/*projectileHitEntityHook_BloodWolf = function(projectile , targetEntity){}*\/\n\n\/*eatHook_BloodWolf = function(hearts , saturationRatio){}*\/\n\n\/*entityAddedHook_BloodWolf = function(entity){}*\/\n\n\/*entityHurtHook_BloodWolf = function(attacker , victim , halfhearts){}*\/\n\n\/*entityRemovedHook_BloodWolf = function(entity){}*\/\n\n\/*explodeHook_BloodWolf = function(entity , x , y , z , power , onFire){}*\/\n\n\/*serverMessageReceiveHook_BloodWolf = function(str){}*\/\n\n\/*deathHook_BloodWolf = function(attacker , victim){}*\/\n\n\/*playerAddExpHook_BloodWolf = function(player , experienceAdded){}*\/\n\n\/*playerExpLevelChangeHook_BloodWolf = function(player , levelsAdded){}*\/\n\n\/*redstoneUpdateHook_BloodWolf = function(x , y , z , newCurrent , someBooleanIDontKnow , blockId , blockData){}*\/\n\n\/*newLevel_BloodWolf = function(){}*\/\n\n\/*startDestroyBlock_BloodWolf = function(x , y , z , side){}*\/\n\n\/*projectileHitBlockHook_BloodWolf = function(projectile , blockX , blockY , blockZ , side){}*\/\n\n\/*modTick_BloodWolf = function(){}*\/\n\n\/*useItem_BloodWolf = function(x , y , z , itemid , blockid , side , itemDamage , blockDamage){}*\/\n\nBloodWolf[0][\"setItem\"](500 , [\"texture\" , 0] , \"...\" , [ItemType_Tool , 0] , 250);\nBloodWolf[0][\"setItem\"](501 , [\"texture\" , 1] , \"...\" , [ItemType_Tool , 1] , 250);\nBloodWolf[0][\"setItem\"](502 , [\"texture\" , 2] , \"...\" , [ItemType_Tool , 2] , 250);\nBloodWolf[0][\"setItem\"](503 , [\"texture\" , 3] , \"...\" , [ItemType_Tool , 3] , 250);");
}

//function
/*can use preventDefault()*/
//attackHook_ = function(attacker , victim){}

/*can use preventDefault()*/
//chatHook_ = function(str){}

/*can use preventDefault()*/
//continueDestroyBlock_ = function(x , y , z , side , progress){}

/*can use preventDefault()*/
//destroyBlock_ = function(x , y , z , side){}

//projectileHitEntityHook_ = function(projectile , targetEntity){}

//eatHook_ = function(hearts , saturationRatio){}

//entityAddedHook_ = function(entity){}

/*can use preventDefault()*/
//entityHurtHook_ = function(attacker , victim , halfhearts){}

//entityRemovedHook_ = function(entity){}

/*can use preventDefault()*/
//explodeHook_ = function(entity , x , y , z , power , onFire){}

/*can use preventDefault()*/
//serverMessageReceiveHook_ = function(str){}

/*can use preventDefault()*/
//deathHook_ = function(attacker , victim){}

/*can use preventDefault()*/
//playerAddExpHook_ = function(player , experienceAdded){}

/*can use preventDefault()*/
//playerExpLevelChangeHook_ = function(player , levelsAdded){}

//redstoneUpdateHook_ = function(x , y , z , newCurrent , someBooleanIDontKnow , blockId , blockData){}

//newLevel_ = function(){}

/*can use preventDefault()*/
//startDestroyBlock_ = function(x , y , z , side){}

//projectileHitBlockHook_ = function(projectile , blockX , blockY , blockZ , side){}

//modTick_ = function(){}

/*can use preventDefault()*/
//useItem_ = function(x , y , z , itemid , blockid , side , itemDamage , blockDamage){}

eval(new ForgottenCraft(BloodWolf[_ForgottenCraft0Function_] , "readData")("/sdcard/games/com.mojang/[ModPE]ForgottenCraft/[ModPE][API]ForgottenCraft.JS" , "UTF-8"))
