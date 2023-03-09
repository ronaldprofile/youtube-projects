import { body } from "./dom.mjs";
import { formatDateTaskCreated } from "./format-date-task.mjs";

function handleCreateToastInWindow(
  message = "Tarefa criada com sucesso",
  taskDateCreated = new Date()
) {
  const toastContainerElement = document.createElement("div");

  toastContainerElement.classList.add("toast-container");

  const firstChildElement = document.createElement("div");

  const toastMessageElement = document.createElement("span");

  toastMessageElement.innerText = message;

  const buttonCloseToastElement = document.createElement("button");

  const buttonXIcon = document.createElement("i");
  buttonXIcon.classList.add("ph-x");

  buttonCloseToastElement.classList.add("close-toast");
  buttonCloseToastElement.appendChild(buttonXIcon);

  buttonCloseToastElement.addEventListener("click", () => {
    toastContainerElement.classList.add("hide");
  });

  firstChildElement.appendChild(toastMessageElement);
  firstChildElement.appendChild(buttonCloseToastElement);

  const toastDateCreatedElement = document.createElement("span");
  toastDateCreatedElement.classList.add("toast-date");

  toastDateCreatedElement.innerText = formatDateTaskCreated(taskDateCreated);

  toastContainerElement.appendChild(firstChildElement);
  toastContainerElement.appendChild(toastDateCreatedElement);

  return body.appendChild(toastContainerElement);
}

function handleShowToast() {
  handleCreateToastInWindow();
}

function handleAutoHideToast() {
  const toastContainerElement = document.querySelector(".toast-container");

  if (toastContainerElement) {
    setTimeout(() => {
      toastContainerElement.classList.add("hide");
    }, 2000);
  }

  return;
}

export { handleCreateToastInWindow, handleShowToast, handleAutoHideToast };
