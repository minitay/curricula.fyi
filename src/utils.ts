import {Color, ReqType, Requirement} from "./types";
import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

export function getReqsTreeHeight(reqs: Array<Requirement>): number {
  let count = 0;
  for (const req of reqs) {
    switch (req.type) {
      case ReqType.Group:
      case ReqType.Text:
      case ReqType.Or:
      case ReqType.One:
        count += 1;
        break;
      case ReqType.Sequence:
        count += getReqsTreeHeight(req.requirements)
    }
  }
  return count
}

export function useWindowSize() {
  const isClient = typeof window === 'object';
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    if (!isClient) {
      return;
    }
    function handleResize() {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return windowSize;
}

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item)
      }
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export function colorToString(color: Color, opacity: number = 0.5) {
  const { r, g, b} = color;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}