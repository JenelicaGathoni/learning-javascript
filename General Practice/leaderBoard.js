const coders = [
  { name: "Amina", score: 78, country: "Kenya" },
  { name: "Yosef", score: 92, country: "Ethiopia" },
  { name: "Claire", score: 85, country: "Rwanda" },
  { name: "Brian", score: 92, country: "Kenya" },
  { name: "Zuri", score: 85, country: "Ethiopia" },
];

function sortByScore(list) {
  return list.sort(function (a, b) {
    return b.score - a.score;
  });
}
// console.log(sortByScore(coders));

function sortByName(list) {
  return list.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}
// console.log(sortByName(coders));

function sortByCountry(list) {
  return list.sort(function (a, b) {
    return a.country.localeCompare(b.country);
  });
}
// console.log(sortByCountry(coders));

function sortLeaderBoard(coders) {}
