$(document).ready(function () {

    const  headerSlider = $('#headerSlider');


    headerSlider.on('initialized.owl.carousel', function(event){
        $('.slide-controls-number__active').text(event.item.index + 1 )
        $('.slide-controls-number__total').text(event.item.count  )
    });

    headerSlider.owlCarousel ({
        items: 1,
        dots: false,
        // loop: true,
        // autoplay: false, 
        smartSpeed: 2000,
        autoplayTimeout: 8000,
        autoplaySpeed: 4000,
    
    });

   

    // Go to the previous item
    $('#headerSliderLeft').click(function () {
        console.log ('Left');
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        headerSlider.trigger('prev.owl.carousel');
    })

     // Go to the next item
    $('#headerSliderRight').click(function () {

        console.log ('Right');
        headerSlider.trigger('next.owl.carousel');
    })


    headerSlider.on('changed.owl.carousel', function(event){
        $('.slide-controls-number__active').text(event.item.index + 1 )
        $('.slide-controls-number__total').text(event.item.count  )
    });




});

