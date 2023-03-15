/*

GAMEPLAN:
refactore this sh-- out of this
for ---> forEach
add some const in there
couple more thique arrows

*/

 const countScores = (heroes) => {
    const scoresObj = {};

        heroes.forEach(personObj => {
           let {name, score} = personObj;

            if (scoresObj[name]) scoresObj[name] += score;
            else scoresObj[name] = score;
            });
        return scoresObj;
    };

    let ppl = [{name: "Deku", score: 10},
    {name: "Kaachan", score: 15},
    {name: "All Might", score: 100},
    {name: "Todoroki", score: 15}];

console.log(countScores(ppl));
