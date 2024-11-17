'use client';

import { useCounterContext } from '@/store/context/CounterContext';

const Counter = () => {
  const { count, increment, decrement } = useCounterContext();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <div className="space-x-4 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={increment}>
          Increment
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
