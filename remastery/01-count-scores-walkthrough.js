/*

GAMEPLAN:
//thique arrow gang
//for x if OTP
//obj

*/



let countScores = (heroes) => {
    let scoresObj = {};

        for (let i = 0; i < heroes.length; i++) {
            let personObj = heroes[i];

            let name = personObj.name;
            let score = personObj.score;

            if (scoresObj[name]) {
                scoresObj[name] += score;
            } else {
                scoresObj[name] = score;
            }
        }
        return scoresObj;
    };

    let ppl = [{name: "Deku", score: 10},
    {name: "Kaachan", score: 15},
    {name: "All Might", score: 100},
    {name: "Todoroki", score: 15}];

console.log(countScores(ppl));
//countScores(ppl);
