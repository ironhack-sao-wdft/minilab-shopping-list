const addBtn = document.getElementById("addBtn");
const addItemText = document.getElementById("addItemText");
const ul = document.getElementById("ul");
const listArr = ["Banana", "Pão", "Acúcar", "Café"];

ul.addEventListener("load", renderList(listArr));

addBtn.addEventListener("click", (_) => {
  addItem(addItemText.value);
  addItemText.value = "";
  addItemText.focus();
});

function addItem(item) {
  listArr.push(item);
  renderList(listArr);
}
function removeItem(item) {
  listArr.splice(listArr.indexOf(item.toString()), 1);
  renderList(listArr);
}

function renderList(arr) {
  ul.innerHTML = "";
  arr.map((current, index) => {
    const li = `<li id='${index}' class="list-group-item d-flex justify-content-between">${current} <button class="btn btn btn-danger" onclick= "removeItem('${current}')" >-</button> </li>`;
    ul.insertAdjacentHTML("beforeend", li);
  });
}
