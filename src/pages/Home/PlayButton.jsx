import { Link } from "react-router-dom";

const PlayButton = () => {
	return (
		<Link
			to="/game"
			className="flex flex-row gap-4 bg-green-700 hover:bg-green-800 transition-colors text-base xs:text-lg md:text-xl xl:text-2xl font-bold px-8 py-4 rounded cursor-pointer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white" className="w-4">
				<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
			</svg>
			<span className="">Play</span>
		</Link>
	);
};

export default PlayButton;
