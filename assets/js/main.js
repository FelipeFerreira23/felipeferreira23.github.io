window.onload = function() {
	$(".banner-slider").slick({
		slideToScroll: 1,
		slidesToShow: 1,
		infinite: true,
		dots: true,
		arrows: true
	});

	$(".products ul").slick({
		slideToScroll: 2,
		slidesToShow: 4,
		infinite: true,
		dots: false,
		arrows: true,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
};

