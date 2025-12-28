import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){
      // useState hook.
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);    
        // console.log(selectedTopic); // It works 1 step behind.
    }

      // let tabContent = <p>Please select a topic.</p>;
      // if(selectedTopic) {
      //   tabContent = ( <div id="tab-content">
      //             <h3>{EXAMPLES[selectedTopic].title}</h3>
      //             <p>{EXAMPLES[selectedTopic].description}</p>
      //             <pre>
      //               <code>
      //                 {EXAMPLES[selectedTopic].code}
      //               </code>
      //             </pre>
      //           </div> );
      // }

    return(
        <Section title={"Examples"} id="examples">

        <Tabs 
        ButtonsContainer="menu"
        buttons={
            <>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>jsx</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>state</TabButton>
            </>
        }>

            {selectedTopic ? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
            </div> : 
            <p>Please select a topic.</p> }
        </Tabs>


              {/* another way of rendering content conditionally (short-circuiting)*/}

              {/* {!selectedTopic && <p>Please select a topic.</p>}
              {selectedTopic && <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div> } */}

              {/* another way for rendering content conditionally */}
            
            {/* {tabContent} */}

        </Section>
    )
}