// 1.ter acesso ao textarea e o button

const textareaElement = document.getElementById("textBox");
const buttonELement = document.getElementById("button-add");
let product =document.getElementsByClassName("list-group-item")
let list = document.getElementById("ul");

// 2. detectar o clique do botão

buttonELement.addEventListener('click', () =>{
    if (textareaElement.value.length !== 0) {
        let item = "<li class='list-group-item d-flex justify-content-between'>" + 
            textareaElement.value + "<button  class= 'btn btn btn-danger' > -" + "</button>" + "</li>"; ;
        list.innerHTML = list.innerHTML + item;
    }
});
// extrair o que foi digitado


// atualizar a lista de produtos

 