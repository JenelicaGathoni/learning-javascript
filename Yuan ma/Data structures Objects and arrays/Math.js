// when you aren't sure whether a given value produces an object, but still want to read a property  from it when it does, you can use a variant of the dot notation: object?.property
function city(object) {
  return object.adress?.city;
}
console.log(city({ adress: { city: "toronto" } }));
console.log(city({ name: "vera" }));

let string = JSON.stringify({ squirrel: false, events: ["Weekend"] });
console.log(string);
console.log(JSON.parse(string).events);
