$(window).on('load', function () {
     
});

$(document).ready(function(){
    
    
    
    /*$("ul.tab-content").css({
        height: $("ul.tab-content li").height()
    })*/
    $(".tab-content li").hide();
    $(".tab-content li.tech.sec-text").show();
    
    $("ul.inline-nav li").click(function(){
        $(".tab-content li").hide();
        $("ul.tab-content li."+this.classList[0]).fadeIn();
    })
    
    $("#fullpage").fullpage({
        navigation: true,
        afterLoad: function(section, origin, destination, direction){
            $(".rocket").removeClass("anim-rocket");
            
            if(origin.isFirst){
               $(".rocket").addClass("anim-rocket");   
                $(".pri-logo").fadeOut();
                $(".white-logo").fadeIn();
            }
            
            if(origin.index == 1){
                $(".pri-logo").fadeIn();
                $(".white-logo").fadeOut();
                $(".sec-2 .main-text").addClass("text-anim");
                $(".girl").addClass("girl-entry");
                 $(".girl").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
                    function(e) {
                        if(e.originalEvent.animationName == "girl-entry"){
                            $(".girl").css({
                                opacity: 1
                            })
                            $(".girl").addClass("girl-anim");
                        }
                    });

            }
            
            if(origin.index == 2){
                
               $("ul.tab-content").css({
                   height: $("li.tech.sec-text").height() 
               }) 
               
               $(".boy").addClass("boy-entry");
                $(".boy").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
                    function(e) {
                        if(e.originalEvent.animationName == "boy-entry"){
                            $(".boy").css({
                                opacity: 1,
                                right: 155
                            })
                            $(".boy").removeClass("boy-entry").addClass("boy-anim");
                        }
                    });
            }
            
            if(origin.index == 3){
                AOS.init();
                $(".sec-4 .main-text").addClass("text-anim");
            }
            
        }
    });
    
})