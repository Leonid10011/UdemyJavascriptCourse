const addForm = document.querySelector(".add");

const ulList = document.querySelector(".todos");

generateTemplate = (todo) => {
    const html = 
    `<li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    ulList.innerHTML += html;
};

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length > 0)
        generateTemplate(todo)
    console.log(todo)
})