$(document).ready(function(){
    
    AOS.init();
    
     $('.circle').circleProgress({
            size: 200,
            emptyFill: "#fff",
            thickness: 10,
            startAngle: 4.7 ,
        }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).children('strong').text(
            (stepValue * 100).toFixed(0) + '%'
          );
        });
    
        $(".circle.secondary").circleProgress({
        value: 0.87,
        fill: {
            color: "#ff4b36"
        }
    })
        
        
    
    $(".circle.waterblue").circleProgress({
        value: 0.32,
        fill: {
            color: "#4256d6"
        }
    })
    
     $(".circle.primary").circleProgress({
        value: 0.69,
        fill: {
            color: "#08104d"
        }
    })
    
     
      $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
     
            
    
       /* $(".waterblue .p-inner").animate({
            width: 62 + "%"   
        },{
            step: function(){
                let pinWidth = $(this).width();
                let per = Math.round(( $(this).width()/$(".p-outer").width() )*100);
                $(this).children(".per").html(per);
            }
        });
    */
    $(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

// $( window ).scroll(function() {   
 // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
 //  }  
// });
       
    
})