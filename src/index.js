const { library } = require("webpack");

console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");


class book 
{
    constructor (id,title, author, read) 
    {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library 
{
    constructor () 
    {
        this.bookCount = 2;
        this.books = 
        [
            {
                id: 1,
                title: "Naked in Death",
                author: "JD Robb",
                read: true,
            }
        ];
        this.markRead = this.markRead.bind(this);
        this.addBookButton = this.addBookButton.bind(this);
    }


    markRead(checkBox) 
    {
        for(let book of library.books) 
        {
            if (book.id == checkbox.id)
            {
                console.log(checkbox);
                book.read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        }   
    }

    addABook()
    {
        let title = document.getElementById("titleIn").value;
        let author = document.getElementById("authorIn").value;
        let read = document.getElementById ("readPropertyCheckBos").checked;

        let newBook = new book(this.bookCount, title, author, read);
        this.books.push(newBook);

        let newRow = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = newBook.title;
        
        let td2 = document.createElement("td");
        td2.textContent = newBook.author;

        let td3 = document.createElement("td");
        let checkBoxx = document.createElement("input");
        checkBoxx.id = this.bookCount;
        checkBoxx.type = "checkbox";
        checkBoxx.checked = newBook.read;
        checkBoxx.disabled = newBook.read;
        checkBoxx.addEventListener("click", () => library.markRead(checkBoxx));
        td3.appendChild(checkBoxx);

        newRow.appendChild(td1);
        newRow.appendChild(td2);
        newRow.appendChild(td3);
        let tableBody = document.querySelector("tbody");
        tableBody.appendChild(newRow);

        this.bookCount++;
    }
}

let library = new Library();

let button = document
    .getElementById("addBookButton")
    .addEventListener("click", () =>
        library.addBookButton(library.books, library.bookCount)
    );