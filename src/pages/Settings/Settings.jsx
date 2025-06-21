import { useState } from "react";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const Settings = () => {
	const difficulties = ["Easy", "Normal", "Hard"];
	const [difInd, setDifInd] = useState(parseInt(localStorage.getItem("difficulty")));
	const [digits, setDigits] = useState(parseInt(localStorage.getItem("digits")));
	const [volume, setVolume] = useState(parseFloat(localStorage.getItem("volume")));
	const [colDigits, setColDigits] = useState(parseInt(localStorage.getItem("colDigits")));

	const handleVolumeChange = (e) => {
		const newVolume = parseFloat(e.target.value);
		// clickSound.current.volume = newVolume;
		setVolume(newVolume);
		localStorage.setItem("volume", newVolume);
	};

	return (
		<>
			<div className="w-full px-6 py-4">
				<div className="flex flex-col justify-center items-center py-4 space-y-8 md:space-y-12">
					<h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">Settings</h1>
					<div className="grid grid-cols-2 gap-4">
						{/* Digits */}
						<h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider text-center xs:text-right">No. of Digits</h3>
						<section className="flex flex-row justify-center items-center gap-8">
							<div className="flex flex-row justify-center items-center gap-2">
								<button
									className="cursor-pointer hover:opacity-80"
									onClick={(e) => {
										e.preventDefault();
										setDigits((prev) => (prev === 3 ? 5 : prev - 1));
										localStorage.setItem("digits", digits === 3 ? 5 : digits - 1);
									}}
								>
									<PrevButton />
								</button>
								<span className="md:text-lg flex justify-center w-20">{digits}</span>
								<button
									className="cursor-pointer hover:opacity-80"
									onClick={(e) => {
										e.preventDefault();
										setDigits((prev) => (prev === 5 ? 3 : prev + 1));
										localStorage.setItem("digits", digits === 5 ? 3 : digits + 1);
									}}
								>
									<NextButton />
								</button>
							</div>
						</section>

						{/* Difficulty */}
						<h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider text-center xs:text-right">Difficulty</h3>
						<section className="flex flex-row justify-center items-center gap-8">
							<div className="flex flex-row justify-center items-center gap-2">
								<button
									className="cursor-pointer hover:opacity-80"
									onClick={(e) => {
										e.preventDefault();
										localStorage.setItem("colDigits", difInd === 0 ? "0" : colDigits);
										setColDigits(difInd === 0 ? 0 : colDigits);
										setDifInd((prev) => (prev === 0 ? 2 : prev - 1));
										localStorage.setItem("difficulty", difInd === 0 ? 2 : difInd - 1);
									}}
								>
									<PrevButton />
								</button>
								<span className="md:text-lg flex justify-center w-20">{difficulties[difInd]}</span>
								<button
									className="cursor-pointer hover:opacity-80"
									onClick={(e) => {
										e.preventDefault();
										localStorage.setItem("colDigits", difInd === 1 ? "0" : colDigits);
										setColDigits(difInd === 1 ? 0 : colDigits);
										setDifInd((prev) => (prev === 2 ? 0 : prev + 1));
										localStorage.setItem("difficulty", difInd === 2 ? 0 : difInd + 1);
									}}
								>
									<NextButton />
								</button>
							</div>
						</section>

						{/* Colored Digits */}
						{/* <h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider text-center xs:text-right">Colored Digits</h3>
						<section className="flex flex-row justify-center items-center gap-8">
							<div className="flex flex-row justify-center items-center gap-2">
								<button
									className="cursor-pointer hover:opacity-75 disabled:hidden"
									onClick={(e) => {
										e.preventDefault();
										setColDigits((prev) => (colDigits === 0 ? 1 : 0));
										localStorage.setItem("colDigits", colDigits === 0 ? 1 : 0);
									}}
									disabled={difInd === 2}
								>
									<PrevButton />
								</button>
								<span className="md:text-lg flex justify-center w-20">{colDigits === 0 ? "Off" : "On"}</span>
								<button
									className="cursor-pointer hover:opacity-75 disabled:hidden"
									onClick={(e) => {
										e.preventDefault();
										setColDigits((prev) => (colDigits === 0 ? 1 : 0));
										localStorage.setItem("colDigits", colDigits === 0 ? 1 : 0);
									}}
									disabled={difInd === 2}
								>
									<NextButton />
								</button>
							</div>
						</section> */}

						{/* Volume */}
						{/* <h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider text-center xs:text-right">Volume</h3> */}
						{/* <h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider text-right">Volume ({parseInt(volume * 100)}%)</h3> */}
						{/* <h3 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider text-right flex flex-row justify-end items-center">
							<span>Volume</span>(<span className="text-sm">{parseInt(volume * 100)}%</span>)
						</h3> */}
						{/* <section className="flex flex-col justify-center items-center relative">
							<input
								id="volume"
								type="range"
								min="0"
								max="1"
								step="0.01"
								value={volume}
								onChange={handleVolumeChange}
								className="cursor-pointer appearance-none w-full h-1/8 rounded-full"
								style={{
									background: `linear-gradient(to right, rgb(
									${Math.round(220 + (22 - 220) * volume)},
									${Math.round(38 + (163 - 38) * volume)},
									${Math.round(38 + (74 - 38) * volume)}
									) 100%)`,
								}}
							/>
							<label htmlFor="volume" className="text-sm absolute -bottom-2">
								({parseInt(volume * 100)}%)
							</label>
						</section> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Settings;
