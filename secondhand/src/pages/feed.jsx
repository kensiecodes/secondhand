import Button from "./components/Button";
import BlobOne from "./components/BlobOne";
import BlobTwo from "./components/BlobTwo";
import Main from "./main";
import Link from "next/link";
import Nav from "./components/Nav";

const Feed = ({ posts }) => (
  <Main>
    <Nav />
    <div className="md:mx-20">
      <div className="mt-10">
        <ul className="flex flex-wrap justify-center content-center">
          {posts.map((post) => (
            <li className="mx-1">
              <Link href={`/post/${post._id}`}>
                <img
                  className="object-cover w-[300px] h-[300px] my-1 overflow-hidden"
                  src={post.image}
                />
                <p className="relative text-xl bottom-8 bg-white bg-opacity-80 pl-2 text-ellipsis ">
                  {post.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Main>
);

export default Feed;
