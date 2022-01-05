const sortTodoList = (todolist) => {
    todolist.sort((a, b) => (b.priorityVal - a.priorityVal));
    return todolist;
}

const addToList = (taskObj) => {
    console.log(taskObj);
    let taskArray = getTodoList();
    taskArray.push(taskObj);
    let sortedTaskArray = sortTodoList(taskArray);
    let newTaskArray = JSON.stringify(sortedTaskArray);
    localStorage.setItem('todoList', newTaskArray);
    console.log(newTaskArray);
    console.log(JSON.parse(localStorage.getItem('todoList')));
    
}

const deleteFromList = (taskId) => {
    console.log(taskId);
    let taskArray = getTodoList();
    taskArray = taskArray.filter( task => task.id !== taskId);
    console.log(taskArray);
    let sortedTaskArray = sortTodoList(taskArray);
    let newTaskArray = JSON.stringify(sortedTaskArray);
    localStorage.setItem('todoList', newTaskArray);
    console.log(newTaskArray);
    console.log(JSON.parse(localStorage.getItem('todoList')));
}

const getTodoList = () => {
    let taskList = JSON.parse(localStorage.getItem('todoList'));
    console.log(taskList);
    return taskList;
} 

const markAsDone = (taskId) => {
    console.log(taskId);
    let taskArray = getTodoList();
    let taskObj = taskArray.find(task => task.id === taskId);
    taskObj.status = 'done';
    taskObj.priorityVal = 0;
    console.log(taskObj);
    console.log(taskArray);
    let sortedTaskArray = sortTodoList(taskArray);
    let newTaskArray = JSON.stringify(sortedTaskArray);
    localStorage.setItem('todoList', newTaskArray);
    console.log(newTaskArray);
    console.log(JSON.parse(localStorage.getItem('todoList')));
}


export default { addToList, deleteFromList, sortTodoList, 
getTodoList, markAsDone, getTodoList };