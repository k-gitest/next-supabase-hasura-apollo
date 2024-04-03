/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery hogesQuery {\n  hoges {\n    id\n    body\n    created_at\n    uid\n  }\n}\n": types.HogesQueryDocument,
    "\n    mutation hogesInsertMutation($objects: [hoges_insert_input!] = {}) {\n  insert_hoges(objects: $objects) {\n    affected_rows\n  }\n}\n": types.HogesInsertMutationDocument,
    "\nmutation hogesUpdateMutation($_set: hoges_set_input = {}, $_eq: bigint = \"\") {\n  update_hoges(where: {id: {_eq: $_eq}}, _set: $_set) {\n    affected_rows\n  }\n}\n": types.HogesUpdateMutationDocument,
    "\nmutation hogesDeleteMutation($_eq: bigint = \"\") {\n  delete_hoges(where: {id: {_eq: $_eq}}) {\n    affected_rows\n    returning {\n      id\n      created_at\n      body\n    }\n  }\n}\n": types.HogesDeleteMutationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery hogesQuery {\n  hoges {\n    id\n    body\n    created_at\n    uid\n  }\n}\n"): (typeof documents)["\nquery hogesQuery {\n  hoges {\n    id\n    body\n    created_at\n    uid\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation hogesInsertMutation($objects: [hoges_insert_input!] = {}) {\n  insert_hoges(objects: $objects) {\n    affected_rows\n  }\n}\n"): (typeof documents)["\n    mutation hogesInsertMutation($objects: [hoges_insert_input!] = {}) {\n  insert_hoges(objects: $objects) {\n    affected_rows\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation hogesUpdateMutation($_set: hoges_set_input = {}, $_eq: bigint = \"\") {\n  update_hoges(where: {id: {_eq: $_eq}}, _set: $_set) {\n    affected_rows\n  }\n}\n"): (typeof documents)["\nmutation hogesUpdateMutation($_set: hoges_set_input = {}, $_eq: bigint = \"\") {\n  update_hoges(where: {id: {_eq: $_eq}}, _set: $_set) {\n    affected_rows\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation hogesDeleteMutation($_eq: bigint = \"\") {\n  delete_hoges(where: {id: {_eq: $_eq}}) {\n    affected_rows\n    returning {\n      id\n      created_at\n      body\n    }\n  }\n}\n"): (typeof documents)["\nmutation hogesDeleteMutation($_eq: bigint = \"\") {\n  delete_hoges(where: {id: {_eq: $_eq}}) {\n    affected_rows\n    returning {\n      id\n      created_at\n      body\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;