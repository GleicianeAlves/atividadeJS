let raio = parseFloat(prompt("Digite o raio da esfera:"));

let volume = (4 / 3) * Math.PI * (raio ** 3);
console.log("Volume: " + volume.toFixed(2));