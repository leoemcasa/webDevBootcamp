import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { nextTick } from "process";
//import { parseArgs } from "util";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));




function day(week) {
    switch (week) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wendsday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Fryday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            break;
    }
    console.log(weekday  + " day");
    next();
}

// app.use(day);

app.post("/submit", (req, res) => {
    var Xmas95 = new Date(req.body.date);
    var week = Xmas95.getDay();
    let weekday = day(week);
  res.render("resp.ejs", {date: weekday});
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, () => {
    console.log(`server runnig on port ${port}`)
})
