$(document).ready(function(){

    jQuery('.parent-slider').owlCarousel({
		//items: 4,
		dots: true,
		nav: true,
		navText: Array('<img src="img/arrow-left.svg">',  '<img src="img/arrow-right.svg">'),
		responsive: {

			0: {
				items: 1
			},

			768: {
				items: 1
			},

			1024: {
				items: 1
			},

			

		}
	});


});