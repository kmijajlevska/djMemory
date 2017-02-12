$(function(){
	$(".live_tile").filter(":odd").css("border", "2px solid red");
	$(".live_tile").children().filter("span").hide();
		
	$(".live_tile").hover(function(){
	
		if ($(this).attr("class")!="passed") 
		{
			console.log("mouse in");
			$(this).css("background", "linear-gradient(#00FF3C, #004F12)");
			$(this).css("color", "red");}
	}, function(){
	if ($(this).attr("class")!="passed") {
				console.log("mouse out");
				$(this).css("background", "linear-gradient(#1E5799, #7db9e8");
				$(this).css("color", "white");}
	});
	
	var flag1=0, flag2=0;
	
	$(".live_tile").click(function()
	{
			if (flag1==0 && flag2==0) {
			
				$(".live_tile").children().filter("span").hide();
				$(".live_tile").children().filter("p").show();
					
				flag1 = Number($(this).children().filter("span").attr("title"));
				$(this).children().filter("p").hide();
				$(this).children().filter("span").show();
				$(this).addClass("first");
			}
			else 
				if (flag1!=0 && flag2==0) 
				{
					flag2 = Number($(this).children().filter("span").attr("title"));
					$(this).children().filter("p").hide();
					$(this).children().filter("span").show();
					$(this).addClass("second");
					if (flag1==flag2) 
						{
							$(this).attr("class","");
							$(this).attr("style","");
							$(this).addClass("passed");
							$(".first").attr("style","");
							$(".first").addClass("passed");
							$(".first").removeClass("first");
							$(".passed").removeClass("live_tile");				
							flag1 =0;
							flag2 =0;
						}
				else 
					{
						$(this).attr("class","");
						$(this).attr("style","");
						$(this).addClass("live_tile");
						$(".first").attr("style","");
						$(".first").addClass("live_tile");
						$(".first").removeClass("first");
						flag1 =0;
						flag2 =0;
					}
				}	
	});
});