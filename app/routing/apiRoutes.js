const friendData = require("../data/friends.js")

module.exports = function(app) {

    app.get('/api/friends', function(req, res){

        res.json(friendData);
    })

    app.post('/api/friends', function(req, res) {

        console.log(req.body);
        

        let bestMatch = {}
        let bestScore = 55
        let newFriendScores = Object.values(req.body).splice(2)
        console.log(newFriendScores)
        friendData.forEach (
            function(currentFriend) {
                 let currentFriendScores = Object.values(currentFriend).splice(2)
                 let totalScore = 0;
                    currentFriendScores.forEach(
                        function(currentScore, index) {
                            totalScore += Math.abs(currentScore - newFriendScores[index])
                        }
                        
                    )
                if (totalScore < bestScore) {
                    bestMatch = currentFriend
                    bestScore = totalScore
                }
            }
        )
        friendData.push(req.body);
        res.send({bestMatch, bestScore});
    })
}

// when user submits survey, needs to send 'newFriend' to backend, compare newFriend to every other friend in 
// list, and return to user on front end the best/closest match. 






// https://api.typeform.com/forms/GDsDD1/responses