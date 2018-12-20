// const mainData = require('main.js');
const fs = require("fs");
const csvFilePath=('./data/SampleData2016_underscore.csv');
const csv=require('csvtojson');
var count = 0;
var pnQuery = '';

const pnArray = [480.0, 480.1, 480.2, 480.3, 480.8, 480.9, 481, 482.0, 482.1, 482.2, 482.30, 482.31, 482.32, 482.39, 482.40, 482.41, 482.42, 482.49, 482.81, 482.82, 482.83,
482.84, 482.89, 482.9, 483.0, 483.1, 483.8, 485, 486, 487.0, 488.11];
console.log("\r\n pnArray Diagnosis Codes: " + pnArray);


if(process.argv[2] === "pn") {
csv()
.fromFile(csvFilePath)
.then((jsonObj)=> {

      var patientData = jsonObj;

      for (var value of patientData) {
          if(count > 0) {

            // print the slect statemtnts to the console
            console.log("\r\n==================================================\r\n");
            pnQuery += "SELECT " + "patient_nbr, diagnosis_code FROM MedicalDataDF WHERE HistoryofMechanicalVentilation = 'yes' OR SleepApnea = 'yes' OR Respiratordependence/tracheostomystatus = 'yes' OR Cardio-respiratoryfailureorcardio-respiratoryshock = 'yes' OR Congestiveheartfailure = 'yes' OR Acutecoronarysyndrome = 'yes' OR Coronaryatherosclerosisoranginacerebrovasculardisease = 'yes' OR Specifiedarrhythmias = 'yes' OR OtherandUnspecifiedHeartDisease = 'yes' OR Vascularorcirculatorydisease = 'yes' OR Fibrosisoflungandotherchroniclungdisorders = 'yes' OR Pneumonia = 'yes' OR Historyofinfection = 'yes' OR Metastaticcanceroracuteleukemia = 'yes' OR LungUpperDigestiveTractandOtherSevereCancers = 'yes' OR LymphaticHeadandNeckBrainandOtherMajorCancers;BreastColorectalandotherCancersandTumors;OtherRespiratoryandHeartNeoplasms = 'yes' OR OtherDigestiveandUrinaryNeoplasms = 'yes' OR Diabetesmellitus(DM)orDMcomplications = 'yes' OR Protein-caloriemalnutrition = 'yes' OR Disordersoffluidelectrolyteacid-base = 'yes' OR OtherEndocrine/Metabolic/NutritionalDisorders = 'yes' OR PancreaticDisease = 'yes' OR PepticUlcerHemorrhageOtherSpecifiedGastrointestinalDisorders = 'yes' OR OtherGastrointestinalDisorders = 'yes' OR SevereHematologicalDisorders = 'yes' OR Irondeficiencyorotheranemiasandblooddisease = 'yes' OR Dementiaorotherspecifiedbraindisorders = 'yes' OR Drug/AlcoholInducedDependence/Psychosis = 'yes' OR MajorPsychiatricDisorders = 'yes' OR Depression = 'yes' OR AnxietyDisorders = 'yes' OR OtherPsychiatricDisorders = 'yes' OR QuadriplegiaParaplegiaParalysisFunctionalDisability = 'yes' OR Polyneuropathy = 'yes' OR HypertensiveHeartandRenalDiseaseorEncephalopathy ='yes'";
            console.log(pnQuery);
           
          }
          count++;
      };

      fs.writeFile("pn.sql", pnQuery, function(err) {
      
       if (err) {
         return console.log(err);
       }
      
       console.log("pn.sql was updated!");
      
      });
  });
}

