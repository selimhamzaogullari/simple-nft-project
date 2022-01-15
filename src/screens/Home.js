import Character from "../components/Character";
import {useQuery} from "@apollo/client";
import {GET_CHARACTERS} from "../services";

function Home() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
      <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4'>
        {data.characters.results.map((c, i) =>
            <Character name={c.name} img={c.image} id={c.id} key={'c' + i}/>
        )
        }
      </div>
  )
}

export default Home
