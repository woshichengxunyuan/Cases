$(function(){
		//点击“切换”复选框出现 
		$(".province").click(function(){
			$(".sendProvince").css({display:"block"});
		});
		//点击除“切换”外的地方复选框消失
		$(".sendProvince").mouseleave(function(){
			$(this).css({display:"none"});
		});
		
		// 鼠标移入复选框改变样式
		$(".roll>li").mouseenter(function(){
			$(this).css({backgroundColor:"#f1f1f1"});
		});

		$(".roll>li").mouseleave(function(){
			$(this).css({backgroundColor:"null"});
		});

		$(".sendProvince>li").mouseenter(function(){
			$(this).css({cursor:"default"});
		});

		//头部右侧操作
		$("#information").mouseenter(function(){
			$("#inform").css({display:"block"});
			$("#information img").css({transform:"rotate(180deg)",
										transition:"1s"})
		});
		$("#inform").mouseleave(function(){
			$(this).css({display:"none"})
			$("#information img").css({transform:"rotate(0deg)"})
		});

		// 固定开关部分
		$("#disc").mouseenter(function(){
			$("#discount").css({display:"block"})
		});
		$("#disc").mouseleave(function(){
			$("#discount").css({display:"none"})
		});

		$("#speakPhone").mouseenter(function(){
			$("#sayPhone").css({display:"block"})
		});
		$("#sayPhone").mouseleave(function(){
			$(this).css({display:"none"})
		});

		// 返回顶部
		$("#reTop").click(function(){
			$(window).scrollTop(0);
		})
	});
		
		//点击按钮切换图片
		$(".btn i").click(function(){
			let curIndex=$(this).index();
			// console.log(curIndex);
			$(".showIt").eq(curIndex).css({display:"block"}).siblings(".showIt").css({display:"none"})
			if (curIndex%2==0) {
				$("#showMirro").addClass("showMirro").removeClass("showMirro1");
			}else{
				$("#showMirro").addClass("showMirro1").removeClass("showMirro");
			}
		});
		//点击箭头切换图片
		$(".bigTwo span").click(function(){
			let curIndex=$(this).index();
			if (curIndex==0) {
				$(".showIt").eq(0).css({display:"block"}).siblings(".showIt").css({display:"none"})
				$("#showMirro").addClass("showMirro").removeClass("showMirro1");
			}else{
				$(".showIt").eq(1).css({display:"block"}).siblings(".showIt").css({display:"none"})
				$("#showMirro").addClass("showMirro1").removeClass("showMirro");
			}
			
		});
		//滚动一定位置picDetail变为固定定位
		$(window).scroll(function(){
			let t=$(this).scrollTop();
			console.log(t);
			if (t>=730) {
				$(".picNav").css({position:"fixed",
									 top:0,
									 left:"50%",
									 margin:"0px 0px 0px -600px"})
			}else{
				$(".picNav").css({position:"relative"})
			}
		});
		//移动鼠标对应的li样式改变
		$("#hidNavContent li").mouseenter(function(){
			$(this).css({backgroundColor:"#ccc"}).siblings("li").css({backgroundColor:"null"})
		});
		//鼠标移入、移出区域，隐藏的导航条出现、消失
		$("#allPro").mouseenter(function(){
			$("#hidNav").css({display:"block"});
			$("#direction").css({transform:"rotate(180deg)",
								 transition:"1s"})
		});
		$("#hidNav").mouseleave(function(){
			$(this).css({display:"none"});
			$("#direction").css({transform:"rotate(0deg)"})
		});
		//通知动态实现
	console.log(111);
	let tz=document.getElementsByClassName('tz')[0];
	let order=document.getElementsByClassName('order')[0];
	let myTimer;
	console.log(tz);
	let left1=292;
	
	function startReduce(){
		left1--;
		// console.log(left1);
		order.style.left=left1+"px";
		goOn();
	}

	function goOn(){
			if (left1==-100) {
			order.style.display="none";
			left1=292;
			order.style.display="block";
			startReduce();
		}
	}


	function start(){
			 myTimer=setInterval(startReduce,60);
	}
	start();
	tz.onmouseenter=function(){
		clearInterval(myTimer);
	};
	tz.onmouseleave=function(){
		start();
	};


// 放大镜
class Magnifier{
		constructor(newSmallBox,newBigBox,newMask) {
		    this.smallBox = newSmallBox;
			this.bigBox = newBigBox;
			this.mask = newMask;
		}
		
		onmouseover(){
			let that = this;
			this.smallBox.onmouseover = function(){
				that.bigBox.style.display = "block";
				that.mask.style.display = "block";
				// console.log(123)
			}
		}
		
		onmouseout(){
			let that = this;
			this.smallBox.onmouseout = function(){
				that.bigBox.style.display = "none";
				that.mask.style.display = "none";
			}
		}
		
		onmousemove(){
			let that = this;
			this.smallBox.onmousemove = function(evt){
				let e = evt || event;
				let left = e.pageX - this.offsetLeft - that.mask.offsetWidth/2;
				let top = e.pageY - this.offsetTop - that.mask.offsetHeight/2;
				
				if(left < 0){
					left = 0;
				}
				let maxLeft = this.offsetWidth - that.mask.offsetWidth;
				if(left > maxLeft){
					left = maxLeft;
				}
				
				if(top < 0){
					top = 0;
				}
				let maxTop = this.offsetHeight - that.mask.offsetHeight ;
				if(top > maxTop){
					top = maxTop;
				}
				
				that.mask.style.left = left + "px";
				that.mask.style.top = top + "px";
				 
				let x = that.bigBox.offsetWidth*left/that.mask.offsetWidth;
				let y = that.bigBox.offsetHeight*top/that.mask.offsetHeight;
				
				that.bigBox.style.backgroundPositionX = -x + "px";
				that.bigBox.style.backgroundPositionY = -y + "px";
			}
		}
		
		eventBind(){
			this.onmouseover();
			this.onmouseout();
			this.onmousemove();
		}
	}

	// 点击加入购物车跳转并加入
let btn=document.getElementsByClassName("plus");
let  arrD=[];
for (let i=0; i<btn.length; i++){
	btn[i].onclick=function () {
		let goods={
			ig:"<img src='images/d6.JPG' alt='j'>",
			information:"JQ01T.i",
			num: "<div id='zengJian'><input class='jian' type='button' value='-'><span class='result'>1</span><input class='jia' type='button' value='+'></div>",
			option: "<input class='del' type='button' value='删除'>",
			price: "13000",
			tMoney: "13000"
		};
		arrD.push(goods);
		let  str=JSON.stringify(arrD);
		localStorage.setItem("shopCar", str);
		location.href="shopping.html";
	};
}
