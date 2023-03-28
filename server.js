import express from 'express';
import path from 'path';
import url from 'url';
import mustache from 'mustache-express';
import router from './src/router/router.js';
import requestLogger from './src/middleware/requestLogger.js';
import errorHandler from './src/middleware/errorHandler.js';
import sessionHandler from './src/middleware/sessionHandler.js';



/* Configure working directory path */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // current working directory

/* Configure server parameter */
const app = express();
const addr = "127.0.0.1"; // localhost
const port = 3000;

/* Configure mustache template engine */
app.engine('html', mustache()); // run html with mustache
app.set('view engine', 'html'); // Use html extension
app.set('views', __dirname + '/views'); // find views in the folder views

/* Register session handler for all requests */
app.use(sessionHandler); // finns i src/middleware

/* Configure static server files and encodings */
app.use(express.urlencoded({ extended: true })) // for html forms (allows for form to json)
app.use(express.json());

/* Logger */
app.use(requestLogger); // finns i src/middleware


// Take files from public folder
app.use("/public", express.static('public'));


/* Resource routes */
app.use(router);

/* Error handling */
app.use(errorHandler); // finns i src/middleware

/* Server startup */
async function afterWebContainerStarted() {
  console.log(`Server initialized on address ${addr} on port ${port}`);
  console.log("Server is ready...");
}
app.listen(port, addr, afterWebContainerStarted); 
