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

// calculate package costs and discounts
const packages = calculatePackageCostsAndDiscounts(
  packageObjects,
  baseDeliveryCost
);

// sort packages by weight, descending
const sortedPackages = [...packages].sort((a, b) => b.pkgWeight - a.pkgWeight);

// group packages into shipments
function groupPackages(packages, maxCarriableWeight) {
  const shipments = [];
  let currentGroup = [];
  let currentWeight = 0;

  for (const pkg of packages) {
    if (currentWeight + pkg.pkgWeight < maxCarriableWeight) {
      currentGroup.push(pkg);
      currentWeight += pkg.pkgWeight;
    } else {
      shipments.push(currentGroup);
      currentGroup = [pkg];
      currentWeight = pkg.pkgWeight;
    }
  }

  shipments.push(currentGroup);
  return shipments;
}

// sort shipments by number of packages, then weight, descending
function sortShipments(a, b) {
  if (a.length === b.length) {
    return (
      b.reduce((acc, pkg) => acc + pkg.pkgWeight, 0) -
      a.reduce((acc, pkg) => acc + pkg.pkgWeight, 0)
    );
  } else {
    return b.length - a.length;
  }
}

const shipments = groupPackages(sortedPackages, maxCarriableWeight).sort(
  sortShipments
);

// calculate delivery time for each package in each shipment
function calculatePkgDeliveryTime(pkg, vehicleCurrentTime, maxSpeed) {
  return (
    vehicleCurrentTime + Math.floor((pkg.pkgDistance / maxSpeed) * 100) / 100
  );
}
