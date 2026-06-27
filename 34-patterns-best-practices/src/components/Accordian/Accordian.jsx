import React, { createContext, useContext, useState } from "react";
import Accordionitem from "./Accordionitem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";
const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("No accordion !!");
  }

  return ctx;
}

function Accordian({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}
Accordian.Title = AccordionTitle;
Accordian.Content = AccordionContent;

export default Accordian;
