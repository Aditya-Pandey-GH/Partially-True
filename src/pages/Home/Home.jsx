import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";
import HelpButton from "./AboutButton";

const Home = () => {
	return (
		<>
			<div className="w-full flex flex-col justify-center items-center p-4 space-y-8 md:space-y-12">
				<div className="flex flex-row justify-center items-center space-x-4">
					<img src="/logo.png" alt="Partially True" className="w-20 xs:w-24 md:w-32 xl:w-40" />
					<div className="flex flex-col">
						<span className="text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-bold">Partially</span>
						<span className="text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-bold">True</span>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<PlayButton />
					<SettingsButton />
					<HelpButton />
				</div>
			</div>
		</>
	);
};

export default Home;
