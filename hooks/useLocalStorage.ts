"use client";

/**
 * Generic hook that syncs state to localStorage using lib/storage.
 * Handles SSR by lazily reading the initial value on the client so
 * we don't assume window/localStorage during SSR.
 *
 * Expected usage: quiz state key (e.g. "wise-quiz-state"). Not for
 * sensitive data; localStorage is plaintext and same-origin only.
 */

import { useCallback, useState } from "react";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/lib/storage";

export function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(() => {
    const stored = getLocalStorageItem<T>(key);
    return stored ?? initialValue;
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setState((prev) => {
        const next = typeof value === "function" ? (value as (prev: T) => T)(prev) : value;
        setLocalStorageItem(key, next);
        return next;
      });
    },
    [key]
  );

  return [state, setValue];
}
