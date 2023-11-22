const app = require(".");
const { connectDb } = require( './src/config/db.js' );
const PORT = 5454;
app.listen(PORT, async()=>{
  connectDb();
  console.log('api listening on PORT:', PORT);
})

