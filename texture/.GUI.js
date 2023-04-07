/*GUI*/
PopupWindow = null;

/*设置控件位置于大小*/
function RelativeLayoutView(widgetType , x , y , w , h){
    this.widget = widgetType;
    var vParams = new android.widget.RelativeLayout.LayoutParams(w , h);
    vParams.setMargins(x , y , 0 , 0);
    widget.setLayoutParams(vParams);
    return widget;
}

/*屏幕适配*/
function getDip(dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

/*设置控件图片*/
function setPicture(awidget , filepath){
    var texture = ModPE.openInputStreamFromTexturePack(filepath);
    var Pic = new android.graphics.drawable.BitmapDrawable(texture);
    awidget.setBackgroundDrawable(Pic);
}
