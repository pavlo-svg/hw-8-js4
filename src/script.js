const inputRef = document.querySelector("#bookmarkInput");
const btnRef = document.querySelector("#addBookmarkBtn");
const listRef = document.querySelector("#bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderList() {
const markup = bookmarks
    .map((url, index) => {
      return `
        <li>
          <a href="${url}" target="_blank">${url}</a>
          <button type="button" data-index="${index}">X</button>
        </li>`;
    })
    .join("");
  listRef.innerHTML = markup;
}

btnRef.addEventListener("click", (evt) => {
  const value = inputRef.value.trim();
  if (!value) {
    return;
  };

  bookmarks.push(value);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  renderList();
  inputRef.value = "";
});

listRef.addEventListener("click", (evt) => {
  if (evt.target.nodeName === "BUTTON") {
    const index = evt.target.dataset.index;
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderList();
  }
});

renderList();


const nameRef = document.querySelector("#username");
const passwordRef = document.querySelector("#password");
const buttonRef = document.querySelector("#saveBtn");

const savedStorage = JSON.parse(localStorage.getItem("formData"));
if (savedStorage) {
  nameRef.value = savedStorage.name || "";
  passwordRef.value = savedStorage.password || "";
}

buttonRef.addEventListener("click", (evt) => {
  const data = {
    name: nameRef.value,
    password: passwordRef.value
  };
  localStorage.setItem("formData", JSON.stringify(data));
  nameRef.value = "";
  passwordRef.value = "";
})