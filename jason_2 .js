const vehicle = [
  {
    model: [
      {
        name: "BMW",
        color: "Black",
        year: 2025,
      },
      {
        name: "BMW",
        color: "Blue",
        year: 2024,
      },
    ],
    type: "car",
    wheel: 4,
  },
  {
    model: [
      {
        name: "Honda",
        color: "Black",
        year: 2025,
      },
      {
        name: "Honda",
        color: "Blue",
        year: 2024,
      },
    ],
    type: "car",
    wheel: 4,
  },
  {
    model: [
      {
        name: "Hero",
        color: "Black",
        year: 2025,
      },
      {
        name: "Hero",
        color: "Blue",
        year: 2024,
      },
    ],
    type: "bike",
    wheel: 2,
  },
];

// function readjson(carNmae, year) {
//   for (let i = 0; i < vehicle.length; i++) {
//     console.log(i);
//   }
// }
// readjson("BMW", 2025);

function randjson() {
  console.log(vehicle[0].model[0]);
}
