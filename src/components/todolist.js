import React from 'react';
import { ReactComponent as Marked } from './../assets/marked.svg';
import { ReactComponent as Unmarked } from './../assets/unmarked.svg';
import { ReactComponent as Deletebutton } from './../assets/delete.svg' 
import './todolist.css';

const TodoList = ({list, deleteTask, markAsDone }) => {

  console.log(list);

  const markTodo = (id) => {
      markAsDone(id);
  }

  const delTodo = (id) => {
      console.log(id);
      deleteTask(id);
  }

  return (
    <div>
        {
            list.map((listItem) => {
              return (
                <div key={listItem.id} className="listitem">
                    {
                      (listItem.status === 'pending') ? 
                      (  <div className='unmarked'>
                          <Unmarked onClick={() => markTodo(listItem.id)}/>
                         </div>
                      ) : (
                         <div className="marked">
                          <Marked />
                         </div>
                      )
                    }
                    <div 
                      className={(listItem.status === 'done') ? 'strike_through taskname' : 'taskname'} >
                          {listItem.task}
                    </div>
                    <div
                      className={listItem.priority.toLowerCase()}>
                          {listItem.priority}
                    </div>
                    <div className="delete">
                       <Deletebutton onClick={() => delTodo(listItem.id)}/>
                    </div>
                </div>
              )
            })
        }
    </div>
  );
};

export default TodoList;