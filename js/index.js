const markMass = Number(prompt("Markning vazningizni kiriting"));
const markHeight = Number(prompt("Markning bo'yingizni kiriting"));
const johnMass = Number(prompt("Johnning vazningizni kiriting"));
const johnHeight = Number(prompt("Johnning bo'yingizni kiriting"));
const markHeightmeter= (markHeight/100);
const johnHeightmeter= (johnHeight/100);
const markBmi = (Math.floor(markMass/(markHeightmeter**2)));
const johnBmi = (Math.floor(johnMass/(johnHeightmeter**2)));
console.log(markBmi);
console.log(johnBmi);
if (markBmi>=johnBmi) {
console.log(`Markning ${markBmi} bu katta Johnikidan, uniki ${johnBmi}`);
} else{
  console.log(`Johnning ${johnBmi} bu katta Marknikidan, uniki ${markBmi}`);
}
