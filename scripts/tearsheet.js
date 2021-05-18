var count = 0;
var figHeight;
var wrapHeight;
var resizeTimer;
/*var isVisible = 0;*/
var resizeW = $(window).width();
var resizeH = $(window).height();



function setWrapperWidth(){
       var width = 0;
            var marginWidth = 0;
            var count = 0;
            
            $("div#tearsheets").find("a").each(function(){
            	width += $(this).find("img").width();
            	if($(this).hasClass("firstImage")){
            		marginWidth = $(this).find("img").width();
            	}
            	count++;
            });
            
            count *= 10;
            
            $("div.moveLeft").hide();
            
            $("div#tearsheets").width("60000px");
            var height = $("div#tearsheets").height();
            
            if(769 > $(window).width()){
            	 $("div#tearsheets").css("margin-left", "0px");
            }
            else{
            	 $("div#tearsheets").css("margin-left", (marginWidth/2)*(-1));
            }
       
       setTimeout(function(){
            width = 0;
            marginWidth = 0;
            count = 0;
            
            $("div#tearsheets").find("a").each(function(){
            	width += $(this).find("img").width();
            	if($(this).hasClass("firstImage")){
            		marginWidth = $(this).find("img").width();
            	}
            	count++;
            });
            
            count *= 10;
            
            $("div.moveLeft").hide();
            
           $("div#tearsheets").width("60000px");
            var height = $("div#tearsheets").height();
            
            if(769 > $(window).width()){
            	 $("div#tearsheets").css("margin-left", "0px");
            }
            else{
            	 $("div#tearsheets").css("margin-left", (marginWidth/2)*(-1));
            }
            
            
        if($(window).width() <= 768){
            $("div.overlay").css("line-height", "1.2em");
            $("div.overlay").css("position", "relative");
            $("div.overlay").css("margin-bottom", "1em");
            $("div.overlay").css("color", "black");
            $("div.overlay").css("background", "rgb(255,255,255)");
            $("div.overlay").css("display","none");
        }
        else{
            var lineHeight = $("div.visible").height();
            $("div.overlay").css("line-height", lineHeight + "px");
            $("div.overlay").css("position", "absolute");
            $("div.overlay").css("margin-bottom", "0em");
            $("div.overlay").css("color", "white");
            $("div.overlay").css("background", "rgba(0,0,0,.8)");
            $("div.overlay").css("display","none");
        }
        },500);
}


window.addEventListener('resize', function(event){

        var vis = $("div.visible");
        var width = 0;
        var marginWidth = 0;
        var count = 0;
        var quit = 0;
        var windowWidth = $(window).width();
        
        $(vis).find("a").each(function(){
            var imageW = $(this).find("img").width();
            var imageH = $(this).find("img").height();
        });
        
        
        $(vis).find("a").each(function(){
        	if($(this).hasClass("focus")){
             	quit = 1;
            }
            
            if($(this).hasClass("firstImage")&&$(this).hasClass("focus")){
                marginWidth = marginWidth - $(this).find("img").width()/2;
        	    marginWidth = marginWidth - 6;
            }
            else if($(this).hasClass("focus")){
                marginWidth = marginWidth - $(this).find("img").width()/2;
        	    marginWidth = marginWidth - 6;
            }
        	else if(quit!=1){
        	     marginWidth = marginWidth - $(this).find("img").width();
        	     marginWidth = marginWidth - 6;
        	}
        	
        	width += $(this).find("img").width();
        	count++; 
        });
        
        
        count *= 12;
        
        $(vis).width(width+count);
        var height = $(vis).height();
        //$(vis).css("margin-top",height/4);
        
        if(windowWidth > 751){
            $(vis).css("margin-left", (marginWidth));
        }
        else{
            $(vis).css("margin-left", "0px");
        }
        
        
        $(vis).find("a.photograph").each(function(){
            if(windowWidth < 751){
                $(this).css("width","100%");
            }
            else{
                var tempWidth = $(this).find("img").width();
                $(this).width(tempWidth);
            }
        });
        
        
        
        
        if(windowWidth <= 768){
            $("div.overlay").css("line-height", "1.2em");
            $("div.overlay").css("position", "relative");
            $("div.overlay").css("margin-bottom", "1em");
            $("div.overlay").css("color", "black");
            $("div.overlay").css("background", "rgb(255,255,255)");
            $("div.overlay").css("display","none");
        }
        else{
            var lineHeight = $("div.visible").height();
            $("div.overlay").css("line-height", lineHeight + "px");
            $("div.overlay").css("position", "absolute");
            $("div.overlay").css("margin-bottom", "0em");
            $("div.overlay").css("color", "white");
            $("div.overlay").css("background", "rgba(0,0,0,.8)");
            $("div.overlay").css("display","none");
            $("div.menu").hide();
        }
        
});

function arrowClick(){
     var vis = $("div.visible");
        var width = 0;
        var marginWidth = 0;
        var count = 0;
        var quit = 0;
        var windowWidth = $(window).width();
        
        $(vis).find("a").each(function(){
            var imageW = $(this).find("img").width();
            var imageH = $(this).find("img").height();
        });
        
        
        $(vis).find("a").each(function(){
        	if($(this).hasClass("focus")){
             	quit = 1;
            }
            
            if($(this).hasClass("firstImage")&&$(this).hasClass("focus")){
                marginWidth = marginWidth - $(this).find("img").width()/2;
        	    marginWidth = marginWidth - 6;
            }
            else if($(this).hasClass("focus")){
                marginWidth = marginWidth - $(this).find("img").width()/2;
        	    marginWidth = marginWidth - 6;
            }
        	else if(quit!=1){
        	     marginWidth = marginWidth - $(this).find("img").width();
        	     marginWidth = marginWidth - 6;
        	}
        	
        	width += $(this).find("img").width();
        	count++; 
        });
        
        
        count *= 12;
        
        $(vis).width(width+count);
        var height = $(vis).height();
        
        if(windowWidth > 768){
            $(vis).css("margin-left", (marginWidth));
        }
        else{
            $(vis).css("margin-left", "0px");
        }
        
        
        $(vis).find("a.photograph").each(function(){
            if(windowWidth < 769){
                $(this).css("width","100%");
            }
            else{
                var tempWidth = $(this).find("img").width();
                $(this).width(tempWidth);
            }
        });
        
        
}

