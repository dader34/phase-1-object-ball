const gameObject = () =>{
    const mainObj = {
        "home":{
            "teamName" : "Brooklyn Nets",

            "colors":[
                "Black",
                "White",
            ],

            "players":{
                "Alan Anderson":{
                    "number":0,
                    "shoe":16,
                    "points":22,
                    "rebounds":12,
                    "assists":12,
                    "steals":3,
                    "blocks":1,
                    "slamDunks":1,
                },
                "Reggie Evans":{
                    "number":30,
                    "shoe":14,
                    "points":12,
                    "rebounds":12,
                    "assists":12,
                    "steals":12,
                    "blocks":12,
                    "slamDunks":7,
                },
                "Brook Lopez":{
                    "number":11,
                    "shoe":17,
                    "points":17,
                    "rebounds":19,
                    "assists":10,
                    "steals":3,
                    "blocks":1,
                    "slamDunks":15,
                },
                "Mason Plumlee":{
                    "number":1,
                    "shoe":19,
                    "points":26,
                    "rebounds":12,
                    "assists":6,
                    "steals":3,
                    "blocks":8,
                    "slamDunks":5,
                },
                "Jason Terry":{
                    "number":31,
                    "shoe":15,
                    "points":19,
                    "rebounds":2,
                    "assists":2,
                    "steals":4,
                    "blocks":11,
                    "slamDunks":1,
                },
            }
        },
        "away":{
            "teamName" : "Charlotte Hornets",

            "colors":[
                "Turquoise",
                "Purple",
            ],

            "players":{
                "Jeff Adrien":{
                    "number":4,
                    "shoe":18,
                    "points":10,
                    "rebounds":1,
                    "assists":1,
                    "steals":2,
                    "blocks":7,
                    "slamDunks":2,
                },
                "Bismak Biyombo":{
                    "number":0,
                    "shoe":16,
                    "points":12,
                    "rebounds":4,
                    "assists":7,
                    "steals":7,
                    "blocks":15,
                    "slamDunks":10,
                },
                "DeSagna Diop":{
                    "number":2,
                    "shoe":14,
                    "points":24,
                    "rebounds":12,
                    "assists":12,
                    "steals":4,
                    "blocks":5,
                    "slamDunks":5,
                },
                "Ben Gordon":{
                    "number":8,
                    "shoe":15,
                    "points":33,
                    "rebounds":3,
                    "assists":2,
                    "steals":1,
                    "blocks":1,
                    "slamDunks":0,
                },
                "Brendan Haywood":{
                    "number":33,
                    "shoe":15,
                    "points":6,
                    "rebounds":12,
                    "assists":12,
                    "steals":22,
                    "blocks":5,
                    "slamDunks":12,
                },
            }
        }
    }
    return mainObj
}

const numPointsScored = (player) =>{
    const mainObj = gameObject()
    for(let team in mainObj){
        if(player in mainObj[team]['players']){
            return mainObj[team]['players'][player].points
        }
    }
    return false
}

const shoeSize = (player) =>{
    const mainObj = gameObject()
    for(let team in mainObj){
        if(player in mainObj[team]['players']){
            debugger;
            return mainObj[team]['players'][player].shoe
        }
    }
    return false
}

const teamColors = (t) =>{
    const mainObj = gameObject()
    // console.log(team == mainObj[0].teamName)
    for (team in mainObj){
        if(team.teamName === t){
            return team.colors
        }
    }
    return false
}

const teamNames = () =>{
    const mainObj = gameObject()
    return [mainObj['home'].teamName,mainObj['away'].teamName]
}

const playerNumbers = (teamName) =>{
    const mainObj = gameObject()
    let allplayerNums = []
    debugger
    for(let team in mainObj){
        for(let player in mainObj[team]['players']){
            allplayerNums.push(player.number)
        }   
    }
    
    return allplayerNums
}

const playerStats = (player) =>{
    const mainObj = gameObject()
    for(let team in mainObj){
        if(player in mainObj[team]['players']){
            return mainObj[team]['players'][player]
        }
    }
    return false
}

const bigShoeRebounds = () =>{
    const mainObj = gameObject()
    let largestShoe = 0
    let rebounds = 0
    for(let team in mainObj){
        for(let player in mainObj[team]['players']){
            let playerShoe = mainObj[team]['players'][player].shoe
            let playerRebounds = mainObj[team]['players'][player].rebounds
            debugger
            if(playerShoe > largestShoe){
                debugger
                largestShoe = playerShoe
                rebounds = playerRebounds
            }
        }
    }
    return rebounds
}


//tests
// console.log(numPointsScored("Brendan Haywood"))
// console.log(shoeSize("Brendan Haywood"))
// console.log(teamColors("Brooklyn Nets"))
// console.log(teamNames())
// console.log(playerNumbers("Brooklyn Nets"))
// console.log(playerStats("Brendan Haywood"))
// console.log(bigShoeRebounds())