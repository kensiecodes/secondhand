import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Header'

export default function Index(props) {
    return (
    <>
    <Header />
    <section className="container">
        <div className="row justify-content-around mt-5">
            <a href="/login" className="col-3 btn btn-primary"> Login</a>
            <a href="/signup" className="col-3 btn btn-primary"> Signup</a>
        </div>
    </section>
    <Footer />
    </>
)
}

