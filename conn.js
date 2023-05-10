const { default: mongoose } = require("mongoose");
require("dotenv").config();

const conn = () => {
  const url = process.env.URL || 'mongodb+srv://sunilpatil14000:sunil14000@cluster0.qm1iwna.mongodb.net/roadsafety';

  mongoose
    .connect(url)
    .then(console.log("database connection successfully"))
    .catch((e) => {
      console.error(e);
    });
};

module.exports = conn();
