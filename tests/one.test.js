const {
  createPackageObjects,
  calculatePackageCostsAndDiscounts,
} = require("../utils.js");

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

describe("calculatePackageCostsAndDiscounts", () => {
  test("calculates correct delivery cost with discount OFR001", () => {
    const baseDeliveryCost = 100;
    const packages = [
      {
        pkgId: "PKG1",
        pkgWeight: 100,
        pkgDistance: 150,
        offerCode: "OFR001",
      },
    ];

    const result = calculatePackageCostsAndDiscounts(
      packages,
      baseDeliveryCost
    );

    expect(result).toEqual([
      {
        pkgId: "PKG1",
        pkgWeight: 100,
        pkgDistance: 150,
        pkgCost: 1665,
        discount: 185,
        offerCode: "OFR001",
      },
    ]);
  });

  test("calculates correct delivery cost with discount OFR002", () => {
    const baseDeliveryCost = 100;
    const packages = [
      {
        pkgId: "PKG2",
        pkgWeight: 150,
        pkgDistance: 100,
        offerCode: "OFR002",
      },
    ];

    const result = calculatePackageCostsAndDiscounts(
      packages,
      baseDeliveryCost
    );

    expect(result).toEqual([
      {
        pkgId: "PKG2",
        pkgWeight: 150,
        pkgDistance: 100,
        pkgCost: 1953,
        discount: 147,
        offerCode: "OFR002",
      },
    ]);
  });

  test("calculates correct delivery cost with discount OFR003", () => {
    const baseDeliveryCost = 100;

    const packages = [
      {
        pkgId: "PKG3",
        pkgWeight: 50,
        pkgDistance: 200,
        offerCode: "OFR003",
      },
    ];

    const result = calculatePackageCostsAndDiscounts(
      packages,
      baseDeliveryCost
    );

    expect(result).toEqual([
      {
        pkgId: "PKG3",
        pkgWeight: 50,
        pkgDistance: 200,
        pkgCost: 1520,
        discount: 80,
        offerCode: "OFR003",
      },
    ]);
  });

  test("calculates correct delivery cost for multiple packages", () => {
    const baseDeliveryCost = 100;
    const packages = [
      {
        pkgId: "PKG1",
        pkgWeight: 100,
        pkgDistance: 150,
        pkgCost: 1665,
        discount: 185,
        offerCode: "OFR001",
      },
      {
        pkgId: "PKG2",
        pkgWeight: 150,
        pkgDistance: 100,
        pkgCost: 1953,
        discount: 147,
        offerCode: "OFR002",
      },
      {
        pkgId: "PKG3",
        pkgWeight: 50,
        pkgDistance: 200,
        pkgCost: 1520,
        discount: 80,
        offerCode: "OFR003",
      },
    ];

    const result = calculatePackageCostsAndDiscounts(
      packages,
      baseDeliveryCost
    );

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
    expect(result[0]).toEqual({
      pkgId: "PKG1",
      pkgWeight: 100,
      pkgDistance: 150,
      pkgCost: 1665,
      discount: 185,
      offerCode: "OFR001",
    });
    expect(result[1]).toEqual({
      pkgId: "PKG2",
      pkgWeight: 150,
      pkgDistance: 100,
      pkgCost: 1953,
      discount: 147,
      offerCode: "OFR002",
    });
    expect(result[2]).toEqual({
      pkgId: "PKG3",
      pkgWeight: 50,
      pkgDistance: 200,
      pkgCost: 1520,
      discount: 80,
      offerCode: "OFR003",
    });
  });
});
