import { AppState } from "@/src/app-state";
import { signal } from "@preact/signals-react";
import { useRouter } from "next/router";
import { useContext } from "react";

// We'll use this for our input later
const text = signal("");

export default function TodoList() {
  const onInput = (event: any) => (text.value = event.target.value);
  const { completed, todos, addTodo, removeTodo } = useContext(AppState);
  const router = useRouter();
  return (
    <>
      <div className="text-3xl flex justify-center items-center h-[600px] flex-col">
        <h1>Global state</h1>

        <div>
          <input
            placeholder="To do..."
            className="bg-gray-200 p-2"
            value={text.value}
            onInput={onInput}
          />
          <button
            className="py-2 px-4 bg-gray-500"
            onClick={() => addTodo(text.value)}
          >
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

        <button
          onClick={() => {
            router.push("/global-state-test");
          }}
        >
          Check state
        </button>
      </div>
    </>
  );
}
