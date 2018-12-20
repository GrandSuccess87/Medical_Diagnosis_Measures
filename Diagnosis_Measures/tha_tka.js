// const mainData = require('main.js');
const fs = require("fs");
const csvFilePath=('./data/SampleData2016_underscore.csv');
const csv=require('csvtojson');
var count = 0;
var tHA_tKAQuery = '';

const tha_tkaArray = [81.51, 81.54];
console.log("\r\n tha_tkaArray Diagnosis Codes: " + tha_tkaArray + "\r\n");


if(process.argv[2] === "pn") {
csv()
.fromFile(csvFilePath)
.then((jsonObj)=> {

      var patientData = jsonObj;

      for (var value of patientData) {
          if(count > 0) {

            // print the slect statemtnts to the console
            console.log("\r\n==================================================\r\n");
            tHA_tKAQuery += "SELECT " + "patient_nbr, diagnosis_code FROM MedicalDataDF WHERE HistoryofMechanicalVentilation = 'yes' OR SleepApnea = 'yes' OR Respiratordependence/tracheostomystatus = 'yes' OR Cardio-respiratoryfailureorcardio-respiratoryshock = 'yes' OR Congestiveheartfailure = 'yes' OR Acutecoronarysyndrome = 'yes' OR Coronaryatherosclerosisoranginacerebrovasculardisease = 'yes' OR Specifiedarrhythmias = 'yes' OR OtherandUnspecifiedHeartDisease = 'yes' OR Vascularorcirculatorydisease = 'yes' OR Fibrosisoflungandotherchroniclungdisorders = 'yes' OR Pneumonia = 'yes' OR Historyofinfection = 'yes' OR Metastaticcanceroracuteleukemia = 'yes' OR LungUpperDigestiveTractandOtherSevereCancers = 'yes' OR LymphaticHeadandNeckBrainandOtherMajorCancers;BreastColorectalandotherCancersandTumors;OtherRespiratoryandHeartNeoplasms = 'yes' OR OtherDigestiveandUrinaryNeoplasms = 'yes' OR Diabetesmellitus(DM)orDMcomplications = 'yes' OR Protein-caloriemalnutrition = 'yes' OR Disordersoffluidelectrolyteacid-base = 'yes' OR OtherEndocrine/Metabolic/NutritionalDisorders = 'yes' OR PancreaticDisease = 'yes' OR PepticUlcerHemorrhageOtherSpecifiedGastrointestinalDisorders = 'yes' OR OtherGastrointestinalDisorders = 'yes' OR SevereHematologicalDisorders = 'yes' OR Irondeficiencyorotheranemiasandblooddisease = 'yes' OR Dementiaorotherspecifiedbraindisorders = 'yes' OR Drug/AlcoholInducedDependence/Psychosis = 'yes' OR MajorPsychiatricDisorders = 'yes' OR Depression = 'yes' OR AnxietyDisorders = 'yes' OR OtherPsychiatricDisorders = 'yes' OR QuadriplegiaParaplegiaParalysisFunctionalDisability = 'yes' OR Polyneuropathy = 'yes' OR HypertensiveHeartandRenalDiseaseorEncephalopathy ='yes'";
            console.log(tHA_tKAQuery);
           
          }
          count++;
      };

      fs.writeFile("tha_tka.sql", tHA_tKAQuery, function(err) {
      
       if (err) {
         return console.log(err);
       }
      
       console.log("tha_tka.sql was updated!");
      
      });
  });
}

