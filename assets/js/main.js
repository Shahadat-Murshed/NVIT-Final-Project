$(document).ready(function($){
	"use strict";

	//meanmenu
	$("#navbar nav").meanmenu();

	//==================Slider Area Owl Carousel====================================
	if($(".slider-area").length){
		$(".slider-area").owlCarousel({
			items: 1,
			animateOut: "fadeout",
			animateIn: "fadeIn",
			loop: true,
			margin: 0,
			nav: false,
			singleItem: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 6000,
			autoplayHoverPause:true,
			mouseDrag: false, 
			responsive: {
				0:{
					items: 1,
				},
				767:{
					items: 1,
				},
				1024:{
					items: 1,
				},
			},	
		});
	}

	
	//AOS animation
	if ($("[data-aos]").length) {
		AOS.init({
			duration: 1500,
			mirror: true,
		});
	}

	//Magnific image
	
	var imagepoppup = $(".image-popup");
	if (imagepoppup.length) {
	  $(".image-popup").magnificPopup({
		delegate: "a",
		type: "image",
		callbacks: {
		  beforeOpen: function () {
			this.st.image.markup = this.st.image.markup.replace(
			  "mfp-figure",
			  "mfp-figure animated zoomInDown"
			);
		  },
		},
		gallery: {
		  enabled: true,
		  preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
		},
		image: {
		  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		  titleSrc: function (item) {
			return item.el.attr("title") + "<small>BY Thaicho</small>";
		  },
		},
	  });
	}

	//Magnific Video

	$(".popup-youtube").magnificPopup({
		type: "iframe",
		iframe: {
		  markup:
			'<div class="mfp-iframe-scaler">' +
			'<div class="mfp-close"></div>' +
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
			"</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button
		  patterns: {
			youtube: {
			  index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
	
			  id: "v=",
	
			  src: "https://www.youtube.com/embed/%id%?autoplay=1",
			},
	
			// you may add here more sources
		  },
		  srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		},
	  });

	/*Iso Tope */
	$(".project-titles li").on("click", function () {
		var selector = $(this).attr("data-filter");
		//alert(selector);
		$(".project-list").isotope({
		  filter: selector,
		});
	});
	$(".project-list").isotope();
	
	//Project Filter
	var projectTitle = $(".project-titles li");
	if (projectTitle.length) {
	$(".project-titles li").on("click", function (event) {
		$(this).siblings(".active").removeClass("active");
		$(this).addClass("active");
		event.preventDefault();
		});
	}
	
	//dropdown menu
	/*Inline script in the html body*/

	//jQuery Sticky Area
	/*$(".sticky-area").sticky({
		topSpacing: 0,
	})*/

	//Preloader JS
	function preloader() {
		if($("#preloader").length){
			$(window).on("load", function(){
				$("#preloader").fadeOut();
				$("#preloader").delay(50).fadeOut("slow");
			});
		}
	}
	preloader();

}(jQuery));