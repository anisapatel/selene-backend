const app = require("./app");
const port = 4000;

//ensures server is listening to incoming requests from the client side
//binds app to the relevant port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
