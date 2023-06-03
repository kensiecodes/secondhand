import React from "react";
import Head from "./partials/Head";
import Header from "./partials/Header";
import BlobTwo from "./partials/BlobTwo";
import BlobOne from "./partials/BlobOne";

export default function Login(props) {
  return (
    <>
      <Head />
      <div className="mt-10"></div>
      <Header />
      <div className="absolute w-[60em] z-[-10] top-[-400px] right-[-300px]">
        <BlobTwo />
      </div>
      <div className="absolute w-[60em] z-[-10] bottom-[-400px] left-[-200px]">
        <BlobOne />
      </div>
      <main className="">
        <div className="row justify-content-center">
          <section className="col-6 mt-5">
            {props.messages.errors &&
              props.messages.errors.map((element) => (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  {element.msg}
                </div>
              ))}
            {props.messages.info
              ? props.messages.info.map((element) => (
                  <div className="alert alert-danger text-red-600">
                    {element.message}
                  </div>
                ))
              : null}

            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-4/5 lg:py-0">
              <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                  </h1>
                  <form action="/login" method="POST">
                    <div className="mb-3">
                      <label
                        for="exampleInputEmail1"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p-2.5"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        for="exampleInputPassword1"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lime-200 focus:border-lime-200 block w-full p-2.5"
                        id="exampleInputPassword1"
                        name="password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-lime-700 bg-lime-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      Submit
                    </button>

                    <p class="text-sm font-light text-gray-500 pt-3">
                      Don’t have an account yet?{" "}
                      <a
                        href="/signup"
                        class="font-medium text-green-600 hover:underline"
                      >
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
