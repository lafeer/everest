// parse input arguments
const [baseDeliveryCost, numOfPackages] = process.argv.slice(2, 4).map(Number);
const [...packageDetails] = process.argv.slice(4);
