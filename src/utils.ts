import {ReqType, Requirement} from "./types";
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
