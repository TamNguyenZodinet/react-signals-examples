import { Todo } from "@/pages/todo-list-computed";
import { computed, signal } from "@preact/signals-react";
import { createContext } from "react";

export const createAppState = () => {
  const todos = signal<Todo[]>([]);

  const completed = computed(() => {
    return todos.value.filter((todo) => todo.completed).length;
  });

  const addTodo = (text: string) => {
    todos.value = [...todos.value, { text: text, completed: true }];
  };

  const removeTodo = (todo: Todo) => {
    todos.value = todos.value.filter((t) => t !== todo);
  };

  return { todos, completed, addTodo, removeTodo };
};

export const AppState = createContext(createAppState());
