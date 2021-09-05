//메뉴
$(".nav > ul > li").mouseenter(function(){
    $(".nav > ul > li > ul").stop().slideDown(300);
});

$(".nav > ul > li").mouseleave(function(){
    $(".nav > ul > li > ul").stop().slideUp(300);
});

//이미지 슬라이드
var slideCount = $(".slideImg").length;
        var currentIndex = 0;
        var slidePosition;

        setInterval(function(){
            if(currentIndex < slideCount - 1){
                currentIndex++;
            } else{
                currentIndex = 0;
            }
            slidePosition = currentIndex * (-1200)+"px";
            // console.log(currentIndex); //확인용
            // console.log(slidePosition); //확인용
            $(".slideList").animate({left:slidePosition},400);
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