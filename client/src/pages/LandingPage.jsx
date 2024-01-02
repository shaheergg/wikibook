import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="bg">
      <nav className="sticky top-0 flex items-center justify-between p-4 border-b">
        <div>
          <Link to="/" className="text-2xl font-bold font-nunito">
            wikibook.co <span className="text-sm">beta</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="px-4 py-2 font-semibold text-gray-600 rounded-md hover:bg-gray-100"
          >
            Sign In
          </a>
          <a
            href="#"
            className="px-4 py-2 font-semibold text-white bg-black rounded-md shadow hover:bg-gray-800"
          >
            Get Started
            <ArrowRightIcon className="inline-block w-4 h-4 ml-2" />
          </a>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center gap-8 min-h-[90vh]">
        <h2 className="max-w-4xl text-6xl font-bold text-center font-nunito">
          Crafting Human experiences with digital products
        </h2>
        <p className="max-w-xl text-xl text-center text-gray-600 font-inter">
          wikibook is a platform for designers and developers to learn and
          share, wikis, books, and courses.
        </p>
        <button className="flex items-center px-8 py-2 font-semibold text-white bg-black rounded-md shadow hover:bg-gray-800 font-inter">
          Get Started
          <ArrowRightIcon className="inline-block w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
