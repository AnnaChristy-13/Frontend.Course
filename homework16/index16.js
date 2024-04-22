let todoItems = [
   
];

const showTodoItems = () => {

    const todoItemsListHtml = document.getElementById('todo-list-items');
    todoItemsListHtml.innerHTML = '';

    let divTodoHtml = ''

    for (let item of todoItems) {

        const todoItemHtml = `
        <div class="todo-item ${item.isDone ? 'is-done' : ''}"> 
        <span>${item.nameDayOfWeek}</span>             
        <p>${item.name}</p>                    
        <button class="delete-todo-item" data-todo-id="${item.id}">delete</button>
        <input type="checkbox" name="is-done-checkbox" class="is-done-checkbox" data-todo-id="${item.id}" ${item.isDone ? 'checked' : ''}> Done              
    </div>
            `;

        
        divTodoHtml += todoItemHtml;
    }

    todoItemsListHtml.innerHTML = divTodoHtml;

    const deleteTodoButtons = document.getElementsByClassName('delete-todo-item');

    for (let btn of deleteTodoButtons) {
        btn.addEventListener('click', (e) => {
            todoItems = deleteTodoItem(e.target.dataset.todoId);
            showTodoItems();
        });
    }

    const isDoneCheckboxes = document.getElementsByClassName('is-done-checkbox');
    for (let checkbox of isDoneCheckboxes) {
        checkbox.addEventListener('change', (e) => {
            const todoId = e.target.dataset.todoId;
            toggleTodoDone(todoId);
            showTodoItems();  
        });
    }
};


const deleteTodoItem = (id) => {    
    const deleteRes = todoItems.filter(item => item.id.toString() !== id);
    return deleteRes;
}


const toggleTodoDone = (id) => {
    const todoIndex = todoItems.findIndex(item => item.id.toString() === id);
    if (todoIndex !== -1) {
        todoItems[todoIndex].isDone = !todoItems[todoIndex].isDone;
        const todoItemName = document.querySelector(`.todo-item[data-todo-id="${id}"] p`);
        if (todoItemName) {
            todoItemName.classList.toggle('is-done');
        }
    }
};

const addTodo = (todoName = '', dayOfWeek = '') => {
    const newTodo = { id: Math.random(),  name: todoName, isDone: false, nameDayOfWeek: dayOfWeek };
    console.log(newTodo);
    todoItems.push(newTodo);
    showTodoItems();
}

const addTodoBtn = document.getElementById('add-todo-btn');
const addTodoInput = document.getElementById('add-todo-input');
const addDaySelect= document.getElementById('day-select')

addTodoBtn.addEventListener('click', () => {
    const newTodoName = addTodoInput.value;
    const newSelectedDay = addDaySelect.value;
    if (newTodoName && newSelectedDay) {
        addTodo(newTodoName, newSelectedDay);
        addTodoInput.value = '';
    } else {
        alert('Please enter an exercise and select a day of the week.');
    }
});

