import Link from "next/link";

const Nav = () => (
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
  </>
);

export default Nav;
