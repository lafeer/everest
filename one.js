const {
  createPackageObjects,
  calculatePackageCostsAndDiscounts,
} = require("./utils.js");

// parse input arguments
const [baseDeliveryCost, numOfPackages] = process.argv.slice(2, 4).map(Number);
const [...packageDetails] = process.argv.slice(4);

// parse package details into package objects
const packages = createPackageObjects(packageDetails, numOfPackages);

const packagesWithCostsAndDiscounts = calculatePackageCostsAndDiscounts(
  packages,
  baseDeliveryCost
);

// print delivery cost and discount for each package
packagesWithCostsAndDiscounts.forEach((pkg) => {
  console.log(pkg.pkgId, pkg.discount, pkg.pkgCost);
});

module.exports = { calculatePackageCostsAndDiscounts };
