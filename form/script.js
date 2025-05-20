const toDoListForm = document.querySelector("#form");
const inputTask = document.querySelector("#input-task");
const taskList = document.querySelector("#task-list");

toDoListForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (inputTask.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = inputTask.value;
    taskList.appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗙";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    inputTask.value = "";
});

document.body.style.backgroundColor = "lightblue";
document.body.style.display = "grid";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.fontFamily = "sans-serif";




