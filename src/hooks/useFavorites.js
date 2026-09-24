import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'TMDB_FAVORITES_SAVE';

export function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem(FAVORITES_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie) => {

        const isFav = favorites.find((m) => m.id === movie.id);
        if (isFav) {
            setFavorites(favorites.filter((m) => m.id !== movie.id));
        } else {
            setFavorites([...favorites, movie]);
        }
    };

    const isFavorite = (movieCode) => {
        return favorites.some((m) => m.id === movieCode);
    };

    return { favorites, toggleFavorite, isFavorite };
}
