console.log("hello node js");


const pin = process.env.PIN;
console.log(`il valore di PIN è: ${pin}`);

const product = process.argv.slice(2)
console.log(product);
