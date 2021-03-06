const fs = require("fs");
const csvFilePath=('./data/SampleData2016_underscore.csv');
const csv=require('csvtojson');

var count = 0;
var query = '';

// create a function that will generate the insert queries with the
// create a function for each measure that will also run the select querries and filter the d

if(process.argv[2] === "main") {
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
            console.log(query);

          }
          count++;
      };

      // fs.writeFile("main.sql", query, function(err) {
      //
      //  if (err) {
      //    return console.log(err);
      //  }
      //
      //  console.log("main.sql was updated!");
      //
      // });
  });
}
// Async / await usage
const jsonArray = csv().fromFile(csvFilePath);
