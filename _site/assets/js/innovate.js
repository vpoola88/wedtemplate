$( document ).ready(function() {

/* ============================================================
 * STICKY NAV + SCROLLSPY (BS3 CDN + Custom)
 * ============================================================ */

  $("#header").sticky({ topSpacing: 0, className: 'sticky' });

  if ($(window).width() > 499) { 
    $("#nav ul.nav li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 600);
    });
  }
  

/* ============================================================
 * MOBILE NAVIGATION DROPDOWN (Custom)
 * ============================================================ */

  $('a.nav-toggle').click(function() {
    $('ul.nav').fadeToggle();
  });

  if ($(window).width() < 768) { 
    $('ul.nav li a').click(function() {
      $('ul.nav').delay(500).fadeOut();
    });
  } 


/* ============================================================
 * TOOLTIPS (BS3)
 * ============================================================ */

  $('.container').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    });


/* ============================================================
 * OWL CAROUSEL (js/assets/owl-carousel/owl.carousel.min.js)
 * ============================================================ */

  $("#carousel").owlCarousel({
    items : 2,
    autoPlay: true,
    itemsCustom : [
          [0, 1],
          [767, 1],
          [993, 1],
          [1000, 2],
          [1200, 2],
          [1400, 2],
          [1600, 2],
        ],
    });

    $("#carousel-fixed-2").owlCarousel({
        items : 2,
        autoPlay: true,
        itemsCustom : [
            [0, 2],
            [767, 2],
            [993, 2],
            [1000, 2],
            [1200, 2],
            [1400, 2],
            [1600, 2],
          ],
    });

    $("#blog-carousel").owlCarousel({
    navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true, 
        autoPlay: true,
        transitionStyle: "fadeUp",
    });

    $("#blog-carousel-backslide").owlCarousel({
    navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true, 
        autoPlay: true,
        transitionStyle: "backSlide",
    });

    $("#blog-carousel-goDown").owlCarousel({
    navigation : false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true, 
        autoPlay: true,
        transitionStyle: "goDown",
    });


/* ============================================================
 * PLACEHOLDER (js/assets/placeholder.js)
 * ============================================================ */

    $('input.form-control, textarea.form-control').placeholder();


/* ============================================================
 * HOVER CARDS
 * ============================================================ */

    $(".overlay").on("mouseenter", function(){
        $(this).find(".overlay-board").stop(true, true).fadeIn();
    });

    $(".overlay").on("mouseleave", function(){
        $(this).find(".overlay-board").stop(true, true).fadeOut();
    });


/* ============================================================
 * ANIMATED PROGRESS BARS (COMING SOON)
 * ============================================================ */

// $(window).scroll(function(){
//     var top = ($(window).scrollTop() > 350) ? $(window).scrollTop() : 1;
//     $('.fade').stop(true, true).fadeTo(0, 1 / top);
//     $('.fade').css('top', top * 0.5);             
// });


/* ============================================================
 * PARALLAX (js/assets/stellar.js)
 * ============================================================ */

  if ($(window).width() > 499) { 
    var s = skrollr.init();
  }
  


/* ============================================================
 * MAPLACE (js/assets/maplace.min.js)
 * ============================================================ */

    new Maplace({
    show_markers: true,
    locations: [{
      lat: 37.871593, 
      lon: -122.272747,
      zoom: 10,
      title: 'INNOVATE',
      icon: 'img/map-marker.png',
    }],
    styles: {
    'Other style': [{
      stylers: [
          { hue: "#46a5e5" },
          { saturation: 0 },
          { gamma: 0.90 }
      ]
    }, {
      featureType: "road",
      elementType: "geometry",
      stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
      ]
    }, {
      featureType: "road",
      elementType: "labels",
      stylers: [
          { visibility: "off" }
      ]
    }],
  }
  }).Load(); 


/* ============================================================
 * FORM VALIDATION (js/assets/validate.min.js)
 * ============================================================ */


  $('#form').validate({ // initialize the plugin
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 3
            },
            comments: {
                required: true,
                minlength: 10
            }
        }, 
        errorPlacement: function(){
            return false;  // suppresses error message text
        }
    });

});


/* ============================================================
 * CYCLE 2 (js/assets/cycle2.min.js)
 * ============================================================ */

var progress = $('#progress'),
    slideshow = $( '.cycle-slideshow' );

slideshow.on( 'cycle-initialized cycle-before', function( e, opts ) {
    progress.stop(true).css( 'width', 0 );
});

slideshow.on( 'cycle-initialized cycle-after', function( e, opts ) {
    if ( ! slideshow.is('.cycle-paused') )
        progress.animate({ width: '100%' }, opts.timeout, 'linear' );
});

slideshow.on( 'cycle-paused', function( e, opts ) {
   progress.stop(); 
});

slideshow.on( 'cycle-resumed', function( e, opts, timeoutRemaining ) {
    progress.animate({ width: '100%' }, timeoutRemaining, 'linear' );
});
