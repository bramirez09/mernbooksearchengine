const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: [User]
    }

    type Mutation {
        login(email:String!,password:String!): Auth
        addUser(username: String!, email:String!, password:String!): Auth
        saveBook(
            input:{
                authors: String!,
                description: String!,
                title: String!,
                bookId: String!,
                image: String!
            }
        )
        removeBook(bookId:ID!): User
    }

    type User {
        _id: ID,
        username: String!,
        email: String!,
        bookCount:[Book],
        savedBooks: String!,
    }

    type Book{
        bookId: ID!,
        authors: String!,
        description: String!,
        title: String!,
        image: String!,
        link: String!
    }

    type Auth {
        token : ID!,
        user: User
    }
`;

module.exports = typeDefs;