window.onload=function(){

	//登录注册验证是否可通过

	var num=document.getElementById('num');
			var pd=document.getElementById('pd');

	//对不起，请输入正确的号码格式！√×
			var regNum=/^1\d{10}$/;
			num.oninput=function(){
				if (regNum.test(this.value)==false) {
					this.nextElementSibling.innerHTML="×";
					this.nextElementSibling.style.cssText=
					`color:red;
					font-weight:bold;
					`;
				}else{
					this.nextElementSibling.innerHTML="√";
					this.nextElementSibling.style.cssText=
					`color:green;
					font-weight:bold;
					`;
				}
			}


			var regPd=/^[a-zA-Z][a-zA-Z0-9]{5,15}$/i;
			pd.oninput=function(){
				if (regPd.test(this.value)==false) {
					this.nextElementSibling.innerHTML="×";
					// this.nextElementSibling.style.color="red";
					this.nextElementSibling.style.cssText=
					`color:red;
					font-weight:bold;
					`;
				}else{
					this.nextElementSibling.innerHTML="√";
					// this.nextElementSibling.style.color="green";
					this.nextElementSibling.style.cssText=
					`color:green;
					font-weight:bold;
					`;
				}
			}
}



	function fadeInOut(domObjIn,domObjOut,timeLong){
		//已知timeLong；
		let timerSpace= 16;
		let long = 1;
		let step = long/(timeLong/timerSpace) 
		
		let opacity = 0;

		let myTimer = setInterval(function(){
			opacity +=step;

			if(opacity>=1){
				opacity = 1;
				clearInterval(myTimer);
			}

			domObjIn.style.opacity = opacity;
			domObjOut.style.opacity = 1-opacity;

		},timerSpace);

	}

	// 1、每隔一定的时间换一张图片（豆豆也在变）
	// let currOrd = 0;//0代表第一张
	// let myTimer = null;
	function autoPlay(){
		let banner=document.getElementById('banner');
		let doudouBox=document.getElementById('doudouBox');
		let imgDoms = banner.children;
		let liDoms = doudouBox.children;
		// if(myTimer!=null){
		// 	return;
		// }
		myTimer = setInterval(function(){
			//一、数据处理
			let outOrd = currOrd;
			currOrd++;

			if(currOrd>5){
				currOrd = 0;
			}

			//二、改变外观

			fadeInOut(imgDoms[currOrd],imgDoms[outOrd],2000);
			//变豆豆
			for(let i=0;i<liDoms.length;i++){
				// liDoms[i].style.backgroundColor = "blue";
				liDoms[i].style.borderBottom = "none";
				// console.log("你好");
			}
				// liDoms[currOrd].style.backgroundColor = "red";
				liDoms[currOrd].style.borderBottom = "2px solid #992c30";

		},3000);

	}

	//2、停止播放
	function stopPlay(){
		clearInterval(myTimer);
		myTimer = null;
	}
	//3、跳转指定的图片；(ord是图片序号)
	function goImg(ord){
		let banner=document.getElementById('banner');
		let doudouBox=document.getElementById('doudouBox');
		let imgDoms = banner.children;
		let liDoms = doudouBox.children;
		
		//一、数据处理
		let outOrd = currOrd;
		currOrd = ord;

		if(currOrd>5){
			currOrd = 0;
		}

		//二、改变外观

		fadeInOut(imgDoms[currOrd],imgDoms[outOrd],2000);
		//变豆豆
		for(let i=0;i<liDoms.length;i++){
			// liDoms[i].style.backgroundColor = "pink";
			liDoms[i].style.borderBottom = "none";
		}
		// liDoms[currOrd].style.backgroundColor = "red";
			liDoms[currOrd].style.borderBottom = "2px solid #992c30";
		
	}
