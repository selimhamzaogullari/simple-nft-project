import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_CHARACTER} from "../services";

function Details() {
  const {id} = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id }
  });
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
