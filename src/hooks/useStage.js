import { useState } from 'react'

export const useStage = (key) => {

  const [item] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? storedValue: undefined;
  });

  const setLocal = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const remove = (item) => {
    localStorage.removeItem(item);
  }

  const removeAll = () => {
    localStorage.clear();
  }

  return {
    item,
    setLocal,
    remove,
    removeAll
  };
}
