const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./Config/dbconnection");

const dotenv = require("dotenv").config();
connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routers/contactRoutes"));
app.use("/api/users", require("./routers/userRoutes"));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
