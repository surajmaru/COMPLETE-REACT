import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreComponents.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      {/* <header></header> 1st way */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

