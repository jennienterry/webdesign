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
    if(currentIndex <2 ){
        currentIndex++;
    }else{
        currentIndex = 0;
    }
    var slidePosition = currentIndex * (-300)+"px";
    $(".slideList").animate({top:slidePosition},400);
},3000);

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