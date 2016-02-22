$(document).ready(function () {
    //hide the p tags
    $("li").hide();

    //hover to show the menu
    $(".dropdown").mouseenter(function () {
        $("li").show(500);
        $(".dropbtn").css({
            "background-color": "#0ca3d2",
            "border-radius": "25px 25px 0px 0px"
        });
    });
    //remove hover to return to first state
    $(".dropdown").mouseleave(function () {
        $("li").hide(500);
        $(".dropbtn").css({
            "background-color": "initial",
            "border-radius": "25px"
        });
    });
    //selecting a menu item by hovering
    $("li").mouseenter(function () {
        $(this).css({
            "background-color": "initial",
        });
    });
    //return state after hovering
    $("li").mouseleave(function () {
        $(this).css({
            "background-color": "#0ca3d2",
        });
    });
});
