import { graphql } from "../../gql";

const verifyGoogleTokenQuery = graphql(`
  #graphql
query VerifyUserGoogleUserToekn($token:String!){
    verifyGoogleToken(token:$token)
}
`)