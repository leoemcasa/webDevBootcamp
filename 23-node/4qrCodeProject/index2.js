import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message: "Please enter your link to generate a QR code:",
    name: "URL",
    default: "https://www.google.com"
  }])

  .then((answers) => {
    const url = answers.URL
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream("qr_code.png"));
    console.log(url);

    // fs.writeFile("URL.txt", url, (err) => {
    //   if (err) throw err;
    //   console.log("The file has been saved!");
    // });

  })

  // .catch((error) => { //this is an error log (left empty here)
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //   } else {
  //     // Something else went wrong
  //   }
  // });