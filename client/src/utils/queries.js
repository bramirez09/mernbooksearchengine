import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query me{
        me{
            username,email
        }
    }
`;
