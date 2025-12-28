import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts(){
    return (

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
        
    )
}