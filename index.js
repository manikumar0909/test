document.addEventListener('DOMContentLoaded', function() {  const todoList = document.getElementById('todo-list');
    for (let i = 1; i <= 20; i++) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';
        checkbox.id = `todo-checkbox-${i}`;

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'todo-text';
        input.placeholder = `Task ${i}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        li.appendChild(checkbox);
        li.appendChild(input);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
});
    