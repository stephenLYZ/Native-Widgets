window.onload = function(){
	var btntop = document.getElementById("button");
	var timer = null;
	var presentHeight = document.documentElement.clientHeight;//获取当前高度

	//当屏幕超过开始显示内容时，图标显示，否则隐藏
	window.onscroll = function(){
		var backtop = document.body.scrollTop || document.documentElement.scrollTop;
		if(backtop >= presentHeight){
			btntop.style.display = "block";
		}else{
			btntop.style.display = "none";
		}
	}

	btntop.onclick = function(){
		//计时器
		timer = setInterval(function(){
			//获取对象
			var backtop = document.body.scrollTop;
			//保持减速向上滑效果，增强用户体验
			var speed = backtop/5;
			document.body.scrollTop = backtop - speed;
			//当回到顶部是结束函数
			if(backtop == 0){
				clearInterval(timer);
			}

		},30);
	}
}