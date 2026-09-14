import app from "./src/app";
import dotenv from "dotenv";
dotenv.config();

const Port = process.env.PORT || 4000
app.listen(Port,()=>{
    console.log("Server Started in this ",`http://localhost:${Port}/`);
})

// ok