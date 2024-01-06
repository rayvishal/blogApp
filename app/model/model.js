import mongoose from "mongoose";
const clouddb = process.env.MONGODB_URI;
console.log(clouddb);

const options = {};
mongoose
  .connect(clouddb, options)
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
});
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export { Blog };
// "mongodb+srv://vishal76620:5oCAQxwiNk2qc8QM@cluster0.i084wd2.mongodb.net/blogdb?retryWrites=true&w=majority";
// const clouddb = process.env.MONGODB_URI;
// const localdb = "mongodb://127.0.0.1:27017/bookstoredb/blogdb";
