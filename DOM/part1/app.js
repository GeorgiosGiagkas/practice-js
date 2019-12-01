// let val;

// val = document;

// //gives collection (like an array but has not all methods of an array)
// val = document.all;
// //access elements of the collection
// val = document.all[1];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;

// val =document.images;

// val =document.scripts;
// val =document.scripts[0].getAttribute("src");


// let scripts = document.scripts;
// let scriptsArray = Array.from(scripts);

// scriptsArray.forEach(
//     function(s){
//         console.log(s.getAttribute("src"));
//     }
// );

// console.log(val);


/*
*************************************************************************
*/


// //Selectors for single elements:

// let val;

// //document.getElementById
// val=document.getElementById("task-title");

// //get things
// val= document.getElementById("task-title").id;
// val= document.getElementById("task-title").innerHTML;
// //channge style
// // document.getElementById("task-title").style.background = "gray";
// // document.getElementById("task-title").style.color = "white";
// // document.getElementById("task-title").style.display = "none";

// //change content
// document.getElementById("task-title").textContent = "Task List";
// document.getElementById("task-title").innerText = "My Tasks";
// document.getElementById("task-title").innerHTML = "<span style='color:red'>Task List</span>";



// //querySelector();
// val = document.querySelector("h5");
// val = document.querySelector("#task-title");
// val = document.querySelector(".card-title");

// document.querySelector("li").style.color ="red";//the first element
// document.querySelector("ul li").style.color = "red";//same
// document.querySelector("li:nth-child(3)").style.color = "yellow";//select specific element using pseudo-classes
// document.querySelector("li:last-child").style.color = "pink";
// document.querySelector("li:nth-child(4)").textContent = "Hell)Oo0oX0";

// console.log(val);




/*
*************************************************************************
*/


// //Selectors for multimple elements:

// //document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");

// console.log(items);
// console.log(items[0]);

// //access like an array
// items[1].textContent = "Hello";

// //select all items in a class from specific element (or better of ID)
// const listItems = document.querySelector("ul").getElementsByClassName("collection-item");
// console.log(listItems);


// // //document getElementsByTagName

// let lis = document.getElementsByTagName("li");
// console.log(lis);

// //convert HTML Collection into array
// let lisArray = Array.from(lis);

// lisArray.forEach(
//     function(l){
//         console.log(l);
//         l.style.color="red";
//     }
// );

// //querySelectorAll() ->NodeList
// const items = document.querySelectorAll("ul.collection li.collection-item");

// console.log(items);

// items.forEach(
//     function(item){
//         console.log(item);
//     }
// )

// const itemsOdd = document.querySelectorAll("li:nth-child(odd)");
// const itemsEven = document.querySelectorAll("li:nth-child(even)");

// itemsOdd.forEach(
//     function(item){
//         item.style.background = "gray";
//     }
// )

// for(let i =0;i<itemsEven;i++){
//     itemsEven[i].style.background="#f4f4f4";
// }



/*
*************************************************************************
*/

// //traversing the dom

// let val;

// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = list;
// val = listItem;

// //get child nodes
// val = list.childNodes;//notice text between <li></li> although it is empty
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// //types:
// //1 - Element
// //2 - Attribute (deprecated)
// //3 - text node
// //8 - comment
// //9 - document
// //10 - doctype

// val = list.firstChild;


// //get child element nodes
// val = list.children;//html collection
// val = list.children[0];
// list.children[1].textContent = "hell";

// //children of children
// val = list.children[0].children;
// list.children[0].children[0].id="JS-added ID";

// val= list.firstElementChild;
// //count child elements
// val= list.childElementCount;


// //get parent node (same)
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// //get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// //get previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

/*
*************************************************************************
*/


// //create elements

// const li = document.createElement("li");

// //add class
// li.className = "collection-item";
// //add id
// li.id = "new-item";
// //add attribute
// li.setAttribute("title","New Item");

// //create text node and append
// let textNode = document.createTextNode("Hello world");
// li.appendChild(textNode);

// //create new link element
// const link = document.createElement("a");
// //add class
// link.className="delete-item secondary-content";
// //add icon. Inner html (no text, so no textnode)
// link.innerHTML = '<i class="fa fa-remove"></i>';

// //append to li
// li.appendChild(link);

// //append li as child to ul
// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

/*
*************************************************************************
*/

// //REPLACE

// //create element
// const  newHeading = document.createElement("h2");
// //id
// newHeading.id = "task-title";
// //textNode
// newHeading.appendChild(document.createTextNode("Task List"));


// //get the old heading
// const oldHeading = document.getElementById("task-title");

// //parent
// const cardAction = document.querySelector(".card-action");

// //Replace:
// cardAction.replaceChild( newHeading, oldHeading);
// console.log(newHeading);







// //REMOVE
// const lis = document.querySelectorAll("li");
// const list = document.querySelector("ul");

// //remove list item
// lis[0].remove();

// //remove child
// list.removeChild(lis[3]);



// //Classes and attributes

// const firstLi = document.querySelector("li:first-child");
// const link = firstLi.children[0];


// //class
// let val;
// val = link.className;
// val = link.classList;

// link.classList.add("test");
// link.classList.remove("test");
// val = link;


// //attributes
// val = link.getAttribute("href");
// val = link.setAttribute("href","http://google.com");

// link.setAttribute("title","Google");
// val = link.hasAttribute("title");

// link.removeAttribute("title");


// console.log(val);



/*
*************************************************************************
*/

