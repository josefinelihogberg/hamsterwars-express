import { fetchCollection } from "../mongo/hamsterMongoClient.js";

export function fetchAllHamsters() {
    return fetchCollection("hamster").find().toArray();
}


export function saveHamster(hamster) {
    const data = {
      name:hamster.hamstername,
      imgRef: hamster.hamsterImgRef,
      id:hamster.hamsterid,
    }
    fetchCollection("hamster").insertOne(data);
}


function increaseScore(voteId, score) {
  if (score == undefined) {
    score = 0;
  }

  score = score + 1;

 return fetchCollection("hamster").updateOne({id: voteId}, {$set: {score:score}});
}

export function updateScore(hamster) {
  let voteId = hamster.hamsterId;
  console.log(voteId);
  fetchCollection("hamster").findOne({id: voteId}).then(data => {
    let score = data.score;
    increaseScore(voteId,score);
  })


}

export function deleteHamster(id) {
  return fetchCollection("hamster").deleteOne({ id: id});
}
