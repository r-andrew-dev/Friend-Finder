let count = 0

const answers = []
let name; 



$("#survey-button").on('click', function () {
    console.log("clicked-again")
    $("#start-survey").fadeOut("slow", function () {
        $("#start-question").fadeIn("slow");
    });
});

$("#question-startButton").on('click', function () {
    console.log("CLICKED THAT")
    name = $('#name').val() 
    $("#start-question").fadeOut("slow", function () {
        $("#image-question").fadeIn("slow");

        answers.push(name);
    });
});

$('#question-imageButton').on('click', function() {
    let image = $('#image').val()
    $("#image-question").fadeOut("slow", function () {
        $("#questions").fadeIn("slow");

        answers.push(image);

        console.log(answers)
    })
})

$("#question-button").on('click', function () {
    $("#questions").css("background-image", "url('../assets/images/" + survey.imageUrls[count] + "')")
    $("#question").text(survey.questions[count]);
    $("#left-range").text(survey.ranges.rangeLeft[count]);
    $("#right-range").text(survey.ranges.rangeRight[count]);
    questionAnswer = $('#range').val();
    answers.push(questionAnswer);
    count++

    console.log(answers)
    console.log(answers[0])
    
    if (count >= 9) {
        $('#question-button').text('submit');
       

        let newFriend = {
            name: answers[0],
            image: answers[1],
            matrixLove: answers[2],
            season: answers[3],
            woodchuck: answers[4],
            lighting: answers[5],
            politics: answers[6],
            OS: answers[7],
            drink: answers[8],
            speaker: answers[9],
            match: answers[10],
        }

        $.post("/api/friends", newFriend,
        function(data) {
            
          localStorage.setItem("match",JSON.stringify(data))
          location.href = '/complete'
          answers = []
        })
    };

})

const survey = {
    questions: ['What is your favorite season?', answers[0] + ", how much wood could a woodchuck chuck if a woodchuck could chuck wood?", 
                 "How much does proper lighting design turn you on?", "Political Views?", "Oh hey, " + answers[0] + " let's talk sweet, sweet OS(s)",
                "Start the morning drink of choice?", "How likely are you to win speaker of the year?", answers[0] + " now do you think you'll find your match?"],
    ranges:{rangeLeft:["winter", "woodchucks don't do that", "That's weird", "European Left", "Linux", "water", "wordsHard", "gonna try Tinder"], 
            rangeRight:["summer", "8.8 tons everyday", "It makes me spark", "Alt-Right", "Mac", "Coffee=BlackerThanSoul", "brevity=SoulOfWit", "1st date planned"]},
    imageUrls: ["4-seasons.png", "5-woodchuck.jpg", "6-lighting.png", "7-politics.png", "8-sweetOs.jpg", "9-drinkofchoice.png", "10-speaker.jpg", "11-brain.png"],
}

