const app = require('./config/server');
const db = require('./config/databaseConnection');

const PORT = 3000

//Start Server
app.listen(PORT, function(){
    console.log("Server running at port:", PORT);    
});