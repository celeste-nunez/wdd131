//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// const grades = ["A", "B", "C", "D"]
// function convertGrade(grade) {
//     let point = 0;
//     if (grade === "A")
// }

