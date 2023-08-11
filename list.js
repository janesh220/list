
function createCardElement(cardText) {
    const card = document.createElement('div');
    card.className = 'card';

    const taskText = document.createElement('span');
    taskText.textContent = cardText;
    card.appendChild(taskText);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    card.appendChild(checkBox);

    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
        const newText = prompt('Edit task:', cardText);
        if (newText !== null) {
            taskText.textContent = newText;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        card.remove();
    });

    card.appendChild(editButton);
    card.appendChild(deleteButton);

    checkBox.addEventListener('change', function() {
        if (checkBox.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
    });

    return card;
}

document.addEventListener('DOMContentLoaded', function() {
    const todoCards = document.getElementById('todo-cards');
    const newCardInput = document.getElementById('new-card-input');

    // Event listener for adding a new card
    newCardInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && newCardInput.value.trim() !== '') {
            const cardText = newCardInput.value.trim();
            const newCard = createCardElement(cardText);

            todoCards.appendChild(newCard);
            newCardInput.value = '';
        }
    });
});
