const vehicle = [
  {
    model: [
      { name: "BMW", color: "Black", year: 2025 },
      { name: "BMW", color: "Blue", year: 2024 },
    ],
    type: "car",
    wheel: 4,
  },
  {
    model: [
      { name: "Honda", color: "yellow", year: 2020 },
      { name: "Honda", color: "pink", year: 2021 },
    ],
    type: "car",
    wheel: 4,
  },
  {
    model: [
      { name: "Hero", color: "blue", year: 2024 },
      { name: "Hero", color: "black", year: 2025 },
    ],
    type: "bike",
    wheel: 2,
  },
];

function readjson(carName, year) {
  for (let i = 0; i < vehicle.length; i++) {
    for (let j = 0; j < vehicle[i].model.length; j++) {
      if (
        vehicle[i].model[j].name == carName &&
        vehicle[i].model[j].year == year
      ) {
        console.log(vehicle[i].model[j]);
        console.log(vehicle[i]["type"]);
        console.log(vehicle[i]["wheel"]);
      }
    }
  }

  //console.log(vehicle[i]);
}
//console.log(vehicle[0].model[0]);

readjson("BMW", 2025);
