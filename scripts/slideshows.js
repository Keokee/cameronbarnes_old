var count = 0;
var figHeight;
var wrapHeight;
var resizeTimer;
/*var isVisible = 0;*/
var resizeW = $(window).width();
var resizeH = $(window).height();


function isVisible(){

    if($("div.mainContain").find("div.visible").length > 0){
        return 1;
    }
    else{return 0};
    
}

var scrollAdjust = 0;

function mapHeight(){
     $("div.outerContain").height($(window).height());
     
}

var position = 2;
var set = 0;

function setSlide(){
    $("div.location").each(function(){
            var h = $(this).height();
            var w = $(this).width();
            
            var h2 = 1333;
            var w2 = 2000;
            
            $(this).find("img").height(h);
            $(this).find("img").width((h/h2)*w2);
            
            if($(this).find("img").width() < w){
                $(this).find("img").width(w);
                $(this).find("img").height((w/((h/h2)*w2))*h);
            }
            
            if($(this).find("img").width() > w){
                var offLeft = (($(this).find("img").width() - w) / 2) * (-1);
                
                $(this).find("img").css("margin-left",offLeft);
            }
            
            else if($(this).find("img").height() > h){
                var offTop = (($(this).find("img").height() - h) ) * (-1);
                
                $(this).find("img").css("margin-top",offTop);
            }
    });
    
}

function slide(){
    $("div.location").each(function(){
        if( $(this).hasClass("cur")){
            $(this).fadeOut();
        }
        if( $(this).hasClass("post")){
            $(this).fadeIn();
        }
        set++;
    });
    
    setTimeout(function(){
        set = 0;
        $("div.pre").remove();
        
        var cur = $("div.cur");
        var post = $("div.post");
        
        cur.removeClass("cur");
        cur.addClass("pre");
        post.removeClass("post");
        post.addClass("cur");
        
        $("div.slideshowWrap").append("<div class='location post' id='location"+position+"'><img src='"+slideImage[position]+"' onContextMenu='return false;'/></div>");
        position++;
        if(position > (slideImage.length-1)){
            position = 0;
        }
        setSlide();
        
    },1000);
}


window.addEventListener('resize', function(event){

     mapHeight();
     setSlide();
     
     
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
            $("div.overlay").css("display","block");
            $("div.overlay").css("top","10px");
        }
        
        setTimeout(function(){
            
            setSlide();
        },500);
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
        
        
}

