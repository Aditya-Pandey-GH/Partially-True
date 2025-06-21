import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Settings from "./pages/Settings/Settings";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
	!localStorage.getItem("difficulty") && localStorage.setItem("difficulty", 0);
	!localStorage.getItem("digits") && localStorage.setItem("digits", 3);
	!localStorage.getItem("volume") && localStorage.setItem("volume", 1);
	!localStorage.getItem("colDigits") && localStorage.setItem("colDigits", 1);
	return (
		<div className="w-full min-h-dvh flex flex-col">
			<BrowserRouter>
				<Navbar />
				<div style={{ flex: 1 }} className="flex">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/game" element={<Game />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/about" element={<About />} />

						{/* Default path */}
						<Route path="*" element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default App;
