const btnNewItemElement = document.getElementById("btnNewItem");
const inputNewItemElement = document.getElementById("inputNewItem");
const ulElement = document.getElementById("ul");

// Função para eventualmente ser reaproveitada
function insertListItem() {
  const li = `
<li class="list-group-item d-flex justify-content-between">
${inputNewItemElement.value}
<button class="btn btn btn-danger">-</button>
</li>
`;

  ulElement.insertAdjacentHTML("beforeend", li);
}

// ouvir o click do do botão e inserir o elemento novo invocando a função
btnNewItemElement.addEventListener("click", () => {
  insertListItem();
  // limpar o input e trazer o foco do teclado de volta pra ele
  inputNewItemElement.value = "";
  inputNewItemElement.focus();
});

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "Enter") {
    insertListItem();
    inputNewItemElement.value = "";
    inputNewItemElement.focus();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-danger")) {
    const li = event.target.parentElement;
    ulElement.removeChild(li);
  }
});
