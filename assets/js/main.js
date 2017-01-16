$(document).ready(function() {

	// Animation for sliding events
	$(window).scroll(function() {
			$('.item-animated-right').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 400) {
					$(this).addClass("slideRight");
				}
			});

			$('.item-animated-left').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("slideLeft");
				}
			});
	});

	// $(document).on('click', 'a', function(event){
	// 	event.preventDefault();
	//
	// 	$('html, body').animate({
	// 			scrollTop: $( $.attr(this, 'href') ).offset().top
	// 	}, 500);
	// )};

});
