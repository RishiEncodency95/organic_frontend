async function test() {
    const response = await fetch('http://localhost:5000/api/stall-rates/event/69edb20efdd846637abaaee0');
    const data = await response.json();
    console.log(JSON.stringify(data).slice(0, 200));
}
test();
