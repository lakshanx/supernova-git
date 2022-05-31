
// TODO: POLISH THE CODE.

if ($('.carousel--multi-slide').length){
   $('.carousel--multi-slide').on('slide.bs.carousel', function (carouselItem) { 

        const $carouselItem = $(carouselItem.relatedTarget);
        const index = $carouselItem.index();
        const itemsPerSlide = 5; // get this from col number?
        const totalItems = $(this).find('.carousel-item').length;

        console.log('index', index);
        console.log('carouselElement', carouselItem);
        console.log('$carouselElement', $carouselItem);

        if (index >= totalItems - (itemsPerSlide - 1)) {
            let it = itemsPerSlide - (totalItems - index);

            for (let i = 0; i < it; i++) {
                //append slides to end
                if (carouselItem.direction=="left") {
                    console.log('appented on left');
                    $(this).find('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $(this).find('.carousel-item').eq(0).appendTo('.carousel-inner');
                    console.log('appented on right');
                }
            }
        }

    });
}

console.log("%c Hello Supernova team! Hope you're having a nice day", 'color: #f11346;font-size:15px;background:white;padding:10px; font-weight: bold;');





