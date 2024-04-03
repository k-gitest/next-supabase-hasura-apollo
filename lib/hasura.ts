import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { supabase, supabaseAnonKey, hasuraUrl } from '../constants';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${hasuraUrl}`,
});

const authLink = setContext(async (_, { headers }) => {
  const session = (await supabase.auth.getSession()).data.session;
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${session ? session.access_token : supabaseAnonKey}`,
      apikey: supabaseAnonKey,
    },
  };
});

const hasuraClient = new ApolloClient({
  uri: `${hasuraUrl}`,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default hasuraClient;
