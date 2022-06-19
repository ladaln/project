$(document).ready(function () {
	$('.slides').slick({
		arrows: false,
		dots: true,
		addaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 300,
		easing: "linear",
		infinite: true,
		initialSlide: 1,
		autoplay: false,
		draggable: true,
		swipe: true,
		waitForAnimate: false,
	});
});

