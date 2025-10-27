import { useState, useEffect } from 'react'
import { useTheme } from './context/ThemeContext'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const STORAGE_KEY = 'todos';

function App() {
  const { theme, toggleTheme } = useTheme();


  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as Todo[];
      } catch (error) {
        console.error('Errore nel parsing delle todo salvate:', error);
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos(prev => [...prev, newTodo]);
  };
  
  const handleRemoveTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleToggleCompleted = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List 📝</h1>
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
      <TodoList
  todos={todos}
  onRemove={handleRemoveTodo}
  onToggle={handleToggleCompleted}
/>

    </div>
  );
}

export default App;
