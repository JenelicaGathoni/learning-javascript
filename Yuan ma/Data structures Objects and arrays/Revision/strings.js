// using the slice method
let student = "Jenelica";
let nickName = student.slice(3, 6);
console.log(nickName);
//using the indexOf method
console.log(student.indexOf("e"));
let pet = "Cabrtaaty";
console.log(pet.indexOf("aa"));
//using the trim method to remove whitespace
let candidate = "   Matiangi";
console.log(candidate);
console.log(candidate.trim());
//usinng the padStart method
let reference = String(9);
let formattedReference = reference.padStart(3, "P");
console.log(reference);
console.log(formattedReference);
//Using the split and join methods
let sentence = "This is a fun way to use Javascript Methods";
let words = sentence.split(" ");
console.log(words);
let newSentence = words.join(" ");
console.log(newSentence);
//using the repeat method
let shortlaugh = "ha";
let exagerratedLaugh = shortlaugh.repeat(7);
console.log(shortlaugh);
console.log(exagerratedLaugh);
