export type FavoriteType =
  | "Character"
  | "Devil Fruit"
  | "Crew"
  | "Bounty"
  | "News"
  | "Episode";

export type FavoriteItem = {
  id: string;
  title: string;
  type: FavoriteType;
  emoji: string;
  description: string;
  href: string;
};

export const FAVORITES_KEY = "one-piece-hub-favorites";

export function getFavorites(): FavoriteItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const saved = localStorage.getItem(FAVORITES_KEY);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed;
  } catch {
    return [];
  }
}

export function saveFavorites(items: FavoriteItem[]) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(items)
  );

  window.dispatchEvent(
    new CustomEvent("one-piece-favorites-updated")
  );
}

export function isFavorite(
  id: string,
  type?: FavoriteType
) {
  const favorites = getFavorites();

  return favorites.some((item) => {
    if (type) {
      return item.id === id && item.type === type;
    }

    return item.id === id;
  });
}

export function addFavorite(item: FavoriteItem) {
  const favorites = getFavorites();

  const exists = favorites.some(
    (favorite) =>
      favorite.id === item.id &&
      favorite.type === item.type
  );

  if (exists) {
    return;
  }

  saveFavorites([
    ...favorites,
    item,
  ]);
}

export function removeFavorite(
  id: string,
  type?: FavoriteType
) {
  const favorites = getFavorites();

  const updated = favorites.filter((favorite) => {
    if (type) {
      return !(
        favorite.id === id &&
        favorite.type === type
      );
    }

    return favorite.id !== id;
  });

  saveFavorites(updated);
}

export function toggleFavorite(
  item: FavoriteItem
): boolean {
  const favorites = getFavorites();

  const exists = favorites.some(
    (favorite) =>
      favorite.id === item.id &&
      favorite.type === item.type
  );

  if (exists) {
    removeFavorite(
      item.id,
      item.type
    );

    return false;
  }

  addFavorite(item);

  return true;
}