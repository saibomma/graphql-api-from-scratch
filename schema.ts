import { gql } from "apollo-server-express";
export const typeDefs = gql`
    # Schema
    type Query {
      # String, Int, Float, Boolean, ID are scalar type
      # !String => !null
      hello: String
      numberOfAnimals: Int
      price: Float
      isCool: Boolean
      # Array type
      greeting: [String]
      products: [Product!]!
      categories: [Category!]!
    }
    type Product{
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
    }
    type Category{
        id: ID!
        name: String!
        products: [Product!]!
    }

    `