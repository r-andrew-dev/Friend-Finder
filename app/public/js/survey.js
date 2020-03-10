$("#survey-button").on('click', function() {
    console.log("clicked")
    $("#start-survey").fadeOut("slow", function() {
        $("#questions").fadeIn("slow");
});
});