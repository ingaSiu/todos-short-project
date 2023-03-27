import { useCreateTodo, useTodos } from './hooks/todos';
import { useEffect, useState } from 'react';

import { Todo } from './types/type';
import { fetchTodos } from './api/api';

const App = () => {
  const { data } = useTodos();
  const todos = data || [];

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default App;

