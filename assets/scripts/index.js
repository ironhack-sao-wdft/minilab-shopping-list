

function addNewItem() {
    const newItemInput = document.getElementById('new-item')
    if(!newItemInput.value) {
        alert('Opa, não tem valor')
        return
    }
    const li = document.createElement('li')
    li.setAttribute('class', 'list-group-item d-flex justify-content-between')
    const liContent = `
    ${newItemInput.value} <button class="btn btn-remove btn-danger">-</button>
    `
    li.innerHTML = liContent
    const ul = document.querySelector('ul')
    ul.appendChild(li)

    newItemInput.value= ''


}
const ulElement = document.getElementById("ul")
document.addEventListener("click", (event) => {
    const deleteLi = event.target;
    if (deleteLi.classList.contains("btn-danger")) {
      const li = deleteLi.parentElement;
      ulElement.removeChild(li);
    }
  });

window.addEventListener('load', () => {
    const btn = document.getElementById('btn-add-item')
    btn.addEventListener('click', addNewItem)

})
