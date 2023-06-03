import React from "react";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Header from "./components/Header";
import Nav from "./components/Nav";
import BlobOne from "./components/BlobOne";
import Button from "./components/Button";

export default function Profile({ user, posts }) {
  return (
    <>
      <Head />
      <Nav />
      <div className="overflow-hidden absolute w-[60em] z-[-10] top-[-400px] right-[-400px]">
        <BlobOne />
      </div>
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
        </div>
        <Button link="/post/create" text="Create Post" />
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