//EVENTS

// document.querySelector(".clear-tasks").addEventListener("click",
//     function(e){//anonymus callback function
//         console.log("Hello world!");
//         e.preventDefault();
//     }
// );


// //or
// document.querySelector(".clear-tasks").addEventListener("click",onClick);
// function onClick(e){
//     console.log("Clicked!");
//     e.preventDefault();
//     let val;
//     val =e;
    
//     //event target element
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     //e.target.innerHTML="Changed!"

//     //type
//     val  = e.type;
//     //timestamp
//     val = e.timeStamp;

//     //coordinates relative to window
//     val = e.clientY;
//     val = e.clientX;

//     //coordinates relative to element itself
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }



/*
*************************************************************************
*/

// //mouse events

// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// //click
// clearBtn.addEventListener("click", runEvent);
// //doubleclick
// clearBtn.addEventListener("dblclick",runEvent);

// //mouse down
// clearBtn.addEventListener("mousedown", runEvent);


// //mouse up
// clearBtn.addEventListener("mouseup", runEvent);

// //mouse enter
// card.addEventListener("mouseenter", runEvent);//only in parent
// //mouse leave
// card.addEventListener("mouseleave", runEvent);//only in parent

// //mouseover
// card.addEventListener("mouseover", runEvent);//also in child elements
// //mouseout
// card.addEventListener("mouseout", runEvent);//also in child elements


// //mousemove
// card.addEventListener("mouseover",runEvent);




// function runEvent(e){
//     e.preventDefault();
//     console.log(`EVENT TYPE: ${e.type}`);
//     heading.textContent = `MouseX:${e.offsetX}, MouseY:${e.offsetY}`;
//     document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
// }



/*
*************************************************************************
*/

//Keyboard and input EVENTS

// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h5");

// //clear input
// taskInput.value = "";

//form.addEventListener("submit",runEvent);

//taskInput.addEventListener("keydown",runEvent);
//taskInput.addEventListener("keyup",runEvent);
//taskInput.addEventListener("keypress",runEvent);


//focus  (click inside the form)
//taskInput.addEventListener("focus",runEvent);


//blur (click outside the form)
//taskInput.addEventListener("blur",runEvent);

//cut, copy, paste
// taskInput.addEventListener("cut",runEvent);
// taskInput.addEventListener("copy",runEvent);
// taskInput.addEventListener("paste",runEvent);

//change (works with select, when we change between options. This html file does not have a select element)
//ex. const select = document.querySelector("select");
//ex. select.addEventListener("change", runEvent);

// function runEvent(e){
//     //e.preventDefault();
//     //heading.innerText=e.target.value;
//     //console.log(e.target.value);
//     console.log(`EVENT TYPE: ${e.type}`);
//     // console.log(taskInput.value);
// }



/*
*************************************************************************
*/

// //Event BUbbling and Delegation

// //bubbling (by clicking the child -> events trigger for parent)
// document.querySelector(".card-title").addEventListener("click",
//     function(){
//         console.log("card-title");
//     }
// )

// document.querySelector(".card-content").addEventListener("click",
//     function(){
//         console.log("card-content");
//     }
// )
// document.querySelector(".card").addEventListener("click",
//     function(){
//         console.log("card");
//     }
// )
// document.querySelector(".col").addEventListener("click",
//     function(){
//         console.log("col");
//     }
// )



// //event delegation (opposite of bubbling)

// //without delegation
// const delItem = document.querySelector(".delete-item");//one the first
// delItem.addEventListener("click",deleteItem);
// function deleteItem(){
//     console.log("delete item");
// }


//EVENT delegation

// document.body.addEventListener("click",deleteItem);

// function deleteItem(e){
//     // if(e.target.parentElement.className ==="delete-item secondary-content"){
//     //     console.log("delete item");
//     // }

    
//     // const myArray = e.target.parentElement.classList;
//     // for(let i in myArray){
//     //     if(myArray[i]==="delete-item"){
//     //         console.log("delete item");
//     //     }
//     // }


//     //or better
//     if(e.target.parentElement.classList.contains("delete-item")){
//         console.log("delete-item");
//         e.target.parentElement.parentElement.remove();
//     }
// }



/*
*************************************************************************
*/

// //session storage and local storage

// //set local storage
// //key in string and value in string!!
// window.localStorage.setItem("name","John");

// //set session storage
// window.sessionStorage.setItem("name","Beth");
// //remove
// window.sessionStorage.removeItem("name");



// //get value from item
// const name = window.localStorage.getItem("name");
// console.log(name);

// //clear local storage
// window.localStorage.clear();



// document.querySelector("form").addEventListener("submit",
//     function(e){
//         const task = document.getElementById("task").value;
//         // window.localStorage.setItem("task",task);

//         let tasks;//array


//         if(window.localStorage.getItem("tasks")===null){
//             tasks=[];
//         }else{
//             //convert from JSON format 
//             tasks=JSON.parse(localStorage.getItem("tasks"));
//         }

//         tasks.push(task);//append task to tasks array

//         //save tasks to local storage in JSON format (key is "tasks", value is the array in JSON format)
//         window.localStorage.setItem("tasks",JSON.stringify(tasks));

//         alert("Task saved!");

//         e.preventDefault();
//     }
// )

// const tasks = JSON.parse(window.localStorage.getItem("tasks"));

// if(tasks!==null){
//     tasks.forEach(
//         function(item){
//             console.log(item);
//         }
//     )
// }



