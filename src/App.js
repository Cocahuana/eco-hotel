import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { themeContext } from "./context/themeContext";
import { theme } from "./components/Theme/Theme";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";
import Paths from "./data/paths.json";
function App() {
	const [myTheme] = useState(theme);
	const { home, ourServices, gallery, location, contact } = Paths;
	return (
		<themeContext.Provider value={myTheme}>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path={ourServices.link} element={<Home />} />
					<Route path={gallery.link} element={<Home />} />
					<Route path={location.link} element={<Home />} />
					<Route path={contact.link} element={<Home />} /> */}
				</Routes>
			</BrowserRouter>
		</themeContext.Provider>
	);
}

export default App;
