import {
  gql
} from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetRates {
    characters(page: 1) {
      results {
        id, name, image
      }
    }
  }
`;

const GET_CHARACTER = (id) => {
  return gql`
  query GetRates {
    character(id: ${id}) { id, name }
  }
`
}

export {GET_CHARACTERS, GET_CHARACTER}
