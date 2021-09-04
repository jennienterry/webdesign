//메뉴
$(".nav > ul > li").mouseenter(function(){
    $(".nav > ul > li > ul").stop().slideDown(300);
});

$(".nav > ul > li").mouseleave(function(){
    $(".nav > ul > li > ul").stop().slideUp(300);
});

//이미지 슬라이드
var currentIndex = 0;
setInterval(function(){
 if(currentIndex < 2){
     currentIndex++;
 } else {
     currentIndex = 0;
 }
 var slidePosition = currentIndex * (-300)+"px";
 $(".slideList").animate({top:slidePosition},400);
},3000);

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