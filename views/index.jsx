import React from "react";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Giving from "./components/GivingSVG";
import BlobOne from "./components/BlobOne";
import BlobTwo from "./components/BlobTwo";
import Main from "./main";

const Index = (props) => (
  <Main>
    <div className="absolute w-[60em] z-[-10] bottom-[-400px] left-[-200px]">
      <BlobTwo />
    </div>
    <div className="absolute w-[60em] z-[-10] top-[-400px] right-[-400px]">
      <BlobOne />
    </div>
    <div className="mt-10">
      <div className="flex flex-col md:flex-row px-10 justify-center content-center pt-24">
        <section className="h-full flex justify-between content-between flex-col">
          <header className="text-stone-800">
            <div className="text-center">
              <h1 className="font-cherry lowercase text-6xl">
                <a href="/profile">Secondhand.</a>
              </h1>
              <span className="font-sans">Buy nothing, save the planet.</span>
            </div>
          </header>

          <div className="mt-10 flex content-center justify-center">
            <Button text="Login" link="/login"></Button>
            <Button text="Signup" link="/signup"></Button>
          </div>
        </section>

        <div className="w-96 h-auto mt-10 md:mt-0 max-md:mx-auto">
          <Giving />
        </div>
      </div>
    </div>
    <Footer />
  </Main>
);

export default Index;
