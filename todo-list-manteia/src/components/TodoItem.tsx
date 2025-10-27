interface TodoItemProps {
    id: number;
    text: string;
    completed: boolean;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
  }
  
  export const TodoItem = ({ id, text, completed, onRemove, onToggle }: TodoItemProps) => {
    return (
      <li
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px',
          marginBottom: '8px',
          backgroundColor: completed ? '#d4edda' : '#f4f4f4',
          borderRadius: '4px',
          listStyle: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(id)}
          />
          <span style={{
            textDecoration: completed ? 'line-through' : 'none',
            opacity: completed ? 0.6 : 1
          }}>
            {text}
          </span>
        </div>
        <button
          onClick={() => onRemove(id)}
          style={{
            padding: '4px 8px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Elimina
        </button>
      </li>
    );
  };
  