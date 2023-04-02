import { Todo } from "@/pages/todo-list-computed";
import { signal, computed } from "@preact/signals-react";

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

export const TD = {
  todos,
  completed,
  addTodo,
  removeTodo,
};
