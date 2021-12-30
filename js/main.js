$(function(){
    $('.fairy_tale-slider').slick({
        nextArrow:'<button class="slick-arrow slick__next"><img src="images/next.svg" alt="#"></button>',
        prevArrow:'<button class="slick-arrow slick__prev"><img src="images/prev.svg" alt="#"></button>',
        fade: true,
        autoplay: true,
        responsive: [ { breakpoint: 601, settings: { arrows: false } }, ]
    });

    $('.route__slider').slick({
        nextArrow:'<button class="slick-arrow slick__next"><img src="images/next.svg" alt="#"></button>',
        prevArrow:'<button class="slick-arrow slick__prev"><img src="images/prev.svg" alt="#"></button>',
        fade: true,
        autoplay: true,
        responsive: [ { breakpoint: 601, settings: { arrows: false } }, ]
    });

    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
      });

      $("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
        
});