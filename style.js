const todoInput = document.querySelector('#text');
const todoButton = document.querySelector('#addto');
const todoList = document.querySelector('.list');
const main = document.querySelector('.list-container');

todoButton.addEventListener("click", todos);
todoList.addEventListener("click", deleteList);



function todos(e){

  e.preventDefault();

  
  if(todoInput.value.trim().length > 5){
  main.style.display = "block";
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todos");

  const newList = document.createElement('li');
  newList.innerText = todoInput.value;
  newList.classList.add('liststyle');
  todoDiv.appendChild(newList);

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<i id="icon" class="fa fa-close"></i>';
  delBtn.classList.add('del');
  todoDiv.appendChild(delBtn);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
  console.log("Task added Succesfully.");
  }else{
    alert("Please enter a acceptable task!");
    todoInput.value = "";
  }
}


function deleteList(e){
  e.preventDefault();

  const target = e.target;
  const main = document.querySelector('.list-container');
  
  if(target.classList[0] === "del"){
    const delList = target.parentElement;
    delList.classList.add('fall');
    delList.addEventListener('transitionend', () => {
    delList.remove();
    

    console.log(main.innerText);
    
      if(main.innerText.length== 0){
        main.style.visibility = 'hidden';
      }else{
        main.style.visibility = 'visible';
      }
      
    });
  }


}