class Pet {

  // Constructor
  constructor(animal, age) {
    this.animal = animal;
    this.age = age;
  }

  // Method
  giveBreed(breed) {
    this.breed = breed;
  }

  // Getters - Props that are dynamic
  get activity() {
    const today = new Date();
    const hour = today.getHours();
    if ( hour > 8 && hour < 20) {
      return 'Playing';
    } else {
      return 'Sleeping';
    }
  }

  get owner() {
    return this._owner;
  }

  // Setters - Set new Props
  set owner(owner) {
    this._owner = owner;
    console.log(`setter called: ${owner}`);
  }

}

class Owner {

  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }

  get phone() {
    return this._phone;
  }

}



// Step 1
const poti = new Pet('Dog', 4);
console.log(poti);

// Step 2
poti.giveBreed('Caniche Toy');
console.log(poti);

// Step 3
console.log(poti.activity);

// Step 4
poti.owner = new Owner('Pepita', 'Calle 86 #11-85');
poti.owner.phone = '311240-5533';
console.log(poti.owner);

// Step 5
