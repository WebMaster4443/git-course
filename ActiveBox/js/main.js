$(function () {


    /* Fixed Header */
    let header = $("#header"); //Peremennaya + Podklyu4ili naw header selector 
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop(); //Shitaet scroll ekrana c verhu
    let nav = $("#nav");
    let navToggle = $("#navToggle")
    ChekScroll(scrollPos, introH);

    $(window).on("scroll  resize", function () { //Budet deystviya,  pri scrolle str
        introH = intro.innerHeight(); //Shitaet visotu bloka intro s Padding
        scrollPos = $(this).scrollTop(); 
        ChekScroll(scrollPos, introH);
    });

    function ChekScroll(scrollPos, introH) {
        if ( scrollPos > introH) { //Nawe uslovie ukazanie 
            header.addClass("fixed"); //Dobavili Class v nash header esli true togda dob naw class
        } else{
            header.removeClass("fixed"); //Dobavili Class v nash header esli fale to udali naw class
        }
    }

    /*Smooth Scroll*/
        $("[data-scroll]").on("click", function(event){ // Skazali pri data-scroll sdelat nekoe deystvie s pomowyu funksii click
            event.preventDefault(); // Obnulili defaultnoe povidenie 

                let elementId = $(this).data('scroll'); //Polu4ili ID elementa k kotorome budet scroll
                let elementOffset = $(elementId).offset().top; // Polu4aem otstup s verhu etogo elementa
                nav.removeClass("show"); //Udalyaem class posle clicka 

                $("html, body").animate({ //Scazali Animirovat ScrollTop c verkhu b budem scrollit na zna4enie elementOffset
                    scrollTop: elementOffset -77
                }, 1500); 
        });

    /*navToggle*/
    navToggle.on("click", function(event){
            event.preventDefault();
            nav.toggleClass("show"); 
        })

        /* Reviews Slider resurse: https://kenwheeler.github.io/slick/   //Vizivaem naw slick slider dlya nawego elementa */
        let slider = $("#reviewsSlider"); //Selector nawego slider
        slider.slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true, 
                arrows: false,
                dots: true,
                });
        
});

console.log('Test 2');
