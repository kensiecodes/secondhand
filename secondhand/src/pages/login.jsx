import Header from "./components/Header";
import BlobTwo from "./components/BlobTwo";
import BlobOne from "./components/BlobOne";
import Messages from "./components/Messages";
import Link from "next/link";

const Login = ({ messages }) => (
  <>
    <div className="mt-10"></div>
    <Header />
    <div className="overflow-hidden absolute w-[60em] z-[-10] top-[-400px] right-[-300px]">
      <BlobTwo />
    </div>
    <div className="overflow-hidden absolute w-[60em] z-[-10] bottom-[-400px] left-[-200px]">
      <BlobOne />
    </div>

    <div className="row justify-content-center">
      <section className="col-6 mt-5">
        <div className="max-w-md m-auto">
          <Messages messages={messages} />
        </div>

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

                <p className="text-sm font-light text-gray-500 pt-3">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="font-medium text-green-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default Login;
