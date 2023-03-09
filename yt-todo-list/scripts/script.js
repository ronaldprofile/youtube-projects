import { buttonAddTodo, inputNewTodo, todoListElement } from "./dom.mjs";
import { handleShowToast, handleAutoHideToast } from "./toast.mjs";

const tasks = handleGetTasksFromStorage() || [];

function handleCreateTodoHTML(task) {
  const todoItemElement = document.createElement("div");
  todoItemElement.classList.add("todo-item");

  const taskNameElement = document.createElement("p");
  const buttonDeleteTodoElement = document.createElement("button");
  const buttonTrashIcon = document.createElement("i");

  taskNameElement.innerText = task.name;

  const position = tasks.indexOf(task);

  buttonDeleteTodoElement.setAttribute("id", "button-delete-todo");

  buttonTrashIcon.classList.add("ph-trash");
  buttonDeleteTodoElement.appendChild(buttonTrashIcon);

  buttonDeleteTodoElement.addEventListener("click", () =>
    handleDeleteTask(position)
  );

  todoItemElement.appendChild(taskNameElement);
  todoItemElement.appendChild(buttonDeleteTodoElement);

  return todoItemElement;
}

function validateInputValue() {
  const inputValue = inputNewTodo.value.trim();

  return inputValue.length > 0;
}

function handleCreateTask() {
  const inputIsEmpty = validateInputValue();

  if (!inputIsEmpty) {
    inputNewTodo.classList.add("invalid");

    setTimeout(() => {
      inputNewTodo.classList.remove("invalid");
    }, 3000);

    return;
  }

  const newTask = {
    id: tasks.length,
    name: inputNewTodo.value
  };

  tasks.push(newTask);

  inputNewTodo.value = "";
  handleSetToStorageTasks(tasks);

  renderTasks();
  handleShowToast();

  handleAutoHideToast();
}

function handleDeleteTask(position) {
  tasks.splice(position, 1);

  renderTasks();
  handleSetToStorageTasks(tasks);
}

function handleSetToStorageTasks(tasks) {
  localStorage.setItem("@tasks-js", JSON.stringify(tasks));
}

function handleGetTasksFromStorage() {
  const tasksStorage = JSON.parse(localStorage.getItem("@tasks-js"));
  return tasksStorage;
}

buttonAddTodo.addEventListener("click", handleCreateTask);

function renderTasks() {
  const tasksIsEmpty = tasks.length === 0;

  todoListElement.innerHTML = "";

  if (tasksIsEmpty) {
    const todoListEmptyElement = document.createElement("div");
    todoListEmptyElement.classList.add("todo-list-empty");

    const firstChildElement = document.createElement("div");
    const secondChildElement = document.createElement("div");

    const imageClipboardElement = document.createElement("img");
    imageClipboardElement.setAttribute("src", "./assets/clipboard.svg");

    firstChildElement.appendChild(imageClipboardElement);

    const firstParagraph = document.createElement("p");
    const secondParagraph = document.createElement("p");

    firstParagraph.innerText = "Você ainda não tem tarefas cadastradas";
    secondParagraph.innerText = "Crie tarefas e organize seus itens a fazer";

    secondChildElement.appendChild(firstParagraph);
    secondChildElement.appendChild(secondParagraph);

    todoListEmptyElement.appendChild(firstChildElement);
    todoListEmptyElement.appendChild(secondChildElement);

    return todoListElement.appendChild(todoListEmptyElement);
  } else {
    for (let task of tasks) {
      const html = handleCreateTodoHTML(task);

      todoListElement.appendChild(html);
    }
  }
}

renderTasks();
