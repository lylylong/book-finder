import gql from "graphql-tag";

// 21.5.6
// export this query function by name and use it throughout the front end of the application
// conditionally render data that's specific to the logged-in user
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
