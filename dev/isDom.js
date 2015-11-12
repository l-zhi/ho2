define("isDom",function(require,exports,module){
	var chk=(typeof HTMLElement==='object') ?
        function(obj){
            return obj instanceof HTMLElement;
        } :
        function(obj){
            return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
        }
	return chk;
});