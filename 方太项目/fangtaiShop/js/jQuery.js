$(function () {
    // 字变颜色
    $(".pic-1>a").mouseenter(function () {
        $(this).css("color","#921d21");
    });
    $(".pic-1>a").mouseleave(function () {
        $(this).css("color","null");
    });

    $(".xuan>a").mouseenter(function () {

        let curIndex=$(this).index();
            console.log(curIndex);
            if (curIndex==0) {
                $(".xuan>a>li").eq(0).css({backgroundPosition:"42px -105px"});
                $(".xuan>a>p").eq(0).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(0).css({backgroundPosition:"42px -2px"});
                $(".xuan>a>p").eq(0).css({display:"none"});
            }

            if (curIndex==1) {
                $(".xuan>a>li").eq(1).css({backgroundPosition:"-88px -105px"});
                $(".xuan>a>p").eq(1).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(1).css({backgroundPosition:"-88px -2px"});
                $(".xuan>a>p").eq(1).css({display:"none"});
            }

            if (curIndex==2) {
                $(".xuan>a>li").eq(2).css({backgroundPosition:"-216px -105px"});
                $(".xuan>a>p").eq(2).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(2).css({backgroundPosition:"-216px -2"});
                 $(".xuan>a>p").eq(2).css({display:"none"});
            }
            
            if (curIndex==3) {
                $(".xuan>a>li").eq(3).css({backgroundPosition:"-368px -105px"});
                $(".xuan>a>p").eq(3).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(3).css({backgroundPosition:"-368px -2px"});
                $(".xuan>a>p").eq(3).css({display:"none"});
            }

            if (curIndex==4) {
                $(".xuan>a>li").eq(4).css({backgroundPosition:"-491px -105px"});
                $(".xuan>a>p").eq(4).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(4).css({backgroundPosition:"-491px -2px"});
                $(".xuan>a>p").eq(4).css({display:"none"});
            }

            if (curIndex==5) {
                $(".xuan>a>li").eq(5).css({backgroundPosition:"-626px -105px"});
                $(".xuan>a>p").eq(5).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(5).css({backgroundPosition:"-626px -2px"});
                $(".xuan>a>p").eq(5).css({display:"none"});
            }

            if (curIndex==6) {
                $(".xuan>a>li").eq(6).css({backgroundPosition:"-758px -105px"});
                $(".xuan>a>p").eq(6).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(6).css({backgroundPosition:"-758px -2px"});
                $(".xuan>a>p").eq(6).css({display:"none"});
            }

            if (curIndex==7) {
                $(".xuan>a>li").eq(7).css({backgroundPosition:"-894px -105px"});
                $(".xuan>a>p").eq(7).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(7).css({backgroundPosition:" -894px -2px"});
                $(".xuan>a>p").eq(7).css({display:"none"});
            }

            if (curIndex==8) {
                $(".xuan>a>li").eq(8).css({backgroundPosition:"-1032px -105px"});
                $(".xuan>a>p").eq(8).css({display:"block"});
            }else {
                $(".xuan>a>li").eq(8).css({backgroundPosition:" -1032px -2px"});
                $(".xuan>a>p").eq(8).css({display:"none"});
            }

        $(this).css("color","#921d21");
    });

    $(".xuan>a").mouseleave(function () {
        $(this).css("color","null");
    });
    // 登录注册
    $(".car").mouseenter(function () {
        $(".shopping").stop().slideDown(500);
    });
    $(".car").mouseleave(function () {
        $(".shopping").stop().slideUp(500);
    });
    // 产品
    let count=0;
    $("#produc").mouseenter(function () {
        $(".qianRuK").stop().slideDown(500);
        count++
        if (count==1) {
            $(".changeBox").children("ul").eq(0).css("display","block").siblings("ul").css("display","none");
            $(".xuan>a>li").eq(0).css({backgroundPosition:"42px -105px"});
            $(".xuan>a>p").eq(0).css({display:"block"});
        }
        
    });
    $("#produc").mouseleave(function () {
        $(".qianRuK").stop().slideUp(500);
    });
    // 服务
    $("#serMain").mouseenter(function () {
        $(".service").stop().slideDown(500);
    });
    $("#serMain").mouseleave(function () {
        $(".service").stop().slideUp(500);
    });

    //幸福智慧
    $(".yuan").mouseenter(function () {
        $(".smart").stop().slideDown(500);
    });
    $(".yuan").mouseleave(function () {
        $(".smart").stop().slideUp(500);
    });



    //两张大图效果
    

    $(".chiEat").mouseenter(function(){
        $(this).children("a").children("img").css({width:"505px",
                                                    height:"325px",
                                                	boxShadow:"0 0 20px #ccc"});
    })
    $(".chiEat").mouseleave(function(){
        $(this).children("a").children("img").css({width:"500px",
        											height:"320px",
        											boxShadow:"0 0 0 #fff"});
    })

    //向上移动效果
    $(window).scroll(function(){
        let t=$(this).scrollTop();
        if (t>=100) {
            $(".pic").css({animation: "fadeInUp 0.5s ease 0.5s 1 both",
                            opacity:"1"});
        }
        if (t>=500) {
            $(".menu").css({animation: "fadeInUp 0.5s ease 0.5s 1 both",
                            opacity:"1"});
        }
    })


    // 搜索样改变

    // function $(id){
    // 	return document.getElementById(id);
    // }
    // 悬浮出对应选项
    // var xuan=document.getElementById("xuan");
    // xuan.onmouseenter=function(event) {
    // 		event = event || window.event;
    // 		var tar = event.target || event.srcElement;
    // 		var tarTag = tar.className;
    // 		console.log(tarTag);
    // 		if (tarTag == "one") {
    // 				$(".changeBox").children("ul").eq(0).css("display","block");
    // 		  }
    // 	}

    $("#xuan>a").mouseenter(function(){
    	// console.log("有效果吗")
    	let curIndex=$(this).index();
    	// console.log(curIndex);
    	$(".changeBox").children("ul").eq(curIndex).css("display","block").siblings("ul").css("display","none");
    });

    // 扫码赢扫地机器人
    $(".ma").mouseenter(function () {
        $(".tou>a>img").css("display","block");
    });
    $(".ma").mouseleave(function () {
        $(".tou>a>img").css("display","none");
    });

    $(".wx").mouseenter(function () {
        $(".attention").css("display","block");
    });
    $(".wx").mouseleave(function () {
        $(".attention").css("display","none");
    });


    // 搜索框
    $("#txt").click(function () {
        $("#search").fadeIn(1000);
    });
    $(".find").mouseleave(function () {
        $("#search").fadeOut(1000);
    });

    // 打开、关闭登录框
    $("#login").click(function () {
        $(".login-in").show();
        $(".outSide").show();
    });

    $("#close").click(function () {
        $(".login-in").hide();
        $(".outSide").hide();
    });
});