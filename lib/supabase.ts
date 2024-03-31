import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { supabase, supabaseAnonKey, supabaseUrl } from '../constants';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `${supabaseUrl}/graphql/v1`,
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

export const apolloClient = new ApolloClient({
  uri: `${supabaseUrl}/graphql/v1`,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


