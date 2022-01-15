import Character from "../components/Character";
import {useQuery} from "@apollo/client";
import {GET_CHARACTERS} from "../services";
import {useEffect, useState} from "react";

function Home() {

  const [page, setPage] = useState(1)
  const [allCharacters, setAllCharacters] = useState([])
  let inc = 1;

  useEffect(() => { // Mount - Unmount
    window.addEventListener('scroll', scrollTrigger);
    return () => {
      setAllCharacters([])
      window.removeEventListener("mousedown", scrollTrigger);
    };
  }, []);

  // Work service
  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  // Add new page data
  useEffect(() => {
    data !== undefined && setAllCharacters(oldArray => [...oldArray, ...data.characters.results]);
  }, [data])

  // Trigger scroll
  const scrollTrigger = _ => {
    if(window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight) {
      inc ++
      setPage(inc)
    }
  }

  return (
      <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4'>
        {allCharacters.length > 0 && allCharacters.map((c, i) =>
            <Character name={c.name} img={c.image} id={c.id} key={'c' + i}/>
        )
        }
        {loading && <div>Loading...</div>}
      </div>
  )
}

export default Home
