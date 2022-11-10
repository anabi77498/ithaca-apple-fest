// when #nav-btn clicked:
//     if .hidden is not added to #pages:
//         add .hidden to #pages
//     else:
//         remove .hidden from #pages


$(document).ready(function() {
    if ($(window).width() < 800){
        $("#nav-btn-open").addClass("hidden");
        $("#nav-btn-close").removeClass("hidden");

        $("#nav-bar").addClass("hidden");

        $("#btn-container").removeClass("hidden");

        $("#btn-container").addClass("borderbelow");

        $("#btn-cite").removeClass("hidden");
    }
    else{
        $("#nav-bar").removeClass("hidden");
        $("#btn-container").addClass("hidden");
        $("#btn-cite").addClass("hidden");
    }
})

$(window).resize(function(){
    if ($(window).width() < 800){
        $("#nav-btn-open").addClass("hidden");
        $("#nav-btn-close").removeClass("hidden");

        $("#btn-container").addClass("borderbelow");

        $("#nav-bar").addClass("hidden");
        $("#btn-container").removeClass("hidden");
        $("#btn-cite").removeClass("hidden");
    }
    else{
        $("#nav-bar").removeClass("hidden");
        $("#btn-container").addClass("hidden");
        $("#btn-cite").addClass("hidden");
    }
})

$("#nav-btn-close").click(function(){
    $("#nav-bar").removeClass("hidden");
    $("#btn-container").removeClass("borderbelow");
    $("#nav-btn-close").addClass("hidden");
    $("#nav-btn-open").removeClass("hidden");
})

$("#nav-btn-open").click(function(){

    $("#nav-bar").addClass("hidden");
    $("#btn-container").addClass("borderbelow");
    $("#nav-btn-open").addClass("hidden");
    $("#nav-btn-close").removeClass("hidden");
})
