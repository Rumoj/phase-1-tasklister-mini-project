document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //step 2: seleect the form and add a submit listener
// Step 2: select the form and add a submit listener
const form = document.querySelector("#create-task-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  // Step 3: gather the form data
  const newTask = document.querySelector("#new-task-description").value;
  buildToDo(newTask);

  event.target.reset(); // clear the input after submission
});

// Step 4: build the list item and display it on the page
function buildToDo(todo) {
  const li = document.createElement("li");
  li.textContent = todo;
  document.querySelector("#tasks").appendChild(li);
}
});
