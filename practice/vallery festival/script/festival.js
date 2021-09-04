//메뉴
$(".nav ul li").hover(
    function(){
        $(this).find(".submenu").stop().slideDown(200);
}, function(){
        $(this).find(".submenu").stop().slideUp(200);
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
            slidePosition = currentIndex * (-800)+"px";
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