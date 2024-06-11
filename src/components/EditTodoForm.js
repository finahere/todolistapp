import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (tasks) => {
      // prevent default action
        tasks.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(tasks) => setValue(tasks.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Save edit</button>
  </form>
  )
}