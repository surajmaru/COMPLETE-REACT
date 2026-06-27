import React from "react";
import { useAccordionContext } from "./Accordian";
import { useAccordionItemContext } from "./Accordionitem";

function AccordionContent({ children, className }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}

export default AccordionContent;
