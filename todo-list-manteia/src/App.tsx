import { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import './styles/App.css';

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
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleRemoveTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggleCompleted = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className={`app-container ${theme}`}>
      <h1 className="app-title">Todo List</h1>

      <button onClick={toggleTheme} className="theme-toggle-btn">
        Passa a tema {theme === 'light' ? 'dark' : 'light'}
      </button>

      <AddTodo onAdd={handleAddTodo} />

      <div className="todo-list">
        <TodoList
          todos={todos}
          onRemove={handleRemoveTodo}
          onToggle={handleToggleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
