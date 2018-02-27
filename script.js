$(document).ready(function() {


    $(".leftLine").animate({"right":"0"},1000);
    $(".rigthLine").animate({left:"0"},1000);

    var currentOffset = window.pageYOffset;
    var header = $("header");
    var world = $(".world").height();

    $(window).scroll(function() {

        // add fixed menu

        if (currentOffset > $(".menu").height()){
            $(".menu").css({"position":"fixed","box-shadow":"0px 0px 5px 2px gray"});
            $(".lines").css("padding-top", "370px" )


        };

            var diff = window.pageYOffset - currentOffset;
            currentOffset = window.pageYOffset;

             if(diff > 0) {
                $(".menu").css("top","-70px").css('transition-duration','1s');
            }
            else {
                $(".menu").css("top","0").css('transition-duration','1s');
                 if (currentOffset === 0) {
                     $(".menu").css("box-shadow","none").css('transition-duration','0s');
                 }
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

    $(".closeContainer").click(function () {
        $(".container").css("display","none");
    })

});

