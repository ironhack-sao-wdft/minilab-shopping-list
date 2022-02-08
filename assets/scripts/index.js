// 1o - criar os elementos necessários: input, botao e ul
let btnNewItemElement = document.getElementById("listBtn")
let newItemElement = document.getElementById("listContent")
let listElement = document.getElementById("list")

// 2o - Referenciar o input e a ul ao botão

// Jeito 1:
function createListItem() {
    const li = document.createElement('li')
    li.innerText = newItemElement.value
    listElement.appendChild(li)
}

// Jeito 2(recomendado):
function insetListItem() {
    const li = `
    <li class="list-group-item list-group-item-action d-flex justify-content-between">
    ${newItemElement.value}
    <button class="btn btn btn-danger">-</button>
    </li>`;

    listElement.insertAdjacentHTML("beforeend", li);
}
btnNewItemElement.addEventListener("click", () => {
    console.log(newItemElement.value);
    insetListItem();
    newItemElement.value = "";
    newItemElement.focus();

})
// 3o - detectar o click
// 4o - ao clicar extrair o valor do input
// 5o - adicionar outra linha de texto - criar um novo li dentro da mesma ul
// 6o - selecionar os botões -, para apagar itens da lista
    
    document.addEventListener("click", (event) => {
        const deleteButtonElement = event.target

        if (event.target.classList.contains("btn-danger")) {
            const li = deleteButtonElement.parentElement;
            listElement.removeChild(li);
        }
    })