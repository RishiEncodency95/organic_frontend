const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const WhatsAppLog = require('./ihwe/models/WhatsAppLog');

mongoose.connect(process.env.MONGO_URI_MAIN || process.env.MONGO_URI)
  .then(async () => {
    const logs = await WhatsAppLog.find().sort({ createdAt: -1 }).limit(10);
    console.log(JSON.stringify(logs, null, 2));
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
