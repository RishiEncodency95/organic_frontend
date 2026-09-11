const apiKey = process.env.OPUS_API_KEY || '001d27c3a67d42099d71c079cd1bce76';
const mobile = '918076750278';
const otp = '123456';
const name = 'Vansh Test';

let greeting = name ? `Namo Gange Namaskar!\n\nDear ${name},\n\n` : `Namo Gange Namaskar!\n\n`;
let msg = `${greeting}IHWE Secure Verification Code:\n\n*${otp}*\n\nThis code is required to complete your mobile verification for the International Health & Wellness Expo (IHWE).\n\nValid for 10 minutes only.\n\nFor your security, do not share this code with anyone.\n\n– Team IHWE\n\nNamo Gange Wellness Pvt. Ltd.`;

const url = `https://api.opustechnology.in/wapp/v2/api/send?apikey=${apiKey}&mobile=${mobile}&msg=${encodeURIComponent(msg)}`;

console.log('Fetching URL:', url);

async function testFetch() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  
  try {
    const start = Date.now();
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    console.log(`Status: ${response.status}`);
    const text = await response.text();
    console.log(`Response text: ${text}`);
    console.log(`Time taken: ${Date.now() - start}ms`);
  } catch (err) {
    console.error('Fetch error:', err.message);
  }
}

testFetch();
