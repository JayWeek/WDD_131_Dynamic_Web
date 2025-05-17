const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");
const li = document.createElement("li");
const deleteButton = document.createElement('button')

li.textContent = input.value;
deleteButton.textContent = 'X'

li.append(deleteButton);
list.append(li);

button.addEventListener('click', function(){
    if (input.value.trim() !== ""){
        console.log("Not empty");
        input.focus();
    }
    else{
        console.log("Empty");
        input.focus();
    }

});

deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
    input.value = '';
});

