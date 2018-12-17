//Writing to the remote file://
// var WebHDFS = require('webhdfs');
var fs = require('file-system');
var csv = require('fast-csv');
// var hdfs = WebHDFS.createClient();

// var localFileStream = fs.createReadStream('./data/Sample_Data.csv');
// console.log("Local File Stream: " + localFileStream);
//
// // var remoteFileStream = hdfs.createWriteStream('/home/vagrant/sample-data-2016');
// console.log("Writing to Remote File Stream: " + remoteFileStream);
//
// localFileStream.pipe(remoteFileStream);
//
// remoteFileStream.on('error', function onError (err) {
//   // Do something with the error
//   if(err) {
//     throw err
//   };
// });
//
// remoteFileStream.on('finish', function onFinish () {
//   // Upload is done
//   console.log('Sample Data Uploaded Successfully, Read Finished');
// });



 let localFileStream = fs.createReadStream('./data/Sample_Data_2016.csv');
 // console.log("Hit Local File Stream");
  localFileStream.pipe(csv())
  .on('data', function(data){

    // if(err) console.log(`Error: ${err}`);

    let person = `Person: ${data}`;
    console.log(person);

    // person.forEach(row => {
    //   console.log(`Person Data: ${row.encounter_id}`);
    // })

    // let query =
    // INSERT INTO DiseaseMeasures (encounter_id, patient_nbr, race, gender, age, LengthofStay, ED_visits, Inpatient_visits, diagnosis_code, HistoryofPTCA, HistoryofCABG, Congestiveheartfailure, Acutecoronarysyndrome, Anteriormyocardialinfarction, Otherlocationofmyocardialinfarction, Anginapectorisoldmyocardialinfarction, Coronaryatherosclerosis, Valvularorrheumaticheartdisease, Specifiedarrhythmias, Historyofinfection, Metastaticcanceroracuteleukemia, Cancer, Diabetesmellitus(DM)orDMcomplications, Protein-caloriemalnutritionDisordersoffluidelectrolyteacid-baseIrondeficiencyorotheranemiasandblooddisease, Dementiaorotherspecifiedbraindisorders, Hemiplegiaparaplegiaparalysisfunctionaldisability, Stroke, Cerebrovasculardisease, Vascularorcirculatorydisease, Chronicobstructivepulmonarydisease, Asthma, Pneumonia, End-stagerenaldiseaseordialysis, Renalfailure, Otherurinarytractdisorders, Decubitusulcerorchronicskinulcer,
    // LungUpperDigestiveTractandOtherSevereCancers, LymphaticHeadandNeckBrainandOtherMajorCancers,BreastColorectalandotherCancersandTumors,OtherRespiratoryandHeartNeoplasms, OtherDigestiveandUrinaryNeoplasms, OtherEndocrine/Metabolic/NutritionalDisorders, PancreaticDisease, PepticUlcerHemorrhageOtherSpecifiedGastrointestinalDisorders, OtherGastrointestinalDisorders, SevereHematologicalDisorders, Drug/AlcoholInducedDependence/Psychosis, MajorPsychiatricDisorders,
    // Depression, AnxietyDisorders, OtherPsychiatricDisorders, QuadriplegiaParaplegiaParalysisFunctionalDisability, Polyneuropathy, HypertensiveHeartandRenalDiseaseorEncephalopathy, CellulitisLocalSkinInfection, VertebralFractures, Liverandbiliarydisease, Fibrosisoflungandotherchroniclungdisorders, Nephritis, End-stageliverdisease, Seizuredisordersandconvulsions, Chronicheartfailure, Coronaryatherosclerosisoranginacerebrovasculardisease, Dialysisstatus, Septicemia/shock,
    // Cardio-respiratoryfailureorcardio-respiratoryshock, Rheumatoidarthritisandinflammatoryconnectivetissuedisease, Respiratordependence/tracheostomystatus, Transplants, Coagulationdefectsandotherspecifiedhematologicaldisorders, Hipfracture/dislocation, Pleuraleffusion/pneumothorax, Urinarytractinfection, Otherinjuries, Skeletaldeformities, Posttraumaticosteoarthritis, Morbidobesity, Hypertension, Majorsymptomsabnormalities, HistoryofMechanicalVentilation, SleepApnea,
    // OtherandUnspecifiedHeartDisease) VALUES();
    // console.log(query);
      //
      for(let i = 0; i < data.length; i++) {
        // console.log(data);
      }
  })
  .on('end', function(data){
    // if(err) console.log("Error: " + err);
    console.log('Read Finished');
  });



//Reading from the remote file://
// var WebHDFS = require('webhdfs');
// var hdfs = WebHDFS.createClient({
//   user: 'webuser',
//   host: 'localhost',
//   port: 80,
//   path: '/webhdfs/v1'
// });
//
// var remoteFileStream = hdfs.createReadStream('/path/to/remote/file');
// console.log("Reading from Remote File Stream: " + remoteFileStream);
//
//
// remoteFileStream.on('error', function onError (err) {
//   // Do something with the error
//   if(err) {
//     throw err
//   };
// });
//
// remoteFileStream.on('data', function onChunk (chunk) {
//   // Do something with the data chunk
//   console.log("Chunk: " + chunk);
// });
//
// remoteFileStream.on('finish', function onFinish () {
//   // Upload is done
//   console.log("Sample data read Successfully, Upload Complete");
// });
