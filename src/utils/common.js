(function initSize(doc) {
	var _w = doc.documentElement.clientWidth||doc.body.clientWidth;
	_w=_w>640?640:_w;
	var _size=_w/750*100;
	_size=_size<60?_size:60;
	doc.documentElement.style.fontSize=_size+"px";
})(document);