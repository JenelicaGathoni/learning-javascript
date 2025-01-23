// loops offer a quick and easy way to do something repeatedly\
// Telling someone to go five steps to the East
for (let step = 0; step < 5; step++) {
  console.log("Walking East one step");
}
// for loops
//  for(initialisation; condition; afterthought ) statement
function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
