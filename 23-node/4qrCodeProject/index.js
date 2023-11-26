/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import qr from 'qr-image';
import inquirer from 'inquirer';

// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));


inquirer
  .prompt([
    {
      name: 'siteToQrcode',
      message: 'which site to qr-code?',
      default: 'https://www.google.com'
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.siteToQrcode);
    console.log(answers.siteToQrcode);
    const qr_svg = qr.image(answers.siteToQrcode, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream(`qrCode.svg`));
  });