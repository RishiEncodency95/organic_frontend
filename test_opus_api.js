const https = require('https');
const req = https.get('https://api.opustechnology.in/', (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  process.exit(0);
});
req.on('error', (e) => {
  console.error(`ERROR: ${e.message}`);
  process.exit(1);
});
req.setTimeout(10000, () => {
  console.error('TIMEOUT');
  req.destroy();
  process.exit(1);
});
