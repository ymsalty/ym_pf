/////////////////// ハンバーガーメニュー　///////////////////
$(function () {
  $('.Toggle').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active');
        $('.NavMenu').fadeIn(500);
    } else {
        $('.NavMenu').removeClass('active');
        $('.NavMenu').fadeOut(500);
    }
  });
  $('.navmenu-a').click(function () {
    $('.NavMenu').removeClass('active');
    $('.NavMenu').fadeOut(1000);
    $('.Toggle').removeClass('active');
  });
});
/////////////////// ロード画面　///////////////////
// ページのロード完了時にローディング画面をフェードアウト

$(window).on('load', function() {
  $(".page-loader").delay(2000).fadeOut(2000);
});  
// ページのロードが完了しない場合でも10秒たったら強制的にローディング画面をフェードアウト
setTimeout('stoploading()', 2000); 
function stoploading() {
  $(".page-loader").fadeOut( 2000 );
} 
/*//////////////////// swiper  ////////////////*/
$(function() {
    let swiper = new Swiper ('.slider1', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
});
$(function() {
var mySwiper = new Swiper ('.swiper-container', {
	loop: true,
    autoplay: true,
    speed: 3000,
	slidesPerView: 2,
  	spaceBetween: 10,
  	centeredSlides : true,
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	breakpoints: {
		767: {
			slidesPerView: 1,
			spaceBetween: 0
		},
	},
});
});
/*//////////////////// member swiper  ////////////////*/

$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

/*////////////////////  フェードイン  ////////////////*/
$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});



$(function(){
　$(window).scroll(function (){
    $('.effect-fade').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
            $(this).addClass('effect-scroll');
        }
    });
　});
});
window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.effect-fade').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('effect-scroll');
    }
   });
  }
};




jQuery(document).ready(function(){
var _window = $(window),
    _header = $('.site-header'),
    heroBottom;
 
_window.on('scroll',function(){     
    heroBottom = $('.scroll_header').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');   
    }
    else{
        _header.removeClass('fixed');   
    }
});
 
_window.trigger('scroll');
     });