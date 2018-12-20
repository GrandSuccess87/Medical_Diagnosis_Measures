// need to store the npm packages, csv data, and the count variable in a file and import the file here
const fs = require("fs");
const csvFilePath=('./data/SampleData2016_underscore.csv');
const csv=require('csvtojson');
var count = 0;
var Yes_Count = 0;
var COPDQuery = '';

const copdArray = [491.21, 491.22, 491.8, 491.9, 492.8, 493.20, 493.21, 493.22, 496, 518.81, 518.82, 518.84, 799.1];
console.log("\r\n COPD Diagnosis Codes: " + copdArray);

if(process.argv[2] === "copd") {
csv()
.fromFile(csvFilePath)
.then((jsonObj)=> {

      let patientData = jsonObj;
      console.log(`patient: ${patientData}`);

      for (let value of patientData) {
        // evaluate if condition count > 0 is true since the first row is the column fields
          if(count > 0) {

            // for each row run the copd query
            // print the slect statemtnts to the console
            console.log("\r\n==================================================\r\n");

            COPDQuery += "SELECT " + "patient_nbr, diagnosis_code FROM MedicalDataDF WHERE HistoryofMechanicalVentilation='yes' OR SleepApnea='yes' OR Respiratordependence/tracheostomystatus='yes' OR Cardio-respiratoryfailureorcardio-respiratoryshock='yes' OR Congestiveheartfailure='yes' OR Acutecoronarysyndrome='yes' OR Coronaryatherosclerosisoranginacerebrovasculardisease='yes' OR Specifiedarrhythmias='yes' OR OtherandUnspecifiedHeartDisease='yes' OR Vascularorcirculatorydisease='yes' OR Fibrosisoflungandotherchroniclungdisorders='yes' OR Pneumonia='yes' OR Historyofinfection='yes' OR Metastaticcanceroracuteleukemia='yes' OR LungUpperDigestiveTractandOtherSevereCancers='yes' OR LymphaticHeadandNeckBrainandOtherMajorCancers;BreastColorectalandotherCancersandTumors;OtherRespiratoryandHeartNeoplasms='yes' OR OtherDigestiveandUrinaryNeoplasms='yes' OR Diabetesmellitus(DM)orDMcomplications='yes' OR Protein-caloriemalnutrition='yes' OR Disordersoffluidelectrolyteacid-base='yes' OR OtherEndocrine/Metabolic/NutritionalDisorders='yes' OR PancreaticDiseas='yes' OR PepticUlcerHemorrhageOtherSpecifiedGastrointestinalDisorders='yes' OR OtherGastrointestinalDisorders='yes' OR SevereHematologicalDisorders='yes' OR Irondeficiencyorotheranemiasandblooddisease='yes' OR Dementiaorotherspecifiedbraindisorders='yes' OR Drug/AlcoholInducedDependence/Psychosis='yes' OR MajorPsychiatricDisorders='yes' OR Depression='yes' OR AnxietyDisorders='yes' OR OtherPsychiatricDisorders='yes' OR QuadriplegiaParaplegiaParalysisFunctionalDisability='yes' OR Polyneuropathy='yes' OR HypertensiveHeartandRenalDiseaseorEncephalopathy='yes'";
            console.log(COPDQuery);

            // break;

            // AT THIS POINT: The code is not running smoothly but I have written below my approach and thought process.  Next I would like apply this code to the other medical measures.  
            // Although I was able to successfully create a data frame and data set via spark-shell and run filter, groupby, and count methods on the database, I would still like to set up my code so Spark can read my SQL statements from the sql files.
            // Then I would create tests via mocha or jasmine and refactor my code so that it is DRY 

            // if the query returns a value of 'yes' print the affected rows, then I need to loop through each row to find the diagnosis code
            // if(queryCOPD) {
            // Yes_Count++;
            // console.log(`Total Yes Count: ${Yes_Count}`);
            // let checkRow = (err, res) => {
            // console.log(res);
            // console.log(res.affectedRows + "COPD diagnosis with a value of yes!\n");
            // res.forEach(row => {
            // console.log(`Returned Copd Diagnosis Code: ${row.diagnosis_code}`);

            // store row.diagnosis_code inside of a variable and use the index of method to check the returned code against the array
            
            // FOR EXAMPLE: 

            // const copdDiagCode = row.diagnosis_code;
            // if (copdArray.indexOf(copdDiagCode) === -1) {
            //   console.log("Diagnosis Codes Match);
            // } else {
            //   console.log("Not a valid Copd Diagnosis Code");
            // }
            // })
            // }
            // }
           
          }
          count++;
      };

      // use fs to create an sql that will have the query written to it
      fs.writeFile("copd.sql", COPDQuery, function(err) {
      
       if (err) {
         return console.log(err);
       }
      
       console.log("copd.sql was updated!");
      
      });
  });
}

