import { Signal, signal } from "@preact/signals-react";

const count: Signal<number> = signal<number>(0);

export default function Counter() {
  console.log("render Counter");
  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <div className=" w-fit">
        <p className="text-3xl">Count: {<>{count}</>}</p>
        <button
          className="px-10 py-8 bg-gray-200 text-2xl"
          onClick={() => count.value++}
        >
          click me
        </button>
      </div>
    </div>
  );
}
