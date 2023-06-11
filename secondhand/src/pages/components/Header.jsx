import Link from "next/link";

const Header = () => (
  <header className="text-stone-800">
    <div className="text-center">
      <h1 className="font-cherry lowercase text-4xl">
        <Link href="/profile">Secondhand.</Link>
      </h1>
      <span className="font-sans">Buy nothing, save the planet.</span>
    </div>
  </header>
);

export default Header;
