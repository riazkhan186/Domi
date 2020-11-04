(function ($) {
    $(document).ready(function () {
        // for sticky navbar
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $(".topbar").addClass("sticky");
            }
            else {
                $(".topbar").removeClass("sticky");
            }
        });
    });
    $(document).ready(function () {
        // for sticky navbar
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $(".gototop").addClass("gotobtn");
            }
            else {
                $(".gototop").removeClass("gotobtn");
            }
        });
    });

    //   accordion
    
    // $(document).ready(function () {

    //     $("#rk").click(function(){
    //         $(".accordion .card-header").toogle.css("background", " #FF7900");
    //     })
      

    // });

})(jQuery)