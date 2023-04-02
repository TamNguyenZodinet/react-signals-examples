import { useSignal, useComputed } from "@preact/signals-react";
import { useEffect } from "react";
import { useState } from "react";

export default function CounterLocalState() {
  const [count, setCount] = useState(0);
  const [double, setDouble] = useState(0);

  useEffect(() => {
    setDouble(count * 2);
  }, [count]);

  const onClick = () => {
    setCount(count + 1);
  };

  console.log("render Counter Local State");
  return (
    <div className="w-full h-[600px] flex justify-center items-center">
      <div className=" w-fit">
        <p className="text-3xl">
          {count} x 2 = {double}
        </p>
        <button className="px-10 py-8 bg-gray-200 text-2xl" onClick={onClick}>
          click me
        </button>
      </div>
    </div>
  );
}

// const count = useSignal(0);
// const double = useComputed(() => count.value * 2);

// const onClick = () => {
//     count.value++
// }
