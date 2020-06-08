const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://Uno:hellobabe@cluster0-dqgwo.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas", err);
  });
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Listening for requests in port 4000");
});
