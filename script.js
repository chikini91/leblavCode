$(document).ready(function() {


    $(".leftLine").css("right","0");
    $(".rigthLine").css("left","0");

    var currentOffset = window.pageYOffset;
    var header = $("header");
    var world = $(".world").height();

    $(window).scroll(function() {

        // add fixed menu

        if (currentOffset > $(".menu").height()){
            $(".menu").css("position","fixed")
        };

            var diff = window.pageYOffset - currentOffset;
            currentOffset = window.pageYOffset;
            if (diff > 0) {
                $(".menu").css("top","-70px");
            }
            else {
                $(".menu").css("top","0");
            }

        // animate in product block
        if (currentOffset >= header.height() + world) {
            animateProduct();
        }

        if (currentOffset >= header.height()/2) {
            $(".item").delay(1000).fadeIn(1000);
            $(".areas").delay(2000).css("opacity","1");
        }
    });

    function animateProduct() {
        $(".description").css("opacity","1");
        $(".mainImage").css("left","0");
        $(".duplicateImage").css("left","0");
        $('.whiteRectangleWrapper').css("margin-left","0")
    }

    $(".item").click(function (e) {
        $(".container").css("display","none");
        $(e.currentTarget).prev().css("display","block")
    });

    $(".fa-times").click(function () {
        $(".container").css("display","none");
    })

});

