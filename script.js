//Initilize task array

let tasks = [];

//create function addTask()

function addTask(){
    const input = document.getElementById("task-input");
    const task = input.value.trim();
    console.log(task);

    //check for blank text 

    if(task !== ""){
        tasks.push(task);
        input.value = "";
        console.log(tasks);
        displayTasks();
    }
}

//to diplay tasks items

function displayTasks(){
    const taskList = document.getElementById('taskList');
    let html='';
    for(let i=0; i<tasks.length; i++){
        html += `
            <div class="task-item">

            <span class= "task-text"> ${i+1} ${tasks[i]} </span>
            <div class= "button-group">
                <button class = "edit-btn" onclick = "editTask(${i})"> edit </button> 
                <button class = "delete-btn" onclick = "deleteTask(${i})"> delete </button>
            </div>

            </div>
        `;
    }
    taskList.innerHTML = html;
    console.log(tasks);
}

function editTask(index){
    const newTask = prompt('edit task: ', tasks[index]);
    /* const newTask = tasks[index]; */
    console.log(newTask);

    if(newTask !== null && newTask.trim() !== ''){
        tasks[index] = newTask.trim();
        displayTasks();
    }
    console.log(tasks)
}

//function deleteTask

function deleteTask(index){
    tasks.splice(index, 1);
    console.log(tasks);
    displayTasks();
}