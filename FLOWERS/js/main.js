$(document).ready(function(){
  // hero slider
  $('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // - от какой ширины изменять настройки(1024 и ниже)
      settings: {
        // вносим изменения на ширине 1024 и ниже 
        slidesToShow: 4,
        slidesToScroll: 2
      }
      
    }
  ]
});
// rewiwe slider
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
// fancybox
$("#rewiew-1").on('click', function() {
  // rewiew
  $.fancybox.open([
	{
		src  : 'https://kiwiflowershop.com.ua/image/cache/catalog/00364-900x1198.jpg',
		opts : {
			caption : 'Летний букет с пионами и гортензией',
			thumb   : 'https://kiwiflowershop.com.ua/image/cache/catalog/00364-900x1198.jpg'
		}
	},
	{
		src  : 'https://kiwiflowershop.com.ua/image/cache/catalog/00448-900x1198.jpg',
		opts : {
			caption : 'Монобукет из розы Red piano',
			thumb   : 'https://kiwiflowershop.com.ua/image/cache/catalog/00448-900x1198.jpg'
		}
	}
], 
{
	loop : true,
  thumbs : {
    autoStart : true
  }
});
});
  $("#rewiew-2").on('click', function() {
  // rewiew
  $.fancybox.open([
	{
		src  : 'https://kiwiflowershop.com.ua/image/cache/catalog/00364-900x1198.jpg',
		opts : {
			caption : 'Летний букет с пионами и гортензией',
			thumb   : 'https://kiwiflowershop.com.ua/image/cache/catalog/00364-900x1198.jpg'
		}
	},
	{
		src  : 'https://kiwiflowershop.com.ua/image/cache/catalog/00448-900x1198.jpg',
		opts : {
			caption : 'Монобукет из розы Red piano',
			thumb   : 'https://kiwiflowershop.com.ua/image/cache/catalog/00448-900x1198.jpg'
		}
	}
], 
{
	loop : true,
  thumbs : {
    autoStart : true
  }
});
  });
});