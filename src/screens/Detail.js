import {Link, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_CHARACTER} from "../services";
import BackIcon from '../images/back-icon.svg';
import Error from "../components/Error";
import Loading from "../components/Loading";

function Details() {
  const {id} = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id }
  });
  if (loading) return <Loading />;
  if(error) return <Error />
  console.log(data)
  return (
      <>
        {!loading && (
          <div className='relative'>
            <div className="text-center text-2xl font-bold">{data.character.name}</div>
            <div className="flex justify-center align-middle gap-10 mt-10 flex-wrap">
              <img className="rounded-xl" src={data.character.image} alt={data.character.name} />
              <div className='align-text-bottom content-center'>
                <div>
                  <span className="font-bold text-base">Name: </span>
                  <span className="font-light text-sm">{data.character.name}</span>
                </div>
                <div className="mt-4">
                  <span className="font-bold text-base">Location: </span>
                  <span className="font-light text-sm">{data.character.location.name}</span>
                </div>
                <div className="mt-4">
                  <span className="font-bold text-base">Last five episode: </span>
                  <ul className="mt-2 font-light text-sm">
                    {(data.character.episode && data.character.episode.length > 0) ?
                        data.character.episode.slice(-5).map((e, i) =>
                        <li className="mt-1.5" key={e.name + i}>- {e.name} </li>
                    ) : <span className="mt-1.5">No data</span>}
                  </ul>
                </div>
              </div>
            </div>
            <Link to={'/'} className="py-2 px-6 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl text-white absolute left-0 top-0">
              <img src={BackIcon} alt="back-icon"/>
            </Link>
          </div>
        )}
      </>
  )
}

export default Details
