'use client';
import { useCount, useCounterActions } from '@/store/hooks/useAppHooks';

function Counter() {
  const count = useCount();
  const { increment, decrement } = useCounterActions();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
