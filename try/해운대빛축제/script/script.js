//메뉴
$(".menu ul li").hover(
    function(){
        $(this).find(".submenu").stop().slideDown(200);
    }, function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

//이미지 슬라이드
$(".slideList").children("div:gt(0)").hide();
var current = 0;
setInterval(function(){
    var next = (current + 1) % 3;
 $(".slideList").find("div").eq(current).fadeOut();
 $(".slideList").find("div").eq(next).fadeIn();
    current = next;
}, 3000);

//탭
var tabBtn = $(".tab-menu > ul > li");

function tabmenu(){
    $(".tab-menu > ul > li").eq(0).click(function(){
        $(".gallery").hide();
        $(".notice").show();
        tabBtn.removeClass("active");
        $(this).addClass("active");
    });
    $(".tab-menu > ul > li").eq(1).click(function(){
        $(".gallery").show();
        $(".notice").hide();
        tabBtn.removeClass("active");
        $(this).addClass("active");
    });

}

tabmenu();


//레이어 팝업
$(".layerPopup").click(function(){
       $(".layer").show();
       $(".layer-bg").show();
   });

   $(".layer .close").click(function(){
       $(".layer").hide();
       $(".layer-bg").hide();
   });