import { useTheme } from './context/ThemeContext';
import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/TodoList';
import { useTodos } from './hooks/useTodos';
import './styles/App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { todos, addTodo, removeTodo, toggleTodo } = useTodos();

  return (
    <div className={`app-container ${theme}`}>
      <h1 className="app-title">Todo List</h1>

      <button onClick={toggleTheme} className="theme-toggle-btn">
        Passa a tema {theme === 'light' ? 'dark' : 'light'}
      </button>

      <AddTodo onAdd={addTodo} />

      <div className="todo-list">
        <TodoList
          todos={todos}
          onRemove={removeTodo}
          onToggle={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
