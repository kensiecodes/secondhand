import React from "react";
import BlobOne from "./components/BlobOne";
import BlobTwo from "./components/BlobTwo";
import Main from "./main";

const Post = ({ post, user, comments }) => (
  <Main>
    {/* <div className="absolute w-[60em] z-[-10] bottom-[-400px] left-[-200px]">
        <BlobTwo />
      </div>
      <div className="absolute w-[60em] z-[-10] top-[-400px] right-[-400px]">
        <BlobOne />
      </div> */}
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <h2>{post.title}</h2>
          <img className="img-fluid" src={post.image} />
          <div className="row justify-content-between">
            <form
              className="col-1"
              action={`/post/likePost/${post.id}?_method=PUT`}
              method="POST"
            >
              <button
                className="btn btn-primary fa fa-heart"
                type="submit"
              ></button>
            </form>
            <h3 className="col-3">Likes: {post.likes}</h3>
            {post.user == user.id && (
              <form
                action={`/post/deletePost/${post.id}?_method=DELETE`}
                method="POST"
                className="col-3"
              >
                <button
                  className="btn btn-primary fa fa-trash"
                  type="submit"
                ></button>
              </form>
            )}
          </div>
        </div>
        <div className="col-3 mt-5">
          <p>{post.caption}</p>
          <p>Condition: {post.condition}</p>
        </div>

        <div className="mt-5">
          <h2>Add a comment</h2>
          <form action="/comment/createComment/<%=post._id%>" method="POST">
            <div className="mb-3">
              <label for="comment" className="form-label">
                Comment
              </label>
              <input
                type="text"
                className="form-control"
                id="comment"
                name="comment"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <ul>
          {comments.map((comment) => (
            <li className="">
              {comment.comment}
              <a href={`/profile/${comment.user}`}>{comment.userName}</a>
            </li>
          ))}
        </ul>
        <div className="col-6 mt-5">
          <a className="btn btn-primary" href="/profile">
            Return to Profile
          </a>
          <a className="btn btn-primary" href="/feed">
            Return to Feed
          </a>
        </div>
      </div>
    </div>
  </Main>
);
export default Post;
