// create a factory function that generates different types of vehicles. Each vehicle object should have properties like type, brand, model, and year.

function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}

const crush = createVehicle("Car", "Ford", "Mustang(First Generation)", 1966);
console.log(crush);
