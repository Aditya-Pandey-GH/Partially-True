import { Link } from "react-router-dom";

const AboutButton = () => {
	return (
		<Link
			to="/about"
			className="flex flex-row gap-4 bg-cyan-700 hover:bg-cyan-800 transition-colors text-base xs:text-lg md:text-xl xl:text-2xl font-bold px-8 py-4 rounded cursor-pointer"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white" className="w-4">
				<path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
			</svg>
			<span className="">About</span>
		</Link>
	);
};

export default AboutButton;
