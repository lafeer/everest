const { createPackageObjects } = require("./utils.js");

// parse input arguments
const [baseDeliveryCost, numOfPackages] = process.argv.slice(2, 4).map(Number);
const [...packageDetails] = process.argv.slice(4);

// parse package details into package objects
const packages = createPackageObjects(packageDetails, numOfPackages);
