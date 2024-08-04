let myLibrary = [];

let savedBooks = JSON.parse(localStorage.getItem("myLibrary"));

if (Array.isArray(savedBooks)){
  myLibrary = savedBooks;
}else{
  myLibrary = [];
}

// const display = document.getElementById('display_form');

function Book(title,author,pages,read,id){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
  this.info = function(){
    return(`${this.title} by ${this.author}, ${this.pages} pages`);
  }
}

function addBookToLibrary(){
  document.getElementById('library').innerHTML='';
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;
  let id = new Date().getTime();
  let book = new Book(title,author,pages,read,id);
  myLibrary.push(book);
  saveList();
  createTable(myLibrary);
}

function createlog(){
  
}

// function delToggle(){
//   document.getElementById('btn_del').classList.replace('btn_del', 'btn_del--visible');
// }

function deleteItem(){
  document.getElementById('library').innerHTML='';
  let bookTitle = document.getElementById("title").value;
  let bookId = document.getElementById('id').value;
  console.log(bookId);
  myLibrary = myLibrary.filter((abook)=>{
    if (bookTitle === abook["title"] || bookId==abook["id"]){
      return false;
    }else{
      return true;
    }
  }
  )
  saveList()
  createTable(myLibrary);
}


function saveList(){
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function createTable(myLibrary){
  const table = document.getElementById('library');
  const header = table.insertRow();
  const header1 = header.insertCell();
  const header2 = header.insertCell();
  const header3 = header.insertCell();
  const header4 = header.insertCell();
  const header5 = header.insertCell();

  header1.textContent = 'TITLE';
  header2.textContent = 'AUTHOR';
  header3.textContent = 'PAGES';
  header4.textContent = 'READ';
  header5.textContent = 'ID';

  myLibrary.forEach(element => {
    const delElement = document.createElement("button");
    delElement.textContent= "Delete";
    delElement.setAttribute("id", element.id);

    delElement.addEventListener("click", (e)=>{
      document.getElementById('library').innerHTML='';
      const deleteId = e.target.id;
      myLibrary= myLibrary.filter(book2delete=>{
        if (book2delete.id == deleteId){
          return false;
        }else{
          return true;
        }
      })
      saveList()
      createTable(myLibrary);
    })
    
    const bookRow = table.insertRow();
    const col1 = bookRow.insertCell();
    const col2 = bookRow.insertCell();
    const col3 = bookRow.insertCell();
    const col4 = bookRow.insertCell();
    const col5 = bookRow.insertCell();
    const col6 = bookRow.insertCell();

    col1.textContent = element.title;
    col2.textContent = element.author;
    col3.textContent = element.pages;
    col4.textContent = element.read;
    col5.textContent = element.id;
    col6.appendChild(delElement);
    });
}
createTable(myLibrary);

// const btnToggle = document.getElementById('btn');
// const tableForm = document.querySelector('form');
// btnToggle.addEventListener('click', ()=>{
//   tableForm.classList.replace('form', 'formToggle');
// })
const btn2form = document.querySelector("#btn");
const btn2formDel = document.querySelector("#btn1");

const dialog = document.querySelector("#dialog");
const dialog1 = document.querySelector("#dialog1");
const form = dialog.querySelector("#form");
const form1 = dialog.querySelector("#form1");
const title = form.querySelector("#title");
const author = form.querySelector("#author");
const pages = form.querySelector("#pages");
const read = form.querySelector("select #read");

btn2form.addEventListener("click", ()=>{
  dialog.showModal();
});
btn2formDel.addEventListener("click", ()=>{
  dialog1.showModal();
});