const server = require("./server");
const PORT = 4000;
const {main} = require("../src/db")

main().catch(err => console.log(err));
server.listen(PORT)
  
  console.log(`Server listening on port ${PORT}`)

