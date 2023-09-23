import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login_user ($email: String!, $password: String!) {
        login_user ($email: String!, $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password:String!){
    addUser(username:$username, password:$password){
        token
        user {
          _id
          username
          email
          bookCount
          savedBooks {
            authors
            bookId
            image
            link
            title
            description
          }
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation saveBook ($bookData:{author:String!,title:String!,description:String!,image:String!,link:String!})  {
    mutation saveBook($_id: ID!) {
        saveBook(newBook: $newBook) {
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
    }   }
}
`;

export const REMOVE_BOOK = gql`
mutation removeSavedBook($_id:ID!){
    removeSavedBook(bookId: $bookId) {
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