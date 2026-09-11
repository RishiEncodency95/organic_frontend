async function test() {
    try {
        const response = await fetch('http://localhost:5000/api/public/employees');
        console.log("Status:", response.status);
        const data = await response.json();
        console.log("Data:", JSON.stringify(data).slice(0, 100));
    } catch(e) {
        console.log("Error:", e.message);
    }
}
test();
