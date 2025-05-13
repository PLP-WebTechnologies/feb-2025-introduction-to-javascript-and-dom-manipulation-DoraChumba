// Function to change text content dynamically
function changeText() {
  document.getElementById("demo").textContent = "The text has been changed!";
}

// Function to modify CSS styles via JavaScript
function changeStyle() {
  const demoParagraph = document.getElementById("demo");
  demoParagraph.classList.toggle("highlight");
}

// Function to add a new element dynamically
function addElement() {
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph added by JavaScript.";
  newPara.className = "added";
  document.getElementById("output").appendChild(newPara);
}

// Function to remove the last added element
function removeElement() {
  const outputDiv = document.getElementById("output");
  const lastChild = outputDiv.lastElementChild;

  if (lastChild) {
    outputDiv.removeChild(lastChild);
  } else {
    alert("No elements to remove!");
  }
}
