const express = require("express");
const LoginC = require("./controller/LoginC");
const RegisterC = require("./controller/RegisterC");
const cors = require("cors");
const Getdata = require('./controller/Getdata')
const app = express();
app.use(express.json());
require("./conn");

require("dotenv").config();

app.use(cors());

app.post("/login", LoginC);

app.post("/register", RegisterC);

app.post('/getdata',Getdata);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server stared at ${PORT}`);
});
