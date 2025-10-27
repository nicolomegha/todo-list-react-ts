interface TodoItemProps {
    id: number;
    text: string;
    onRemove: (id: number) => void;
  }
  
  export const TodoItem = ({ id, text, onRemove }: TodoItemProps) => {
    return (
      <li
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px',
          marginBottom: '8px',
          backgroundColor: '#f4f4f4',
          borderRadius: '4px',
          listStyle: 'none'
        }}
      >
        <span>{text}</span>
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
  