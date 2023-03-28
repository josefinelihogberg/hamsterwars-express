import { fetchAllHamsters, updateScore, saveHamster, deleteHamster} from "../service/hamsterService.js";

function showAll(request, response) {
    fetchAllHamsters().then(data => response.send(data));
}

const randomIndex = (list) => Math.floor(Math.random()*list.length);

function showPair(request, response) {

    fetchAllHamsters().then(data => response.render("hamster", {hamsters: [data[randomIndex(data)], data[randomIndex(data)]]}));
}

function voteHamster(request, response) {
 updateScore(request.body);
 console.log(request.body);
   
    response.redirect("/hamsterwars");

}

function createHamster(request,response) {
    saveHamster(request.body);
    response.redirect("/showhamsters");

}

function showScoreBoard(request, response){

    fetchAllHamsters().then(data => response.render("scoreboard", {hamsters: data}));
   
}

function deleteById(request, response) {
    deleteHamster(request.query.id).then(data => response.send(data));
}

export default { showAll, showPair, voteHamster, createHamster, showScoreBoard, deleteById }