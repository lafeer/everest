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
