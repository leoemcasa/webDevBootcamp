// HINTS:
// 1. Import express and axios
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const url = "https://secrets-api.appbrewery.com";


// 3. Use the public folder for static files.
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// 4. When the user goes to the home page it should render the index.ejs file.
// app.get("/", (req, res) => {
//     res.redirect("/random");
// });

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

app.get("/", async (req, res) => {
    try {
      const response = await axios.get(`${url}/random`);
      const result = response.data;
      res.render("index.ejs", { 
        secret: result.secret,
        user: result.username
     });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });


// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  




