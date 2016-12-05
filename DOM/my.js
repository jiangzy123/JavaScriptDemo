function resetArr(arr){//数组去重复排序
	arr.sort(function (a,b){return a-b;});
	var newarr=[];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]==arr[i+1]) {
			continue;
		};
		newarr.push(arr[i]);
	};
	return newarr;
}

function byClass1(oClass){//全局获取
	var tags=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if (tags[i].className==oClass) {
			arr.push(tags[i]);
		};
	};
	return arr;
}

function byClass2(parentID,oClass){//局部获取
	var parent=document.getElementById(parentID);
	var tags=parent.all?parent.all:parent.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if (tags[i].className==oClass) {
			arr.push(tags[i]);
		};
	};
	return arr;
}

function getStyle(obj,style){//获取元素样式
	if (obj.currentStyle) {
		return obj.currentStyle[style];
	} else{
		return getComputedStyle(obj,null)[style];
	};
}

function nextNode(obj){//获取下一个兄弟节点
	if (obj.nextElementSibling) {
		return obj.nextElementSibling;
	} else{
		return obj.nextSibling;
	};
}

