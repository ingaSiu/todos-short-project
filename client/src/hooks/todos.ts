import { fetchTodos, postTodo } from '../api/api';
import { useMutation, useQuery } from '@tanstack/react-query';

const TODOS = 'TODOS';

export const useTodos = () => {
  return useQuery([TODOS], fetchTodos);
};

export const useCreateTodo = () => {
  return useMutation(postTodo);
};
