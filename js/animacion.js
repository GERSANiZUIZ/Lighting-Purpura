window.addEventListener("load", function() {

    new WOW().init();

    // Add smooth scrolling to all links
    $(".enlaces").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 800, function() {

            });
        } // End if
    });


    $(function() {
        $('.material-tooltip-main').tooltip({
            template: '<div class="tooltip md-tooltip"><div class="tooltip-arrow md-arrow"></div><div class="tooltip-inner md-inner"></div></div>'
        });
    });

    //galeria funcion

}, false);