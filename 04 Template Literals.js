/*
  Template Literals [Template Strings]
*/

let fullName = "Jhon Do";

function makeUpperCase(word) {
  return word.toUpperCase();
}

let template = `<h1> ${makeUpperCase("Hello")}  ${fullName}</h1> 
		<p>this is template literals from javascript</p>
		<h4>thanks for comming </h4>`;

document.getElementById("template").innerHTML = template;
