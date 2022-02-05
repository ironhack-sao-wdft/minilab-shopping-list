// selecionar tags
const inputElemenArea = document.getElementById("inputArea");
const ulElement = document.getElementById("ul");
const btnElement = document.getElementById("btn");

//função para adicionar uma LI
function insertLi() {
  const li = `
    <li class="list-group-item d-flex justify-content-between">
    ${inputElemenArea.value}
    <button class="btn btn-danger">-</button>
    </li>`;
  ulElement.insertAdjacentHTML("beforeend", li);
}
//criar listener para adicionar
btnElement.addEventListener("click", () => {
  insertLi();
  inputElemenArea.value = "";
  inputElemenArea.focus();
});

//criar um listener para deletar, o evento deve escutar o documento
document.addEventListener("click", (event) => {
  const deleteLi = event.target;
  if (deleteLi.classList.contains("btn-danger")) {
    const li = deleteLi.parentElement;
    ulElement.removeChild(li);
  }
});
