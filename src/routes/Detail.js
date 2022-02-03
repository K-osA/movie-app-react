import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail([
      json.data.movie.url,
      json.data.movie.title_long,
      json.data.movie.rating,
      json.data.movie.runtime,
      json.data.movie.genres,
      json.data.movie.download_count,
      json.data.movie.description_full,
      json.data.movie.medium_cover_image,
    ]);
    setLoading(false);
  };
  // eslint-disable-next-line
  useEffect(() => getMovie(), []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          url={movieDetail[0]}
          title={movieDetail[1]}
          rating={movieDetail[2]}
          runtime={movieDetail[3]}
          genres={movieDetail[4]}
          download_count={movieDetail[5]}
          description={movieDetail[6]}
          img={movieDetail[7]}
        />
      )}
    </div>
  );
}
export default Detail;
