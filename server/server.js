const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })

const app = require("./app")

const DB = process.env.DATABASE
// .replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// )

mongoose.connect(DB).then(() => console.log("DB connection successful!"))

app.listen(process.env.PORT || 5050, () => {
  console.log("app is runing on port ", process.env.PORT)
})
