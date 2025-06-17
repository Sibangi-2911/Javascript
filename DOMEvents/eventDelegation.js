const taskList = document.getElementById("taskList");
taskList.addEventListener("click", function(event){
  if(event.target.className === 'deleteButton'){
    const task = event.target.parentElement;
    taskList.removeChild(task);
    console.log("Task deleted: ", task.textContent);
  }
});