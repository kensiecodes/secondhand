import Link from "next/link";
const Button = ({ link, text }) => (
  <Link
    href={link}
    className="hover:text-green-400 text-green-900 hover:drop-shadow-lg ease-in-out duration-100 transition bg-lime-200 py-2 px-4 m-2 rounded drop-shadow-md"
  >
    {text}
  </Link>
);

export default Button;
