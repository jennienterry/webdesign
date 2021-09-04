//메뉴
$(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300); //.show도 가능
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(300); //.hide
});

//이미지 슬라이드
$(".slideList").children("div:gt(0)").hide();
var current = 0;

setInterval(function(){
    var next = (current + 1) % 3; // 나머지가 1 -> 2 -> 0 으로 돌게 된다.
    $(".slideList").find("div").eq(current).fadeOut();
    $(".slideList").find("div").eq(next).fadeIn();
    current = next ;
    // console.log(current) // 확인용
    // console.log(next) // 확인용
}, 3000);

// 탭 메뉴
var tabBtn = $(".tab-menu > ul > li");

function tabmenu() {
    $(".tab-menu>ul>li").eq(0).click(function() {
        $(".gallery").hide();
        $(".notice").show();
        tabBtn.removeClass("active");
        $(this).addClass("active");
    });
    
    $(".tab-menu>ul>li").eq(1).click(function() {
        $(".notice").hide();
        $(".gallery").show();
        tabBtn.removeClass("active");
        $(this).addClass("active");
    });
}

tabmenu();


//레이어 팝업
$(".layerPopup").click(function(){
    //    $(".layer").css("display", "block");
       $(".layer").show();
       $(".layer-bg").show();
   });

   $(".layer .close").click(function(){
    //    $(".layer").css("display", "none");
       $(".layer").hide();
       $(".layer-bg").hide();
   });