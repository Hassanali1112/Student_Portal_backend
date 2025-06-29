const express = require("express")
const authRoutes = require("./routes/auth")
const mongoose = require("./database/database.config")
require("dotenv").config()
const cors = require("cors");
const  applicationsRouter  = require("./routes/applications");
const app = express();


app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  
  next();
});


const PORT= process.env.PORT || 8080

mongoose.connection.on("open", () => {
  console.log(`MongoDB Connected`);
});


app.get("/", (req, res)=>{
  console.log("here is server")
  res.send("hello from server")
})

app.use('/api/auth',authRoutes)

app.use('/api/applications', applicationsRouter)




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

