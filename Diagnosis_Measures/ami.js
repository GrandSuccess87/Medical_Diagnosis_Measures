const fs = require("fs");
const ami = process.argv[2];
const csvFilePath=('./data/SampleData2016.csv');
const csv=require('csvtojson');

var count = 0;

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{

  if(count > 0) {

    // console.log(jsonObj);
      // var patientData = jsonObj;
      patientData = JSON.stringify(jsonObj);
      console.log(patientData);

      patientData.forEach(function(value, index) {


        // print the insert statemtnts to the console
        var query = "INSERT INTO MedicalMeasuresDF " +
        "(encounter_id, patient_nbr) " +
        "VALUES ('value.encounter_id', 'value.patient_nbr')";
        console.log(query);



              // Get specific patient info for current index
                  // var race = value.race;
                  // console.log("race: " + race);
                  //
                  // // console.log(jsonObj);
                  //   // var patientData = jsonObj;
                  //   patientData = JSON.stringify(jsonObj);
                  //   console.log(patientData);
                  //   // console.log(patientData.encounter_id);
                  //
                  //
                  //   // Get specific patient info for current index
                  //       var race = patientData.race;
                  //       console.log("race: " + race);


                        return;
      });
    }
      count ++;
  });

// Async / await usage
const jsonArray = csv().fromFile(csvFilePath);

fs.writeFile("ami.txt", jsonArray, function(err) {

 if (err) {
   return console.log(err);
 }

 console.log("ami.txt was updated!");

});

// create an array to hold the AMI diagnosis codes
// const diagnosis_codeArry = [];

// create a variable for a code
// const diagnosis_code;

// Loop through the data inside the file and create an if/else statement that checks the two variables and print results to the console
