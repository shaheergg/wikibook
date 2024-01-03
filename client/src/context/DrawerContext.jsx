import { useState, createContext, useContext } from "react";

const DrawerContext = createContext();

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

export const DrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
