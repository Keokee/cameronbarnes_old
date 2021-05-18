
window.addEventListener('resize', function(event){
    var win = $(window).width();
    
    if(win > 768){
        $("div.menu").hide();
    }
     
});

