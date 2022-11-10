
$(document).ready(function() {
    $("#apple-v").addClass("hidden");
    $("#wine-v").addClass("hidden");
    $("#food-v").addClass("hidden");
    $("#craft-v").addClass("hidden");
    $("#a-collapse-btn-close").addClass("hidden");
    $("#w-collapse-btn-close").addClass("hidden");
    $("#f-collapse-btn-close").addClass("hidden");
    $("#c-collapse-btn-close").addClass("hidden");

})

/*Apple button */
$("#apple-subhead").click(function () {
    if ($("#apple-v").hasClass("hidden")) {
        $("#apple-v").removeClass("hidden");
        $("#a-collapse-btn-open").addClass("hidden");
        $("#a-collapse-btn-close").removeClass("hidden");
    }
    else{
        $("#apple-v").addClass("hidden");
        $("#a-collapse-btn-close").addClass("hidden");
        $("#a-collapse-btn-open").removeClass("hidden");
    }
})


/*Wine button */

$("#wine-subhead").click(function () {
    if ($("#wine-v").hasClass("hidden")) {
        $("#wine-v").removeClass("hidden");
        $("#w-collapse-btn-open").addClass("hidden");
        $("#w-collapse-btn-close").removeClass("hidden");
    }
    else{
        $("#wine-v").addClass("hidden");
        $("#w-collapse-btn-close").addClass("hidden");
        $("#w-collapse-btn-open").removeClass("hidden");
    }
})


/*Food button */

$("#food-subhead").click(function () {
    if ($("#food-v").hasClass("hidden")) {
        $("#food-v").removeClass("hidden");
        $("#f-collapse-btn-open").addClass("hidden");
        $("#f-collapse-btn-close").removeClass("hidden");
    }
    else{
        $("#food-v").addClass("hidden");
        $("#f-collapse-btn-close").addClass("hidden");
        $("#f-collapse-btn-open").removeClass("hidden");
    }
})


/*Crafters button */
$("#craft-subhead").click(function () {
    if ($("#craft-v").hasClass("hidden")) {
        $("#craft-v").removeClass("hidden");
        $("#c-collapse-btn-open").addClass("hidden");
        $("#c-collapse-btn-close").removeClass("hidden");
    }
    else{
        $("#craft-v").addClass("hidden");
        $("#c-collapse-btn-close").addClass("hidden");
        $("#c-collapse-btn-open").removeClass("hidden");
    }
})
