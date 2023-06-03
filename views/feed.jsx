import React from "react";
import Button from "./components/Button";
import BlobOne from "./components/BlobOne";
import BlobTwo from "./components/BlobTwo";
import Main from "./main";

import Nav from "./components/Nav";

export default function Feed({ posts }) {
  return (
    <Main>
      <Nav />
      <div class="container">
        <div class="row justify-content-center mt-5">
          <ul class="row list-unstyled">
            {posts.map((post) => (
              <li className="">
                <a href={`/post/${post._id}`}>
                  <img className="" src={post.image} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  );
}
