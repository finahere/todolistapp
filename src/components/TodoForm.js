import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (tasks) => {
      // prevent default action
        tasks.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(tasks) => setValue(tasks.target.value)} className="todo-input" placeholder='What tasks should you do?' />
    <button type="submit" className='todo-btn'>Add</button>
  </form>
  )
}