jQuery(document).ready(function(){

    jQuery('.parent-slider').owlCarousel({
		//items: 4,
		dots: true,
		nav: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
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




    // Попап
	var click_popap = jQuery('.click-popap');

	click_popap.on('click', function(){

		var modal_content = jQuery(this).next();
		modal_content.css({"display": "block"});
		var modal_width = modal_content.width();

		jQuery(this).next().addClass("modal-open-parent");

		jQuery('.modal-content').addClass("modal-content-show");


		// Закрыть попап
		jQuery('.modal-open-parent').on('click', function(event){

			if(event.target.className == 'modal-close modal-open-parent') {
				modal_content.css({"display": "none"});
				event.target.classList.remove('modal-open-parent');
			}

        });     

	

			



		//Закрыть попап кнопкой
		$('.close-button').on('click', function(){
			modal_content.css({"display": "none"});
			modal_content.removeClass('modal-content-show');
			$('.modal-open-black').removeClass('modal-open-parent');
		});
			

	});




});