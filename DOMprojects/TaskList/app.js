// define UI variables

const form = document.querySelector("#task-from");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");


loadEventListeners();


function loadEventListeners(){

    //DOM load event
    document.addEventListener("DOMContentLoaded",getTasks);


    //add task event
    form.addEventListener("submit",addTask);
    //remove task event
    taskList.addEventListener("click",removeTask);
    //clear tasks
    clearBtn.addEventListener("click", clearTasks);
    //fiter
    filter.addEventListener("keyup", filterTasks);
    
}


//get Tasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks=[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(
        function(task){
            //create li element
            const li = document.createElement("li");
            li.className="collection-item";
            li.appendChild(document.createTextNode(task));

            //create new link 
            const link = document.createElement("a");
            //add class delete-item
            link.className="delete-item secondary-content"
            //add icon
            link.innerHTML="<i class='fa fa-remove'></li>";

            li.appendChild(link);

            taskList.appendChild(li);
        }
    )
}


function addTask(e){
    e.preventDefault();

    if(taskInput.value===""){
        alert("Add a task!")
    }

    //create li element
    const li = document.createElement("li");
    li.className="collection-item";
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link value
    const link = document.createElement("a");
    //add class delete-item
    link.className="delete-item secondary-content";
    //add icon\
    link.innerHTML="<i class='fa fa-remove'></i>";

    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input
    taskInput.value="";


    
}


function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);//add task to tasks array

    //store to LS
    localStorage.setItem("tasks", JSON.stringify(tasks));

}




function removeTask(e){
    //event delegation
    //tarket is i element, and parent element is a element
    if(e.target.parentElement.classList.contains("delete-item")){
        if(confirm("Are you sure you want to remove this task?")){
            //remove li
            e.target.parentElement.parentElement.remove();
            //remove task from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem("tasks")===null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(
        function(task, index){
            if(taskItem.textContent === task){
                tasks.splice(index,1);
            }
        }
    )

    localStorage.setItem("tasks", JSON.stringify(tasks));



}



function clearTasks(){
    //taskList.innerHTML="";

    //faster approach
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    //clear local storage
    localStorage.clear();

}


function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) !== -1){
                task.style.display="block";
            }
            else{
                task.style.display="none";
            }
        }
    )
    
}