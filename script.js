let cookbook = [];
let pantry = [];

class Food {
  constructor(name, brand, quantity = 0, calories = undefined) {
    this.name = name;
    this.brand = brand;
    this.quantity = quantity;
  }

  getName() {
    return this.name;
  }
  getBrand() {
    return this.brand;
  }
  getQuantity() {
    return this.quantity;
  }

  setName(n) {
    this.name = n;
  }
  setBrand(n) {
    this.brand = n;
  }
  setQuantity(n) {
    this.quantity = n;
  }

  useQuantity(qt) {
    this.quantity -= qt;
  }
}

class Receipe {
  constructor(foods, TotalQuantities, servings, prep, cook, totalCal) {
    this.foods = foods;
    this.TotalQuantites = TotalQuantities;
    this.servings = servings;
    this.quantitesPServing = Math.round(this.TotalQuantites / this.servings);
    this.prep = prep;
    this.cook = cook;
    this.totalCalories = totalCal;
    this.calPServing = Math.round(this.totalCal / this.servings);
  }
  eat(servings) {
    for (let food in foods) {
      for (let f in pantry) {
        if (f == food) {
          f.useQuantity(servings * this.quantitiesPServing);
        }
      }
    }
  }
}
