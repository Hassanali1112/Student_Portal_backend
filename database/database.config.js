const mongoose = require("mongoose")

mongoose.connect(
  "mongodb+srv://Hassanali:Hassan1234@cluster0.rnnh53o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = mongoose;