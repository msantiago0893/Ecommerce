import { useEffect, useState } from 'react'

export const useStage = (key, initial) => {

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initial;
  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const remove = (item) => {
    localStorage.removeItem(item);
  }

  const removeAll = () => {
    localStorage.clear();
  }

  return {value, setValue, remove, removeAll};
}
