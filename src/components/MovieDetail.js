import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";
function MovieDetail({
  url,
  title,
  rating,
  runtime,
  genres,
  download_count,
  description,
  img,
}) {
  return (
    <div className={styles.movie}>
      <div className={styles.movie__simple}>
        <div className={styles.movie__simple__left}>
          <img src={img} alt={title} className={styles.movie__img}></img>
        </div>
        <div className={styles.movie__simple__right}>
          <h2 className={styles.movie__title}>{title}</h2>
          <div className={styles.movie__info}>
            <span>Rating: {rating}</span>
            <span>Runtime: {runtime} </span>
            <span>Download_count: {download_count}</span>
          </div>
          <div className={styles.movie__info__genres}>
            Genres:
            {genres ? (
              <ul className={styles.movie__genres}>
                {genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.button__top}>
        <Link to={`/`} className={styles.button}>
          <button className={styles.button__btn}>Go Back</button>
        </Link>
        <a href={url} className={styles.button}>
          <button className={styles.button__btn}>Click to MOVIE</button>
        </a>
      </div>
      <hr />
      <p>{description}</p>
    </div>
  );
}
MovieDetail.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  download_count: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default MovieDetail;
