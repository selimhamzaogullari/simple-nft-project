import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_CHARACTER} from "../services";

function Details() {
  const {id} = useParams();
  const service = GET_CHARACTER(id);
  const { loading, error, data } = useQuery(service);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data)
  return (
      <div>
        Details
      </div>
  )
}

export default Details
