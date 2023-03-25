import { useEffect, useState } from 'react';

import { Todo } from './types/type';
import { ferchTodos } from './api/api';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    ferchTodos().then((response) => {
      setTodos(response);
    });
  }, []);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default App;

