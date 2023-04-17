const s = require("express");
let a = s();
a.get("/", (request, response) => {
  response.send("Express JS");
});
a.listen(3000);
module.exports = a;
