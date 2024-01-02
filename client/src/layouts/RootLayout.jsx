import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
function RootLayout({ children }) {
  return (
    <div>
      <div></div>
      <main>{children}</main>
    </div>
  );
}

export default RootLayout;
