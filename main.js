const kelvin = 0;      // change kelvin
let celsius = kelvin - 273;
let fahrenheit = Math.floor(celsius * (9/5) + 32)
let newton = Math.floor(celsius * (33 / 100));


console.log(`The temperature is ${kelvin} degrees Kelvin , ${celsius} degrees Celsius ,${fahrenheit} degrees Fahrenheit and ${newton} degrees Newton.`);
