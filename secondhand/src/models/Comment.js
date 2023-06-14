import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: {
    type: String,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

CommentScheme.plugin(mongooseAutoPopulate);

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
