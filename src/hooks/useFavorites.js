import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'phrasal-verbs:favorites';

const readStoredIds = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // Storage blocked (private mode, disabled cookies) or corrupted value.
    return [];
  }
};

/**
 * Favorite phrasal verbs, persisted in the browser's localStorage.
 * Data lives on this device and browser only.
 */
export const useFavorites = () => {
  const [favoriteIds, setFavoriteIds] = useState(() => new Set(readStoredIds()));

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...favoriteIds]));
    } catch {
      // Keep working in memory if the write fails (quota, blocked storage).
    }
  }, [favoriteIds]);

  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return { favoriteIds, toggleFavorite };
};
