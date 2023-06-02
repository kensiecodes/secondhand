import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Head'
import Button from "./partials/Button"
import Giving from "./partials/GivingSVG"
import BlobOne from "./partials/BlobOne"

export default function Index(props) {
    return (
    <>
    <div className="absolute w-96 bottom-0 left-0"><BlobOne /></div>
    <div className="mt-10">
    <Header />
    

    <div className="flex row px-10 justify-center content-center pt-24">

        <section className="h-full flex justify-between content-between flex-col">

            <header className="text-stone-800">
                <div className="text-center">
                    <h1 className="font-cherry lowercase text-6xl"><a href="/profile">Secondhand.</a></h1>
                    <span className="font-sans">Buy nothing, save the planet.</span>
                </div>
            </header>

            <div className="mt-10 flex content-center justify-center">
                <Button text="Login" link="/login"></Button>
                <Button text="Signup" link="/signup"></Button>
            </div>
        </section>

        <div className="w-96 h-auto ">
            <Giving />
        </div>

    </div>
    </div>
    <Footer />
    </>
)
}

