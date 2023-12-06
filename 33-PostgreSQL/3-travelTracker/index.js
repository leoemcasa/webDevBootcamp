import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "192.168.15.66",
  database: "world",
  password: "secretPG",
  port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

db.connect();

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries"); //, (err, res) => {
    // if (err) {
    //   console.error("Error executing query", err.stack);
    // } else {
      let countries = [];
      result.rows.forEach(e => {
        countries.push(e.country_code);
      });
      console.log(result.rows);
      res.render("index.ejs", { countries: countries, total: countries.length });
   // }
    db.end();
  });

//});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
