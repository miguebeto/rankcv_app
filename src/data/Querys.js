import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
  query findEpisodeById($pageNumber: Int) {
    characters(page: $pageNumber) {
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
  query findCharactersByEpisode($episodeNumber: ID!) {
    episode(id: $episodeNumber) {
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

export const FIND_EPISODES = gql`
  query findEpisodeById($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      created
    }
  }
`;

export const ALL_LOCATIONS = gql`
  query findCharactersByLocation($locationNumber: ID!) {
    location(id: $locationNumber) {
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
