const list = document.querySelector(".list");

// dragstart , dragover , drop
let picked = "";
let pickedIndex = "";
list.addEventListener("dragstart", (e) => {
  const obj = e.target;
  picked = e.target;
  pickedIndex = [...obj.parentNode.children].indexOf(obj);
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
});

list.addEventListener("drop", (e) => {
  const obj = e.target;
  const index = [...obj.parentNode.children].indexOf(obj);

  index > pickedIndex ? obj.after(picked) : obj.before(picked);
});
