import React from "react";

const Folder = ({ name, wikis }) => {
  return (
    <div className="relative col-span-1 p-4 rounded cursor-pointer group bg-neutral-100 hover:bg-neutral-200">
      <h2>
        <span className="font-bold">{name}</span>
      </h2>
      <p className="text-neutral-600">
        <span className="font-semibold">Wikis:</span> {wikis}
      </p>
    </div>
  );
};

export default Folder;
