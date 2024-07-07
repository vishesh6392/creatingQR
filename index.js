import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    { message:"type your url",
      name:"url",  
    }
  ])
  .then((answers) => {
    const URL= answers.url;
    var qr_svg = qr.image(URL);
   qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  fs.writeFile("message.txt", URL, (err) => {
    if (err) throw err;
    console.log('successfull');
  });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });