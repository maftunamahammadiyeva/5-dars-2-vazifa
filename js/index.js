const markMass = Number(prompt("Markning vazningizni kiriting"));
const markHeight = Number(prompt("Markning bo'yingizni kiriting"));
const johnMass = Number(prompt("Johnning vazningizni kiriting"));
const johnHeight = Number(prompt("Johnning bo'yingizni kiriting"));
const markHeightmeter= (markHeight/100);
const johnHeightmeter= (johnHeight/100);
const markBmi = (markMass/(markHeightmeter**2));
const johnBmi = (johnMass/(johnHeightmeter**2));
console.log(markBmi);
console.log(johnBmi);
if (markBmi>=johnBmi) {
console.log("Markning BMI katta");
} else{
  console.log("Johnning BMI katta");
}
