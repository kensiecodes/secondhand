import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Header'
import Button from "./partials/Button"
import Giving from "./partials/GivingSVG"

export default function Index(props) {
    return (
    <>
    <Header />
    <div className="flex row px-10 justify-center content-center ">

        <section className="h-full flex content-center">
            <div className="">
                <Button text="Login" link="/login"></Button>
                <Button text="Signup" link="/signup"></Button>
            </div>
        </section>

        <div className="w-96 h-auto ">
            <Giving />
        </div>

    </div>
    <Footer />
    </>
)
}

