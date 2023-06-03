import React from "react";
import Footer from "./partials/Footer";
import Head from "./partials/Head";
import Header from "./partials/Header";
import Button from "./partials/Button";
import { post } from "../routes/main";

export default function Index(props) {
  return (
    <>
      <Head />
      <Header />
      <div class="row mt-5">
        <div class="col-6">
          <div>
            <p>
              <strong>User Name</strong>: {props.user.userName}
            </p>
            <p>
              <strong>Email</strong>: {props.user.email}
            </p>
            <a href="/logout" class="col-3 btn btn-secondary">
              Logout
            </a>
          </div>
          <div class="mt-5">
            <h2>Add a post</h2>
            <form
              action="/post/createPost"
              enctype="multipart/form-data"
              method="POST"
            >
              <div class="mb-3">
                <label for="title" class="form-label">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                />
              </div>
              <div class="mb-3">
                <label for="caption" class="form-label">
                  Caption
                </label>
                <textarea
                  class="form-control"
                  id="caption"
                  name="caption"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="caption" class="form-label">
                  Condition
                </label>
                <input list="condition" />
                <datalist class="form-control" id="condition" name="condition">
                  <option value="New" />
                  <option value="Used (Like New)" />
                  <option value="Used (Great)" />
                  <option value="Used (Good)" />
                  <option value="Used (Fair)" />
                </datalist>
              </div>
              <div class="mb-3">
                <label for="imgUpload" class="form-label">
                  Image
                </label>
                <input
                  type="file"
                  class="form-control"
                  id="imageUpload"
                  name="file"
                />
              </div>
              <button type="submit" class="btn btn-primary" value="Upload">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div class="col-6">
          <ul class="row list-unstyled">
            {/* <% for(var i=0; i<posts.length; i++) {%>
          <li class="col-6 justify-content-between mt-5">
            <a href="/post/<%= posts[i]._id%>">
              <img class="img-fluid" src="<%= posts[i].image%>">
            </a>
          </li>
        <% } %>  */}
            {props.posts.map((post) => {
              <li className="">
                <a href={`/post/${post._id}`}>
                  <img className="" src={post.image} />
                </a>
              </li>;
            })}
          </ul>
          <div class="row justify-content-center mt-5">
            <a class="btn btn-primary" href="/feed">
              Return to Feed
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
