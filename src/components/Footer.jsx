const Footer = () => {
	return (
		<nav className="flex flex-col md:flex-row justify-between items-center p-4">
			{/* Copyright */}
			<a
				href="https://github.com/Aditya-Pandey-GH/Partially-True/blob/main/LICENSE"
				target="_blank"
				className="w-fit text-center md:text-lg hover:opacity-75 transition-opacity xs:float-right"
			>
				Copyright © MIT License {new Date().getFullYear()}
			</a>

			{/* Social Media */}
			<section className="flex flex-row gap-2">
				<a
					href="https://github.com/Aditya-Pandey-GH"
					target="_blank"
					className="w-fit text-center md:text-lg hover:opacity-75 transition-opacity flex flex-row items-center gap-2"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" className="w-6 h-6">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
							transform="scale(64)"
							fill="white"
						/>
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/aditya-pandey-in"
					target="_blank"
					className="w-fit text-center md:text-lg hover:opacity-75 transition-opacity flex flex-row items-center gap-2"
				>
					<svg xmlns="http://www.w3.org/2000/svg" height="72" viewBox="4 4 64 64" width="72" className="w-6 h-6">
						<g fill="white" fillRule="evenodd">
							<path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" />
						</g>
					</svg>
				</a>
			</section>

			{/* About the Developer */}
			<a
				href="https://aditya-pandey.vercel.app"
				target="_blank"
				className="w-fit text-center md:text-lg hover:opacity-75 transition-opacity flex flex-row items-center gap-2"
			>
				{/* !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
				<span>Aditya Pandey</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" className="w-4">
					<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
				</svg>
			</a>
		</nav>
	);
};

export default Footer;
