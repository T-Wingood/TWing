const Express = require("express");
const app = Express();
const homepage = require("./controllers/homepage")
const cors = require("cors");

app.use(cors())
app.use(Express.json())
app.use("/homepage", homepage)
app.get("/", (req,res) => {
  res.json(require("./assets/resturaunt.json"))
})


app.listen(4000, () => {
  console.log(`server listening on 4000`);
});