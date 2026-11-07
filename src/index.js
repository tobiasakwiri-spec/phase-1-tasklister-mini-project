function init() {
  const form = document.querySelector("#create-task-form");
  const formInput = document.querySelector("#new-task-description");
  const taskList = document.querySelector("#tasks");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = formInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement(li);
      li.textContent = taskText;
      taskList.appendChild(li);
      form.reset();
    }
  });
}

if (typeof document!== "undefined") {
  if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}