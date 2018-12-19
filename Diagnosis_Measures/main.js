const fs = require("fs");
const ami = process.argv[2];
const csvFilePath=('./data/SampleData2016_underscore.csv');
const csv=require('csvtojson');

var count = 0;
var query = '';

const amiArray = [410.00, 410.01, 410.10, 410.11, 410.20, 410.21, 410.30, 410.31, 410.40, 410.41, 410.50, 410.51, 410.60, 410.61, 410.70, 410.71, 410.80, 410.81, 410.90,
  410.91];
console.log("\r\n AMI Diagnosis Codes: " + amiArray);

const copdArray = [491.21, 491.22, 491.8, 491.9, 492.8, 493.20, 493.21, 493.22, 496, 518.81, 518.82, 518.84, 799.1];
console.log("\r\n COPD Diagnosis Codes: " + copdArray);

const hfArray = [402.01, 402.11, 402.91, 404.01, 404.03, 404.11, 404.13, 404.91, 404.93, 428.];
console.log("\r\n HF Diagnosis Codes: " + hfArray);

for (var i = 0; i < hfArray.length; i++) {
    if(hfArray[i] === "xx") {
      hfArray[i].replace("  ");
      console.log(hfArray);
    }
}

const pnArray = [480.0, 480.1, 480.2, 480.3, 480.8, 480.9, 481, 482.0, 482.1, 482.2, 482.30, 482.31, 482.32, 482.39, 482.40, 482.41, 482.42, 482.49, 482.81, 482.82, 482.83,
482.84, 482.89, 482.9, 483.0, 483.1, 483.8, 485, 486, 487.0, 488.11];
console.log("\r\n pnArray Diagnosis Codes: " + pnArray);

const tha_tkaArray = [81.51, 81.54];
console.log("\r\n tha_tkaArray Diagnosis Codes: " + tha_tkaArray);


csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{



    // console.log(jsonObj);
      var patientData = jsonObj;
      // patientData = JSON.stringify(jsonObj);
      // console.log(patientData);

      for (var value of patientData) {
          if(count > 0) {
            // print the insert statemtnts to the console
            query += "INSERT INTO MedicalDataDF " +
            "(encounter_id, patient_nbr, race, gender, age, LengthofStay, ED_visits, Inpatient_visits, diagnosis_code, HistoryofPTCA, HistoryofCABG, Congestiveheartfailure, Acutecoronarysyndrome, Anteriormyocardialinfarction, Otherlocationofmyocardialinfarction, Anginapectorisoldmyocardialinfarction, Coronaryatherosclerosis, Valvularorrheumaticheartdisease, Specifiedarrhythmias, Historyofinfection, Metastaticcanceroracuteleukemia, Cancer, Diabetesmellitus(DM)orDMcomplications, Protein-caloriemalnutrition, Disordersoffluidelectrolyteacid-base, Irondeficiencyorotheranemiasandblooddisease, Dementiaorotherspecifiedbraindisorders, Hemiplegiaparaplegiaparalysisfunctionaldisability, Stroke, Cerebrovasculardisease, Vascularorcirculatorydisease, Chronicobstructivepulmonarydisease, Asthma, Pneumonia, End-stagerenaldiseaseordialysis, Renalfailure, Otherurinarytractdisorders, Decubitusulcerorchronicskinulcer, LungUpperDigestiveTractandOtherSevereCancers, LymphaticHeadandNeckBrainandOtherMajorCancers;BreastColorectalandotherCancersandTumors;OtherRespiratoryandHeartNeoplasms, OtherDigestiveandUrinaryNeoplasms, OtherEndocrine/Metabolic/NutritionalDisorders, PancreaticDisease, PepticUlcerHemorrhageOtherSpecifiedGastrointestinalDisorders, OtherGastrointestinalDisorders, SevereHematologicalDisorders, Drug/AlcoholInducedDependence/Psychosis, MajorPsychiatricDisorders, Depression, AnxietyDisorders, OtherPsychiatricDisorders, QuadriplegiaParaplegiaParalysisFunctionalDisability, Polyneuropathy, HypertensiveHeartandRenalDiseaseorEncephalopathy, CellulitisLocalSkinInfection, VertebralFractures, Liverandbiliarydisease, Fibrosisoflungandotherchroniclungdisorders, Nephritis, End-stageliverdisease, Seizuredisordersandconvulsions, Chronicheartfailure, Coronaryatherosclerosisoranginacerebrovasculardisease, Dialysisstatus, Septicemia/shock, Cardio-respiratoryfailureorcardio-respiratoryshock, Rheumatoidarthritisandinflammatoryconnectivetissuedisease, Respiratordependence/tracheostomystatus, Transplants, Coagulationdefectsandotherspecifiedhematologicaldisorders, Hipfracture/dislocation, Pleuraleffusion/pneumothorax, Urinarytractinfection, Otherinjuries, Skeletaldeformities, Posttraumaticosteoarthritis, Morbidobesity, Hypertension, Majorsymptomsabnormalities, HistoryofMechanicalVentilation, SleepApnea, OtherandUnspecifiedHeartDisease) " +
            "VALUES ('" + value.encounter_id + "', '" + value.patient_nbr + "', '" + value.race + "', '" + value.gender + "', '" + value.age + "', '" + value.LengthofStay + "', '" + value.ED_visits + "', '" + value.Inpatient_visits + "', '" + value.diagnosis_code + "', '" + value.HistoryofPTCA + "', '" + value.HistoryofCABG + "', '" + value.Congestiveheartfailure + "', '" + value.Acutecoronarysyndrome + "', '" + value.Anteriormyocardialinfarction + "', '" + value.Otherlocationofmyocardialinfarction + "', '" + value.Anginapectorisoldmyocardialinfarction + "', '" + value.Coronaryatherosclerosis + "', '" + value.Valvularorrheumaticheartdisease + "', '" + value.Specifiedarrhythmias + "', '" + value.Historyofinfection + "', '" + value.Metastaticcanceroracuteleukemia + "', '" + value.Cancer + "', '" + value.Diabetesmellitus_DM_orDMcomplications + "', '" + value.Protein_caloriemalnutrition + "', '" + value.Disordersoffluidelectrolyteacid_base + "', '" + value.Irondeficiencyorotheranemiasandblooddisease + "', '" + value.Dementiaorotherspecifiedbraindisorders + "', '" + value.Hemiplegiaparaplegiaparalysisfunctionaldisability + "', '" + value.Stroke + "', '" + value.Cerebrovasculardisease + "', '" + value.Vascularorcirculatorydisease + "', '" + value.Chronicobstructivepulmonarydisease + "', '" + value.Asthma + "', '" + value.Pneumonia + "', '" + value.End_stagerenaldiseaseordialysis + "', '" + value.Renalfailure + "', '" + value.Otherurinarytractdisorders + "', '" + value.Decubitusulcerorchronicskinulcer + "', '" + value.LungUpperDigestiveTractandOtherSevereCancers + "', '" + value.LymphaticHeadandNeckBrainandOtherMajorCancers_BreastColorectalandotherCancersandTumors_OtherRespiratoryandHeartNeoplasms + "', '" + value.OtherDigestiveandUrinaryNeoplasms + "', '" + value.OtherEndocrine_Metabolic_NutritionalDisorders + "', '" + value.PancreaticDisease + "', '" + value.PepticUlcerHemorrhageOtherSpecifiedGastrointestinalDisorders + "', '" + value.OtherGastrointestinalDisorders + "', '" + value.SevereHematologicalDisorders + "', '" + value.Drug_AlcoholInducedDependence_Psychosis + "', '" + value.MajorPsychiatricDisorders + "', '" + value.Depression + "', '" + value.AnxietyDisorders + "', '" + value.OtherPsychiatricDisorders + "', '" + value.QuadriplegiaParaplegiaParalysisFunctionalDisability + "', '" + value.Polyneuropathy + "', '" + value.HypertensiveHeartandRenalDiseaseorEncephalopathy + "', '" + value.CellulitisLocalSkinInfection + "', '" + value.VertebralFractures + "', '" + value.Liverandbiliarydisease + "', '" + value.Fibrosisoflungandotherchroniclungdisorders + "', '" + value.Nephritis + "', '" + value.End_stageliverdisease + "', '" + value.Seizuredisordersandconvulsions + "', '" + value.Chronicheartfailure + "', '" + value.Coronaryatherosclerosisoranginacerebrovasculardisease + "', '" + value.Dialysisstatus + "', '" + value.Septicemia_shock + "', '" + value.Cardio_respiratoryfailureorcardio_respiratoryshock + "', '" + value.Rheumatoidarthritisandinflammatoryconnectivetissuedisease + "', '" + value.Respiratordependence_tracheostomystatus + "', '" + value.Transplants + "', '" + value.Coagulationdefectsandotherspecifiedhematologicaldisorders + "', '" + value.Hipfracture_dislocation + "', '" + value.Pleuraleffusion_pneumothorax + "', '" + value.Urinarytractinfection + "', '" + value.Otherinjuries + "', '" + value.Skeletaldeformities + "', '" + value.Posttraumaticosteoarthritis + "', '" + value.Morbidobesity + "', '" + value.Hypertension + "', '" + value.Majorsymptomsabnormalities + "', '" + value.HistoryofMechanicalVentilation + "', '" + value.SleepApnea + "', '" + value.OtherandUnspecifiedHeartDisease + "');\r\n";
            // console.log(query);


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



          }
          count++;
      };

      fs.writeFile("ami.sql", query, function(err) {

       if (err) {
         return console.log(err);
       }

       console.log("\r\n ami.sql was updated!\r\n");

      });
  });

// Async / await usage
const jsonArray = csv().fromFile(csvFilePath);



// create an array to hold the AMI diagnosis codes
// const diagnosis_codeArry = [];

// create a variable for a code
// const diagnosis_code;

// Loop through the data inside the file and create an if/else statement that checks the two variables and print results to the console

// create sql statement that will filter out all "yes" of diagnosis that are an AMI measure
// then create an sql statement will take all the "yes" and return the diagnosis codes
