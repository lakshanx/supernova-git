$(document).ready(function() {

  const $carouselMultiSlide = $('.carousel--multi-slide');

  if ($carouselMultiSlide.length) {
    $carouselMultiSlide.on('slide.bs.carousel', function(carouselItem) {

      const $carouselInner = $(this).find(".carousel-inner");
      const $carouselItem = $(carouselItem.relatedTarget);
      const carouselIndex = $carouselItem.index();
      const itemsPerSlide = 5; // get this dynamically from col-[number]?
      const totalItems = $(this).find('.carousel-item').length;

      if (carouselIndex >= totalItems - (itemsPerSlide - 1)) {
        const it = itemsPerSlide - (totalItems - carouselIndex);
        for (let i = 0; i < it; i++) {
          //append slides
          if (carouselItem.direction == "left") {
            $(this).find('.carousel-item').eq(i).appendTo($carouselInner);
          } else {
            $(this).find('.carousel-item').eq(0).appendTo($carouselInner);
          }
        }
      }

    });
  }

  console.log(
    "%c Hello Supernova team! Hope you're having a nice day", 
    'color: #f11346;font-size:15px;background:white;padding:10px; font-weight: bold;'
  );

});