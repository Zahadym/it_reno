$(function () {


    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - 130;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $(".model_link").on("click", function (event) {
        event.preventDefault();
        if ($(this).text() == "Все модели") {
            $(".model_link").removeClass("active-underline");
            $(this).addClass("active-underline");
            $("#next-link-id").hide();
            $(".model_block").addClass("active-fade").show();
        } else {
            $(".model_link").removeClass("active-underline");
            $(this).addClass("active-underline");
            $(".model_block").hide();
            $("#next-link-id").hide();
            $("[data-model=" + $(this).text() + "]").addClass("active-fade").show();
        }
    });

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $(".navigation").toggleClass("active");
    });

    $('#next-link-id').on("click", function (event) {
        $(".model_block").addClass("active-fade")
        $(this).remove();
    });

    $('.callback').on("click", function (event) {
        $('#section__form').show();
    });



});

function off() {
    document.getElementById("section__form").style.display = "none";
}