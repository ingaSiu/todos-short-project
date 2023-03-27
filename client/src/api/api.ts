import { Todo } from '../types/type';
import axios from 'axios';

const TODOS_API_URL = 'http://localhost:3001/';

export const fetchTodos = (): Promise<Todo[]> => {
  return axios.get(TODOS_API_URL).then((response) => {
    console.log('SUCCESS getPost');
    console.log(response.data);
    return response.data;
  });
};

export const postTodo = (todo: Todo): Promise<Todo[]> => {
  return axios.post(TODOS_API_URL, todo).then((response) => {
    console.log('SUCCESS insertTodo');
    console.log(response.data);
    return response.data;
  });
};
