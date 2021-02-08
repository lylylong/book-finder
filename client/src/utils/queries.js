import gql from "graphql-tag";

// export this query function by name and use it throughout the front end of the application
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
