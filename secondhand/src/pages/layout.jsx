import { useEffect, useState } from "react";
import Messages from "./components/Messages.jsx";

import Link from "next/link";

export default function Layout({ children }) {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState({});

  useEffect(() => {
    if (user == undefined)
      fetch("/api/user", { credentials: "include" })
        .then((res) => res.json())
        .then((res) => setUser(res.user));
  }, [user]);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMessages({});
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <>
      <nav className="pt-4 text-stone-800 px-10 flex flex-col sm:flex-row content-between justify-between">
        <div>
          <h1 className="font-cherry lowercase text-4xl">
            <Link href="/profile">Secondhand.</Link>
          </h1>
        </div>
        <ul className="flex pt-2 ">
          <li className="hover:text-teal-600 duration-150 ease-in-out transition pr-3 ">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="hover:text-teal-600 duration-150 ease-in-out transition px-3">
            <Link href="/create">Create Post</Link>
          </li>
          <li className="hover:text-teal-600 duration-150 ease-in-out transition px-3">
            <Link href="/feed">Feed</Link>
          </li>
          <li className="hover:text-teal-600 duration-150 ease-in-out transition px-3">
            <Link href="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <Messages messages={messages} />
      {children}
      {/* <Outlet context={{ user, setUser, setMessages }} /> */}
    </>
  );
}
