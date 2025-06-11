import { Link, replace, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<>
			<nav className="flex flex-row justify-between items-center px-4 pt-4">
				{/* Logo */}
				<section className="flex flex-row space-x-4">
					<img src="/logo.png" alt="Partially True" className="w-12 md:w-16" />
					<div className="flex flex-col">
						<span className="md:text-lg font-bold">Partially</span>
						<span className="md:text-lg font-bold">True</span>
					</div>
				</section>
				{/* Home Button */}
				<section className="pr-4">
					<button onClick={() => navigate("/")} className="cursor-pointer">
						{/* <button onClick={() => navigate("/", { replace: true })} className="cursor-pointer"> */}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#ffc700" className="w-6 md:w-8">
							<path
								d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
								stroke="black"
								strokeWidth={25}
							/>
						</svg>
					</button>
				</section>
			</nav>
		</>
	);
};

export default Navbar;
