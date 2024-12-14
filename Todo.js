document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
  
    addTaskButton.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const taskItem = document.createElement("li");
  
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          taskList.removeChild(taskItem);
        });
  
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
  
        taskList.appendChild(taskItem);
        taskInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    });
  
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTaskButton.click();
      }
    });
  });
  