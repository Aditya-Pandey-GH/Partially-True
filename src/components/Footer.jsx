const Footer = () => {
	return (
		<nav className="p-4">
			{/* Copyright */}
			<a
				href="https://github.com/Aditya-Pandey-GH/Partially-True/blob/main/LICENSE"
				target="_blank"
				className="w-fit text-center md:text-lg hover:opacity-80 transition-opacity xs:float-right"
			>
				Copyright © MIT License {new Date().getFullYear()} <br className="xs:hidden" /> - Aditya Pandey
			</a>
		</nav>
	);
};

export default Footer;
