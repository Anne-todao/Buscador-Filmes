import { useState, useEffect } from 'react';
import tmdbApi from '../api/tmdb.js';
import { MoviesCard } from '../components/MoviesCard.jsx';
import { useFavorites } from '../hooks/useFavorites.js';
import styles from './Home.module.css';

const GENRES = [
    { id: 'popular', name: 'Populares', endpoint: '/movie/popular' },
    { id: '28', name: 'Ação', endpoint: '/discover/movie', params: { with_genres: 28 } },
    { id: '35', name: 'Comédia', endpoint: '/discover/movie', params: { with_genres: 35 } },
    { id: '18', name: 'Drama', endpoint: '/discover/movie', params: { with_genres: 18 } },
    { id: '10749', name: 'Romance', endpoint: '/discover/movie', params: { with_genres: 10749 } },
    {
        id: '878',
        name: 'Ficção Científica',
        endpoint: '/discover/movie',
        params: { with_genres: 878 },
    },
    {
        id: '10751',
        name: 'Infantil',
        endpoint: '/discover/movie',
        params: { with_genres: '16,10751' },
    },
];

export function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(GENRES[0]);

    const { isFavorite, toggleFavorite } = useFavorites();

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {

                const response = await tmdbApi.get(activeTab.endpoint, {
                    params: activeTab.params,
                });


                setMovies(response.data.results || []);
            } catch (error) {
                console.error('Erro ao buscar filmes', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [activeTab]);

    return (
        <div className="home-page">
            <div className={styles.tabsContainer}>
                {GENRES.map((genre) => (
                    <button
                        key={genre.id}
                        className={`${styles.tabBtn} ${activeTab.id === genre.id ? styles.active : ''}`}
                        onClick={() => setActiveTab(genre)}>
                        {genre.name}
                    </button>
                ))}
            </div>
            <h1 className={styles.title}>Explorando: {activeTab.name}</h1>

            {loading ? (
                <p className={styles.loadingText}>Carregando filmes...</p>
            ) : (
                <div className={styles.grid}>
                    {movies.map((movie) => (
                        <MoviesCard
                            key={movie.id}
                            movie={movie}
                            isFavorite={isFavorite(movie.id)}
                            onToggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            )}
            
        </div>

    );
}
