import { CodegenConfig } from '@graphql-codegen/cli';
import { supabaseAnonKey, supabaseUrl } from './constants';

const config: CodegenConfig = {
  schema: {
    [`${supabaseUrl}/graphql/v1`]: {
      headers: {
        Authorization: `Bearer ${supabaseAnonKey}`,
        apikey: `${supabaseAnonKey}`,
      },
    },
  },
  documents: ['**/*.tsx', '**/*.ts'],
  generates: {
    './__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
