const textInputArea = document.getElementById('text-input-area');
const buttonAdd = document.getElementById('button-addon2');
const ulElements = document.getElementById('ul'); 


function insertListItem() {
    const li = `
    <li class="list-group-item d-flex justify-content-between">
      ${textInputArea.value}
      <button class="btn btn btn-danger">-</button>
    </li>`;
  
    ulElements.insertAdjacentHTML('beforeend', li);
  }
  
  buttonAdd.addEventListener('click', () => {
    
    insertListItem();
  
    textInputArea.value = "";
  
    textInputArea.focus();
  });

  document.addEventListener("click", (event) => {
    const deleteButtonElement = event.target;
  
   
    if (deleteButtonElement.classList.contains("btn-danger")) {
      
  
      const li = deleteButtonElement.parentElement;
  
      ulElements.removeChild(li);
    }
  });


