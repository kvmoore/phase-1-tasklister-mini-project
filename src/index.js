console.log('java script file has been loaded')
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    newTask(e.target.new_task_description.value)

  }) 

});

function newTask(task) {

let p = document.createElement('p')
p.textContent = task
document.querySelector('#list').appendChild(p)
}


//console.log('The form has been submitted')
//console.log(e.target.new_task_description.value)


/*As a user, I should be able to type a task into the input field.
As a user, I should be able to click some form of a submit button.
As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.*/