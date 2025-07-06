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

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
    </>
  );
}

export default App;
