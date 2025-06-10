import { useState } from "react";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const Settings = () => {
	const difficulties = ["Easy", "Medium", "Hard"];
	const [difInd, setDifInd] = useState(0);
	return (
		<>
			<div className="w-full px-6 py-4">
				<h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">Settings</h1>
				<form className="flex flex-col justify-center items-center py-4 space-y-8 md:space-y-12">
					{/* Difficulty */}
					<section className="flex flex-row justify-center items-center gap-8">
						<h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider">Difficulty</h3>
						<div className="flex flex-row justify-center items-center gap-2">
							<button
								className="cursor-pointer hover:opacity-80"
								onClick={(e) => {
									e.preventDefault();
									setDifInd((prev) => (prev === 0 ? 2 : prev - 1));
								}}
							>
								<PrevButton />
							</button>
							<span className="flex justify-center w-20">{difficulties[difInd]}</span>
							<button
								className="cursor-pointer hover:opacity-80"
								onClick={(e) => {
									e.preventDefault();
									setDifInd((prev) => (prev === 2 ? 0 : prev + 1));
								}}
							>
								<NextButton />
							</button>
						</div>
					</section>
				</form>
			</div>
		</>
	);
};

export default Settings;
