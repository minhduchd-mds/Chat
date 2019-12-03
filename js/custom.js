/*



NOTE:  

*/

/*================================================
[  Table of contents  ]
================================================

:: Predefined Variables
:: Preloader
:: Mega menu
:: Counter
:: Accordion
:: Owl carousel
:: Isotope
:: Mgnific Popup
:: Masonry
:: Progressbar
:: Parallax
:: API contact form
:: API blog
:: Countdown
:: Back to top
:: FullScreen
:: Textrotator
:: Stepwizard
:: Range Slider
:: POTENZA Window load and functions

======================================
[ End table content ]
======================================*/
$(window).on('load', function() {

    setTimeout(function(){
        $('.alert-warning-m').hide().css({"display": "none"});
    },0);
    setTimeout(function(){
        $('.alert-warning-m').show().css({"display": "block"});
    }, 5000);
    setTimeout(function(){
        $('.alert-warning-m').hide();
    }, 8000);
});


//POTENZA var
var POTENZA = {};

(function($){
    "use strict";

    /*************************
     Predefined Variables
     *************************/
    var $window = $(window),
        $document = $(document),
        $body = $('body'),
        $countdownTimer = $('.countdown'),
        $textrotate = $('.textrotate'),
        $bar = $('.bar'),
        $progressBar = $('.skill-bar'),
        $fullScreen = $('.fullscreen') || $('.section-fullscreen'),
        $halfScreen = $('.halfscreen'),
        $counter = $('.counter');

    /*************************
     Tooltip
     *************************/

    $('[data-toggle="tooltip"]').tooltip();

    /*************************
     Check if function exists
     *************************/

    $.fn.exists = function () {
        return this.length > 0;
    };

    /*************************
     Preloader
     *************************/
    POTENZA.preloader = function () {
        $("#load").fadeOut();
        $('#preloader').delay(0).fadeOut('slow');


    };


    POTENZA.alertm = function () {
        $("#load").fadeOut();
        $('.alert-warning-').delay(40).fadeOut('slow');


    };

    /*************************
     Mega menu
     *************************/
    POTENZA.megaMenu = function () {
        $('#menu').megaMenu({
            // DESKTOP MODE SETTINGS
            logo_align          : 'left',         // align the logo left or right. options (left) or (right)
            links_align         : 'left',        // align the links left or right. options (left) or (right)
            socialBar_align     : 'left',    // align the socialBar left or right. options (left) or (right)
            searchBar_align     : 'right',   // align the search bar left or right. options (left) or (right)
            trigger             : 'hover',           // show drop down using click or hover. options (hover) or (click)
            effect              : 'fade',             // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
            effect_speed        : 400,          // drop down show speed in milliseconds
            sibling             : true,              // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
            outside_click_close : true,  // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
            top_fixed           : false,           // fixed the menu top of the screen. options (true) or (false)
            sticky_header       : true,       // menu fixed on top when scroll down down. options (true) or (false)
            sticky_header_height: 250,  // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
            menu_position       : 'horizontal',    // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
            full_width          : false,           // make menu full width. options (true) or (false)
            // MOBILE MODE SETTINGS
            mobile_settings     : {
                collapse            : true,    // collapse the menu on click. options (true) or (false)
                sibling             : true,      // hide the others showing drop downs when click on current drop down. options (true) or (false)
                scrollBar           : true,    // enable the scroll bar. options (true) or (false)
                scrollBar_height    : 400,  // scroll bar height in px value. this option works if the scrollBar option true.
                top_fixed           : false,       // fixed menu top of the screen. options (true) or (false)
                sticky_header       : false,   // menu fixed on top when scroll down down. options (true) or (false)
                sticky_header_height: 200   // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
            }
        });
    }


    /*************************
     counter
     *************************/

    POTENZA.counters = function () {
        if ($counter.exists()) {
            $counter.each(function () {
                var $elem = $(this);
                $elem.appear(function () {
                    $elem.find('.timer').countTo();
                });
            });
        }
    };


    /*************************
     Accordion
     *************************/
    POTENZA.accordion = function () {
        var   $acpanel = $(".accordion .acd-group > .acd-des"),
            $acsnav = $(".accordion .acd-group > .acd-heading");

        $acpanel.hide().first().slideDown("easeOutExpo");
        $acsnav.first().addClass("acd-active");
        $acsnav.on('click', function () {
            var $this = $(this).next(".acd-des");
            $acsnav.parent().removeClass("acd-active");
            $(this).parent().addClass("acd-active");
            $acpanel.not($this).slideUp("easeInExpo");
            $(this).next().slideDown("easeOutExpo");
            return false;
        });
    };

    /*************************
     owl-carousel
     *************************/

    POTENZA.carousel = function () {
        $(".owl-carousel").each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1,
                $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                $space = ($this.attr('data-space')) ? $this.data('space') : 30;
            $(this).owlCarousel({
                loop: $loop,
                items: $items,
                responsive: {
                    0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                    480:{items: $this.data('sm-items') ? $this.data('sm-items') : 1},
                    768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                    980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                    1200:{items: $items}
                },
                dots: $navdots,
                margin:$space,
                nav: $navarrow,
                navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
                autoplay: $autoplay,
                autoplayHoverPause: true
            });

        });
    };

    /*************************
     Isotope
     *************************/
    POTENZA.Isotope = function () {
        var $isotope = $(".isotope"),
            $itemElement = '.grid-item',
            $filters = $('.isotope-filters');
        if ($isotope.exists()) {
            $isotope.isotope({
                resizable: true,
                itemSelector: $itemElement,
                masonry: {
                    gutterWidth: 10
                }
            });
            $filters.on( 'click', 'button', function() {
                var $val = $(this).attr('data-filter');
                $isotope.isotope({ filter: $val });
                $filters.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        }
    };


    /*************************
     Magnific Popup
     *************************/
    POTENZA.mediaPopups = function () {
        if ($(".popup-gallery").exists()) {
            $('.popup-gallery').magnificPopup({
                delegate: 'a.popup-img',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });
        }
        if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    };


    /*************************
     Masonry
     *************************/
    POTENZA.masonry = function () {
        var $masonry = $('.masonry-main .masonry'),
            $itemElement = '.masonry-main .masonry-item';
        if ($masonry.exists()) {
            // $masonry.isotope({
            //     resizable: true,
            //     itemSelector: $itemElement,
            //     masonry: {
            //         gutterWidth: 10
            //     }
            // });
        }
    };

    /*************************
     Progressbar
     *************************/
    POTENZA.progressBar = function () {

        if ($progressBar.exists()) {
            $progressBar.each(function (i, elem) {
                var $elem = $(this),
                    percent = $elem.attr('data-percent') || "100",
                    delay = $elem.attr('data-delay') || "100",
                    type = $elem.attr('data-type') || "%";

                if (!$elem.hasClass('progress-animated')) {
                    $elem.css({
                        'width': '0%'
                    });
                }

                var progressBarRun = function () {
                    $elem.animate({
                        'width': percent + '%'
                    }, 'easeInOutCirc').addClass('progress-animated');

                    $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
                };

                $(elem).appear(function () {
                    setTimeout(function () {
                        progressBarRun();
                    }, delay);
                });
            });
        }
    };


    /*************************
     Parallax
     *************************/
    POTENZA.Parallax = function () {
        var $parallaxdiv = $('.parallax'),
            parallax = document.querySelectorAll(".parallax"),speed = 0.5;
        if ($parallaxdiv.exists()) {
            window.onscroll = function(){
                [].slice.call(parallax).forEach(function(el,i){
                    var windowYOffset = window.pageYOffset,
                        elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
                    el.style.backgroundPosition = elBackgrounPos;

                });
            };
        }
    }

    /*************************
     API Contact Form
     *************************/
    POTENZA.Contactform = function () {
        $( "#contactform").submit(function( event ) {
            $("#ajaxloader").show();
            $("#contactform").hide();
                    var name = $('#name').val();
                    var email = $('#email').val();
                    var text = $('#message').val();

                    var messages ={
                        "title": 'Theo dõi tin tức matrimony',
                        "name": name,
                        "email": email,
                        "messages":text,
                        "date": new Date()

                    };
            $.ajax({
                url:'https://api.mlab.com/api/1/databases/matrimony/collections/messages?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
                data:JSON.stringify(messages),
                type:'post',
                contentType: "application/json",
                success:function(response){
                    $("#ajaxloader").hide();
                    $("#contactform").show();
                    $("#contactform").find("input, textarea").val("");
                    $("#formmessage").html(response).show().delay(2000).fadeOut('slow');
                }
            });
            event.preventDefault();
        });
    };

    /*************************
     API Blog
     *************************/
    POTENZA.Blog = function(){
        $.ajax({
            url: 'https://api.mlab.com/api/1/databases/matrimony/collections/blog?apiKey=GySvt0pxEYMX3O8Qu9hsQCLZv5r95Jig',
        }).done(function (resp){
            var thumb = '';
            for (var i = 0; i < resp.length; i++) {
                var ss = resp[i]._id.$oid;

                thumb +='<div class="col-md-4 sm-mb-3 mb-5">\n' +
                    '        <div class="story-item">\n' +
                    '          <div class="story-image clearfix"><img class="img-fluid" src=" '+resp[i].urlimages +'" alt="" />\n' +
                    '            <div class="story-link"><a href="#" class="submit" onclick="blogpage(\''+ ss + '\')"><i class="glyph-icon flaticon-add"></i></a></div>\n' +
                    '          </div>\n' +
                    '          <div class="story-details text-center">\n' +
                    '            <div class="about-des cut-text-hidden size-200">'+resp[i].text+'</div>\n' +
                    '          </div>\n' +
                    '          <div class="yellow-bg story-text ptb-20 text-white">\n' +
                    '            <h5 class="title text-uppercase cut-text-hidden size-100">'+resp[i].title+'</h5>\n' +
                    '          </div>\n' +
                    '        </div>\n' +
                    '      </div>';
            }
            $('#blog-list').html(thumb);
        });

    };

    /*************************
     Countdown
     *************************/
    POTENZA.countdownTimer = function () {
        if ($countdownTimer.exists()) {
            $countdownTimer.downCount({
                date: '10/05/2019 12:00:00',
                offset: 400
            });
        }
    };


    /*************************
     Back to top
     *************************/
    POTENZA.goToTop = function () {
        var $goToTop = $('#back-to-top');
        $goToTop.hide();
        $window.scroll(function(){
            if ($window.scrollTop()>100) $goToTop.fadeIn();
            else $goToTop.fadeOut();
        });
        $goToTop.on("click", function () {
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    };


    /*************************
     FullScreen
     *************************/
    POTENZA.screenSizeControl = function () {
        if ($fullScreen.exists()) {
            $fullScreen.each(function () {
                var $elem = $(this),
                    elemHeight = $window.height();
                if($window.width() < 768 ) $elem.css('height', elemHeight/ 1.1);
                else $elem.css('height', elemHeight);
            });
        }
        if ($halfScreen.exists()) {
            $halfScreen.each(function () {
                var $elem = $(this),
                    elemHeight = $window.height();
                $elem.css('height', elemHeight / 1.5);
            });
        }
    };


    /*************************
     Textrotator
     *************************/

    POTENZA.textrotatefn = function () {
        if ($textrotate.exists()) {
            $textrotate.textrotator({
                animation: "fade",
                speed: 1000
            });
        }
        $('#logout').on('click', function (e) {
            e.preventDefault();
            $('#logout').remove();
            localStorage.removeItem('email');
            sessionStorage.removeItem('likeid');
            sessionStorage.removeItem('id');
            window.location.href = "login.html";
        });
    };

    /*************************
     Stepwizard
     *************************/

    POTENZA.stepwizard = function () {
        if ($(".stepwizard").exists()) {
            var navListItems = $('.step-form div.setup-panel div a'),
                allWells = $('.step-form .setup-content'),
                allNextBtn = $('.step-form .nextBtn');
            allWells.hide();

            navListItems.on('click', function (e) {
                e.preventDefault();
                var $target = $($(this).attr('href')),
                    $item = $(this);

                if (!$item.is('[disabled=disabled]')) {
                    navListItems.removeClass('active');
                    $item.addClass('active completed');
                    allWells.hide();
                    $target.show();
                    $target.find('input:eq(0)').focus();
                }
                return false;
            });

            allNextBtn.on('click', function () {
                var curStep = $(this).closest(".setup-content"),
                    curStepBtn = curStep.attr("id"),
                    nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                    curInputs = curStep.find("input[type='text'],input[type='url']"),
                    isValid = true;

                $(".step-form .form-group").removeClass("has-error");
                for(var i=0; i<curInputs.length; i++){
                    if (!curInputs[i].validity.valid){
                        isValid = false;
                        $(curInputs[i]).closest(".form-group").addClass("has-error");
                    }
                }

                if (isValid)
                    nextStepWizard.removeAttr('disabled').trigger('click');
                return false;
            });
            $('.step-form div.setup-panel div a.btn-circle').trigger('click');
        }
    };

    /*************************
     Range Slider
     *************************/

    POTENZA.rangeslider = function () {
        if ($(".range-slider").exists()) {
            $(".range-slider").slider({
                tooltip: 'always'
            });
        }
    };


    /****************************************************
     POTENZA Window load and functions
     ****************************************************/

    //Window load functions
    $window.load(function () {
        POTENZA.preloader(),
            // POTENZA.Isotope(),
            POTENZA.masonry(),
            // POTENZA.alertm(),
            POTENZA.progressBar();

    });

    //Document ready functions
    $document.ready(function () {
        POTENZA.megaMenu(),
            POTENZA.counters(),
            POTENZA.accordion(),
            POTENZA.carousel(),
            POTENZA.Parallax(),
            POTENZA.Contactform(),
            POTENZA.Blog(),
            POTENZA.countdownTimer(),
            POTENZA.goToTop(),
            POTENZA.mediaPopups(),
            POTENZA.screenSizeControl(),
            POTENZA.textrotatefn(),
            POTENZA.rangeslider(),
            POTENZA.stepwizard(),
            POTENZA.countdownTimer();
    });

    $window.resize(function() {
        POTENZA.screenSizeControl();
    });


})(jQuery);



