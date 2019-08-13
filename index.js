const http = require("http");
const nerds = require('nerds');
// function handleRequestAndResponse(req, res) {
//     console.log(req.url);
//     const timestamp = new Date();
//     console.log("Received a Request");
//     res.end(`<h1>Hello${timestamp}</h1>`);  // .end() sends the response.
//                                           // It "tapes up the box and ships it".
// }
// [getRandomInt(0, nerdArray.length-1)]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min}
const server = http.createServer((req, res) => {
    const nerdArray = ["Harry Potter", "Pokemon", "Star Wars"];
    randomInt = getRandomInt(0, nerdArray.length)
    // const character = nerds.resolve(nerdArray[randomInt(0,nerdArray.length)]).asArray()[0];
    const character = nerds.resolve(nerdArray[randomInt], 3).asArray();
    const character1 = character[0]
    const character2 = character[1]
    // const character2 = nerds.resolve(nerdArray[randomInt], 3).asArray()[1];
    // const character3 = nerds.resolve(nerdArray[randomInt], 3).asArray()[2];

    nerdArray[randomInt] === "Harry Potter"? res.end(`Hello, ${character1.first} ${character1.last} and ${character2.first} ${character2.last} from ${nerdArray[randomInt]}`): res.end(`Hello, ${character1.name} and ${character2.name} from ${nerdArray[randomInt]}`);
});

server.listen(3000);