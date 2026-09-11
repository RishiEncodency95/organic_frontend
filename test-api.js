async function test() {
    const response = await fetch('http://localhost:5000/api/events/active');
    const data = await response.json();
    console.log(JSON.stringify(data).slice(0, 200));
}
test();
