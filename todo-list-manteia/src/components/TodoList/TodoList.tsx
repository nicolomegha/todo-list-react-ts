import type { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import '../../styles/TodoList.css';

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
}

export const TodoList = ({ todos, onRemove, onToggle }: TodoListProps) => {
  if (todos.length === 0) {
    return <p className="empty-message">Nessuna attività presente</p>;
  }

  return (
    <ul className="todo-list-container">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};
