import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Settings from "./pages/Settings/Settings";
import Help from "./pages/Help/Help";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<div className="w-full min-h-screen flex flex-col">
			<BrowserRouter>
				<Navbar />
				<div style={{ flex: 1 }} className="flex">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/game" element={<Game />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/help" element={<Help />} />

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
