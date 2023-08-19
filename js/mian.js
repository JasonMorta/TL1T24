$(document).ready(function () {

    // alert once the page has loaded.
    $(window).on("load", () => {
        alert("The page has been loaded");

        //background once the page has loaded.
        $("body, .menu-items").css("background-color", "#ffe2e7");


        //changes the second paragraph’s styling.
        $(".second").css("font-style", "italic");
    });

    // Move/Slide all elements and change background colors on click
    $(".chainBtn").click(function (e) {
        let isVis =true
        //e.stopPropagation(); // Stop event propagation
        console.log("clicked");
        // Move all elements = //Sliding all elements is doable but not recommended and just a mess.
        // animate the entire page to fall back 
        $("html").addClass("wrapper");
        $("body").addClass("header-transformed");

        // change background colors
        $("body, .menu-items").css("background-color", "#e2e7ff");

         // Slide images up or down based on visibility flag
         $("img").slideToggle(1000, function() {
            // Toggle the visibility flag
            isVis = !isVis;
        });


        //remove the class after 5 seconds
        //revert the changes
        setTimeout(()=>{
            $("body, .menu-items").css("background-color", "#ffe2e7");
            $("body").removeClass("header-transformed")
            $("html").removeClass("wrapper")
             if (isVis) {
                $("img").slideDown(1000); // Slide images down if they were not visible
            }
        },4000)
    });


    //fades/Hide out any object that is clicked on.
    $("*").click(function (e) {
        e.stopPropagation(); // Stop event propagation

        if ($(this).is("body, .chainBtn, html, .faderBtn, .stopFade")) {
            return; // Don't fade out the body element
        }

        $(this).fadeOut("slow"); // Fade out the clicked element
    });

    //Slide the menu up and down on mouseenter the h3 element
    let menuVisible = true;
    $(".menu-items > h3").mouseenter(function () {
      
        if (menuVisible) {
            $(".menu-items").animate({ height: "-=270px", zIndex: "3" }, "slow");
        } else {
            $(".menu-items").animate({ height: "+=270px" }, "slow");
        }
        menuVisible = !menuVisible;
    });

    //Fade an image in and out on button click
    $(".faderBtn").click(function (e) {
        e.stopPropagation(); // Stop event propagation

        $(".last").fadeToggle(2000, "linear", function () {
            // Fade back in
            $(".last").fadeToggle(2000, "linear");
        });
    });

    //Stop fade effect of .last image
    $(".stopFade").click(function (e) {
        e.stopPropagation(); // Stop event propagation

        $(".last").stop();
    });
});