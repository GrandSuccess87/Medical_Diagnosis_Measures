// const mainData = require('main.js');
const fs = require("fs");
const csvFilePath=('./data/SampleData2016_underscore.csv');
const csv=require('csvtojson');
const AMI = process.argv[2];


var count = 0;
var queryAMI = '';
var queryCOPD = '';

const amiArray = [410.00, 410.01, 410.10, 410.11, 410.20, 410.21, 410.30, 410.31, 410.40, 410.41, 410.50, 410.51, 410.60, 410.61, 410.70, 410.71, 410.80, 410.81, 410.90,
  410.91];
console.log("\r\n==================================================\r\n");
console.log("\r\n AMI Diagnosis Codes: " + amiArray);

const copdArray = [491.21, 491.22, 491.8, 491.9, 492.8, 493.20, 493.21, 493.22, 496, 518.81, 518.82, 518.84, 799.1];
console.log("\r\n COPD Diagnosis Codes: " + copdArray);

// const hfArray = [402.01, 402.11, 402.91, 404.01, 404.03, 404.11, 404.13, 404.91, 404.93, 428.xx];
// console.log("\r\n HF Diagnosis Codes: " + hfArray);
//
// for (var i = 0; i < hfArray.length; i++) {
//     if(hfArray[i] === "xx") {
//       hfArray[i].replace(" ");
//       console.log(hfArray);
//     }
// }

const pnArray = [480.0, 480.1, 480.2, 480.3, 480.8, 480.9, 481, 482.0, 482.1, 482.2, 482.30, 482.31, 482.32, 482.39, 482.40, 482.41, 482.42, 482.49, 482.81, 482.82, 482.83,
482.84, 482.89, 482.9, 483.0, 483.1, 483.8, 485, 486, 487.0, 488.11];
console.log("\r\n pnArray Diagnosis Codes: " + pnArray);

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{

    // console.log(jsonObj);
      var patientData = jsonObj;
      // console.log(patientData);

      for (var value of patientData) {
          if(count > 0) {
            console.log("\r\n==================================================\r\n");

            // print the slect statemtnts to the console
            queryAMI += "SELECT " + " patient_nbr, diagnosis_code FROM MedicalDataDF WHERE HistoryofPTCA='yes' OR HistoryofCABG='yes' OR Congestiveheartfailure='yes' OR Acutecoronarysyndrome='yes' OR Anteriormyocardialinfarction='yes' OR Otherlocationofmyocardialinfarction='yes' OR Anginapectorisoldmyocardialinfarction='yes' OR Coronaryatherosclerosis='yes' OR Valvularorrheumaticheartdisease='yes' OR Specifiedarrhythmias='yes' OR Historyofinfection='yes' OR Metastaticcanceroracuteleukemia='yes' OR Cancer='yes' OR Diabetesmellitus(DM)orDMcomplications='yes' OR Protein-caloriemalnutrition='yes' OR Disordersoffluidelectrolyteacid-base='yes' OR Irondeficiencyorotheranemiasandblooddisease='yes' OR Dementiaorotherspecifiedbraindisorders='yes' OR Hemiplegiaparaplegiaparalysisfunctionaldisability='yes' OR Stroke='yes' OR Cerebrovasculardisease='yes' OR Vascularorcirculatorydisease='yes' OR Chronicobstructivepulmonarydisease='yes' OR Asthma='yes' OR Pneumonia='yes' OR End-stagerenaldiseaseordialysis='yes' OR Renalfailure='yes' OR Otherurinarytractdisorders='yes' OR Decubitusulcerorchronicskinulcer='yes'";
            // amiArray.indexOf(value.diagnosis_code);
            console.log(queryAMI);

            console.log("\r\n==================================================\r\n");

            break;

          }
          count++;
      };

      fs.writeFile("ami.sql", queryAMI, function(err) {

       if (err) {
         return console.log(err);
       }

       console.log("ami.sql was updated!");

      });
  });
