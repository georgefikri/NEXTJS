import { useState } from 'react';

// Define the shape of the AppState
export interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Logic for managing the state
const useCounterState = (): AppState => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
};

export default useCounterState;
