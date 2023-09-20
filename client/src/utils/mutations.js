import { gql } from '@apollo/client';

export const CREATE_USERNAME = gql`
    mutation login_user{
        loginUser(){
            username
        }
    }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password:String!){
    addUser(username:$username, password:$password)
}
`;

export const SAVE_BOOK = gql`
mutation saveBook ($bookData:{author:String!,title:String!,description:String!,image:String!,link:String!})  {
    mutation saveBook($_id: ID!) {
        saveBook(_id: $_id )
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeSavedBook($_id:ID!){
    removeSavedBook(_id:$_id)}
}
`;