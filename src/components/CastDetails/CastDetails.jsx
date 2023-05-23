import Loader from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'services/api';




export const CastDetails = () => {
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const data = await getCredits(id);
        setCast(data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  const castes = cast.map(({ id, name, character, profile_path }) => (
    <li key={id} className="">
      {profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          className=""
          alt=""
        ></img>
      )}
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));

  return (
    <>
      {loading && <Loader />}
      <ul>
        {castes.length === 0 ? "We don't have any cast for this movie" : castes}
      </ul>
    </>
  );
};
