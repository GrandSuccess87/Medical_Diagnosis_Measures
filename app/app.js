const fs = require('file-system');
const csv = require('fast-csv');

let localFileStream = fs.createReadStream('./data/Sample_Data_2016.csv');
// console.log("Hit Local File Stream");
localFileStream.pipe(csv())
  .on('data', function(data){
  // if(err) console.log(`Error: ${err}`);

    let person = `Patient: ${data}`;
      console.log(person);

    for(let i = 0; i < data.length; i++) {
        // console.log(data);
    }
  })
  .on('end', function(data){
    // if(err) console.log("Error: " + err);
    console.log('Read Finished');
  });
