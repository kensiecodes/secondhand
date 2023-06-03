import React from "react";
import Footer from "./partials/Footer";
import Button from "./partials/Button";
import Giving from "./partials/GivingSVG";
import BlobOne from "./partials/BlobOne";
import BlobTwo from "./partials/BlobTwo";
import Main from "./main";
import Header from "./partials/Header";

export default function Feed({ posts }) {
  return (
    <Main>
      <Header />
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
