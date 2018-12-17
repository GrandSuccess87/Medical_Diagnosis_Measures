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

fs.createReadStream('./data/Sample_Data.csv')
  .pipe(csv())
  .on('data', function(data){
    console.log(data);
  })
  .on('end', function(data){
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
