import React from "react";
import { Link } from "react-router-dom";
import {
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  MagnifyingGlassIcon,
  ChevronDoubleLeftIcon,
  PlusIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useDrawer } from "../context/DrawerContext";
function AppLayout({ children }) {
  const folders = [
    {
      id: 1,
      name: "Getting Started",
      wikis: [
        {
          id: 1,
          name: "What is wikibook.co?",
        },
        {
          id: 2,
          name: "How to use wikibook.co?",
        },
      ],
    },
  ];
  const { isOpen, toggleDrawer } = useDrawer();
  return (
    <div className="flex">
      <div
        className={`w-[300px] flex fixed flex-col h-screen bg-neutral-100 border-r border-neutral-300 ${
          isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } transition-all duration-300 z-[100] ${isOpen ? "shadow-md" : ""}`}
      >
        <div className="flex items-center justify-between px-4 py-2 hover:bg-neutral-200">
          <div className="flex items-center gap-4 font-inter">
            <img
              className="w-8 h-8 rounded-md bg-neutral-300"
              src="https://api.dicebear.com/7.x/lorelei/svg"
              alt="avatar"
            />
            <div>
              <h2 className="text-sm font-bold text-neutral-600">John Doe</h2>
            </div>
          </div>
          <div>
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-md hover:bg-neutral-300 text-neutral-600"
            >
              <ChevronDoubleLeftIcon className="w-4 h-4 " />
            </button>
          </div>
        </div>
        <div className="sticky top-0">
          <Link
            to="/"
            className="block px-4 py-2 font-bold text-neutral-500 hover:bg-neutral-200"
          >
            <MagnifyingGlassIcon className="inline-block w-5 h-5 mr-2" />
            Search
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 font-bold text-neutral-500 hover:bg-neutral-200"
          >
            <Cog6ToothIcon className="inline-block w-5 h-5 mr-2" />
            Settings
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 font-bold text-neutral-500 hover:bg-neutral-200"
          >
            <ArrowLeftStartOnRectangleIcon className="inline-block w-5 h-5 mr-2" />
            Logout
          </Link>
        </div>
        <div className="py-4 overflow-y-auto scrollbar h-96 font-inter">
          {folders.map((folder) => {
            return (
              <div key={folder.id}>
                <div className="px-4 py-2 font-bold text-neutral-600">
                  {folder.name}
                </div>
                <div className="">
                  {folder.wikis.map((wiki) => {
                    return (
                      <Link
                        key={wiki.id}
                        to="/"
                        className="block px-6 py-2 font-medium rounded-md text-neutral-600 hover:bg-neutral-200"
                      >
                        {wiki.name}
                      </Link>
                    );
                  })}
                  <button className="block w-full px-6 py-2 font-medium text-left rounded-md text-neutral-600 hover:bg-neutral-200">
                    <PlusIcon className="inline-block w-5 h-5 mr-2" />
                    Add Wiki
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1">
        <div className="p-2">
          <button
            onClick={toggleDrawer}
            className="p-2 rounded-md hover:bg-neutral-200 text-neutral-600"
          >
            <ChevronDoubleRightIcon className="w-4 h-4 " />
          </button>
        </div>
        <main className="p-2">{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
