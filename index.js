document.addEventListener("DOMContentLoaded", () => {
  
});
let form = document.querySelector('#create-list-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let todo = document.getElementById('new-list-description').value
    buildMyShoppingList(MyShoppingList)
    form.reset()
  });


function buildMyShoppingList(MyShoppingList) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = todo  
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}