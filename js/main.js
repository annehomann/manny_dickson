var App = {
	details: {
		author: "Anne Homann",
		project: "Manny Dickson's UX Portfolio"
	},
	functions: {
		init: function () {
			console.log("App Initiated.");
			this.setUpHeroSlider();
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
		}
	}
};

$(document).ready(function () {
	App.functions.init();
});