export const typeDefs = `#graphql
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}

type Query {
  books: [Book]
}
`;
