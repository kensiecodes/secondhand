import Footer from "./components/Footer";
import Head from "./components/Head";
import Nav from "./components/Nav";
import BlobOne from "./components/BlobOne";
import Button from "./components/Button";
import Link from "next/link";

const Profile = ({ user, posts }) => (
  <>
    <Head />
    <Nav />
    <div className="overflow-hidden absolute w-[60em] z-[-10] top-[-400px] right-[-400px]">
      <BlobOne />
    </div>
    <div className="flex m-auto mt-10 w-2/3 justify-center">
      <div className="pr-5 mt-10">
        <div>
          <p>
            <strong>User Name</strong>: {user.userName}
          </p>
          <p>
            <strong>Email</strong>: {user.email}
          </p>
          <div className="pt-10">
            <Link href="/logout" className="col-3 btn btn-secondary">
              Logout
            </Link>
            <Button link="/post/create" text="Create Post" />
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl text-right pr-3">Gives</h2>
        <ul className="grid grid-cols-2">
          {posts.map((post) => (
            <li className="m-2">
              <a href={`/post/${post._id}`}>
                <img
                  className="w-[300px] h-[300px] overflow-hidden object-cover"
                  src={post.image}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="text-right pr-3 py-4 ">
          <Link
            className="hover:text-teal-600 duration-150 ease-in-out transition"
            href="/feed"
          >
            Return to Feed
          </Link>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default Profile;
