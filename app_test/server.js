//Writing to the remote file://
var WebHDFS = require('webhdfs');
var hdfs = WebHDFS.createClient();

var localFileStream = fs.createReadStream('./data/Sample_Data');
var remoteFileStream = hdfs.createWriteStream('/path/to/remote/file');

localFileStream.pipe(remoteFileStream);

remoteFileStream.on('error', function onError (err) {
  // Do something with the error
  if(err) {
    throw err
  };
});

remoteFileStream.on('finish', function onFinish () {
  // Upload is done
  console.log('Sample Data Uploaded Successfully');
});

//Reading from the remote file://
var WebHDFS = require('webhdfs');
var hdfs = WebHDFS.createClient({
  user: 'webuser',
  host: 'localhost',
  port: 80,
  path: '/webhdfs/v1'
});

var remoteFileStream = hdfs.createReadStream('/path/to/remote/file');

remoteFileStream.on('error', function onError (err) {
  // Do something with the error
});

remoteFileStream.on('data', function onChunk (chunk) {
  // Do something with the data chunk
});

remoteFileStream.on('finish', function onFinish () {
  // Upload is done
});
