import { useState, type FormEvent } from 'react';

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
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Aggiungi una nuova attività..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        style={{
          padding: '8px',
          marginRight: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '250px'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 12px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Aggiungi
      </button>
    </form>
  );
};
