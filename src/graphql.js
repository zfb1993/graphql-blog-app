import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
    mutation SignupMutation($name: String!, $email: String!, $password: String!) {
        createUser(
            name: $name,
            email: $email,
            password: $password
        ) {
            id
            name
            email
        }
    }
`

export const LOGIN_MUTATION = gql`
  mutation login($mobile: String!, $password: String!) {
    login(
      mobile: $mobile,
      password: $password
    ) {
      access_token
      token_type
      expires_in
    }
  }
`

export const PERMISSION_LIST = gql`
  query{
  permissions{
    id
    name
  }
}
`

export const HELLO = gql`
  query{
    hello
  }
`