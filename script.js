// TASK MANAGER
// // taskManager object
const taskManager = {
    tasks: [],
    addTaks: function (description) {
        console.log('ADD TASK ******');
    },
    completeTask: function (id) {
        console.log('completeTask  ******');
    },
    listAllTasks: function () {
        console.log('listAllTasks  ****');
    },
    listCompletedTasks: function () {
        console.log('listCompletedTasks *****');
    }
}

// function for asking the user to fill in their name
function askUserName() {
    const userName = prompt("write your name please");
    if (userName && userName.trim() != "") {
        alert(`Hello ${userName} welcome to the Gardengame`);
        menu();
    } else {
        alert("please dont let empty before the name");
        askUserName();
    }
}

askUserName();

// menu function
function menu() {
    const choice = parseInt(prompt(`you can choose and full it up the follow information \n
      1) AddTask 
      2) completeTask
      3) ListAllTasks
      4) listCompletedTasks
      5) Exit..
    `));

    switch (choice) {
        case 1:
            const tarea = prompt("please write the name of the work that you want to do?");
            taskManager.addTaks(tarea);
            break;
        case 2:
            const complete = prompt("can you please add the ID of the assigment that you want to do");
            taskManager.completeTask(complete);
            break;
        case 3:
            taskManager.listAllTasks();
            break;
        case 4:
            taskManager.listCompletedTasks();
            break;
        case 5:
            return alert("Thank you for use the aplication Gardengame");
        default:
            alert("you need to select one of the options")
    }
    menu();
}

// unique identifier lie id
//a description
//a boolean for checking if it is complete or not
// starts with the function asUserName() which triggers the menu() function

