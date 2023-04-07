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
attackHook = function(attacker , victim){
    BloodWolf.ForgottenCraftFunction.DefaultTool.attackHook(attacker , victim);
}
continueDestroyBlock = function(x , y , z , side , progress){
    BloodWolf.ForgottenCraftFunction.DefaultTool.continueDestroyBlock(x , y , z , side , progress);
}
destroyBlock = function(x , y , z , side){
    BloodWolf.ForgottenCraftFunction.DefaultTool.destroyBlock(x , y , z , side);
}
startDestroyBlock = function(x , y , z , side){
    BloodWolf.ForgottenCraftFunction.DefaultTool.startDestroyBlock(x , y , z , side);
}
modTick = function(){
    BloodWolf.ForgottenCraftFunction.DefaultTool.modTick();
}
/*注 : 以上代码均不可删除*/
/*需要用到的Function请使用上面的Function*/
/*如果重复使用Function将会导致API无效*/

var BWFCF = BloodWolf.ForgottenCraftFunction;
/*注 : 这个变量声明是为了方便开发者省略太长无用的函数前缀的*/
/*
例子 : 
BloodWolf.ForgottenCraftFunction.DefaultTool.setItem();
可以简写为
BWFCF.DefaultTool.setItem();
*/
