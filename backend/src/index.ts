import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 5000;

//conections and listeners
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
      console.log("Server Open and conected to Database")
    );
  })
  .catch((err) => console.log(err));
