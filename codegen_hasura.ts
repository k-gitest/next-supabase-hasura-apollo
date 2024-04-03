import { CodegenConfig } from '@graphql-codegen/cli';
import { hasuraUrl, hasuraKey } from './constants';

const config: CodegenConfig = {
  schema: {
    [`${hasuraUrl}`]: {
      headers: {
        'x-hasura-admin-secret': hasuraKey,
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
