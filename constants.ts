import { createClient } from '@supabase/supabase-js';
import { gql } from '@apollo/client';
//import { gql } from './__generated__';

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const hasuraUrl = process.env.NEXT_PUBLIC_HASURA_URL!;
export const hasuraKey = process.env.NEXT_PUBLIC_HASURA_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const hogesQuery = gql(`
query hogesQuery {
  hoges {
    id
    body
    created_at
    uid
  }
}
`);

export const hogeInsert = gql(`
    mutation hogesInsertMutation($objects: [hoges_insert_input!] = {}) {
  insert_hoges(objects: $objects) {
    affected_rows
  }
}
`);

export const hogeUpdate = gql(`
mutation hogesUpdateMutation($_set: hoges_set_input = {}, $_eq: bigint = "") {
  update_hoges(where: {id: {_eq: $_eq}}, _set: $_set) {
    affected_rows
  }
}
`);

export const hogeDelete = gql(`
mutation hogesDeleteMutation($_eq: bigint = "") {
  delete_hoges(where: {id: {_eq: $_eq}}) {
    affected_rows
    returning {
      id
      created_at
      body
    }
  }
}
`);