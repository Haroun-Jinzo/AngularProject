const express = require('express');
const database = require('./src/database/db.config');
require('dotenv').config();
const app = express();
app.use(express.json());
database.mongoose.connect(database.url, {
   
    }).then(() => {
    console.log("Connected to database.");
    }).catch(err => {
    console.error("Connection error", err);
    process.exit();
})
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send({message:'Hello World!'});
});

require('./src/api/routes/routes')(app);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});