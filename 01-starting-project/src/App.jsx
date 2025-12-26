// This syntax are not used normally in the js file but here in this project with REACT we can use this type of import syntax.
// better way of importing images.
// Cause doing the manual src="path" can break while build process for deployment.

// import componentsImg from "./assets/components.png";

import {useState} from "react"; // A react hook.

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {

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


  return (
    <div>
      {/* <header></header> 1st way */}
      <Header />
      <main>
        <section id="core-concepts">
        <h2>core comcepts</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item} />)}

          {/* <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} /> */}

          {/* {selectedTopic === "components" ? 
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image} 
          /> : selectedTopic === "jsx" ? 
          <CoreConcept {...CORE_CONCEPTS[1]} /> :
          selectedTopic === "props" ? 
          <CoreConcept {...CORE_CONCEPTS[2]} /> :
          selectedTopic === "state" ? 
          <CoreConcept {...CORE_CONCEPTS[3]} /> : 
          <p>Please select a topic</p>} */}

        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>jsx</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>state</TabButton>
          </menu>

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

        </section>
      </main>
    </div>
  );
}

export default App;

