const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const AddToDoBtn = document.getElementById("toDoAddBtn");
const addToDo = () => {
  let inputVal = inputBox.value;
  console.log(inputVal);
  if (inputVal == "") {
    alert("Please enter some value to add!");
  } else {
    let listItem = document.createElement("li");
    listItem.innerHTML = inputVal;
    listContainer.appendChild(listItem);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    listItem.appendChild(span);
  }
  inputBox.value = "";
  SaveData();
};
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      SaveData();
    }
  },
  false
);
function SaveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
AddToDoBtn.addEventListener("click", addToDo);
getData();
