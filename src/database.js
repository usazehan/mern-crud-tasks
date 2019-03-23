const mongoose = require('mongoose');
const URI = 'mongodb://zehan:512970@cluster0-shard-00-00-pqgac.mongodb.net:27017,cluster0-shard-00-01-pqgac.mongodb.net:27017,cluster0-shard-00-02-pqgac.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
