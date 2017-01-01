
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



// Checking scroll for navbar fade away.
function checkScroll() {
	var startY = $('.navbar').height() * 2; // height of navbar (fixed)

	if ( $(window).scrollTop() > startY ) {
		$('.navbar').addClass('scrolled');
	} else {
		$('.navbar').removeClass('scrolled');
	}
}

if ( $('.navbar').length > 0 ) {
	$(window).on('scroll load resize', function(){
		checkScroll();
	});
}

// $(document).on('click', 'a', function(event){
// 	event.preventDefault();
//
// 	$('html, body').animate({
// 			scrollTop: $( $.attr(this, 'href') ).offset().top
// 	}, 500);
// )};
