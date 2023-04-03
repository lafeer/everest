const {
  createPackageObjects,
  calculatePackageCostsAndDiscounts,
} = require("./utils.js");

// parse input arguments
const [baseDeliveryCost, numOfPackages] = process.argv.slice(2, 4).map(Number);
const [...packageDetails] = process.argv.slice(4, -3);
const [numOfVehicles, maxSpeed, maxCarriableWeight] = process.argv
  .slice(-3)
  .map(Number);

// parse package details into package objects
const packageObjects = createPackageObjects(packageDetails, numOfPackages);
