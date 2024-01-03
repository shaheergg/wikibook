import React from "react";
import AppLayout from "../layouts/AppLayout";
import { useDrawer } from "../context/DrawerContext";
import { Cog6ToothIcon, PlusIcon } from "@heroicons/react/24/outline";
function Dashboard() {
  const { isOpen } = useDrawer();
  return (
    <AppLayout>
      <div
        className={`font-nunito transition-all duration-300 ${
          isOpen ? "ml-[300px] ease-out" : "ml-0 ease-in"
        }`}
      >
        <div className="max-w-5xl mx-auto space-y-4">
          <div>
            <h2 className="max-w-lg text-4xl font-bold">
              Hi, John, welcome to your dashboard!
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Here you can manage your folders and wikis. You can also change
            </p>
          </div>
          <div className="min-h-[50vh]  flex justify-center flex-col">
            <div className="mt-8 space-y-4">
              <div className="">
                <span className="text-sm font-semibold text-inter text-neutral-600">
                  Add New
                </span>
              </div>
              <button className="flex items-center w-full gap-2 px-4 py-2 text-left rounded-md font-inter justify-left text-neutral-600 hover:bg-neutral-200">
                <PlusIcon className="w-5 h-5" />
                <span className="font-bold text-left">Create a folder</span>
              </button>
              <button className="flex items-center w-full gap-2 px-4 py-2 text-left rounded-md font-inter justify-left text-neutral-600 hover:bg-neutral-200">
                <PlusIcon className="w-5 h-5" />
                <span className="font-bold text-left">Create a wiki</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
