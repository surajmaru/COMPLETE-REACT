import React from "react";
import { useAccordionContext } from "./Accordian";
import { useAccordionItemContext } from "./Accordionitem";

function AccordionTitle({ children, className }) {
  const { toggleItem } = useAccordionContext();
  const id = useAccordionItemContext();

  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}

export default AccordionTitle;
