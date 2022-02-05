const addBtn = document.getElementById("addBtn");
const addItemText = document.getElementById("addItemText");
const ul = document.getElementById("ul");
const listArr = ["Banana", "Pão", "Acúcar", "Café"];

ul.addEventListener("load", renderList(listArr));

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-danger")) {
    removeItem(event.target.parentNode.innerText.replace(/\n-/, ""));
  }
});

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
  listArr.splice(listArr.indexOf(item), 1);
  renderList(listArr);
}

function renderList(arr) {
  ul.innerHTML = "";
  arr.map((current, index) => {
    // const li = `<li id='${index}' class="list-group-item d-flex justify-content-between">${current} <button class="btn btn btn-danger" onclick= "removeItem('${current}')" >-</button> </li>`;
    const li = `<li id='${index}' class="list-group-item d-flex justify-content-between">${current} <button class="btn btn btn-danger"  >-</button> </li>`;
    ul.insertAdjacentHTML("beforeend", li);
  });
}
