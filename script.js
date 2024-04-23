// Task Manager Object
const taskManager = {
    tasks: [],

    // Method to add a task
    addTask: function (description) {
        if (description.trim() !== '') {
            const task = {
                id: this.tasks.length + 1,
                description: description,
                completed: false
            };
            this.tasks.push(task);
            alert(`Task added: ${description}`);
        } else {
            alert('Error: Task description cannot be empty.');
        }
    },

    // Method to mark a task as completed
    completeTask: function (taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        if (task) {
            task.completed = true;
            alert(`Task completed: ${task.description}`);
        } else {
            alert('Error: The specified task does not exist.');
        }
    },

    // Method to list all tasks
    listAllTasks: function () {
        let message = 'All tasks:\n';
        this.tasks.forEach(task => {
            message += `ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed ? 'Yes' : 'No'}\n`;
        });
        alert(message);
    },

    // Method to list completed tasks
    listCompletedTasks: function () {
        const completedTasks = this.tasks.filter(task => task.completed);
        let message = 'Completed tasks:\n';
        completedTasks.forEach(task => {
            message += `ID: ${task.id}, Description: ${task.description}\n`;
        });
        alert(message);
    }
};

// Menu function
//(We have a function with the menu name and parameter called (user). Inside the function we have a variable with a prompt inside that will display the menu index and the user will be able to choose the options between 1 to 5.)
//As I had mentioned before, the user's name will reach the menu function and will be the parameter (user).
//Then there is a switch where among its conditions is (choise) which is the variable at the beginning of the function, oh yes, the switch has 5 cases that would be the options that the user will choose.
//in the case when the user choose the (1) A prompt will appear where it will tell the user (Enter the description of the new task). in case 1 there is a variable with name description, then below the variable there is a connection, taskManager.addTask(description); where the first is the object and the second is the first function inside the objet  and parameter.
//in the case 2 when the user choose (2) A  prompt will appear where it will tell the user
//('Enter the ID of the task you want to mark as completed:').. the is a conection also taskManager.completeTask(id); where the first is the object and the second is the second function inside the objet  and parameter.
//case (3) In the third case all the tasks will be listed there, yes, there you will also find a connection with taskManager.listAllTasks(); the object the 3 funcion inside the object and the parameter that is ().
//in the cae (4) we will find only the connection between the object. The fourth function and the parameter ( ) taskManager.listCompletedTasks(); (the fourth funcion will complete the list of the task)
// the case 5 it will be the exit of the user, so we have a return who will take the user out and show a alert saying ('You have have finished the application...)
// we have the default if the user write other option that is not 1 to 5 and then will apper the default that will show this alert('Error: Invalid option. Please choose an option from the menu.');
// out of the swicth i have called the function menu again if the user have a default and then can have the menu again also i forgot to explain the break when the user use every different option with the brak will bring back the menu, 


function menu(user) {
    const choice = parseInt(prompt(`*** MENU ***\n\nWelcome, ${user}!\n\nPlease choose an option from the menu:\n1. Add a task\n2. Complete a task\n3. List all tasks\n4. List completed tasks\n5. Exit`));

    switch (choice) {
        case 1:
            const description = prompt('Enter the description of the new task:');
            taskManager.addTask(description);
            break;
        case 2:
            const id = parseInt(prompt('Enter the ID of the task you want to mark as completed:'));
            taskManager.completeTask(id);
            break;
        case 3:
            taskManager.listAllTasks();
            break;
        case 4:
            taskManager.listCompletedTasks();
            break;
        case 5:
            return alert('You have have finished the application...');
        default:
            alert('Error: Invalid option. Please choose an option from the menu.');
    }
    // Show the menu again after each operation, except when the user chooses to exit
    menu();
}

// Function to ask for user name
//(We have the askuser function, inside this function there is a variable and inside it there is a prompt that will ask the user for a name.
//Inside the function there is a stament (if) that has a condition, the condition is if the user enters the name with spaces then trim will be applied and then will trim the spaces in the name. If the condition  is spelled the name correctly without a space, the first part of the condition will be apply and the name will be sent to the function (menu). and if the user sends an empty space then the last part of the statement will be applied and an Alert will be sent ('Error: Namecannot be empty.)
//After going through the entire statement, I call  the function AND THEN //// if the user does not meet the condition, he can rewrite his name.)

function askUserName() {
    const userName = prompt('Please enter your name:');
    if (userName && userName.trim() !== '') {
        menu(userName); // Start the menu after entering the user name
    } else {
        alert('Error: Name cannot be empty.');
        askUserName();
    }
}
// Start the application by asking for the user's name
askUserName();