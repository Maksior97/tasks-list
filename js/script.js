{
    const tasks = [
        {
            content: "aaa"
        },
        {
            content: "aaa"
        },

    ];

    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
                <li>
                ${task.content}
                </li>
             `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
    };

    init();
};