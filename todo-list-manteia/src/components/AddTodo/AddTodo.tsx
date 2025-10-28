import { useState, type FormEvent } from 'react';
import '../../styles/AddTodo.css';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      onAdd(trimmed);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        className="add-todo-input"
        placeholder="Aggiungi una nuova attività..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit" className="add-todo-btn">
        Aggiungi
      </button>
    </form>
  );
};
