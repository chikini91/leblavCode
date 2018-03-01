$(document).ready(function() {

    $(".rightAnimateLine").animate({"left":"170px"},2000);
    $(".leftAnimateLine").addClass("active");

    var currentOffset = window.pageYOffset;
    var header = $("header");
    var menu = $(".menu");
    var world = $(".world").height();

    $(window).scroll(function() {

        // add fixed menu

        if (currentOffset > menu.height()){
            menu.css({"position":"fixed","box-shadow":"0px 0px 5px 2px gray"});
            $(".lines").addClass('jspadding')
        };

            var diff = window.pageYOffset - currentOffset;
            currentOffset = window.pageYOffset;

             if(diff > 0) {
                 menu.css({"top":"-70px","transition-duration":"1s"});
            }

            else {
                 menu.css({"top":"0","transition-duration":"1s","background":"url(./img/bg.png)"});

                 if (currentOffset === 0 && window.pageYOffset ===0 ) {
                     menu.css({"box-shadow":"none",
                               "position":"static",
                               "box-sizing":"border-box",
                               "background":"transparent",
                               "transition-duration":"0s"});
                     $(".lines").removeClass("jspadding");
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
        $(".duplicateImage").css("left","35%").css('transition-duration','1s');
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

