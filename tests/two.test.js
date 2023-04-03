const { groupPackages } = require("../two.js");

const groupedPackages = [
  [
    {
      pkgId: "PKG3",
      pkgWeight: 175,
      pkgDistance: 100,
      offerCode: "OFR003",
      discount: 0,
      pkgCost: 2350,
    },
  ],
  [
    {
      pkgId: "PKG5",
      pkgWeight: 155,
      pkgDistance: 95,
      offerCode: "NA",
      discount: 0,
      pkgCost: 2125,
    },
  ],
  [
    {
      pkgId: "PKG4",
      pkgWeight: 110,
      pkgDistance: 60,
      offerCode: "OFR002",
      discount: 105,
      pkgCost: 1395,
    },
    {
      pkgId: "PKG2",
      pkgWeight: 75,
      pkgDistance: 125,
      offerCode: "OFR008",
      discount: 0,
      pkgCost: 1475,
    },
  ],
  [
    {
      pkgId: "PKG1",
      pkgWeight: 50,
      pkgDistance: 30,
      offerCode: "OFR001",
      discount: 0,
      pkgCost: 750,
    },
  ],
];

describe("group packages into shipments and calculates package delivery times", () => {
  test("groupPackages", () => {
    const maxCarriableWeight = 200;
    const packages = [
      {
        pkgId: "PKG3",
        pkgWeight: 175,
        pkgDistance: 100,
        offerCode: "OFR003",
        discount: 0,
        pkgCost: 2350,
      },
      {
        pkgId: "PKG5",
        pkgWeight: 155,
        pkgDistance: 95,
        offerCode: "NA",
        discount: 0,
        pkgCost: 2125,
      },
      {
        pkgId: "PKG4",
        pkgWeight: 110,
        pkgDistance: 60,
        offerCode: "OFR002",
        discount: 105,
        pkgCost: 1395,
      },
      {
        pkgId: "PKG2",
        pkgWeight: 75,
        pkgDistance: 125,
        offerCode: "OFR008",
        discount: 0,
        pkgCost: 1475,
      },
      {
        pkgId: "PKG1",
        pkgWeight: 50,
        pkgDistance: 30,
        offerCode: "OFR001",
        discount: 0,
        pkgCost: 750,
      },
    ];

    const expectedResult = groupedPackages;

    const result = groupPackages(packages, maxCarriableWeight);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(4);
    expect(result).toEqual(expectedResult);
  });
});
