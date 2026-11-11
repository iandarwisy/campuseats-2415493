import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [stored, setStored] = useState(() => {
    try {
      const saved = localStorage.getItem(key);

      return {
        key,
        value: saved !== null ? JSON.parse(saved) : initialValue,
      };
    } catch {
      return { key, value: initialValue };
    }
  });

  useEffect(() => {
    if (stored.key !== key) {
      try {
        const saved = localStorage.getItem(key);

        setStored({
          key,
          value: saved !== null ? JSON.parse(saved) : initialValue,
        });
      } catch {
        setStored({ key, value: initialValue });
      }
    }
  }, [key, stored.key, initialValue]);

  useEffect(() => {
    if (stored.key === key) {
      localStorage.setItem(key, JSON.stringify(stored.value));
    }
  }, [key, stored]);

  function setValue(newValue) {
    setStored((prev) => {
      if (prev.key !== key) {
        return prev;
      }

      const value =
        typeof newValue === "function" ? newValue(prev.value) : newValue;

      return { key, value };
    });
  }

  return [stored.key === key ? stored.value : initialValue, setValue];
}
