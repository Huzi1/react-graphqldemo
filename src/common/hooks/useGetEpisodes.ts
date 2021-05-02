import {gql} from 'apollo-boost';


export const GET_EPISODES = gql`
query getEpisodes(
    $page: Int
  ) {
    episodes(
      page: $page) 
    {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        created
        characters {
          name
        }
      }
    }
  }
`;

// query getEpisodes {
//     episodes{
//       info{
//         count
//         pages
//         next
//         prev
//       }
//       results{
//         id
//         name
//         air_date
//         episode
//         created
//         characters{
//           id
//           name
//         }
//       }
//     }
//   }