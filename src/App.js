import './App.css';
import React, {  useState, useEffect, useRef } from 'react';
import { ReactComponent as AddButton } from './assets/add.svg'; 
import storefuncs from './utils.js';
import TodoList from './components/todolist';

const App = () => {
 
  const priorities = ["High", "Medium", "Low"];

  const priorityVal = {
     High: 3,
     Medium: 2,
     Low: 1
  };

  const [ task, setTask ] = useState('');

  const [ priority, setPriority ] = useState('High');

  const [ action, setAction ] = useState('');

  const [ listOfTasks, setListOfTasks ] = useState([]);

  const taskForm = useRef(); 

  useEffect(() => {
     console.log('inside useEffect')

     if (localStorage.getItem('todoList')) {
      // let list = JSON.parse(localStorage.getItem('todoList'));
       let list = storefuncs.getTodoList();
       setListOfTasks(list);
       console.log(JSON.parse(localStorage.getItem('todoList')));
     } else {
       localStorage.setItem('todoList', JSON.stringify([]));
     }
  }, []);


  useEffect(() => {
    console.log(action);
    //let list = JSON.parse(localStorage.getItem('todoList'));
    let list = storefuncs.getTodoList();
    setListOfTasks(list);
  }, [action]);


  const addTask = () => {
    console.log('inside add task');
    console.log(task);
    console.log(priority);
    console.log(priorityVal[priority]);

    const taskObj = { 
       id: Math.random(),
       task: task,
       priority: priority,
       priorityVal: priorityVal[priority],
       status: 'pending'
    }
    storefuncs.addToList(taskObj);
    setAction(taskObj.id + 'addtask');
  };

  const deleteTask = (id) => {
    console.log('delete task');
    storefuncs.deleteFromList(id);
    setAction(id + 'deletetask');
  };

  const markAsDone = (id) => {
    console.log('mark as done');
    storefuncs.markAsDone(id);
    setAction(id + 'donetask');
  };

  const handlePriorityChange = (e) => {
    console.log("handle priority change");
    setPriority(e.target.value);
    console.log(priority);
  };

  const handleTaskChange = (e) => {
    console.log("handle task change");
    setTask(e.target.value);
    console.log(task);
  };

  
  return (
    <div className="todo_app">
      <div className="header">
        Todo Application
      </div>
      <form onSubmit={addTask} ref={taskForm} className="task_form">
        <input
          className="tasktext"
          type="text"
          value={task}
          onChange={handleTaskChange}
        />
        <select
           className="taskpriority"
           value={priority}
           onChange={handlePriorityChange}>
          {
            priorities.map((priority) => {
               return (
                 <option key={priority}>
                     {priority}
                 </option>
               )
            })
          }
        </select>
        <AddButton
          className='addbutton' 
          onClick={addTask}/> 
      </form>
      <div className='tododiv'>
        <TodoList 
           list={listOfTasks}
           deleteTask={deleteTask}
           markAsDone={markAsDone}/>
      </div>
    </div>
  );
}

export default App;
