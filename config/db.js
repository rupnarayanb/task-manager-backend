// const mongoose = require('mongoose');

// const connectDB = async() => {
//     try{
//         await mongoose.connect('mongodb://127.0.0.1:27017/myapp',{});
//         console.log("✅ MongoDB Connected now")
//     } catch(err){
//         console.error("❌ MongoDB Connection Error:", err);
//         process.exit(1);
//     }
// }

// module.exports = connectDB;


const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected (Atlas)");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

