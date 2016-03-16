


// V JQuery V
$(document).ready(function () {

  $("#food").click(function(event){

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

  });




});
