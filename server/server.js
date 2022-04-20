const { authMiddleware } = require('./utils/auth');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});