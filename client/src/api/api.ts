import { Todo } from '../types/type';
import axios from 'axios';

export const ferchTodos = (): Promise<Todo[]> => {
  return axios('http://localhost:8080/').then((response) => response.data);
};
