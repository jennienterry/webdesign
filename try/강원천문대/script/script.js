//메누
$(".menu > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(300);
});
$(".menu > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(300);
});

//이미지 fade
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

//팝업
$(".layerPopup").click(function(){
    $(".layer-bg").show();
    $(".layer").show();
});
$(".layer .close").click(function(){
    $(".layer-bg").hide();
    $(".layer").hide();
});