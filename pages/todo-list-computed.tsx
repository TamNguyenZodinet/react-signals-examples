import { ReadonlySignal, computed, signal } from "@preact/signals-react";

export type Todo = {
  text: string;
  completed: boolean;
};

const todos = signal<Todo[]>([
  { text: "Buy groceries", completed: true },
  { text: "Walk the dog", completed: false },
]);

// create a signal computed from other signals
const completedTasks: ReadonlySignal<string> = computed(() => {
  // When `todos` changes, this re-runs automatically:
  return todos.value
    .filter((todo) => todo.completed)
    .map((todo) => todo.text)
    .join(", ");
});

// We'll use this for our input
const text = signal("");

function addTodo() {
  todos.value = [...todos.value, { text: text.value, completed: true }];
  text.value = ""; // Clear input value on add
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}

export default function TodoList() {
  const onInput = (event: any) => (text.value = event.target.value);

  return (
    <>
      <div className="text-3xl flex justify-center items-center h-[600px] flex-col">
        <div>
          <input
            placeholder="To do..."
            className="bg-gray-200 p-2"
            value={text.value}
            onInput={onInput}
          />
          <button className="py-2 px-4 bg-gray-500" onClick={addTodo}>
            Add
          </button>
        </div>
        <ul>
          {todos.value.map((todo) => (
            <li key={todo.text}>
              {todo.text} <button onClick={() => removeTodo(todo)}>❌</button>
            </li>
          ))}
        </ul>

        <h1 className="font-bold">Completed: {completedTasks}</h1>
      </div>
    </>
  );
}
