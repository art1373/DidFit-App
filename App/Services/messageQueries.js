import gql from 'graphql-tag'

export const GET_USERS = gql`
  {
    users {
      data {
        name
        email
        username
        address {
          street
          zipcode
        }
      }
    }
  }
`
export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      name
      username
      address {
        zipcode
        street
      }
    }
  }
`
