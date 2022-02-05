const item = document.getElementById("itemInput");
const btnMore = document.getElementById("btn");
const list = document.getElementById("ul");

btnMore.addEventListener("click", () => {
  const entry = `<li class="list-group-item d-flex justify-content-between">
  ${item.value} <button class="btn btn btn-danger">-</button>
</li>`;
  list.insertAdjacentHTML("beforeend", entry);

  item.value = " ";
  item.focus();
});

document.addEventListener("click", (event) => {
  const deleteButtonElement = event.target;
  if (deleteButtonElement.classList.contains("btn-danger")) {
    const li = deleteButtonElement.parentElement;
    list.removeChild(li);
  }
});
