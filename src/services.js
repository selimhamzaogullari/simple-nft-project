import {
  gql
} from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetRates ($page: Int!){
    characters(page: $page) {
      results {
        id, name, image
      }
    }
  }
`;

const GET_CHARACTER = gql`
  query GetRates ($id: ID!) {
    character(id: $id) { 
    id, name, image, episode{name}, location{name} 
    }
  }
`

export {GET_CHARACTERS, GET_CHARACTER}
