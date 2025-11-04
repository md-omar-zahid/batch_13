const vehicle = [
  { name: "Bmw", type: "car", wheel: 4 },
  {
    name: "Honda",
    type: "car",
    wheel: 4,
  },
  {
    name: "Hero",
    type: "Byke",
    wheel: 2,
  },
];

function readjson() {
  console.log(vehicle[0].name);
  console.log(vehicle[2].type);
  console.log(vehicle[2]["name"]);
}
readjson();
