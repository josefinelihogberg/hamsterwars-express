import express from 'express';
import hamsterController from '../controller/hamsterController.js';
import authController from '../controller/authController.js';
import authFilter from '../filter/authFilter.js';


const router = express.Router();

router.get("/showhamsters", hamsterController.showAll);

router.get("/hamsterwars", authFilter.authenticate, hamsterController.showPair);

router.post("/vote", hamsterController.voteHamster);

router.get("/scoreboard", hamsterController.showScoreBoard);

router.get("/deleteHamster", hamsterController.deleteById);

//const createHamsterFilter = [authFilter.authenticate, hamsterFilter.malformedRequestBody];
router.post("/createHamster", authFilter.authenticate, hamsterController.createHamster);



/* authentication routes */

router.get("/login", authController.showLoginPage);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.get("/admin", authController.showAdminPage);


router.get("*", (req, res) => {
  let error = new Error();
  error.serverInfo = "Path not resolved";
  error.clientInfo = "The url that you used is not valid";
  throw error; // Kasta felet till express
});

  export default router;


