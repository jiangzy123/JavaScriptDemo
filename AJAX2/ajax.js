function ajax(Url,successFn,failureFn){
	// 1.创建XMLHttpRequest对象
	var xhr=null;
	if (window.XMLHttpRequest) {// 非IE5/6
		xhr=new XMLHttpRequest();//实例对象
	} else{// IE5/6
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	};
	// 2.打开与服务器的链接
	xhr.open('get',Url,true);//生成不一样的url解决缓存问题
	// 3.发送给服务器
	xhr.send(null);//get请求

	// 4.响应就绪  异步请求
	xhr.onreadystatechange=function (){//回调函数
		if (xhr.readyState==4) {//请求完成
			if (xhr.status==200) {//ok
				// return xhr.responseText;
				/*(function (str){
					var json=JSON.parse(str);//解析成json对象
					list.innerHTML=json.name;
					console.log('请求完成，已返回结果');
				})(xhr.responseText);*/
				successFn(xhr.responseText);
			} else{
				if (failureFn) {
					failureFn();
				} else{
					alert(xhr.status);
				};
			};
		};
	}

}