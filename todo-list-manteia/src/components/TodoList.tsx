import { TodoItem } from './TodoItem';

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
}

export const TodoList = ({ todos, onRemove }: TodoListProps) => {
  if (todos.length === 0) {
    return <p style={{ marginTop: '20px' }}>Nessuna attività presente </p>;
  }

  return (
    <ul style={{ marginTop: '20px', padding: 0 }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
};
