const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MSC');
module.exports = mongoose;
// mongodb://admin:password@ds251827.mlab.com:51827/mahskicoach
