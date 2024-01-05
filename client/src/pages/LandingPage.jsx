import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <nav className="sticky top-0 flex items-center justify-between p-4 border-b">
        <div>
          <Link to="/" className="text-2xl font-bold font-nunito">
            wikibook.co
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 font-semibold text-gray-600 rounded-md hover:bg-gray-100"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-xs font-semibold text-white bg-black rounded-md shadow md:text-sm hover:bg-gray-800"
          >
            Sign up
            <ArrowRightIcon className="hidden w-4 h-4 ml-2 sm:inline-block" />
          </Link>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center gap-8 min-h-[90vh]">
        <h2 className="max-w-4xl text-3xl font-bold text-center md:text-4xl sm:text-3xl lg:text-5xl xl:text-6xl font-nunito">
          The Knowledge Management Platform for Teams
        </h2>
        <p className="max-w-xl text-center text-gray-600 text-md sm:text-xl font-inter">
          All in one knowledge management platform for teams. Everything you
          need to organize your team's knowledge in one place.
        </p>
        <Link
          to="/register"
          className="flex items-center px-8 py-2 font-semibold text-white bg-black rounded-md shadow hover:bg-gray-800 font-inter"
        >
          Get Started
          <ArrowRightIcon className="inline-block w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
