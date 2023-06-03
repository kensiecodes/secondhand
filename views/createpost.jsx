import React from "react";
import Nav from "./components/Nav";
import Main from "./main";

export default function CreatePost() {
  return (
    <Main>
      <div className="text-stone-800">
        <Nav />
        <section className="col-6 mt-5">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-4/5 lg:py-0">
            <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Add a post
                </h1>
                <form
                  action="/post/createPost"
                  enctype="multipart/form-data"
                  method="POST"
                >
                  <div className="mb-3">
                    <label for="title" className="">
                      Title
                    </label>
                    <input type="text" className="" id="title" name="title" />
                  </div>
                  <div className="mb-3">
                    <label for="caption" className="">
                      Caption
                    </label>
                    <textarea
                      className="form-control"
                      id="caption"
                      name="caption"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label for="caption" className="form-label">
                      Condition
                    </label>
                    <input list="condition" />
                    <datalist
                      className="form-control"
                      id="condition"
                      name="condition"
                    >
                      <option value="New" />
                      <option value="Used (Like New)" />
                      <option value="Used (Great)" />
                      <option value="Used (Good)" />
                      <option value="Used (Fair)" />
                    </datalist>
                  </div>
                  <div className="mb-3">
                    <label for="imgUpload" className="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="imageUpload"
                      name="file"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    value="Upload"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {}

      <section className="col-6 mt-5">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-4/5 lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Add a post
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
    </Main>
  );
}
