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

	$('.jump-to').click(function(e) {
		e.preventDefault();

		var target = $(this).attr('data-target');
		target = $('.'+target);
		var scroll = target.offset().top;

		$('html, body').animate({
				scrollTop: scroll
		 }, 1000);
	});

	$('.info-trigger').on('click', function(e){
		e.preventDefault();

		$('body').addClass('overlay-active');

	});


	$('.overlay-close-trigger').on('click', function(e){
		e.preventDefault();

		$('body').removeClass('overlay-active');
	
	});


	$('.table-contain').find('tr:not(.noclick)').on('click', function(e){
		e.preventDefault();

		var self = $(this);

		var target = self.attr('data-country').toLowerCase();

		var maxHeight = $('.country-info.info-'+target).outerHeight();


		
		$('g[data-target]').removeClass('active');
		$('g[data-target='+target+']').addClass('active');
	

		if ($('.country-info.info-'+target).length > 0) {



			$('.data-section .table-container').css({
				'height': maxHeight,
				'overflow-x': 'hidden'
			});

			$('.country-info').removeClass('active');
			$('.country-info.info-'+target).addClass('active');

			$('.table-container').scrollLeft(0).addClass('country-overlay-open');
			$('.expand-control').css('display','none');


		}

	});


	$('g[data-target]').on('click',  function(e) {
		e.preventDefault();

		var self = $(this);

		var target = self.attr('data-target').toLowerCase();

		var maxHeight = $('.country-info.info-'+target).outerHeight();


		if (self.hasClass('active')) {
			$('g[data-target]').removeClass('active');
			self.removeClass('active');
		} else {
			$('g[data-target]').removeClass('active');
			self.addClass('active');
		}

	

		$('.data-section .table-container').css({
			'height': maxHeight,
			'overflow-x': 'hidden'
		});

		$('.country-info').removeClass('active');
		$('.country-info.info-'+target).addClass('active');

		$('.table-container').scrollLeft(0).addClass('country-overlay-open');
		$('.expand-control').css('display','none');

	});


	$('.country-close-trigger').on('click', function(e){
		e.preventDefault();
		
		$('g[data-target]').removeClass('active');
		$(this).parents('.country-info').removeClass('active');

		$('.country-info.active').removeClass('active');
		$('.table-container').attr('style','').removeClass('country-overlay-open');
		$('.expand-control').css('display','flex');
		
	});


	if (html < 768) {

		var fullscreenHeight = $('.fullscreen-container img').innerHeight();

		//console.log($('.fullscreen-container div').prop('scrollHeight') / 2)
	

		$('.fullscreen-container div').scrollTop(300);


		$('.map-visual').on('click', function(e) {
			var self = $(this);

			var target = $(e.target);


			if (target.hasClass('noclick')) {
				return;
			} else {
				$('html').addClass('is-fixed');
				$('.fullscreen').addClass('active');
			}

			
		});

	}


	$('.btn-back').on('click', function(e) {
		e.preventDefault();
		$('html').removeClass('is-fixed');
		$('.fullscreen').removeClass('active');

		
	});


	$('.ano-footer__title').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('active');

		$(this).next('.ano-footer-menu').stop().slideToggle(150);
	});



});
