const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const WhatsAppLog = require('./ihwe/models/WhatsAppLog');

mongoose.connect(process.env.MONGO_URI_MAIN || process.env.MONGO_URI)
  .then(async () => {
    // get logs from the last 2 days
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    const logs = await WhatsAppLog.find({ createdAt: { $gte: twoDaysAgo } }).sort({ createdAt: -1 });
    console.log(`Found ${logs.length} logs in the last 2 days.`);
    if (logs.length > 0) {
      console.log(JSON.stringify(logs.slice(0, 5), null, 2));
    } else {
      const latest = await WhatsAppLog.findOne().sort({ createdAt: -1 });
      console.log("No logs in last 2 days. Latest log in DB:", JSON.stringify(latest, null, 2));
    }
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
