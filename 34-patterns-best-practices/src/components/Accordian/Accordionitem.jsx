import { createContext, useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);

  if (!ctx) {
    throw new Error("Bro theres an error yo ;");
  }

  return ctx;
}

function Accordionitem({ id, children, className }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}

export default Accordionitem;
