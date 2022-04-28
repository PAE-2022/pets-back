const mongoose = require('mongoose');

const dbURI = process.env.DB_URI || '';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log(`Moongose connection open to ${dbURI}`);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose connection diconnected through app termination');
    process.exit(0);
  });
});
