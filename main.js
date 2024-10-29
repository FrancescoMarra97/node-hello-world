console.log("hello node js");
console.log(process.argv);


const pin = process.env.PIN;
console.log(`il valore di PIN è: ${pin}`);

const product = process.argv[2]
console.log(product);
if (pin == "666" && product == "admin") {
    console.log("Welcome Admin")
} else {
    console.log("Access restricted");

}
