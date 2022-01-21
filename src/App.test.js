import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import {GET_CHARACTER, GET_CHARACTERS} from './services'
import {MockedProvider} from '@apollo/client/testing'
import Home from './screens/Home';
import Details from "./screens/Detail";
import NotFound404 from "./screens/NotFound404";
import renderer from "react-test-renderer";
import {act} from "react-dom/test-utils";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {page: 1}
    },
    result: {
      "data": {
        "characters": {
          "results": [{
            "id": "1",
            "name": "Rick Sanchez",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "gender": "Male"
          },
            {
              "id": "2",
              "name": "Morty Smith",
              "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              "gender": "Male"
            },
            {
              "id": "3",
              "name": "Summer Smith",
              "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              "gender": "Female"
            },
            {
              "id": "4",
              "name": "Beth Smith",
              "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
              "gender": "Female"
            },
            {
              "id": "5",
              "name": "Jerry Smith",
              "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
              "gender": "Male"
            },
            {
              "id": "6",
              "name": "Abadango Cluster Princess",
              "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
              "gender": "Female"
            },
            {
              "id": "7",
              "name": "Abradolf Lincler",
              "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
              "gender": "Male"
            },
            {
              "id": "8",
              "name": "Adjudicator Rick",
              "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
              "gender": "Male"
            },
            {
              "id": "9",
              "name": "Agency Director",
              "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
              "gender": "Male"
            },
            {
              "id": "10",
              "name": "Alan Rails",
              "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
              "gender": "Male"
            },
            {
              "id": "11",
              "name": "Albert Einstein",
              "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
              "gender": "Male"
            },
            {
              "id": "12",
              "name": "Alexander",
              "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
              "gender": "Male"
            },
            {
              "id": "13",
              "name": "Alien Googah",
              "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
              "gender": "unknown"
            },
            {
              "id": "14",
              "name": "Alien Morty",
              "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
              "gender": "Male"
            },
            {
              "id": "15",
              "name": "Alien Rick",
              "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
              "gender": "Male"
            },
            {
              "id": "16",
              "name": "Amish Cyborg",
              "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
              "gender": "Male"
            },
            {
              "id": "17",
              "name": "Annie",
              "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
              "gender": "Female"
            },
            {
              "id": "18",
              "name": "Antenna Morty",
              "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
              "gender": "Male"
            },
            {
              "id": "19",
              "name": "Antenna Rick",
              "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
              "gender": "Male"
            },
            {
              "id": "20",
              "name": "Ants in my Eyes Johnson",
              "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
              "gender": "Male"
            }
          ]
        }
      }
    }
  },
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 2
      }
    },
    result: {
      "data": {
        "characters": {
          "results": [{
            "id": "21",
            "name": "Aqua Morty",
            "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
            "gender": "Male"
          },
            {
              "id": "22",
              "name": "Aqua Rick",
              "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
              "gender": "Male"
            },
            {
              "id": "23",
              "name": "Arcade Alien",
              "image": "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
              "gender": "Male"
            },
            {
              "id": "24",
              "name": "Armagheadon",
              "image": "https://rickandmortyapi.com/api/character/avatar/24.jpeg",
              "gender": "Male"
            },
            {
              "id": "25",
              "name": "Armothy",
              "image": "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
              "gender": "Male"
            },
            {
              "id": "26",
              "name": "Arthricia",
              "image": "https://rickandmortyapi.com/api/character/avatar/26.jpeg",
              "gender": "Female"
            },
            {
              "id": "27",
              "name": "Artist Morty",
              "image": "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
              "gender": "Male"
            },
            {
              "id": "28",
              "name": "Attila Starwar",
              "image": "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
              "gender": "Male"
            },
            {
              "id": "29",
              "name": "Baby Legs",
              "image": "https://rickandmortyapi.com/api/character/avatar/29.jpeg",
              "gender": "Male"
            },
            {
              "id": "30",
              "name": "Baby Poopybutthole",
              "image": "https://rickandmortyapi.com/api/character/avatar/30.jpeg",
              "gender": "Male"
            },
            {
              "id": "31",
              "name": "Baby Wizard",
              "image": "https://rickandmortyapi.com/api/character/avatar/31.jpeg",
              "gender": "Male"
            },
            {
              "id": "32",
              "name": "Bearded Lady",
              "image": "https://rickandmortyapi.com/api/character/avatar/32.jpeg",
              "gender": "Female"
            },
            {
              "id": "33",
              "name": "Beebo",
              "image": "https://rickandmortyapi.com/api/character/avatar/33.jpeg",
              "gender": "Male"
            },
            {
              "id": "34",
              "name": "Benjamin",
              "image": "https://rickandmortyapi.com/api/character/avatar/34.jpeg",
              "gender": "Male"
            },
            {
              "id": "35",
              "name": "Bepisian",
              "image": "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
              "gender": "unknown"
            },
            {
              "id": "36",
              "name": "Beta-Seven",
              "image": "https://rickandmortyapi.com/api/character/avatar/36.jpeg",
              "gender": "unknown"
            },
            {
              "id": "37",
              "name": "Beth Sanchez",
              "image": "https://rickandmortyapi.com/api/character/avatar/37.jpeg",
              "gender": "Female"
            },
            {
              "id": "38",
              "name": "Beth Smith",
              "image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              "gender": "Female"
            },
            {
              "id": "39",
              "name": "Beth Smith",
              "image": "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
              "gender": "Female"
            },
            {
              "id": "40",
              "name": "Beth's Mytholog",
              "image": "https://rickandmortyapi.com/api/character/avatar/40.jpeg",
              "gender": "Female"
            }
          ]
        }
      }
    }
  },
  {
    request: {
      query: GET_CHARACTER,
      variables: {"id":"2"}
    },
    result: {
      "data": {
        "character": {
          "id": "2",
          "name": "Morty Smith",
          "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          "episode": [
            {
              "name": "Pilot"
            },
            {
              "name": "Lawnmower Dog"
            },
            {
              "name": "Anatomy Park"
            },
            {
              "name": "M. Night Shaym-Aliens!"
            },
            {
              "name": "Meeseeks and Destroy"
            },
            {
              "name": "Rick Potion #9"
            },
            {
              "name": "Raising Gazorpazorp"
            },
            {
              "name": "Rixty Minutes"
            },
            {
              "name": "Something Ricked This Way Comes"
            },
            {
              "name": "Close Rick-counters of the Rick Kind"
            },
            {
              "name": "Ricksy Business"
            },
            {
              "name": "A Rickle in Time"
            },
            {
              "name": "Mortynight Run"
            },
            {
              "name": "Auto Erotic Assimilation"
            },
            {
              "name": "Total Rickall"
            },
            {
              "name": "Get Schwifty"
            },
            {
              "name": "The Ricks Must Be Crazy"
            },
            {
              "name": "Big Trouble in Little Sanchez"
            },
            {
              "name": "Interdimensional Cable 2: Tempting Fate"
            },
            {
              "name": "Look Who's Purging Now"
            },
            {
              "name": "The Wedding Squanchers"
            },
            {
              "name": "The Rickshank Rickdemption"
            },
            {
              "name": "Rickmancing the Stone"
            },
            {
              "name": "Pickle Rick"
            },
            {
              "name": "Vindicators 3: The Return of Worldender"
            },
            {
              "name": "The Whirly Dirly Conspiracy"
            },
            {
              "name": "Rest and Ricklaxation"
            },
            {
              "name": "The Ricklantis Mixup"
            },
            {
              "name": "Morty's Mind Blowers"
            },
            {
              "name": "The ABC's of Beth"
            },
            {
              "name": "The Rickchurian Mortydate"
            },
            {
              "name": "Edge of Tomorty: Rick, Die, Rickpeat"
            },
            {
              "name": "The Old Man and the Seat"
            },
            {
              "name": "One Crew Over the Crewcoo's Morty"
            },
            {
              "name": "Claw and Hoarder: Special Ricktim's Morty"
            },
            {
              "name": "Rattlestar Ricklactica"
            },
            {
              "name": "Never Ricking Morty"
            },
            {
              "name": "Promortyus"
            },
            {
              "name": "The Vat of Acid Episode"
            },
            {
              "name": "Childrick of Mort"
            },
            {
              "name": "Star Mort: Rickturn of the Jerri"
            },
            {
              "name": "Mort Dinner Rick Andre"
            },
            {
              "name": "Mortyplicity"
            },
            {
              "name": "A Rickconvenient Mort"
            },
            {
              "name": "Rickdependence Spray"
            },
            {
              "name": "Amortycan Grickfitti"
            },
            {
              "name": "Rick & Morty's Thanksploitation Spectacular"
            },
            {
              "name": "Gotron Jerrysis Rickvangelion"
            },
            {
              "name": "Rickternal Friendshine of the Spotless Mort"
            },
            {
              "name": "Forgetting Sarick Mortshall"
            },
            {
              "name": "Rickmurai Jack"
            }
          ],
          "location": {
            "name": "Citadel of Ricks"
          }
        }
      }
    }
  }
]

