import '../../styles/TodoItem.css';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TodoItem = ({ id, text, completed, onRemove, onToggle }: TodoItemProps) => {
  return (
    <li className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span className={`todo-text ${completed ? "completed" : ""}`}>
          {text}
        </span>
      </div>
      <button className="todo-remove-btn" onClick={() => onRemove(id)}>
        Elimina
      </button>
    </li>
  );
};
