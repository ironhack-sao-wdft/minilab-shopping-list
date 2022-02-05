const btnNovoItemListaClicado = document.getElementById("btnNovoItemLista");
const inputNovoItemListaClicado = document.getElementById("inputNovoItemLista");
const listaCompleta = document.getElementById("ul");

function criarItemLista() {
    const li = `
    <li class="list-group-item d-flex justify-content-between">
        ${inputNovoItemListaClicado.value}<button class="btn btn-sm btn-danger">-</button>
    </li>`;

    listaCompleta.insertAdjacentHTML("beforeend", li);
};

btnNovoItemListaClicado.addEventListener("click", () => {
    criarItemLista();

    inputNovoItemListaClicado.value = "";

    inputNovoItemListaClicado.focus();
});

document.addEventListener("click", (event) => {
    const botaoDeDeletar = event.target;

    if (botaoDeDeletar.classList.contains("btn-danger")) {
        const li = botaoDeDeletar.parentElement;

        listaCompleta.removeChild(li);
    };
});

