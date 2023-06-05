import React from "react";
import BlobOne from "./components/BlobOne";
import BlobTwo from "./components/BlobTwo";
import Main from "./main";
import Nav from "./components/Nav";
import Button from "./components/Button";

const Post = ({ post, user, comments }) => (
  <Main>
    {/* <div className="absolute w-[60em] z-[-10] bottom-[-400px] left-[-200px]">
        <BlobTwo />
      </div>
      <div className="absolute w-[60em] z-[-10] top-[-400px] right-[-400px]">
        <BlobOne />
      </div> */}
    <Nav />
    <div className="mt-8"></div>
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-4/5 lg:py-0">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md lg:max-w-2xl xl:p-0 ">
        <div class="h-fit p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-2xl">{post.title}</h2>
          <div className="bg-stone-100">
            <img className="max-h-[500px] m-auto " src={post.image} />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex">
              <form
                className="text-xl text-stone-600 hover:text-lime-600"
                action={`/post/likePost/${post.id}?_method=PUT`}
                method="POST"
              >
                <button
                  className="drop-shadow fa fa-heart bg-lime-200 rounded p-3"
                  type="submit"
                ></button>
              </form>
              <h3 className="pt-2 text-xl ml-2">
                <span> {post.likes} </span>
                {post.likes == 1 ? "Like" : "Likes"}
              </h3>
            </div>
            {post.user == user.id && (
              <form
                action={`/post/deletePost/${post.id}?_method=DELETE`}
                method="POST"
                className="col-3 text-xl text-stone-600 hover:text-lime-600"
              >
                <button
                  className="drop-shadow  bg-lime-200 rounded p-3 fa fa-trash"
                  type="submit"
                ></button>
              </form>
            )}
          </div>
        </div>
        <div className="mx-6 bg-stone-100 p-2 rounded text-md">
          <p>
            Condition <span className="text-teal-600">{post.condition}</span>
          </p>
          <p>{post.caption}</p>
        </div>

        <div className="px-6 pt-6 flex flex-col">
          <h2 className="text-2xl">Add a comment</h2>
          <form action={`/comment/createComment/${post._id}`} method="POST">
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

            <button type="submit" className="">
              <Button text="Submit"></Button>
            </button>
          </form>
        </div>
        <ul className="px-6">
          {comments.map((comment) => (
            <li className="">
              {comment.comment}
              <a href={`/profile/${comment.user}`}>{comment.userName}</a>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-4 pt-6 flex flex-col">
          <a className="" href="/profile">
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
