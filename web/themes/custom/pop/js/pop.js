(function($, window, Drupal) {
    Drupal.behaviors.drawer = {
        attach: function(context, settings) {

            /**
             * Drawer component
             */
            // Set drawer region to hide and apply default tranform matrix with required values.
            $(".region-drawer").hide();
            document.getElementById("animate-dia").style.transform = "matrix(0.85, 0, 0, 0.85, 0, 0)";

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

            $(".accordion-switch").click(function() {

                $(".accordion-switch").not(this).removeClass("open");
                $(".accordion-switch").not(this).next().slideUp(300);
                $(this).toggleClass("open");
                $(this).next().slideToggle(300);
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
});


(function($, window, Drupal) {
    Drupal.behaviors.top_navbar_tweaks = {
        attach: function(context, settings) {
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

        }
    };

})(jQuery, window, Drupal);