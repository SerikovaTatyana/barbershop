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



    $('.but-menu').click(function(){
      

	    if($(this).hasClass('close-menu')){
	          
	        $(this).removeClass('close-menu').css('position', 'absolute');
	        $('.black-block-close').removeClass('black-block-open');


            $('.main-menu').css('display', 'block').animate({
			   left: '-100%'
			
			 });

            //$('body').css('overflow', 'auto').animate({
            $('body').animate({
			   right: 0
			});


	    } else {

	    	
            $('.black-block-close').addClass('black-block-open');

	        $(this).addClass('close-menu').css('position', 'fixed');

	        //$(this).css('opacity', '0');
			$('.main-menu').css('display', 'block').animate({
			   left: 0
			});

			//$('body').css('overflow', 'hidden').animate({

            var body_width = $('body').width();

			$('body').animate({
			   
			   right:  body_width + 'px'
			   
			});

	    }



      

	});



    $('.close-menu').click(function(){

    	console.log('bam');

        $(this).removeClass('close-menu');

     });


    var isActive = false;

    $('.header__menubtn').on('click', function() {
        if (isActive) {
            $('.hamburger').removeClass('burger-active');
            $( ".hamburger-menu" ).fadeOut( 200, function() {
                    // Animation complete
               
            });
        } else {
            $('.hamburger').addClass('burger-active');
            $('.hamburger-menu').fadeIn(200, function () {
                
            });
        }

        isActive = !isActive;
    });


/*

	$('.but-menu.close').click(function(){
		
		$('.but-menu').css('opacity', '1');
		 $('.main-menu').animate({
		  left: '-200px'
		});

		 $('body').animate({
		   right: 0
		 });
	});
*/


});