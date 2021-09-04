//메뉴
$(".nav > ul > li").mouseenter(function(){
    $(".nav > ul > li > ul").stop().slideDown(300);
});

$(".nav > ul > li").mouseleave(function(){
    $(".nav > ul > li > ul").stop().slideUp(300);
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