
//左侧导航切换
$(function(){
	$(".level1-nav-a").click(function(){
		$(".level1-nav-a").removeClass("active");
		$(this).addClass("active");
		$(this).parent().siblings("li").find("ul").hide();
		var $ul = $(this).siblings("ul");
		if($ul.is(":hidden")){
			$ul.addClass("show");
		}else{
			$ul.addClass("hide");
		}
	})
})
