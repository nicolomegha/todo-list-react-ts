import { useTheme } from './context/ThemeContext'

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List 📝</h1>
      <button onClick={toggleTheme}>
        Passa a tema {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
}

export default App;
