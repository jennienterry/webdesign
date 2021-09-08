//메뉴
$(".menu > ul > li").mouseover(function(){
    $(".menu > ul > li > ul").stop().slideDown(300);
});
$(".menu > ul > li").mouseout(function(){
    $(".menu > ul > li > ul").stop().slideUp(300);
});

//이미지 슬라이드 (좌우)
var slideCount = $(".slideImg").length;
var  currentIndex = 0;
setInterval(function(){
    if(currentIndex < slideCount-1){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
var slidePosition = currentIndex * (-1200)+"px";
$(".slideList").animate({left:slidePosition},400);
}, 3000);

//팝업
$(".layerPopup").click(function(){
    $(".layer-bg").show();
    $(".layer").show();
});
$(".layer .close").click(function(){
    $(".layer-bg").hide();
    $(".layer").hide();
});
