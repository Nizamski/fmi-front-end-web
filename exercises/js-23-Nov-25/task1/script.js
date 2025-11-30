const input = document.getElementById("task-input");
const button = document.getElementById("add-btn");
const list = document.getElementById("task-list");

function addNewItem() {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        list.removeChild(this.parentElement);
    });
    deleteButton.classList.add("delete-btn");
    const newItem = document.createElement("li");
    newItem.textContent = input.value;
    newItem.setAttribute("title", "Created at" + new Date().toLocaleString());
    newItem.classList.add("task-item");
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);
    input.value = "";
}

list.addEventListener("click", function (event) {
    if (event.target && event.target.nodeName === "LI") {
        event.target.classList.add("completed");
    }
});