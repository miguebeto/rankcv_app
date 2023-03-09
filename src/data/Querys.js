import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query findEpisodeById($number: Int) {
    characters(page: $number) {
      info {
        pages
      }
      results {
        id
        image
        name
        gender
        species
        status
      }
    }
  }
`;

export const ALL_EPISODES = gql`
  query findCharactersByEpisode($number: ID!) {
    episode(id: $number) {
      name
      air_date
      characters {
        id
        image
        name
        gender
        species
        status
      }
    }
  }
`;


export const ALL_LOCATIONS = gql`
  query findCharactersByLocation($number: ID!) {
    location(id: $number) {
      name
      dimension
      type
      residents {
        id
        image
        name
        gender
        species
        status
      }
    }
  }
`;
