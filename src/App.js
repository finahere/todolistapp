import './App.css';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper 
         header= 'To-Do List',
         task= 'Add your task',
         description= 'Task Description'
      />
    </div>
  );
}

export default App;
