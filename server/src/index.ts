import * as express from "express";
import typeDefs from "./typeDefs";
import { resolvers } from "./resolvers";
import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import * as session from "express-session";

const PORT = 4000;

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }: any) => ({ req, res })
  });

  await createConnection();

  const app = express();

  app.use(
    session({
      secret: "asdjlfkaasdfkjlads",
      resave: false,
      saveUninitialized: false
    })
  );

  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
