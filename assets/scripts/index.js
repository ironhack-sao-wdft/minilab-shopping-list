// 1.ter acesso ao textarea e o button

const textareaElement = document.getElementById("textBox");
const buttonELement = document.getElementById("button-add");
const listElement = document.getElementById("ul");

function createNewItem(){

  buttonELement.addEventListener("click", () => {
    if (textareaElement.value.length !== 0) {
      let item = `<li class='list-group-item d-flex justify-content-between'>
            ${textareaElement.value}  <button  class= 'btn btn btn-danger' > - </button>  </li>`;
      listElement.insertAdjacentHTML("beforeend", item);
    }
    textareaElement.value = "";

    textareaElement.focus();
  });
}
    createNewItem();


document.addEventListener("click", (event) => {

    const deleteButtonElement = event.target;

    if(deleteButtonElement.classList.contains("btn-danger")){

        const li = deleteButtonElement.parentElement;

        listElement.removeChild(li);
    }
});

