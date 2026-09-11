const apiKey = process.env.OPUS_API_KEY || '001d27c3a67d42099d71c079cd1bce76';
const mobile = '918076750278';
const msg = 'Test Message';

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
