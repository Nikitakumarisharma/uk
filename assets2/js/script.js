/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Prysm = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.BackgroundImage();
				this.Animation();
				this.StickyHeader();
				this.scrollTop();
				this.searchPopUp();
				this.MobileMenu();
				this.GoogleMap();
				this.Scroller();
				this.counterUp();
				this.CarouselSLider();
				this.TextAnimation();
				this.SkillProgress();
				
				
			},
			preloader: function (){
				$(window).on("load", function(){
					$(".loading-preloader").fadeOut();
				});	
				
			},
			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},
			Animation: function (){
				if($('.wow').length){
					var wow = new WOW(
					{
						boxClass:     'wow',
						animateClass: 'animated',
						offset:       0,
						mobile:       true,
						live:         true
					}
					);
					wow.init();
				}
			},
			StickyHeader: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.pry-main-header').addClass('sticky-on')
					} else {
						jQuery('.pry-main-header').removeClass('sticky-on')
					}
				})
			},
			scrollTop: function (){
				$(window).on("scroll", function() {
					if ($(this).scrollTop() > 200) {
						$('.scrollup').fadeIn();
					} else {
						$('.scrollup').fadeOut();
					}
				});

				$('.scrollup').on("click", function()  {
					$("html, body").animate({
						scrollTop: 0
					}, 800);
					return false;
				});
			},
			Scroller: function (){
				$("#featured_scroll").mCustomScrollbar({
					scrollButtons:{enable:true},
				});
				$(".pr-team-item-thumb-img").mCustomScrollbar({
					scrollButtons:{enable:false},
				});
				$("#featured_scroll").removeClass("mCustomScrollbar");
				$(".pr-team-item-thumb-imgl").removeClass("mCustomScrollbar");
			},
			CarouselSLider: function (){
				$('.case-slider-wrap').slick({
					arrow: true,
					infinite: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: ".sl-left_arrow",
					nextArrow: ".sl-right_arrow",
				});
				$('.pr-blog-slider-area').slick({
					arrow: true,
					infinite: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					prevArrow: ".blg-left_arrow",
					nextArrow: ".blg-right_arrow",
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
					]
				});
				$('.pr-service-slider').slick({
					arrow: true,
					infinite: false,
					slidesToShow: 4,
					slidesToScroll: 1,
					prevArrow: ".sl-left_arrow",
					nextArrow: ".sl-right_arrow",
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
					]
				});
				$('.pr-service-details-slider').slick({
					arrow: true,
					infinite: false,
					slidesToShow: 2,
					slidesToScroll: 1,
					prevArrow: ".srd-left_arrow",
					nextArrow: ".srd-right_arrow",
					responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
						}
					},
					{
						breakpoint: 800,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 400,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
					]
				});
			},
			counterUp: function (){
				if($('.counter').length){
					jQuery('.counter').counterUp({
						delay: 50,
						time: 2000,
					});
				};
			},

			TextAnimation: function (){
				var $lat_anim = $('.pr-text-anim');
				var $display = $(window);

				function scroll_addclass() {
					var display_long = $(window).height() - 100;
					var display_aim = $display.scrollTop();
					var display_down = (display_aim + display_long);

					$.each($lat_anim, function () {
						var $item_s = $(this);
						var items_long = $item_s.outerHeight();
						var item_up = $item_s.offset().top;
						var item_down = (item_up + items_long);

						if ((item_down >= display_aim) &&
							(item_up <= display_down)) {
							$item_s.addClass('is_show');
					}
				});
				}

				$display.on('scroll resize', scroll_addclass);
				$display.trigger('scroll');


				var $c_slide_effect = $('.pr-text-in');
				var $display = $(window);
				function c_scroll_addclass() {
					var display_long = $(window).height() - 100;
					var display_aim = $display.scrollTop();
					var display_down = (display_aim + display_long);

					$.each($c_slide_effect, function () {
						var $item_s = $(this);
						var items_long = $item_s.outerHeight();
						var item_up = $item_s.offset().top;
						var item_down = (item_up + items_long);

						if ((item_down >= display_aim) &&
							(item_up <= display_down)) {
							$item_s.addClass('is_shown');
					}
				});
				}

				$display.on('scroll resize', c_scroll_addclass);
				$display.trigger('scroll');
			},
			searchPopUp: function (){
				if($('.search-box-outer').length) {
					$('.search-box-outer').on('click', function() {
						$('body').addClass('search-active');
					});
					$('.close-search').on('click', function() {
						$('body').removeClass('search-active');
					});
				}
			},
			MobileMenu: function (){
				$('.open_mobile_menu').on("click", function() {
					$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.mobile_menu li.dropdown ul').length){
					$('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>');
					$('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
				$(".dropdown-btn").on("click", function () {
					$(this).toggleClass("toggle-open");
				});
			},
			SkillProgress: function (){
				if ($(".progress-bar").length) {
					var $progress_bar = $('.progress-bar');
					$progress_bar.appear();
					$(document.body).on('appear', '.progress-bar', function() {
						var current_item = $(this);
						if (!current_item.hasClass('appeared')) {
							var percent = current_item.data('percent');
							current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
						}

					});
				};
			},
			GoogleMap: function (){
				if ( $('#pr-map').length ){
					var $lat = $('#pr-map').data('lat');
					var $lon = $('#pr-map').data('lon');
					var $zoom = $('#pr-map').data('zoom');
					var $marker = $('#pr-map').data('marker');
					var $info = $('#pr-map').data('info');
					var $markerLat = $('#pr-map').data('mlat');
					var $markerLon = $('#pr-map').data('mlon');
					var map = new GMaps({
						el: '#pr-map',
						lat: $lat,
						lng: $lon,
						scrollwheel: false,
						scaleControl: true,
						streetViewControl: false,
						panControl: true,
						disableDoubleClickZoom: true,
						mapTypeControl: false,
						zoom: $zoom,
					});
					map.addMarker({
						lat: $markerLat,
						lng: $markerLon,
						icon: $marker,    
						infoWindow: {
							content: $info
						}
					})
				}
			},

		}
	}
	jQuery(document).ready(function (){
		Prysm.init();
	});

})();