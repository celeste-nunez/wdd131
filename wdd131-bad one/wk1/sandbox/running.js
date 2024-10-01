const apples = 5;
const oranges = 3;
let total = apples + oranges;
console.log("total:", total);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);