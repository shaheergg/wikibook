import { Link } from "react-router-dom";
export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <Link to="/" className="text-4xl font-bold text-center font-nunito">
              wikibook.co
            </Link>
          </div>
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900 font-inter">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button className="w-full px-4 py-2 font-semibold text-white bg-black rounded-md shadow hover:bg-gray-800">
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-10 text-sm text-center text-gray-500 font-inter">
            Not a member?{" "}
            <Link
              to="/register"
              href="#"
              className="font-semibold leading-6 text-gray-600 hover:underline hover:text-gray-500"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
