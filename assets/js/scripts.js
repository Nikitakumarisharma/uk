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
				this.Pr2StickyMenu(); 
				this.Pr2ScrollTop();
				this.Pr2BlogSlider();
				this.Pr2Accordion();
				this.Pr2Sidebar(); 
				this.Pr2Counterup();

			},
			preloader: function (){
				$(window).on('load', function() {
					$(".loading-preloader").fadeOut();
				});
			},

			BackgroundImage: function (){
				$('[data-background]').each(function() {
					$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
				});
			},

            Animation: function (){
				$(window).on("load", function(){
						if($('.wow').length){
						new WOW({
							offset: 100,
							mobile: true
						}).init()
					}
				});
				
			},

			Pr2StickyMenu: function (){
				jQuery(window).on('scroll', function() {
					if (jQuery(window).scrollTop() > 250) {
						jQuery('.main-header-area').addClass('sticky-on')
					} else {
						jQuery('.main-header-area').removeClass('sticky-on')
					}
				})
				$('.str-open_mobile_menu').on("click", function() {
					$('.str-mobile_menu_wrap').toggleClass("mobile_menu_on");
				});
				$('.str-open_mobile_menu').on('click', function () {
					$('body').toggleClass('mobile_menu_overlay_on');
				});
				if($('.str-mobile_menu li.dropdown ul').length){
					$('.str-mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
					$('.str-mobile_menu li.dropdown .dropdown-btn').on('click', function() {
						$(this).prev('ul').slideToggle(500);
					});
				}
			},

			Pr2ScrollTop: function (){
				$(window).on("scroll", function(){
					var scrollBarOffset = $(this).scrollTop();
					if( scrollBarOffset > 300 ){
						$(".pr2-scroll-top").fadeIn();
					} else {
						$(".pr2-scroll-top").fadeOut();
					}
				}); 

				$(".pr2-scroll-top").on("click", function(e){
					e.preventDefault();
					$("body,html").animate({
						scrollTop: 0,
					}, 1800, 'easeInQuart'); 
				});
			},

			Pr2BlogSlider: function (){
				$(".pr2-blog-slider").slick({
					slidesToShow: 3, 
					prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
					nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>', 
					responsive : [
						{
							breakpoint: 991, 
							settings: {
								slidesToShow: 2,
							}
						},

						{
							breakpoint: 680, 
							settings: {
								slidesToShow: 1,
							}
						}
					]
				});
			}, 

			Pr2Accordion: function (){
				$(".pr2-accordion .card-header a").each(function(){
					$(this).on("click", function(){
						$(this).parents(".accordion").find(".card-active").removeClass("card-active"); 
						$(this).parents(".card").addClass("card-active");
						
					}); 
				});
			}, 
			Pr2Sidebar: function (){
				$(".header-cta-btn .sidemenu-btn").on("click", function(){
					$(".pr2-overlay-bg").addClass('pr2-overlay-on');
					$(".pr2_sidebar_info_content").addClass("pr2-sidebar-on");
					return false;
				}); 

				$(".pr2-sidebar-info .close-menu").on("click", function(){
					$(".pr2-overlay-bg").removeClass("pr2-overlay-on");
					$(".pr2_sidebar_info_content").removeClass("pr2-sidebar-on");
				});

				$(".pr2-overlay-bg").on("click", function(){
					$(this).removeClass("pr2-overlay-on");
					$(".pr2_sidebar_info_content").removeClass("pr2-sidebar-on");
				});
			},

			Pr2Counterup: function (){
				$(window).on("load", function(){
					$(".pr2-achivement-contents .counterup").counterUp({
						time: 1500,
					});
				});
				
			}
            

		}	
	}
	jQuery(document).ready(function (){
		Prysm.init();
	});

})();
