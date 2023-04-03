// define discount codes and their corresponding discount rates
const DISCOUNT_CODES = {
  OFR001: {
    discountRate: 0.1,
    discountApplicable: (pkg) => {
      const { pkgDistance, pkgWeight } = pkg;
      return pkgDistance < 200 && pkgWeight >= 70 && pkgWeight <= 200;
    },
  },
  OFR002: {
    discountRate: 0.07,
    discountApplicable: (pkg) => {
      const { pkgDistance, pkgWeight } = pkg;
      return (
        pkgDistance >= 50 &&
        pkgDistance <= 150 &&
        pkgWeight >= 100 &&
        pkgWeight <= 250
      );
    },
  },
  OFR003: {
    discountRate: 0.05,
    discountApplicable: (pkg) => {
      const { pkgDistance, pkgWeight } = pkg;
      return (
        pkgDistance >= 50 &&
        pkgDistance <= 250 &&
        pkgWeight >= 10 &&
        pkgWeight <= 150
      );
    },
  },
};

function createPackageObjects(pkgDetails, numOfPackages) {
  const packages = [];
  for (let i = 0; i < numOfPackages; i++) {
    const [pkgId, pkgWeight, pkgDistance, offerCode] = pkgDetails.slice(
      i * 4,
      i * 4 + 4
    );

    packages.push({
      pkgId,
      pkgWeight: Number(pkgWeight),
      pkgDistance: Number(pkgDistance),
      offerCode,
    });
  }

  return packages;
}

module.exports = { createPackageObjects };
