const mongoose = require('mongoose');

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const port = process.env.PORT || 3000;







app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  // get the data from the form
 var url = req.body.myuri;
  // connect to the database and log the connection

  // add the data to the database

  // send a response to the user
  res.send(`<h1>Document ${url}  Added</h1>`);

  mongoose.connect(url)
  .then(() => {
    console.log("Connected to MongoDB");});
    
    const studentSchema = new mongoose.Schema({
      name: String,
      studentID: Number,
      
    });
  

  const student = mongoose.model("W24student", studentSchema);
  
  const Nico = new student({
    name: "Nicolas Abad",
    studentID: 300359375,
  

  });
  Nico.save();


});




app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
