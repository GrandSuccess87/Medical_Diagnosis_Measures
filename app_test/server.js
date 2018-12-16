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
