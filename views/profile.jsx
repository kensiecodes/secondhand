import React from "react";
import Footer from "./partials/Footer";
import Head from "./partials/Head";
import Header from "./partials/Header";

export default function Profile({ user, posts }) {
  return (
    <>
      <Head />
      <Header />
      <div className="row mt-5">
        <div className="col-6">
          <div>
            <p>
              <strong>User Name</strong>: {user.userName}
            </p>
            <p>
              <strong>Email</strong>: {user.email}
            </p>
            <a href="/logout" className="col-3 btn btn-secondary">
              Logout
            </a>
          </div>
          <div className="mt-5">
            <h2>Add a post</h2>
            <form
              action="/post/createPost"
              enctype="multipart/form-data"
              method="POST"
            >
              <div className="mb-3">
                <label for="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                />
              </div>
              <div className="mb-3">
                <label for="caption" className="form-label">
                  Caption
                </label>
                <textarea
                  className="form-control"
                  id="caption"
                  name="caption"
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="caption" className="form-label">
                  Condition
                </label>
                <input list="condition" />
                <datalist
                  className="form-control"
                  id="condition"
                  name="condition"
                >
                  <option value="New" />
                  <option value="Used (Like New)" />
                  <option value="Used (Great)" />
                  <option value="Used (Good)" />
                  <option value="Used (Fair)" />
                </datalist>
              </div>
              <div className="mb-3">
                <label for="imgUpload" className="form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="imageUpload"
                  name="file"
                />
              </div>
              <button type="submit" className="btn btn-primary" value="Upload">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-6">
          <ul className="row list-unstyled">
            {posts.map((post) => (
              <li className="">
                <a href={`/post/${post._id}`}>
                  <img className="" src={post.image} />
                </a>
              </li>
            ))}
          </ul>
          <div className="row justify-content-center mt-5">
            <a className="btn btn-primary" href="/feed">
              Return to Feed
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
