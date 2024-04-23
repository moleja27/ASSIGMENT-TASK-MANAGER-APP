// Task Manager Object
//We have an object called taskManager and inside the object we have an empty array where the information from the menu function will arrive. Below the array we have 4 functions that will help the app work depending on the options the user chooses.

//first Function (addTask) with the parameter description have an a stament has a stament where the first condition is if the name has spaces then the trim function will organize the first task then it will fulfill the first stament.in the first stament there is another option with a structure or key and then the task will get an Id, description and will be denominated as a completed, in this expression  (id: this.tasks.length + 1,) the key this will bring the tasl from the array and then with lenght it will start to giving a numer but like lenght start in 0 i needed to add a + 1 that every task who go through the lengh add plus one, below the object we have the key (this) that find the array and inside that array is the task so with the push we add the task into the other object, When doing this process, an alert will be sent with the task plus the description.
//but if the task is different or empty it will take the other stament (else) and will send one one alert who said  alert('Error: Task description cannot be empty.');

//Second Function (completeTask) is a function that contains a parameter called taskID with an internal variable called task and inside the variable we have this this.tasks.find(task => task.id === taskId); We have the this key that will search the array again and with the find method it will search for the specific task with the specific id. In this expression an anonymous arrow type function is used that will make the bucle type function.
//If a task with that Id is found then it will enter the (if statement) below and will around the first stamente task.completed = true; where it will show an alert that says:
// alert(`Task completed: ${task.description}`); the variable is conected with the second object and as before it was false it will now be changed to true.
//If it does not fulfill the function then it will continue going to the next condition and there it will display an alert that says alert('Error: Task description cannot be empty.');

//Third Function (listAllTasks) It is a function that doent have parameters and has an internal variable called message is initialized with the initial text "All tasks:\n". This variable will be used to store the message that will be displayed in the alert. The forEach method is used to iterate over each task in the tasks list (this.tasks). For each task, a function is executed that performs the following actions: The information of the current task is concatenated to the message. This information includes the task ID, the task description, and whether the task is completed or not ('Yes' is displayed if it is completed and 'No' is displayed if it is not). Finally, a pop-up window (alert) is displayed containing the complete message with all the tasks and their information.
//In summary, the listAllTasks method loops through all the tasks in the task list, concatenates the information for each task into a message, and displays this message in an alert. This allows you to view all the tasks stored in the taskManager object.

//A  filter method is used to create a new array called completedTasks, which contains only the tasks that have the completed property set to true. This filters all completed tasks from the original task list.hod called listCompletedTasks is defined that does not take any parameters.The filter method is used to create a new array called completedTasks, which contains only the tasks that have the completed property set to true. This filters all completed tasks from the original task list. A variable called message is initialized with the initial text "Completed tasks:\n". This vari The forEach method is used to iterate over each task in the completedTasks array containing only the completed tasks. For each task, a function is executed that performs the  The information of the current task is concatenated to the message. This information includes the task ID and the task description. Finally, a pop-up window (alert) is displayed containing the complete message with all completed tasks and their information.following actions: The information of the current task is concatenated to the message. This information includes the task ID and the task description. Finally, a pop-up window (alert) is displayed containing the complete message with all completed tasks and their information.able will be used to store the message that will be displayed in the alert. The forEach method is used to iterate over each task in the completedTasks array containing only the completed tasks. For each task, a function is executed that performs the following actions: The information of the current task is concatenated to the message. This information includes the task ID and the task description. Finally, a pop-up window (alert) is displayed containing the complete message with all completed tasks and their information.


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