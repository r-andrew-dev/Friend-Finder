let count = 0
const survey = {
    questions: ['What is your favorite season?', name + ", how much wood could a woodchuck chuck if a woodchuck could chuck wood?", 
                 "How much does proper lighting design turn you on?", "Political Views?", "Oh hey, " + name + " let's talk sweet, sweet OS(s)",
                "Start the morning drink of choice?", "How likely are you to win speaker of the year?", name + " now do you think you'll find your match?"],
    ranges:{rangeLeft:["winter", "woodchucks don't do that", "That's weird", "European Left", "Linux", "water", "wordsHard", "gonna try Tinder"], rangeRight:["summer", "8.8 tons everyday", "It makes me spark", "Alt-Right", "Mac", "Coffee=BlackerThanSoul", "brevity=SoulOfWit", "1st date planned"]},
    imageUrls: ["4-seasons.png", "5-woodchuck.jpg", "6-lighting.png", "7-politics.png", "8-sweetOs.jpg", "9-drinkofchoice.png", "10-speaker.jpg", "11-brain.png"],
}


$("#survey-button").on('click', function () {
    console.log("clicked-again")
    $("#start-survey").fadeOut("slow", function () {
        $("#start-question").fadeIn("slow");
    });
});

$("#question-startButton").on('click', function () {
    console.log("CLICKED THAT")
    $("#start-question").fadeOut("slow", function () {
        $("#questions").fadeIn("slow");
    });
});