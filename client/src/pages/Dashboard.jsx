import React from "react";
import AppLayout from "../layouts/AppLayout";
import { PlusIcon } from "@heroicons/react/24/outline";
import Folder from "../components/Folder";
function Dashboard() {
  const random = false;
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
  return (
    <AppLayout>
      <div>
        <div className="max-w-5xl mx-auto space-y-4">
          <div>
            <h2 className="text-4xl font-bold ">
              Hi, John, welcome to wikibook!
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Here you can manage your folders and wikis.
            </p>
          </div>
          <div className="min-h-[50vh]  flex justify-center flex-col">
            {random ? (
              <div className="mt-8 space-y-4">
                <div className="">
                  <span className="px-4 py-2 text-sm font-semibold text-inter text-neutral-600">
                    Start creating today
                  </span>
                </div>
                <button className="flex items-center w-full gap-2 px-4 py-2 text-left rounded-md font-inter justify-left text-neutral-600 hover:bg-neutral-100">
                  <PlusIcon className="w-5 h-5" />
                  <span className="font-bold text-left">Create a folder</span>
                </button>
                <button className="flex items-center w-full gap-2 px-4 py-2 text-left rounded-md font-inter justify-left text-neutral-600 hover:bg-neutral-100">
                  <PlusIcon className="w-5 h-5" />
                  <span className="font-bold text-left">Create a wiki</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
                {folders.map((folder) => {
                  return (
                    <Folder
                      key={folder.id}
                      name={folder.name}
                      wikis={folder.wikis.length}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
