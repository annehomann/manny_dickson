var App = {
	details: {
		author: "Anne Homann",
		project: "Manny Dickson's UX Portfolio"
	},
	functions: {
		init: function () {
			console.log("App Initiated.");
			this.addEventHandlers();
			this.setUpHeroSlider();
		},
		addEventHandlers: function () {
			$(window).scroll(this.sortOutNav);
		},
		setUpHeroSlider: function () {
			console.log("Set Up Hero Slider called");
			$('.slick-hero-carousel').slick({
				autoplay: true,
				infinite: true,
				speed: 500,
				fade: true,
				accessibility: false,
				slide: ".slide",
				cssEase: 'linear'
			});
		}, 
		sortOutNav: function () {
			var toShowNav = $("div.title h1").position().top,
			scrolledDown = $(window).scrollTop(); 
			if ( scrolledDown >= toShowNav ) {
				if ( $("nav.non-static").attr("data-scrolled") == "true" ) {
					$("nav.non-static").addClass("scrolled");
					$("nav.non-static").animate({
						top: "0"
					}, 400);
					$("nav").attr("data-scrolled", "false");
				}
			} else {
				if ( $("nav.non-static").attr("data-scrolled") == "false" ) {
					console.log("yesss");
					$("nav.non-static").attr("data-scrolled", "true");
					$("nav.non-static").animate({
						top: "-100px"
					}, 400);
				}
			}
		}
	}
};

$(document).ready(function () {
	App.functions.init();
});