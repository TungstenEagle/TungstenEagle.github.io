document.addEventListener( 'DOMContentLoaded', function () {
    

    new Splide( '.splide', {
        autoplay: true,
        interval: 30000,
        rewind: true,
        breakpoints: {
            768: {
                destroy: true
            }}
    }, {
        classes: {
            prev: 'splide__arrow--prev my__arrow-prev',
		    next: 'splide__arrow--next my__arrow-next'
        }
    } ).mount();
} );

