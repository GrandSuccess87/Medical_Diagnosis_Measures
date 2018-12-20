// need to store the npm packages, csv data, and the count variable in a file and import the file here
const fs = require("fs");
const csvFilePath=('./data/SampleData2016_underscore.csv');
const csv=require('csvtojson');
var count = 0;
var COPDQuery = '';

const copdArray = [491.21, 491.22, 491.8, 491.9, 492.8, 493.20, 493.21, 493.22, 496, 518.81, 518.82, 518.84, 799.1];
console.log("\r\n COPD Diagnosis Codes: " + copdArray);

if(process.argv[2] === "copd") {
csv()
.fromFile(csvFilePath)
.then((jsonObj)=> {

      let patientData = jsonObj;

      for (let value of patientData) {
        // evaluate if condition count > 0 is true since the first row is the column fields
          if(count > 0) {
            // for each row run the copd query
            // print the slect statemtnts to the console
            console.log("\r\n==================================================\r\n");
            COPDQuery += "SELECT " + "patient_nbr, diagnosis_code FROM MedicalDataDF WHERE HistoryofMechanicalVentilation='yes' OR SleepApnea='yes' OR Respiratordependence/tracheostomystatus='yes' OR Cardio-respiratoryfailureorcardio-respiratoryshock='yes' OR Congestiveheartfailure='yes' OR Acutecoronarysyndrome='yes' OR Coronaryatherosclerosisoranginacerebrovasculardisease='yes' OR Specifiedarrhythmias='yes' OR OtherandUnspecifiedHeartDisease='yes' OR Vascularorcirculatorydisease='yes' OR Fibrosisoflungandotherchroniclungdisorders='yes' OR Pneumonia='yes' OR Historyofinfection='yes' OR Metastaticcanceroracuteleukemia='yes' OR LungUpperDigestiveTractandOtherSevereCancers='yes' OR LymphaticHeadandNeckBrainandOtherMajorCancers;BreastColorectalandotherCancersandTumors;OtherRespiratoryandHeartNeoplasms='yes' OR OtherDigestiveandUrinaryNeoplasms='yes' OR Diabetesmellitus(DM)orDMcomplications='yes' OR Protein-caloriemalnutrition='yes' OR Disordersoffluidelectrolyteacid-base='yes' OR OtherEndocrine/Metabolic/NutritionalDisorders='yes' OR PancreaticDiseas='yes' OR PepticUlcerHemorrhageOtherSpecifiedGastrointestinalDisorders='yes' OR OtherGastrointestinalDisorders='yes' OR SevereHematologicalDisorders='yes' OR Irondeficiencyorotheranemiasandblooddisease='yes' OR Dementiaorotherspecifiedbraindisorders='yes' OR Drug/AlcoholInducedDependence/Psychosis='yes' OR MajorPsychiatricDisorders='yes' OR Depression='yes' OR AnxietyDisorders='yes' OR OtherPsychiatricDisorders='yes' OR QuadriplegiaParaplegiaParalysisFunctionalDisability='yes' OR Polyneuropathy='yes' OR HypertensiveHeartandRenalDiseaseorEncephalopathy='yes'";
            console.log(COPDQuery);
           
          }
          count++;
      };

      fs.writeFile("copd.sql", COPDQuery, function(err) {
      
       if (err) {
         return console.log(err);
       }
      
       console.log("copd.sql was updated!");
      
      });
  });
}

