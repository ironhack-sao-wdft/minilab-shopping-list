
const btnNewItemElement = document.getElementById("btnNewItem");
const inputNewItemElement = document.getElementById("inputNewItem");
const listElementUl = document.getElementById("ul");

function insertListItem() {
  const li = `
  <li class="list-group-item d-flex justify-content-between">
    ${inputNewItemElement.value}
    <button class="btn btn btn-danger">-</button>
    </li>`;

  listElementUl.insertAdjacentHTML("beforeend", li);
}

btnNewItemElement.addEventListener("click", () => {

insertListItem();

inputNewItemElement.value = "";

inputNewItemElement.focus();
});

document.addEventListener("click", (event) => {
  const deleteButtonElement = event.target;

  if (deleteButtonElement.classList.contains("btn-danger")) {
    
    const liTargeted = deleteButtonElement.parentElement;

    listElementUl.removeChild(liTargeted);
  }
  
});