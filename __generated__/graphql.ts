/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  smallint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Auth: Stores user login data within a secure schema. */
export type Auth_Users = {
  __typename?: 'auth_users';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  is_anonymous: Scalars['Boolean']['output'];
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user: Scalars['Boolean']['output'];
  is_super_admin?: Maybe<Scalars['Boolean']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  raw_app_meta_data?: Maybe<Scalars['jsonb']['output']>;
  raw_user_meta_data?: Maybe<Scalars['jsonb']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_App_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** Auth: Stores user login data within a secure schema. */
export type Auth_UsersRaw_User_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Append_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  _not?: InputMaybe<Auth_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  aud?: InputMaybe<String_Comparison_Exp>;
  banned_until?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_token?: InputMaybe<String_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_change?: InputMaybe<String_Comparison_Exp>;
  email_change_confirm_status?: InputMaybe<Smallint_Comparison_Exp>;
  email_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email_change_token_current?: InputMaybe<String_Comparison_Exp>;
  email_change_token_new?: InputMaybe<String_Comparison_Exp>;
  email_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  invited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  is_anonymous?: InputMaybe<Boolean_Comparison_Exp>;
  is_sso_user?: InputMaybe<Boolean_Comparison_Exp>;
  is_super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone_change?: InputMaybe<String_Comparison_Exp>;
  phone_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone_change_token?: InputMaybe<String_Comparison_Exp>;
  phone_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  raw_app_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_user_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  reauthentication_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  reauthentication_token?: InputMaybe<String_Comparison_Exp>;
  recovery_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  recovery_token?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint on columns "confirmation_token" */
  ConfirmationTokenIdx = 'confirmation_token_idx',
  /** unique or primary key constraint on columns "email_change_token_current" */
  EmailChangeTokenCurrentIdx = 'email_change_token_current_idx',
  /** unique or primary key constraint on columns "email_change_token_new" */
  EmailChangeTokenNewIdx = 'email_change_token_new_idx',
  /** unique or primary key constraint on columns "reauthentication_token" */
  ReauthenticationTokenIdx = 'reauthentication_token_idx',
  /** unique or primary key constraint on columns "recovery_token" */
  RecoveryTokenIdx = 'recovery_token_idx',
  /** unique or primary key constraint on columns "email" */
  UsersEmailPartialKey = 'users_email_partial_key',
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Users_Delete_At_Path_Input = {
  raw_app_meta_data?: InputMaybe<Array<Scalars['String']['input']>>;
  raw_user_meta_data?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Users_Delete_Elem_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['Int']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Users_Delete_Key_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['String']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  aud?: Maybe<Scalars['String']['output']>;
  banned_until?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  confirmation_token?: Maybe<Scalars['String']['output']>;
  confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_change?: Maybe<Scalars['String']['output']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  email_change_token_current?: Maybe<Scalars['String']['output']>;
  email_change_token_new?: Maybe<Scalars['String']['output']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  encrypted_password?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instance_id?: Maybe<Scalars['uuid']['output']>;
  invited_at?: Maybe<Scalars['timestamptz']['output']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_change?: Maybe<Scalars['String']['output']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  phone_change_token?: Maybe<Scalars['String']['output']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  reauthentication_token?: Maybe<Scalars['String']['output']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']['output']>;
  recovery_token?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** on_conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  aud?: InputMaybe<Order_By>;
  banned_until?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmation_token?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_change?: InputMaybe<Order_By>;
  email_change_confirm_status?: InputMaybe<Order_By>;
  email_change_sent_at?: InputMaybe<Order_By>;
  email_change_token_current?: InputMaybe<Order_By>;
  email_change_token_new?: InputMaybe<Order_By>;
  email_confirmed_at?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  invited_at?: InputMaybe<Order_By>;
  is_anonymous?: InputMaybe<Order_By>;
  is_sso_user?: InputMaybe<Order_By>;
  is_super_admin?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone_change?: InputMaybe<Order_By>;
  phone_change_sent_at?: InputMaybe<Order_By>;
  phone_change_token?: InputMaybe<Order_By>;
  phone_confirmed_at?: InputMaybe<Order_By>;
  raw_app_meta_data?: InputMaybe<Order_By>;
  raw_user_meta_data?: InputMaybe<Order_By>;
  reauthentication_sent_at?: InputMaybe<Order_By>;
  reauthentication_token?: InputMaybe<Order_By>;
  recovery_sent_at?: InputMaybe<Order_By>;
  recovery_token?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Prepend_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  IsSsoUser = 'is_sso_user',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "auth_users" */
export type Auth_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Users_Stream_Cursor_Value_Input = {
  aud?: InputMaybe<Scalars['String']['input']>;
  banned_until?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  confirmation_token?: InputMaybe<Scalars['String']['input']>;
  confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_change?: InputMaybe<Scalars['String']['input']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']['input']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email_change_token_current?: InputMaybe<Scalars['String']['input']>;
  email_change_token_new?: InputMaybe<Scalars['String']['input']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  encrypted_password?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instance_id?: InputMaybe<Scalars['uuid']['input']>;
  invited_at?: InputMaybe<Scalars['timestamptz']['input']>;
  is_anonymous?: InputMaybe<Scalars['Boolean']['input']>;
  /** Auth: Set this column to true when the account comes from SSO. These accounts can have duplicate emails. */
  is_sso_user?: InputMaybe<Scalars['Boolean']['input']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']['input']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_change?: InputMaybe<Scalars['String']['input']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  phone_change_token?: InputMaybe<Scalars['String']['input']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']['input']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']['input']>;
  reauthentication_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  reauthentication_token?: InputMaybe<Scalars['String']['input']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']['input']>;
  recovery_token?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  email_change_confirm_status?: Maybe<Scalars['smallint']['output']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  BannedUntil = 'banned_until',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsAnonymous = 'is_anonymous',
  /** column name */
  IsSsoUser = 'is_sso_user',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  ReauthenticationSentAt = 'reauthentication_sent_at',
  /** column name */
  ReauthenticationToken = 'reauthentication_token',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Auth_Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Auth_Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "hoges" */
export type Hoges = {
  __typename?: 'hoges';
  body?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  uid: Scalars['uuid']['output'];
};

/** aggregated selection of "hoges" */
export type Hoges_Aggregate = {
  __typename?: 'hoges_aggregate';
  aggregate?: Maybe<Hoges_Aggregate_Fields>;
  nodes: Array<Hoges>;
};

/** aggregate fields of "hoges" */
export type Hoges_Aggregate_Fields = {
  __typename?: 'hoges_aggregate_fields';
  avg?: Maybe<Hoges_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Hoges_Max_Fields>;
  min?: Maybe<Hoges_Min_Fields>;
  stddev?: Maybe<Hoges_Stddev_Fields>;
  stddev_pop?: Maybe<Hoges_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hoges_Stddev_Samp_Fields>;
  sum?: Maybe<Hoges_Sum_Fields>;
  var_pop?: Maybe<Hoges_Var_Pop_Fields>;
  var_samp?: Maybe<Hoges_Var_Samp_Fields>;
  variance?: Maybe<Hoges_Variance_Fields>;
};


/** aggregate fields of "hoges" */
export type Hoges_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hoges_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Hoges_Avg_Fields = {
  __typename?: 'hoges_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "hoges". All fields are combined with a logical 'AND'. */
export type Hoges_Bool_Exp = {
  _and?: InputMaybe<Array<Hoges_Bool_Exp>>;
  _not?: InputMaybe<Hoges_Bool_Exp>;
  _or?: InputMaybe<Array<Hoges_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "hoges" */
export enum Hoges_Constraint {
  /** unique or primary key constraint on columns "uid", "id" */
  HogesPkey = 'hoges_pkey'
}

/** input type for incrementing numeric columns in table "hoges" */
export type Hoges_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "hoges" */
export type Hoges_Insert_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  uid?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Hoges_Max_Fields = {
  __typename?: 'hoges_max_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  uid?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Hoges_Min_Fields = {
  __typename?: 'hoges_min_fields';
  body?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  uid?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "hoges" */
export type Hoges_Mutation_Response = {
  __typename?: 'hoges_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Hoges>;
};

/** on_conflict condition type for table "hoges" */
export type Hoges_On_Conflict = {
  constraint: Hoges_Constraint;
  update_columns?: Array<Hoges_Update_Column>;
  where?: InputMaybe<Hoges_Bool_Exp>;
};

/** Ordering options when selecting data from "hoges". */
export type Hoges_Order_By = {
  body?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hoges */
export type Hoges_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
  uid: Scalars['uuid']['input'];
};

/** select columns of table "hoges" */
export enum Hoges_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "hoges" */
export type Hoges_Set_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  uid?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Hoges_Stddev_Fields = {
  __typename?: 'hoges_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Hoges_Stddev_Pop_Fields = {
  __typename?: 'hoges_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Hoges_Stddev_Samp_Fields = {
  __typename?: 'hoges_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "hoges" */
export type Hoges_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Hoges_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Hoges_Stream_Cursor_Value_Input = {
  body?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  uid?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Hoges_Sum_Fields = {
  __typename?: 'hoges_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "hoges" */
export enum Hoges_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Uid = 'uid'
}

export type Hoges_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Hoges_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Hoges_Set_Input>;
  /** filter the rows which have to be updated */
  where: Hoges_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Hoges_Var_Pop_Fields = {
  __typename?: 'hoges_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Hoges_Var_Samp_Fields = {
  __typename?: 'hoges_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Hoges_Variance_Fields = {
  __typename?: 'hoges_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "hoges" */
  delete_hoges?: Maybe<Hoges_Mutation_Response>;
  /** delete single row from the table: "hoges" */
  delete_hoges_by_pk?: Maybe<Hoges>;
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<Tasks_Mutation_Response>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "hoges" */
  insert_hoges?: Maybe<Hoges_Mutation_Response>;
  /** insert a single row into the table: "hoges" */
  insert_hoges_one?: Maybe<Hoges>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<Tasks_Mutation_Response>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update multiples rows of table: "auth.users" */
  update_auth_users_many?: Maybe<Array<Maybe<Auth_Users_Mutation_Response>>>;
  /** update data of the table: "hoges" */
  update_hoges?: Maybe<Hoges_Mutation_Response>;
  /** update single row of the table: "hoges" */
  update_hoges_by_pk?: Maybe<Hoges>;
  /** update multiples rows of table: "hoges" */
  update_hoges_many?: Maybe<Array<Maybe<Hoges_Mutation_Response>>>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<Tasks_Mutation_Response>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
  /** update multiples rows of table: "tasks" */
  update_tasks_many?: Maybe<Array<Maybe<Tasks_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_HogesArgs = {
  where: Hoges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Hoges_By_PkArgs = {
  id: Scalars['bigint']['input'];
  uid: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TasksArgs = {
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tasks_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HogesArgs = {
  objects: Array<Hoges_Insert_Input>;
  on_conflict?: InputMaybe<Hoges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Hoges_OneArgs = {
  object: Hoges_Insert_Input;
  on_conflict?: InputMaybe<Hoges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TasksArgs = {
  objects: Array<Tasks_Insert_Input>;
  on_conflict?: InputMaybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tasks_OneArgs = {
  object: Tasks_Insert_Input;
  on_conflict?: InputMaybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_ManyArgs = {
  updates: Array<Auth_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_HogesArgs = {
  _inc?: InputMaybe<Hoges_Inc_Input>;
  _set?: InputMaybe<Hoges_Set_Input>;
  where: Hoges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Hoges_By_PkArgs = {
  _inc?: InputMaybe<Hoges_Inc_Input>;
  _set?: InputMaybe<Hoges_Set_Input>;
  pk_columns: Hoges_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Hoges_ManyArgs = {
  updates: Array<Hoges_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TasksArgs = {
  _set?: InputMaybe<Tasks_Set_Input>;
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_By_PkArgs = {
  _set?: InputMaybe<Tasks_Set_Input>;
  pk_columns: Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_ManyArgs = {
  updates: Array<Tasks_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "hoges" */
  hoges: Array<Hoges>;
  /** fetch aggregated fields from the table: "hoges" */
  hoges_aggregate: Hoges_Aggregate;
  /** fetch data from the table: "hoges" using primary key columns */
  hoges_by_pk?: Maybe<Hoges>;
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootHogesArgs = {
  distinct_on?: InputMaybe<Array<Hoges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hoges_Order_By>>;
  where?: InputMaybe<Hoges_Bool_Exp>;
};


export type Query_RootHoges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hoges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hoges_Order_By>>;
  where?: InputMaybe<Hoges_Bool_Exp>;
};


export type Query_RootHoges_By_PkArgs = {
  id: Scalars['bigint']['input'];
  uid: Scalars['uuid']['input'];
};


export type Query_RootTasksArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Query_RootTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Query_RootTasks_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']['input']>;
  _gt?: InputMaybe<Scalars['smallint']['input']>;
  _gte?: InputMaybe<Scalars['smallint']['input']>;
  _in?: InputMaybe<Array<Scalars['smallint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['smallint']['input']>;
  _lte?: InputMaybe<Scalars['smallint']['input']>;
  _neq?: InputMaybe<Scalars['smallint']['input']>;
  _nin?: InputMaybe<Array<Scalars['smallint']['input']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table in a streaming manner: "auth.users" */
  auth_users_stream: Array<Auth_Users>;
  /** fetch data from the table: "hoges" */
  hoges: Array<Hoges>;
  /** fetch aggregated fields from the table: "hoges" */
  hoges_aggregate: Hoges_Aggregate;
  /** fetch data from the table: "hoges" using primary key columns */
  hoges_by_pk?: Maybe<Hoges>;
  /** fetch data from the table in a streaming manner: "hoges" */
  hoges_stream: Array<Hoges>;
  /** fetch data from the table: "tasks" */
  tasks: Array<Tasks>;
  /** fetch aggregated fields from the table: "tasks" */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table in a streaming manner: "tasks" */
  tasks_stream: Array<Tasks>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAuth_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootHogesArgs = {
  distinct_on?: InputMaybe<Array<Hoges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hoges_Order_By>>;
  where?: InputMaybe<Hoges_Bool_Exp>;
};


export type Subscription_RootHoges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hoges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Hoges_Order_By>>;
  where?: InputMaybe<Hoges_Bool_Exp>;
};


export type Subscription_RootHoges_By_PkArgs = {
  id: Scalars['bigint']['input'];
  uid: Scalars['uuid']['input'];
};


export type Subscription_RootHoges_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Hoges_Stream_Cursor_Input>>;
  where?: InputMaybe<Hoges_Bool_Exp>;
};


export type Subscription_RootTasksArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Subscription_RootTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Subscription_RootTasks_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTasks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tasks_Stream_Cursor_Input>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};

/** columns and relationships of "tasks" */
export type Tasks = {
  __typename?: 'tasks';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  is_completed: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "tasks" */
export type Tasks_Aggregate = {
  __typename?: 'tasks_aggregate';
  aggregate?: Maybe<Tasks_Aggregate_Fields>;
  nodes: Array<Tasks>;
};

/** aggregate fields of "tasks" */
export type Tasks_Aggregate_Fields = {
  __typename?: 'tasks_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Tasks_Max_Fields>;
  min?: Maybe<Tasks_Min_Fields>;
};


/** aggregate fields of "tasks" */
export type Tasks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tasks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type Tasks_Bool_Exp = {
  _and?: InputMaybe<Array<Tasks_Bool_Exp>>;
  _not?: InputMaybe<Tasks_Bool_Exp>;
  _or?: InputMaybe<Array<Tasks_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_completed?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "tasks" */
export enum Tasks_Constraint {
  /** unique or primary key constraint on columns "id" */
  TasksPkey = 'tasks_pkey'
}

/** input type for inserting data into table "tasks" */
export type Tasks_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Tasks_Max_Fields = {
  __typename?: 'tasks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Tasks_Min_Fields = {
  __typename?: 'tasks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "tasks" */
export type Tasks_Mutation_Response = {
  __typename?: 'tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tasks>;
};

/** on_conflict condition type for table "tasks" */
export type Tasks_On_Conflict = {
  constraint: Tasks_Constraint;
  update_columns?: Array<Tasks_Update_Column>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};

/** Ordering options when selecting data from "tasks". */
export type Tasks_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_completed?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tasks */
export type Tasks_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "tasks" */
export enum Tasks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tasks" */
export type Tasks_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "tasks" */
export type Tasks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tasks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tasks_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "tasks" */
export enum Tasks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'is_completed',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Tasks_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tasks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tasks_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type HogesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HogesQueryQuery = { __typename?: 'query_root', hoges: Array<{ __typename?: 'hoges', id: any, body?: string | null, created_at: any, uid: any }> };

export type HogesInsertMutationMutationVariables = Exact<{
  objects?: InputMaybe<Array<Hoges_Insert_Input> | Hoges_Insert_Input>;
}>;


export type HogesInsertMutationMutation = { __typename?: 'mutation_root', insert_hoges?: { __typename?: 'hoges_mutation_response', affected_rows: number } | null };

export type HogesUpdateMutationMutationVariables = Exact<{
  _set?: InputMaybe<Hoges_Set_Input>;
  _eq?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type HogesUpdateMutationMutation = { __typename?: 'mutation_root', update_hoges?: { __typename?: 'hoges_mutation_response', affected_rows: number } | null };

export type HogesDeleteMutationMutationVariables = Exact<{
  _eq?: InputMaybe<Scalars['bigint']['input']>;
}>;


export type HogesDeleteMutationMutation = { __typename?: 'mutation_root', delete_hoges?: { __typename?: 'hoges_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'hoges', id: any, created_at: any, body?: string | null }> } | null };


export const HogesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"hogesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<HogesQueryQuery, HogesQueryQueryVariables>;
export const HogesInsertMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"hogesInsertMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"hoges_insert_input"}}}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_hoges"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<HogesInsertMutationMutation, HogesInsertMutationMutationVariables>;
export const HogesUpdateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"hogesUpdateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_set"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"hoges_set_input"}},"defaultValue":{"kind":"ObjectValue","fields":[]}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_hoges"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_set"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<HogesUpdateMutationMutation, HogesUpdateMutationMutationVariables>;
export const HogesDeleteMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"hogesDeleteMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"bigint"}},"defaultValue":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_hoges"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_eq"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]} as unknown as DocumentNode<HogesDeleteMutationMutation, HogesDeleteMutationMutationVariables>;