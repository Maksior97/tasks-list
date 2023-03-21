{
    const tasks = [
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const toggleTaskRemove = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="tasks__element 
    js-tasks">
                <button 
    class="tasks__button tasks__button--toggleDone js-toggleDone"> ${task.done ? "✔" : ""} </button>
                <span class="tasks__content 
    ${task.done ? "tasks__content--done" : 
    ""}"> ${task.content} </span>
                <button 
    class="tasks__button tasks__button--toggleRemove js-toggleRemove">🗑</button>
                </li>
             `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

    const toggleRemoveButtons = document.querySelectorAll(".js-toggleRemove");

        toggleRemoveButtons.forEach((toggleRemoveButton, index) => {
            toggleRemoveButton.addEventListener("click", () => {
                toggleTaskRemove(index);
            });
        });

    const toggleDoneButtons = document.querySelectorAll(".js-toggleDone");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
        toggleDoneButton.addEventListener("click", () => {
            toggleTaskDone(index);
        });
    });

};
    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit)
    };

    init();
};