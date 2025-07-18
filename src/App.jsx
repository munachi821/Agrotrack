// Importing from node_modules
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Importing css files
import "./css/App.css";
import "./css/Main.css";

// Importing Icon file
import "./assets/Icons/flaticon/flaticon.css";
import "./assets/Icons/fontawesome/fontawesome.min.css";
import "./assets/Icons/icofont/icofont.min.css";

//Importing Components
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  );
}

export default App;
