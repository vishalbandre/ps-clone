(function($, window, Drupal) {
    Drupal.behaviors.drawer = {
        attach: function(context, settings) {

            /**
             * Drawer component
             */
            // Set drawer region to hide and apply default tranform matrix with required values.
            $(".region-drawer").hide();
            var a_dia = document.getElementById("animate-dia");

            // if a_dia is not null, apply the transform matrix to it.
            if (a_dia != null) {
                document.getElementById("animate-dia").style.transform = "matrix(0.85, 0, 0, 0.85, 0, 0)";
            }

            // Open main side drawer for desktop navigation
            function openSideDrawer() {
                // Set drawer to left 0, i.e., normal state
                $("#side-drawer").css('left', 0);
                // Show void overlay by adding display class and removing hide class (Bootstrap).
                $("#side-drawer-void").addClass("d-block");
                $("#side-drawer-void").removeClass("d-none");
                // Show region area and apply animations
                $(".region-drawer").show();
                document.getElementById("animate-dia").classList.add('dia');
                document.getElementById("animate-dia").style.transform = "matrix(1, 0, 0, 1, 0, 0)";
            }

            // Close the drawer
            function closeSideDrawer() {
                // Pull drawer to minus left position
                $("#side-drawer").css('left', "-336px");
                // Hide void overlay by adding hide class and removing display class provided by Bootstrap.
                $("#side-drawer-void").addClass("d-none");
                $("#side-drawer-void").removeClass("d-block");
                // Hide the drawer and set default values (animation specific).
                $(".region-drawer").hide();
                document.getElementById("animate-dia").style.transform = "matrix(0.85, 0, 0, 0.85, 0, 0)";
            }

            $('#open-drawer').click(openSideDrawer);
            $('#side-drawer-void').click(closeSideDrawer);
            $('#close-drawer').click(closeSideDrawer);

            // Drawer accordion switch (three dot buttons) toggle
            $(".accordion-content").css("display", "none");


            $('#block-globalnavigation-drawer-menu', context).once('according_switch').each(function() {

                $(".accordion-switch").click(function() {

                    $(".accordion-switch").not(this).removeClass("open");
                    $(".accordion-switch").not(this).next().slideUp(300);
                    $(this).toggleClass("open");
                    $(this).next().slideToggle(300);
                });
            });

        }
    };

})(jQuery, window, Drupal);


(function($, window, Drupal) {
    Drupal.behaviors.mobile_drawer = {
        attach: function(context, settings) {
            /**
             * Mobile drawer component
             */
            // Function to open mobile nav drawer
            function mobileOpenSideDrawer() {
                // Set mobile drawer right position to 0. On first load, it is default to -270px;
                $('#mobile-side-drawer').css('right', 0);
                // Show overlay on content, by applying Bootstrap specific classes
                $("#mobile-side-drawer-void").addClass("d-block");
                $("#mobile-side-drawer-void").removeClass("d-none");
                // Move content to left with ease animation effect.
                $("#mobile-actions").addClass("mobile-actions");
                $('body').addClass("mobile-drawer-set");
                $('body').removeClass("mobile-drawer-reset");
            }

            // Function to close the mobile nav drawer
            function mobileCloseSideDrawer() {
                // Set mobile drawer right position to -270px.
                $('#mobile-side-drawer').css('right', "-270px");
                // Hide overlay from content, by applying Bootstrap specific classes
                $("#mobile-side-drawer-void").addClass("d-none");
                $("#mobile-side-drawer-void").removeClass("d-block");
                // Move content to right, after closing the mobile side drawer
                $("#mobile-actions").removeClass("mobile-actions");
                $('body').removeClass("mobile-drawer-set");
                $('body').addClass("mobile-drawer-reset");
            }

            // On click events here.
            $('#mobile-drawer-button').click(mobileOpenSideDrawer);
            $('#mobile-side-drawer-void').click(mobileCloseSideDrawer);
            $('#mobile-drawer-close').click(mobileCloseSideDrawer);

        }
    };

})(jQuery, window, Drupal);


