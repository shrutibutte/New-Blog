import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegularHeader from "./components/header/RegularHeader";
import JumboTron from "./components/jumbotron/JumboTron";
import RegularFooter from "./components/footer/RegularFooter";

function App() {
  return (
    <div>
      <RegularHeader />
      <JumboTron />
      <RegularFooter />
    </div>
  );
}

export default App;
