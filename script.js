const addForm = document.querySelector(".add");
const ulList = document.querySelector(".todos");
const search = document.querySelector(".search input");

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

// delete todos
ulList.addEventListener("click", e => {
    if(e.target.classList.contains("delete"))
        e.target.parentElement.remove();
});

const filterTodos = (term) => {
    Array.from(ulList.children)
        .filter((item) => {
            return !item.textContent.includes(term);
        })
        .forEach(item => {
            item.classList.add("filtered");
        });

    Array.from(ulList.children)
        .filter((item) => {
            return item.textContent.includes(term);
        })
        .forEach(item => {
            item.classList.remove("filtered");
        });
};

search.addEventListener("keyup", e => {
    const term = search.value.trim();
    console.log(term);
    filterTodos(term);
})