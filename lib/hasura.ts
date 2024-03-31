import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { supabase, supabaseAnonKey } from '../constants';
import { setContext } from '@apollo/client/link/context';

const hasuraUrl = process.env.NEXT_PUBLIC_HASURA_URL!;

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

export default hasuraClient
