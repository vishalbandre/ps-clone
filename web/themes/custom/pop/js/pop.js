(function($) {

    $(".region-drawer").hide();
    document.getElementById("animate-dia").style.transform = "matrix(0.85, 0, 0, 0.85, 0, 0)";

    function openSideDrawer() {
        document.getElementById("side-drawer").style.left = "0";
        document.getElementById("side-drawer-void").classList.add("d-block");
        document.getElementById("side-drawer-void").classList.remove("d-none");
        $(".region-drawer").show();
        document.getElementById("animate-dia").classList.add('dia');
        document.getElementById("animate-dia").style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    }

    function closeSideDrawer() {
        document.getElementById("side-drawer").style.left = "-336px";
        document.getElementById("side-drawer-void").classList.add("d-none");
        document.getElementById("side-drawer-void").classList.remove("d-block");
        $(".region-drawer").hide();
        document.getElementById("animate-dia").style.transform = "matrix(0.85, 0, 0, 0.85, 0, 0)";
    }

    window.openSideDrawer = openSideDrawer;
    window.closeSideDrawer = closeSideDrawer;

    // Responsive
    // $('#mobile-side-drawer').hide();

    // function mobileOpenSideDrawer() {
    //     console.log('Accessed.');
    //     document.getElementById("#mobile-side-drawer").style.right = 0;
    // }

    // function mobileCloseSideDrawer() {
    //     console.log('Accessed.');
    // }

    // window.mobileOpenSideDrawer = mobileOpenSideDrawer
    // window.mobileCloseSideDrawer = mobileCloseSideDrawer

})(jQuery);


(function($, window, Drupal) {

    Drupal.behaviors.pop = {
        attach: function(context, settings) {
            /**
             * Mobile drawer component
             */
            // Get the body object
            body = document.getElementsByTagName('body')[0];

            // Function to open mobile nav drawer
            function mobileOpenSideDrawer() {
                // Set mobile drawer right position to 0. On first load, it is default to -320px;
                document.getElementById('mobile-side-drawer').style.right = 0;
                // Show overlay on content, by applying Bootstrap specific classes
                document.getElementById("mobile-side-drawer-void").classList.add("d-block");
                document.getElementById("mobile-side-drawer-void").classList.remove("d-none");
                // Move content to left with ease animation effect.
                body.style.transition = "ease 0.3s all";
                body.style.marginLeft = "-320px";
            }

            // Function to close the mobile nav drawer
            function mobileCloseSideDrawer() {
                // Set mobile drawer right position to -320px.
                document.getElementById('mobile-side-drawer').style.right = "-320px";
                // Hide overlay from content, by applying Bootstrap specific classes
                document.getElementById("mobile-side-drawer-void").classList.add("d-none");
                document.getElementById("mobile-side-drawer-void").classList.remove("d-block");
                // Move content to right, after closing the mobile side drawer
                body.style.marginLeft = 0;
            }

            // Attaching functions to window object to make them available for elements to call
            context.mobileOpenSideDrawer = mobileOpenSideDrawer
            context.mobileCloseSideDrawer = mobileCloseSideDrawer

            // $('.example', context).click(function () {
            //   $(this).next('ul').toggle('show');
            // });
        }
    };

})(jQuery, window, Drupal);

// Side Drawer accordion menu switch
jQuery(function($) {

    $(".accordion-content").css("display", "none");


    $(".accordion-switch").click(function() {

        $(".accordion-switch").not(this).removeClass("open");

        $(".accordion-switch").not(this).next().slideUp(300);

        $(this).toggleClass("open");

        $(this).next().slideToggle(300);
    });
});

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

    // Global Top Navigation Tweaks
    // Will movie to Drupal.theme
    $('#superfish-global-top-navigation .menuparent ul').prepend('<li class="drop-indicator"></li>');
    $('#superfish-global-top-navigation .menuparent ul').append('<li class="bottom-indicator"></li>');
});

// jQuery(function($) {

// });

// menuparent