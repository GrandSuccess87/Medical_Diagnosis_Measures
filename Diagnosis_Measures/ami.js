// Core node package for reading and writing files
const fs = require("fs");
const patientData = require("../data/SampleData2016.csv");
// console.log(patientData);
const ami = process.argv[2];

// const diagnosis_codeArry = [];
// const diagnosis_code;

// for(var i = 0; i < patientData.length; i++) {
//   if(diagnosis_code) {
//     console.log(diagnosis_code);
//   }
// }


fs.writeFile("ami.txt", "Testing AMI Measure", function(err) {

 if (err) {
   return console.log(err);
 }

 console.log("ami.txt was updated!");

});

// Import SampleData2016 csv file
// create an array to hold the AMI diagnosis codes
// create a variable for a code
// Loop through the data inside the file and create an if/else statement that checks the two variables and print results to the console
