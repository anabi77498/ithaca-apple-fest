// Interactivity #2 (map modal and expansion)

// ```
// if #map-btn is clicked:
//     add .modal to #map-btn
//     remove .hidden from #exit
// if #exit is clicked:
//     remove .modal to #map-btn
//     add .hidden from #exit
// ```


$(document).ready(function() {
    $("#exit-modal").addClass("hidden");
})



$("#map-btn").click(function(){
    $("#map-btn").removeClass("map-img");
    $("#map-btn").addClass("modal-content");
    $("#map-container").removeClass("map-orientation");
    $("#map-container").addClass("modal");
    $("#exit-modal").removeClass("hidden");
})

$("#exit-modal").click(function(){
    $("#map-btn").addClass("map-img");
    $("#map-btn").removeClass("modal-content");
    $("#map-container").addClass("map-orientation");
    $("#map-container").removeClass("modal");
    $("#exit-modal").addClass("hidden");
})
