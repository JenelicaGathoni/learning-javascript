/*
Imagine you’re building a superhero app. Each hero has a profile stored as an object like this:
*/
const hero = {
  jina: "Super Girl",
  power: "smiling",

  city: "earth vile",
};
/*Destructure the hero object to extract:
jina
power
rank */

let { jina = "Superhero", power = "Magical", rank = "Rookie" } = hero;

/*
Then, print this sentence using a template literal:
"Super Girl is an Elite hero with the power of smiling!" */
const article = /^[aeiou]/i.test(rank) ? "an" : "a";
console.log(`${jina} is an ${rank} hero with the power of ${power}!`);

/*When you aren’t sure whether a given value produces an object, 
 but still want to read a property from it when it does, 
 you can use a variant of the dot notation: object?.property. */