const returnTemplate = _ => {
  return (
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter initialEntries = {['/']}>
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound404 />}/>
          </Routes>
        </MemoryRouter>
      </MockedProvider>
  )
}


beforeEach(() => {
  render(
      returnTemplate()
  );
})

test('Home page is working truly', async () => {

  expect(screen.getByText('Loading...')).toBeInTheDocument()

  let titleElement = await screen.findByText("Morty Smith");
  expect(titleElement).toBeInTheDocument();

});

test('Get new data with scroll', async () => {
  const windowHeight = window.innerHeight
  await fireEvent.scroll(window, {
    target: {
      scrollY: windowHeight
    }
  });
  let isLoading = await screen.findByText("Aqua Morty");
  expect(isLoading).toBeInTheDocument();
})

test('Click detail page and working truly', async () => {
  let morty = await screen.findByText("Morty Smith");
  expect(morty).toBeInTheDocument()

  const firstElement = screen.getByTestId("link-2");
  expect(firstElement).toHaveAttribute('href', '/details/2')

  fireEvent.click(firstElement)

  await screen.findByText('Citadel of Ricks')
})


// Snapshot Testing
test('Home page after Loading snapshot', async () => {
  const Home = renderer.create(returnTemplate()).toJSON()

  expect(screen.getByText('Loading...')).toBeInTheDocument()

  expect(Home).toMatchSnapshot();
})
