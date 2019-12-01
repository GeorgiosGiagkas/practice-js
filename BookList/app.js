//Book contructor
function Book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn; 
}
//UI constructor
function UI(){};

UI.prototype.addBookToList = function(book){

    const list= document.getElementById("book-list");

    const row = document.createElement("tr");
    
    row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td><a href="#" class="delete">X</a></td>
                    `;

    list.appendChild(row);

    
}

//delete book
UI.prototype.deleteBook=function(target){
    if(target.className==="delete"){
        target.parentElement.parentElement.remove();
    }
}

//show alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement("div");
    //add class name
    div.className=`alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".container");
    const form = document.getElementById("book-form");
    //insert alert
    container.insertBefore(div,form);

    //timeout
    window.setTimeout(function(){
        document.querySelector(".alert").remove();
    },3000);
}

//clear fields
UI.prototype.clearFields= function(){
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("isbn").value="";
    
}

//Event Listener for add book
document.getElementById("book-form").addEventListener("submit",
    function(e){
        e.preventDefault();
        const title = document.getElementById("title").value,
             author = document.getElementById("author").value,
               isbn = document.getElementById("isbn").value;
        
        //Instantiate Book
        const book = new Book(title,author,isbn);

        //Instantiate UI
        const ui = new UI();
        

        //validate
        if(title==="" || author==="" || isbn===""){
            ui.showAlert("Please fill in all fields!", "error");
        }
        else{
            //add book to list
            ui.addBookToList(book);
            
            //success alert
            ui.showAlert("Book Added","success");

            //clear fields
            ui.clearFields();
            
        }

    }
);

//Event listener for delete. Use event delegation
document.getElementById("book-list").addEventListener("click",
    function(e){
        e.preventDefault();
        
        //create ui instance
        const ui = new UI();
        //delete
        ui.deleteBook(e.target);
        //show alert
        ui.showAlert("Book deleted!","success");
    }
    )