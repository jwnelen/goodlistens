import { gql } from "@apollo/client";

const GET_PODCAST_SERIES = gql`
  {
    getPodcastSeries(name: "The Daily") {
      uuid
      name
      description
      imageUrl
    }
  }
`;

const SEARCH_FOR_TERM_QUERY = (query) => {
  return gql`
  {
    searchForTerm(term: "${query}", filterForTypes: PODCASTSERIES) {
      searchId
      podcastSeries {
        uuid
        name
        rssUrl
      }
    }
  }
`;
};

// const SEARCH_FOR_TERM_QUERY = gql`
//   query searchForTerm($term: String, $page: Int, $limitPerPage: Int, $filterForTypes: [TaddyType], $filterForCountries: [Country], $filterForLanguages: [Language], $filterForGenres: [Genre], $filterForSeriesUuids: [ID], $filterForNotInSeriesUuids: [ID], $isExactPhraseSearchMode: Boolean, $isSafeMode: Boolean, $searchResultsBoostType: SearchResultBoostType) {
//     searchForTerm(term: $term, page: $page, limitPerPage: $limitPerPage, filterForTypes: $filterForTypes, filterForCountries: $filterForCountries, filterForLanguages: $filterForLanguages, filterForGenres: $filterForGenres, filterForSeriesUuids: $filterForSeriesUuids, filterForNotInSeriesUuids: $filterForNotInSeriesUuids, isExactPhraseSearchMode: $isExactPhraseSearchMode, isSafeMode: $isSafeMode, searchResultsBoostType:$searchResultsBoostType) {
//       searchId
//       podcastSeries {
//         uuid
//         name
//         rssUrl
//         itunesId
//       }
//       podcastEpisodes {
//         uuid
//         guid
//         name
//         audioUrl
//       }
//     }
//   }
// `

const temp = {
  __typename: "PodcastSeries",
  uuid: "cb8d858a-3ef4-4645-8942-67e55c0927f2",
  name: "The Daily",
  description:
    "This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro and Sabrina Tavernise. Twenty minutes a day, five days a week, ready by 6 a.m.\n\nListen to this podcast in New York Times Audio, our new iOS app for news subscribers. Download now at nytimes.com/audioapp",
  imageUrl:
    "https://image.simplecastcdn.com/images/03d8b493-87fc-4bd1-931f-8a8e9b945d8a/2cce5659-f647-4366-b318-46e4b67afcfa/3000x3000/c81936f538106550b804e7e4fe2c236319bab7fba37941a6e8f7e5c3d3048b88fc5b2182fb790f7d446bdc820406456c94287f245db89d8656c105d5511ec3de.jpeg?aid=rss_feed",
};

export { GET_PODCAST_SERIES, SEARCH_FOR_TERM_QUERY, temp };
