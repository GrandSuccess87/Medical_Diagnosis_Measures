const fs = require('file-system');
const csv = require('fast-csv');
var WebHDFS = require('webhdfs');
var hdfs = WebHDFS.createClient();

let localFileStream = fs.createReadStream('./data/Sample_Data_2016.csv');
// console.log("Hit Local File Stream");
localFileStream.pipe(csv())
  .on('data', function(data){
  // if(err) console.log(`Error: ${err}`);

    let person = `Patient: ${data}`;
      console.log(person);

  // const  person.filter(p => {
  //     console.log(p)
  //   })
  //
    for(let i = 0; i < data.length; i++) {
        // console.log(data);
    }
  })
  .on('error', function onError (err) {
    // Do something with the error
    // if(err) throw err;
    console.log("Error: " + err);
  })
  .on('end', function(data){
    // if(err) console.log("Error: " + err);
    console.log('Read Finished');
  });


  // var localFileStream = fs.createReadStream('');
  // var remoteFileStream = hdfs.createWriteStream('examples/src/main/resources/Sample_Data_2016.csv');
  //
  // localFileStream.pipe(remoteFileStream);
  //
  // remoteFileStream.on('error', function onError (err) {
  //   // Do something with the error
  //   // if(err) throw err;
  //   console.log("Error: " + err);
  // });
  //
  // remoteFileStream.on('finish', function onFinish () {
  //   // Upload is done
  //   console.log('Upload Finished');
  // });
