import {gql} from "graphql-tag";

export const CREATE_USER = gql`
    mutation createUser($object: User_insert_input!) {
        insert_User_one(object: $object) {
            id
        }
    }
`;