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
      <div class="md:mx-20">
        <div class="mt-10">
          <ul class="flex flex-wrap justify-center content-center">
            {posts.map((post) => (
              <li className="mx-1">
                <a href={`/post/${post._id}`}>
                  <img
                    className="object-cover w-[300px] h-[300px] my-2 overflow-hidden"
                    src={post.image}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Main>
  );
}
