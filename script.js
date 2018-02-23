$(document).ready(function() {


    $(".leftLine").animate({"right":"0"},1000);
    $(".rigthLine").animate({left:"0"},1000);;

    var currentOffset = window.pageYOffset;
    var header = $("header");
    var world = $(".world").height();

    $(window).scroll(function() {

        // add fixed menu

        if (currentOffset > $(".menu").height()){
            $(".menu").css("position","fixed");
            // header.height(header.height() + $(".menu").height())
            $(".lines").css("margin-top", "70px" )


        };

            var diff = window.pageYOffset - currentOffset;
            currentOffset = window.pageYOffset;
            if (diff > 0) {
                $(".menu").css("top","-70px").css('transition-duration','1s');
            }
            else {
                $(".menu").css("top","0").css('transition-duration','1s');

            }

        // animate in product block
        if (currentOffset >= header.height() + world/2) {
            animateProduct();
        }

        if (currentOffset >= header.height()/2) {
            $(".item").delay(1000).fadeIn(1000);
            $(".areas").delay(2000).css("opacity","1");
        }
    });

    function animateProduct() {
        $(".description").css("opacity","1").css('transition-duration','1s');
        $(".mainImage").css("left","0").css('transition-duration','1s');
        $(".duplicateImage").css("left","0").css('transition-duration','1s');
        $('.whiteRectangleWrapper').css("margin-left","0").css('transition-duration','1s')
    }

    $(".item").click(function (e) {
        $(".container").css("display","none");
        $(e.currentTarget).prev().css("display","block")
    });

    $(".fa-times").click(function () {
        $(".container").css("display","none");
    })

});

