const vehicle = [
  {
    model: [
      {
        name: "BMW",
        color: "Black",
        year: 2025,
      },
      {
        name: "BMW-1",
        color: "Blue",
        year: 2024,
      },
    ],

    type: "car",
    whell: 4,
  },
  {
    name: "Honda",
    type: "car",
    whell: 4,
  },
  {
    name: "Hero",
    type: "byke",
    whell: 2,
  },
];

function readjson() {
  // console.log(vehicle[0].type, vehicle[0].name);
  // console.log(vehicle[2]["name"]);
  // console.log(vehicle[1].type);
  console.log(vehicle[0].model[0]);
  console.log(vehicle[1]["name"]);
}
readjson();
