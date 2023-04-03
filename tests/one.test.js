const { createPackageObjects } = require("../utils.js");

describe("createPackageObjects", () => {
  test("createPackageObjects creates package objects correctly", () => {
    const numOfPackages = 3;
    const packageDetails = [
      "PKG1",
      "50",
      "30",
      "OFR001",
      "PKG2",
      "75",
      "125",
      "OFR002",
      "PKG3",
      "175",
      "100",
      "OFR003",
    ];

    const result = createPackageObjects(packageDetails, numOfPackages);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
    expect(result[0]).toEqual({
      pkgId: "PKG1",
      pkgWeight: 50,
      pkgDistance: 30,
      offerCode: "OFR001",
    });
    expect(result[1]).toEqual({
      pkgId: "PKG2",
      pkgWeight: 75,
      pkgDistance: 125,
      offerCode: "OFR002",
    });
    expect(result[2]).toEqual({
      pkgId: "PKG3",
      pkgWeight: 175,
      pkgDistance: 100,
      offerCode: "OFR003",
    });
  });
});