$(document).ready(function(){
// Mobile menu icon toggle
    $(".mobile_menu_icon").click(function(){
        $(".menu").toggle();
    });

// slider area
	$(".all_project_img").owlCarousel({
        items : 5,
        margin : 10,
        autoplay : true,
        autoplayTimeout:3000,
        loop:true,
        smartSpeed:1000,
        nav:true,
        navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        responsive:{
            0 :{
                items:1
            },
            556 :{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
// scroll to top
    $('body').materialScrollTop();

// wow js for animation
    new WOW().init();

   // about page circle-progress
        $('.box1').circleProgress({
        value: .98,
        size: 120,
        fill: "#000"
    });
    $('.box2').circleProgress({
        value: .95,
        size: 120,
        fill: "#014d2c"
    });
    $('.box3').circleProgress({
        value: .90,
        size: 120,
        fill: "blue"
    });
    $('.box4').circleProgress({
        value: .87,
        size: 120,
        fill: "red"
    }); 
    $('.box5').circleProgress({
        value: .75,
        size: 120,
        fill: "#5c3001"
    });
    $('.box6').circleProgress({
        value: .82,
        size: 120,
        fill: "#5d27a1"
    });
    $('.box7').circleProgress({
        value: .65,
        size: 120,
        fill: "#997b2f"
    });

});