import { useState } from 'react'
import { useTheme } from './context/ThemeContext'
import { AddTodo } from './components/AddTodo'

interface Todo {
  id: number;
  text: string;
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text
    };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '8px 12px',
          cursor: 'pointer',
          backgroundColor: theme === 'light' ? '#000' : '#fff',
          color: theme === 'light' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Passa a tema {theme === 'light' ? 'dark' : 'light'}
      </button>

      <AddTodo onAdd={handleAddTodo} />

      <ul style={{ marginTop: '20px' }}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
