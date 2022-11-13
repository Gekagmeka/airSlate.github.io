$('.burger-button, .item .link').on('click', function(){
	$('.navigation, .burger-button').toggleClass('active');
	$('body').toggleClass('lock');
});


//border under the links in the header
let activeLinks = document.querySelectorAll('.navigation .link');
for ( let activeLink of activeLinks ) {
	activeLink.addEventListener('click', function(){
		deleteActiveClass();
		activeLink.classList.add('active');
	});
}

function deleteActiveClass(){
	for (let deleteActive of activeLinks){
		deleteActive.classList.remove('active');
	}
}

$('.link-slide').hover(
	function(){
	$(this).find('.text-slide').fadeIn(300);},
	function(){
	$(this).find('.text-slide').fadeOut(300);
});	

//slider
$(".carousel").slick({
	autoplay: true,
	dots: false,
	arrows: true,
	prevArrow: $('.prev-first-section'),
	nextArrow: $('.next-first-section'),
	infinite: false
});

$(".carousel-advantage").slick({
	slidesToShow: 3,
	autoplay: true,
	dots: false,
	arrows: true,
	prevArrow: $('.prev-advantage'),
	nextArrow: $('.next-advantage'),
	infinite: false,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$(window).on('load', () => {
	const element = $('.slick-carousel');
	const mediaQuery = window.matchMedia('(max-width: 1023px)');
  
	const handleSwitchSlick = ((e) => {
	  if (e.matches) {
		element.slick({
		  infinite: false,
		  arrows: false,
		  slidesToShow: 2,
		  responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
		});
	  } else if (element.hasClass('slick-initialized')) {
		element.slick('unslick');
	  }
	});
  
	mediaQuery.addListener(handleSwitchSlick);
	handleSwitchSlick(mediaQuery);
  });

// if (window.matchMedia('(max-width: 1023px)').matches) {
// 	$('.tabs-content .list').slick({
// 		responsive: [
// 		{
// 			breakpoint: 1023,
// 			settings: {
// 				slidesToShow: 2
// 			}
// 		}
// 	]
// 	});
// }

// const mediaQuery = window.matchMedia('(max-width: 1023px)')
// function handleTabletChange(e) {
//   if (e.matches) {
//     $('.tabs-content .list').slick({
// 				autoplay: true,
// 				dots: false
// 			});
//   }
// }
// mediaQuery.addListener(handleTabletChange)
// handleTabletChange(mediaQuery)