import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home.component";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
