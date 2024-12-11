'use client';
import { useCount, useCounterActions } from '@/store/hooks/useAppHooks';
import { Button } from '@georgefikri/design-system';

function Counter() {
  const count = useCount();
  const { increment, decrement } = useCounterActions();

  return (
    <div className="flex flex-col mb-6">
      <h1>Counter: {count}</h1>
      <div>this is for random content</div>

      <div className="flex gap-2">
        <Button variant="primary" size="medium" onClick={increment} className="shadow">
          Increment
        </Button>
        <Button variant="danger" size="medium" onClick={decrement} className="shadow">
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default Counter;
