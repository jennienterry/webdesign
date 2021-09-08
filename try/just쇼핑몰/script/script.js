//메뉴
$(".menu > ul > li").mouseover(function(){
    $(".menu > ul > li > ul").stop().slideDown(300);
});
$(".menu ul li").mouseout(function(){
    $(".menu > ul > li > ul").stop().slideUp(300);
});

//슬라이드 (상하)
var currentIndex = 0;
setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }else{
        current = 0;
    }
    var slidePosition = currentIndex * (-300)+"px";
    $(".slideList").animate({top:slidePosition}, 400);
}, 3000);

// //슬라이드 (좌우)
// var slideCount  = $(".slideImg").length;
// var currentIndex = 0;
// setInterval(function(){
//     if(currentIndex < slideCount - 1){
//         currentIndex++;
//     }else{
//         currentIndex = 0;
//     }
//     var slidePosition = currentIndex * (-1200)+"px";
//     $(".slideList").animate({left:slidePosition},400);
// }, 3000);

// //슬라이드 (페이드)
// $(".slideList").children("div:gt(0)").hide();
// var current = 0;
// setInterval(function(){
//     var next = (current + 1) % 3;
// $(".slideList").find("div").eq(current).fadeOut();
// $(".slideList").find("div").eq(next).fadeIn();
// current = next;
// }, 3000);

//팝업
$(".layerPopup").click(function(){
    $(".layer").show();
    $(".layer-bg").show();
});
$(".layer .close").click(function(){
    $(".layer").hide();
    $(".layer-bg").hide();
});

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