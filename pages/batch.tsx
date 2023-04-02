import { batch, useSignal } from "@preact/signals-react";

export default function Counter() {
  const firstNumber = useSignal(2);
  const secondNumber = useSignal(3);

  const onClick = () => {
    batch(() => {
      firstNumber.value++;
      secondNumber.value++;
    });
  };

  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <div className=" w-fit">
        <p className="text-3xl">First number: {firstNumber.value}</p>
        <p className="text-3xl">Second number: {secondNumber.value}</p>
        <button className="px-10 py-8 bg-gray-200 text-2xl" onClick={onClick}>
          click me
        </button>
      </div>
    </div>
  );
}
