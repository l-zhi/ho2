/*
	@ author leeenx
	@ version 1.0.0
	@ data: 2015-11-11
	@ 动态创建css样式
	@ 用法如下：
	var stylesheet=require("styleSheet");
	stylesheet('.PAGE_DRAG_KEEP{ransition:transform .2s linear;}');
*/
define("styleSheet",function(require,exports,module){
	var STYLESHEET=function(){
		var styleSheet=function(){
			//创建一个styleSheet,避免跨域问题
			var head = document.getElementsByTagName("head")[0]; 
			var style = document.createElement("style"); 
			style.type="text/css"; 
			head.appendChild(style);
			return document.styleSheets[document.styleSheets.length-1];
		}();
		function addStyleSheet(cssText){/*动态添加css样式*/
			var oCss = styleSheet,cssRules=cssText.split('\r\n');
			var len=!!oCss.cssRules?oCss.cssRules.length:0;//不直接使用oCss.cssRules.length是因为跨域时返回null，所以用len避免错误
			for(var i=0;i<cssRules.length;++i){
				oCss.insertRule(cssRules[i],len++);
			};
			return len;
		}
		return {add:addStyleSheet};
	}();
	return STYLESHEET.add;
});