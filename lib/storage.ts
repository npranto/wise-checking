/**
 * Minimal safe wrappers for localStorage. Handles SSR by guarding against
 * missing window/localStorage. Quiz state pages and hooks/useLocalStorage
 * should use these instead of calling localStorage directly.
 * Intentionally minimal for MVP; extend for TTL or namespacing if needed.
 */

const isClient = typeof window !== "undefined" && typeof window.localStorage !== "undefined";

export function getLocalStorageItem<T>(key: string): T | null {
  if (!isClient) return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function setLocalStorageItem<T>(key: string, value: T): void {
  if (!isClient) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota or serialization errors in MVP
  }
}

export function removeLocalStorageItem(key: string): void {
  if (!isClient) return;
  try {
    window.localStorage.removeItem(key);
  } catch {
    // no-op
  }
}
