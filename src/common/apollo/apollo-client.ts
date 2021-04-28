import { ApolloClient, InMemoryCache, NormalizedCacheObject} from '@apollo/client';


const client = new ApolloClient({
    uri:'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache() 
})
export default client;