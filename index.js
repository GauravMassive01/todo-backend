import {connectDB, sequelize} from "./db/db.js";
import app from "./app.js";
connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Application is running on Port", process.env.PORT)
    })
}).catch((error) => {
    console.log(error.message)
})



