let myTextArea = document.getElementById("myTextArea");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let myNotesList = document.getElementById("myNotesList");

addBtn.onclick = function () {
   let noteText = myTextArea.value;

   let li = document.createElement("li");
   li.textContent = noteText;

   let deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";

   deleteBtn.onclick = function () {
    myNotesList.removeChild(li);
   }

   li.appendChild(deleteBtn);
   myNotesList.appendChild(li);

   myTextArea.value = "";
}

clearBtn.onclick = function () {
    myNotesList.innerHTML = "";
}