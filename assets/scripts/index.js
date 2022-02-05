const listElement= document.getElementById('ul');
const inputNewItemElement = document.getElementById('inputNewItem');
const btnNewItemElement = document.getElementById('btnNewItem');

function insertListItem() {
    const li = `
    <li class="list-group-item">
      ${inputNewItemElement.value}
      <button class="btn btn-sm btn-danger">-</button>
    </li>`;
  
    listElement.insertAdjacentHTML("beforeend", li);
  }
  

  btnNewItemElement.addEventListener("click", () => {

insertListItem();

inputNewItemElement.value = "";

inputNewItemElement.focus();
});


document.addEventListener("click", (event) => {
    const deleteButtonElement = event.target;

    if (deleteButtonElement.classList.contains("btn-danger")) {

      const li = deleteButtonElement.parentElement;
  
      listElement.removeChild(li);
    }
  });

