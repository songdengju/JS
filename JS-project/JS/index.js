
function byId(id){         //封装一个取id函数
	return typeof(id)==="string"?document.getElementById(id):id; 
}


//全局变量
var timer=null;
var img=byId("img");
var banner=byId("banner");
var divs=img.getElementsByTagName("div");
var len=divs.length;
var index=0;
var title=byId("title");
var titles=title.getElementsByTagName("li");
//封装函数
function autoPlay(){
	//鼠标滑过时停止
	banner.onmouseover=function(){
		clearInterval(timer);
	}
	//自动播放
	function starAutoPlay(){
		timer=setInterval(function(){
			index++;
			if (index>=len) {
				index=0;
			}
			change();   //注意位置
		},1000)
	}
	//鼠标移开时轮播
	banner.onmouseout=function(){
			starAutoPlay();
	}
	starAutoPlay();

	//鼠标点击标题图片变化
	for (var j=0; j<len; j++) {
		titles[j].id=j;
		titles[j].onclick=function(){
			index=this.id;            //this代替titles[j]
			change();
		}

	}

	//图片变化
	function change(){
		for (var i =0; i<len; i++) {
			divs[i].style.display="none";
			titles[i].className="";
		}
		divs[index].style.display="block";
		titles[index].className="changbgc";
	}

}
autoPlay();