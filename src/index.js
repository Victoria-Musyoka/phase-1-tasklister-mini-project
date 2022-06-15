document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('task-form')
  form.addEventListener('submit', (event)=>{
    event.preventDefault()
      makeToDo(event.target.new_task_description.value)
      form.reset()
  })
});

function makeToDo(todo){
  Let Li  = document.createElement('Li');
  Let deletebtn = document.createElement('button');
  deletebtn.addEventListener('click',deleteTodo)
  deletebtn.textContent = 'done'
  Li.textContent=`${todo}`;
  Li.appendChild(deletebtn);
  console.log(li)

  document.querySelector('task').appendChild(li)
}
function deleteTodo(event){
  event.target.parentNode.remover()
}
