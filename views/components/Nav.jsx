import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="pt-4 text-stone-800 px-10 flex flex-col sm:flex-row content-between justify-between">
        <div>
          <h1 className="font-cherry lowercase text-4xl">
            <a href="/profile">Secondhand.</a>
          </h1>
        </div>
        <ul className="flex pt-2 ">
          <li className="hover:text-teal-600 duration-150 ease-in-out transition pr-3 ">
            <a href="/profile">Profile</a>
          </li>
          <li className="hover:text-teal-600 duration-150 ease-in-out transition px-3">
            <a href="/create">Create Post</a>
          </li>
          <li className="hover:text-teal-600 duration-150 ease-in-out transition px-3">
            <a href="/feed">Feed</a>
          </li>
          <li className="hover:text-teal-600 duration-150 ease-in-out transition px-3">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
