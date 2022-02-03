import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
    <div>
      <Link to={`/`}>Go Back</Link>
      <div></div>
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <div>
        <a href={url}>Click to MOVIE</a>
        <div></div>
        <span>Rating: {rating}</span>
        <div></div>
        <span>Runtime: {runtime} </span>
        <div></div>
        <span>Download_count: {download_count}</span>
        <p>Genres</p>
        {genres ? (
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        ) : null}
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
