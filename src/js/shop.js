$(document).ready(function () {

    const  shopSlider = $('#shopSlider');


    shopSlider.owlCarousel ({
        items: 3,
        dots: false,
        loop: true,
        margin: 2,
        // autoplay: false, 
        smartSpeed: 500,
        autoplayTimeout: 8000,
        autoplaySpeed: 4000,
    
    });

   

    // headerSlider.on('initialized.owl.carousel', function(event){
    //     $('.slide-controls-number__active').text(event.item.index + 1 )
    //     $('.slide-controls-number__total').text(event.item.count  )
    // });

  

    // Go to the previous item
    $('#shopSliderLeft').click(function () {
        console.log ('Left');
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        shopSlider.trigger('prev.owl.carousel');
    })

     // Go to the next item
    $('#shopSliderRight').click(function () {

        console.log ('Right');
        shopSlider.trigger('next.owl.carousel');
    })


    // headerSlider.on('changed.owl.carousel', function(event){
    //     $('.slide-controls-number__active').text(event.item.index + 1 )
    //     $('.slide-controls-number__total').text(event.item.count  )
    // });




});

