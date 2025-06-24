import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = () => {
	const diff = parseInt(localStorage.getItem("difficulty")); // Difficulty Level
	const digs = parseInt(localStorage.getItem("digits")); // Number of Digits
	const volume = parseFloat(localStorage.getItem("volume")); // Volume Level
	const colDigits = parseInt(localStorage.getItem("colDigits")); // Colored Digits or Non-Colored Digits

	const [digits, setDigits] = useState([]);
	const [history, setHistory] = useState([]);
	const [hint, setHint] = useState([]);
	const [tries, setTries] = useState(0);

	// Computer chooses a number
	const [number, setNumber] = useState([]);
	useEffect(() => {
		const generateNumber = () => {
			const digits = [];
			while (digits.length < digs) {
				const digit = Math.floor(Math.random() * 10);
				if (!digits.includes(digit)) {
					// if (!(digits.length === 0 && digit === 0)) {
					// 	digits.push(digit);
					// }
					digits.push(digit);
				}
			}
			setNumber(digits);
		};
		generateNumber();
	}, [digs]);

	const [gameWon, setGameWon] = useState(false);
	const [gameLost, setGameLost] = useState(false);

	const handleDigitClick = (digit) => {
		if (digits.length === digs) {
			alert("Overflow detected");
			return;
		}
		if (digits.includes(digit)) {
			alert("Reptition of digits is not allowed");
			return;
		}
		setDigits((prev) => [...prev, digit]);
	};

	const handleACClick = () => {
		setDigits([]);
		// console.log(number);
	};

	const shuffleArray = (array) => {
		let currentIndex = array.length;

		while (currentIndex != 0) {
			// Pick a remaining element...
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
	};

	const handleCheckClick = () => {
		let repeated = false;
		let temp = [];
		if (digits.length !== digs) {
			alert("Underflow detected");
			return;
		}
		history.map((item) => {
			if (JSON.stringify(item) === JSON.stringify(digits)) {
				alert("Already Guessed");
				repeated = true;
				return;
			}
		});
		if (!repeated) {
			setTries((prev) => prev + 1);
			// Easy Mode
			if (diff === 0) {
				if ((digs === 3 && tries === 20 - 1) || (digs === 4 && tries === 30 - 1) || (digs === 5 && tries === 40 - 1)) {
					setGameLost(true);
				}
			}
			// Normal Mode
			if (diff === 1) {
				if ((digs === 3 && tries === 15 - 1) || (digs === 4 && tries === 20 - 1) || (digs === 5 && tries === 25 - 1)) {
					setGameLost(true);
				}
			}
			// Hard Mode
			if (diff === 2) {
				if ((digs === 3 && tries === 10 - 1) || (digs === 4 && tries === 15 - 1) || (digs === 5 && tries === 20 - 1)) {
					setGameLost(true);
				}
			}
			setHistory((prev) => [...prev, digits]);
			for (let i = 0; i < digs; i++) {
				if (number[i] === digits[i]) {
					temp.push("F");
				} else if (number.includes(digits[i])) {
					temp.push("P");
				} else {
					temp.push("B");
				}
			}
			shuffleArray(temp);
			setHint((prev) => [...prev, temp]);
		}
		handleACClick();
		if (temp.every((item) => item === "F")) {
			setGameWon(true);
		}
	};

	return (
		<>
			{/* Main Gameplay Code */}
			<div className="w-full px-6 py-4 flex flex-col md:flex-row md:justify-center">
				{/* Main Game */}
				<section className="md:w-1/2 flex flex-col items-center gap-4 p-4">
					<h3 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider">Game</h3>
					{/* Digits */}
					<div className="flex flex-row gap-2 border-2 p-2 border-black bg-neutral-300">
						<span className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-neutral-900 text-white rounded">
							{digits[0]}
						</span>
						<span className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-neutral-900 text-white rounded">
							{digits[1]}
						</span>
						<span className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-neutral-900 text-white rounded">
							{digits[2]}
						</span>
						{digs > 3 && (
							<span className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-neutral-900 text-white rounded">
								{digits[3]}
							</span>
						)}
						{digs > 4 && (
							<span className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-neutral-900 text-white rounded">
								{digits[4]}
							</span>
						)}
					</div>
					{/* Digits & Other Buttons */}
					<div className="flex flex-col gap-4">
						{/* Numbers */}
						<div className="grid grid-cols-3 gap-2 font-mono font-bold text-black">
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num, index) => (
								<button
									className="w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									key={index}
									onClick={() => {
										handleDigitClick(num);
									}}
								>
									{num}
								</button>
							))}
							{/* <div className="hidden">
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(1);
									}}
								>
									1
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(2);
									}}
								>
									2
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(3);
									}}
								>
									3
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(4);
									}}
								>
									4
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(5);
									}}
								>
									5
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(6);
									}}
								>
									6
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(7);
									}}
								>
									7
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(8);
									}}
								>
									8
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(9);
									}}
								>
									9
								</button>
								<button
									className="w-10 h-10 flex justify-center items-center bg-gray-300 hover:bg-gray-400 active:bg-gray-400 transition-colors duration-200 rounded-full cursor-pointer"
									onClick={() => {
										handleDigitClick(0);
									}}
								>
									0
								</button>
							</div> */}
							<button
								className="w-full h-10 lg:h-12 col-span-2 flex justify-center items-center bg-red-600 hover:bg-red-700 active:bg-red-700 transition-colors duration-200 rounded-full cursor-pointer text-white"
								onClick={handleACClick}
							>
								AC
							</button>
						</div>
						{/* Check Button */}
						<button
							className="w-full h-10 lg:h-12 col-span-3 flex justify-center items-center bg-green-600 hover:bg-green-700 active:bg-green-700 transition-colors duration-200 rounded-lg font-mono font-bold text-white cursor-pointer"
							onClick={handleCheckClick}
						>
							Check
						</button>
					</div>
				</section>

				{/* History Section */}
				<section className="md:w-1/2 flex flex-col items-center gap-4 p-4">
					<h3 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider">History</h3>
					<div className="flex flex-row items-center gap-4 md:gap-16">
						{/* Digits */}
						<div className="w-full h-full flex flex-col items-center gap-2 md:gap-4">
							{history.length !== 0 && <h4 className="font-bold">Digits</h4>}
							{history.map((histElem, histElemInd) => (
								<div key={histElemInd} className="flex flex-row items-center md:gap-2">
									{histElem.map((histDig, histDigInd) => (
										<span
											key={histDigInd}
											className="w-10 h-10 flex justify-center items-center font-mono font-bold bg-gray-300 text-black rounded-full border-2 border-black"
										>
											{histDig}
										</span>
									))}
								</div>
							))}
						</div>
						{/* Hints */}
						<div className="w-full h-full flex flex-col items-center gap-2 md:gap-4">
							{hint.length !== 0 && <h4 className="font-bold">Hints</h4>}
							{hint.map((hintElem, hintElemInd) => (
								<div key={hintElemInd} className="flex flex-row items-center md:gap-2">
									{hintElem.map((hintDig, hintDigInd) => (
										<span
											key={hintDigInd}
											// className="w-10 h-10 text-2xl flex justify-center items-center font-mono font-bold rounded-full"
											// className="w-10 h-10 flex justify-center items-center font-mono font-bold bg-gray-300 text-black rounded-full border-2 border-black"
											// className={`w-10 h-10 flex justify-center items-center font-mono font-bold bg-gray-300 text-white rounded-full border-3 border-black ${
											// 	hintDig === "F" ? "bg-green-600" : hintDig === "P" ? "bg-yellow-500" : "bg-red-700"
											// }`}
											className={`w-10 h-10 text-2xl flex justify-center items-center font-mono font-bold rounded-full ${
												hintDig === "F" ? "text-green-600" : hintDig === "P" ? "text-yellow-500" : "text-red-700"
											}`}
										>
											{/* {hintDig === "F" ? "🟢" : hintDig === "P" ? "🟡" : "🔴"} */}
											{hintDig}
										</span>
									))}
								</div>
							))}
						</div>
					</div>
				</section>
			</div>

			{/* Game Over Code When User Wins */}
			<div className={`fixed top-0 left-0 w-full h-full bg-black/75 ${gameWon ? "block" : "hidden"}`}>
				<div className="w-full h-full flex justify-center items-center">
					<div className="flex flex-col w-fit max-w-xs md:max-w-md bg-black bg-gradient-to-br from-green-600/75 via-yellow-600/75 to-red-600/75 p-2 gap-2 rounded-md">
						<div className="w-full h-fit flex flex-row justify-center items-center gap-2 mb-1">
							<img src="/logo.png" alt="" className="w-8 h-8" />
							<h2 className="w-full h-fit text-left font-bold text-base md:text-lg xl:text-xl">Partially True</h2>
						</div>
						<div className="bg-white rounded-md text-black px-4 py-4 flex flex-col justify-center items-center gap-4">
							<h3 className="font-bold text-lg md:text-xl lg:text-2xl text-center">Congratulations !!!</h3>
							<div className="flex flex-col">
								<span className="text-sm md:text-base lg:text-lg md:leading-6">
									The correct number was <b>{number.map((dig, ind) => dig)}</b>.
								</span>
								<span className="text-sm md:text-base lg:text-lg md:leading-6">
									You guessed the correct number in
									<b>{` ${tries} `}</b>
									attempt(s).
								</span>
							</div>
							<Link to="/" className="bg-green-600 !text-white font-bold px-6 py-2 rounded">
								Back to Menu
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Game Over Code When User Loses */}
			<div className={`fixed top-0 left-0 w-full h-full bg-black/75 ${gameLost ? "block" : "hidden"}`}>
				<div className="w-full h-full flex justify-center items-center">
					<div className="flex flex-col w-fit max-w-xs md:max-w-md bg-black bg-gradient-to-br from-green-600/75 via-yellow-600/75 to-red-600/75 p-2 gap-2 rounded-md">
						<div className="w-full h-fit flex flex-row justify-center items-center gap-2 mb-1">
							<img src="/logo.png" alt="" className="w-8 h-8" />
							<h2 className="w-full h-fit text-left font-bold text-base md:text-lg xl:text-xl">Partially True</h2>
						</div>
						<div className="bg-white rounded-md text-black px-4 py-4 flex flex-col justify-center items-center gap-4">
							<h3 className="font-bold text-lg md:text-xl lg:text-2xl text-center">Better Luck Next Time 👍</h3>
							<div className="flex flex-col">
								<span className="text-sm md:text-base lg:text-lg md:leading-6">
									The correct number was <b>{number.map((dig, ind) => dig)}</b>.
								</span>
								<span className="text-sm md:text-base lg:text-lg md:leading-6">Unfortunately, you failed to guess the number.</span>
							</div>
							<Link to="/" className="bg-green-600 !text-white font-bold px-6 py-2 rounded">
								Back to Menu
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Game;