jQuery(function($) {
    // Top Search Form Switch
    $('#search-form-switch').click(function() {
        $('#header #block-searchform').css("display", "block");
        $('#header #block-searchform .form-search').focus();
        $('#header #block-searchform .search-form').append('<a href="#" id="close-search-form"></a>');
    });

    // Close Search Form
    $(document).on('click', '#close-search-form', function() {
        $('#header #block-searchform').css("display", "none");
    });

    $('#block-anonymoussubscription .form-item-email input').attr('placeholder', 'Enter Your Email');

    $('#block-anonymoussubscription form').append("<div class='msg'>By signing up, I agree to the Terms and Privacy Policy and to receive emails from POPSUGAR.</div>");

    $('#block-anonymoussubscription').append('<div class="illustration img-1"></div><div class="illustration img-2"></div><div class="illustration img-3"></div><div class="illustration img-4"></div><div class="illustration img-5"></div><div class="illustration img-6"></div>');

    $('.views-infinite-scroll-content-wrapper').prepend('<div class="latest">PopSugar Latest</div>');

    $('.views-infinite-scroll-content-wrapper').prepend('<div class="ad_place">Ad Place</div>');

    var ad_place = $('.ad_place').offset();

    if (ad_place != undefined) {

        var fixmeTop = $('.ad_place').offset().top; // get initial position of the element

        $(window).scroll(function() { // assign scroll event listener

            var currentScroll = $(window).scrollTop(); // get current position

            if (currentScroll >= fixmeTop) { // apply position: fixed if you
                $('.ad_place').css({ // scroll to that element or below it
                    position: 'fixed',
                    top: '100px',
                    right: '150px',
                    left: 'right',
                    'z-index': '9999'
                });
            } else { // apply position: static
                $('.ad_place').css({ // if you scroll above it
                    position: 'absolute',
                    'z-index': '-9999'
                });
            }

        });
    }

    // Add OR separator to the register form
    $('#block-socialauthlogin-2').append('<div class="divider"><div class="part-1"></div><div class="part-2">OR</div><div class="part-3"></div></div>');

});

(function($, window, Drupal) {
    Drupal.behaviors.date_field = {
        attach: function(context, settings) {
            // Generate Date field based on the selected day, month and year combination.
            var month = $('.custom-date #edit-month').val();
            var day = $('.custom-date #edit-day').val();
            var year = $('.custom-date #edit-year').val();
            var date = month + '/' + day + '/' + year;

            // On month, day, year value change generate date
            $('.custom-date #edit-month, .custom-date #edit-day, .custom-date #edit-year').change(function() {
                month = $('.custom-date #edit-month').val();
                day = $('.custom-date #edit-day').val();
                year = $('.custom-date #edit-year').val();
                date = year + '-' + month + '-' + day;
                // set date value to date field
                $('#edit-field-date-of-birth-0-value-date').val(date);
            });
        }
    };

})(jQuery, window, Drupal);


(function($, window, Drupal) {
    Drupal.behaviors.top_navbar_tweaks = {
        attach: function(context, settings) {

            $('#block-globaltopnavigation', context).once('top_navbar_tweaks').each(function() {
                /**
                 * Top navbar Navigation Tweaks
                 */
                /**
                 * Formats text for emphasized display in a placeholder inside a sentence.
                 *
                 * @param {string} str
                 *   The text to format (plain-text).
                 *
                 * @return {string}
                 *   The formatted text (html).
                 */
                Drupal.theme.indicator = function(str) {
                    return '<li class="' + Drupal.checkPlain(str) + '"></li>';
                };

                $('#superfish-global-top-navigation .menuparent ul').prepend(Drupal.theme('indicator', 'drop-indicator'));
                $('#superfish-global-top-navigation .menuparent ul').append(Drupal.theme('indicator', 'bottom-indicator'));
            });
        }
    };

})(jQuery, window, Drupal);