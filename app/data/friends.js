let count = 0
// const survey = {
//     questions: ['']
    

$("#survey-button").on('click', function() {
    console.log("clicked")
    $("#start-survey").fadeOut("slow", function() {
        $("#start-question").fadeIn("slow");
});
});