$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});


	$(window).scroll(function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 10 && !$('.scroll-indicator').hasClass('hidden')){
				$('.scroll-indicator').addClass('hidden');
		}
		else if (scrolled < 10 && $('.scroll-indicator').hasClass('hidden')){
				$('.scroll-indicator').removeClass('hidden');
		}
	});


	$('.lus-toggle-open-js').on('click', function(e) {
		e.preventDefault();

		$('.lus-header--fix').addClass('active');
	});

	$('.lus-toggle-close-js').on('click', function(e) {
		e.preventDefault();

		$('.lus-header--fix').removeClass('active');
	});


	$('.table-control').select2();


	AOS.init({
		offset: 100,
		anchorPlacement: 'top-bottom',
		duration: 500,
		mirror: false,
		once: true
	});


	if($('.bg-fade').length > 0){
		var bgFade = $('.bg-fade');

		$('.table-container').scroll(function(){
				var scroll = $(this).scrollLeft();

				$('.bg-fade').css({
						'transform': 'translateX('+scroll+'px)'
				});

				if(scroll > 0 && !bgFade.hasClass('hidden')){
						bgFade.addClass('hidden');
				}
				else if(scroll === 0 && bgFade.hasClass('hidden')){
						bgFade.removeClass('hidden');
				}
		});
	}


	$('.invert-trigger').on('click', function(e){
		e.preventDefault();

		var table = $(this).closest('table');
		var rows = table.find('tr:not(.noclick)');

		table.find('tr:first').after(rows.get().reverse());
	});

	$('.expand-toggle').on('click', function(e){
		e.preventDefault();

		if($(this).hasClass('expanded')){
				$(this).removeClass('expanded');
				$(this).find('span').empty().append('View all');
				$('.table-container').removeClass('expand');
		}
		else{
				$(this).addClass('expanded');
				$(this).find('span').empty().append('View less');
				$('.table-container').addClass('expand');
		}
	});


	$('.ano-footer__title').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('active');

		$(this).next('.ano-footer-menu').stop().slideToggle(150);
	});



});
