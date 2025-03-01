const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://patil:patil@wanderlust.t3bfjui.mongodb.net/?retryWrites=true&w=majority&appName=Wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner:"6679a6324e2cceb254e35b0a"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
