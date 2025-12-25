// This syntax are not used normally in the js file but here in this project with REACT we can use this type of import syntax.
// better way of importing images.
// Cause doing the manual src="path" can break while build process for deployment.

// import componentsImg from "./assets/components.png";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      {/* <header></header> 1st way */}
      <Header />
      <main>
        <section id="core-concepts">
        <h2>core comcepts</h2>
        <ul>
          <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image} 
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>PROPS</TabButton>
            <TabButton>STATE</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;

