const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./db/conn");
const app = require("./app");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error(`Mongo Error${err}`));
