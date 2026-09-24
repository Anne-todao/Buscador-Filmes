import { Link } from 'react-router-dom';
import styles from './MoviesCard.module.css';

export function MoviesCard({ movie, onToggleFavorite, isFavorite }) {
    const imageUrl = movie?.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=Sem+Capa';

    const title = movie?.title || movie?.name || 'Título Desconhecido';

    const releaseDate = movie?.release_date || movie?.first_air_date || 'Sem data de lançamento';

    return (
        <div className={styles['movie-card']}>
            <div className={styles['image-container']}>
                <img src={imageUrl} />
                <button
                    className={styles['favorite-btn']}
                    onClick={(e) => {
                        e.preventDefault();
                        onToggleFavorite(movie);
                    }}
                    title={isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos favoritos'}>
                    {isFavorite ? '★' : '☆'}
                </button>
                <div className={styles.overlay}>
                    <h3>{title}</h3>
                    <p>{releaseDate}</p>
                    <Link to={`/filme/${movie.id}`} className={styles['details-btn']}>
                        Ver Detalhes
                    </Link>
                </div>
            </div>
        </div>
    );
}
