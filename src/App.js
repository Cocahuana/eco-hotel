import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import { themeContext } from "./context/themeContext";
import { theme } from "./components/Theme/Theme";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";
function App () {
  const [myTheme] = useState( theme )
  return (
      <themeContext.Provider value={ myTheme }>
        <BrowserRouter>
        <Navigation/>
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </BrowserRouter>
    </themeContext.Provider>
  );
}

export default App;