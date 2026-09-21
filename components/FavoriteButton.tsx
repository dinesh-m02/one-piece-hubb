"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FavoriteItem,
  isFavorite,
  toggleFavorite,
} from "@/lib/favorites";

type FavoriteButtonProps = {
  item: FavoriteItem;
  className?: string;
};

export default function FavoriteButton({
  item,
  className = "",
}: FavoriteButtonProps) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const load = () => {
      setFavorite(
        isFavorite(item.id, item.type)
      );
    };

    load();

    const handleUpdate = () => {
      load();
    };

    window.addEventListener(
      "one-piece-favorites-updated",
      handleUpdate
    );

    return () => {
      window.removeEventListener(
        "one-piece-favorites-updated",
        handleUpdate
      );
    };
  }, [item.id, item.type]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const result = toggleFavorite(item);

    setFavorite(result);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        favorite
          ? `Remove ${item.title} from favorites`
          : `Add ${item.title} to favorites`
      }
      className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition ${
        favorite
          ? "border-[#f5c451]/50 bg-[#f5c451] text-black"
          : "border-white/10 bg-black/60 text-white hover:border-[#f5c451]/50 hover:text-[#f5c451]"
      } ${className}`}
    >
      <Heart
        size={18}
        fill={
          favorite
            ? "currentColor"
            : "none"
        }
      />
    </button>
  );
}