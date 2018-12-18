const fs = require("fs");
const ami = process.argv[2];
const csvFilePath=('./data/SampleData2016.csv');
const csv=require('csvtojson');

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})

// Async / await usage
const jsonArray = csv().fromFile(csvFilePath);


// const diagnosis_codeArry = [];
// const diagnosis_code;


fs.writeFile("ami.txt", jsonArray, function(err) {

 if (err) {
   return console.log(err);
 }

 console.log("ami.txt was updated!");

});


// create an array to hold the AMI diagnosis codes
// create a variable for a code
// Loop through the data inside the file and create an if/else statement that checks the two variables and print results to the console
