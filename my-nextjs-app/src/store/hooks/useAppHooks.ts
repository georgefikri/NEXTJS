import { useAppContext } from '../context/AppContext';

// hook to get the count value
export const useCount = () => {
  const { count } = useAppContext();
  return count;
};

// hook to increment and decrement actions
export const useCounterActions = () => {
  const { increment, decrement } = useAppContext();
  return { increment, decrement };
};
