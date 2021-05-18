
window.addEventListener('scroll', function(event){
    
    if($(window).width()<768){
        
        $("a.photograph").each(function(){
            
            if($(this).offset().top + + $(this).height() > $(window).scrollTop() && $(this).offset().top < ($(window).scrollTop() + $(window).height())){
                var check = $(this).find("img").attr("src");
                check = check.substring(check.length-3);
                
                if(check!="gif"){
                    var id = $(this).find("img").attr("id");
                    id = id.substr(1 , id.length-1);
                    $(this).find("img").attr("src","images/GIFs/"+id+".gif");
                }
            }
            else{
                var check = $(this).find("img").attr("src");
                check = check.substring(check.length-3);
                
                if(check!="jpg"){
                    var id = $(this).find("img").attr("id");
                    id = id.substr(1 , id.length-1);
                    $(this).find("img").attr("src","images/GIFs/"+id+".jpg");
                }
            }
        });
    }
       
});

window.addEventListener('resize', function(event){
    
    if($(window).width()<768){
        
        $("a.photograph").each(function(){
            
            if($(this).offset().top + + $(this).height() > $(window).scrollTop() && $(this).offset().top < ($(window).scrollTop() + $(window).height())){
                var check = $(this).find("img").attr("src");
                check = check.substring(check.length-3);
                
                if(check!="gif"){
                    var id = $(this).find("img").attr("id");
                    id = id.substr(1 , id.length-1);
                    $(this).find("img").attr("src","images/GIFs/"+id+".gif");
                }
            }
            else{
                var check = $(this).find("img").attr("src");
                check = check.substring(check.length-3);
                
                if(check!="jpg"){
                    var id = $(this).find("img").attr("id");
                    id = id.substr(1 , id.length-1);
                    $(this).find("img").attr("src","images/GIFs/"+id+".jpg");
                }
            }
        });
    }
    else{
        $("a.photograph").each(function(){
            var check = $(this).find("img").attr("src");
            check = check.substring(check.length-3);
                
            if(check!="gif"&&$(this).hasClass("focus")){
                var src = $(this).find("img").attr("id");
		        src = src.substr(1 , src.length-1);
                $(this).find("img").attr("src","images/GIFs/"+src+".gif");
            }
            else if(check=="gif"&&!$(this).hasClass("focus")){
                var src = $(this).find("img").attr("id");
		        src = src.substr(1 , src.length-1);
                $(this).find("img").attr("src","images/GIFs/"+src+".jpg");
            }
        
        });
		
		
    }
       
});
