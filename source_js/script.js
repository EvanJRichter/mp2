// Write any custom javascript functions here

$(document).ready(function(){
  
  $('body').click(function(){
    $(this).toggleClass('llama')
  });



});

$(window).scroll(function (event) {
  	var scrolledVal = $(document).scrollTop().valueOf();
	if (scrolledVal > $("#about").height()) {
		$('.navbar').addClass('barShrink');
		console.log(scrolledVal);
	} else {
		$('.navbar').removeClass('barShrink');
	}
});