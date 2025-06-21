import { replace, useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="w-full px-6 py-4">
				{/* <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold">About</h1> */}
				<div className="flex flex-col justify-center items-center">
					<div className="py-4 space-y-8 md:space-y-12 md:m-4 max-w-3xl">
						{/* About The Game */}
						<section className="flex flex-col text-justify gap-4">
							<h3 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider">💡 About The Game</h3>
							<p className="text-base md:text-lg xl:text-xl">
								"<strong>Partially True</strong>" is a web-based game. This game is inspired by an old-school game called "
								<strong>Fermi, Pico, Bagels</strong>", in which the diner chooses a number with no repeated digits, and the player has
								to guess that number. A Command Line Interface (CLI) version of this game comes along with a Python library, called as
								"<strong>FreeGames</strong>". This project aims to bring that experience to the web in the Graphical User Interface
								(GUI) format. Not only this, this game also adds some new content to the original game, such as more difficulty
								levels, and more digits in the number chosen. To know more about the game,{" "}
								<a
									href="https://sites.math.washington.edu/~mathcircle/mmc/mmc2010/PicoFermiBagel.pdf"
									target="_blank"
									className="font-bold !text-blue-400 hover:!text-blue-500 hover:!underline"
								>
									click here
								</a>
								.
							</p>
							<p className="text-base md:text-lg xl:text-xl">I hope you will enjoy playing the game 😃😃</p>
						</section>

						{/* How to Play */}
						<details className="flex flex-col text-justify gap-4">
							<summary className="w-fit text-xl md:text-2xl xl:text-3xl font-bold tracking-wider cursor-pointer">
								🤔 How To Play?
							</summary>
							{/* Instructions */}
							<ol className="list-decimal list-inside flex flex-col gap-4 md:ml-4">
								<li className="text-base md:text-lg xl:text-xl">
									The game begins with the computer choosing a number with no repeated digits.
								</li>
								<li className="text-base md:text-lg xl:text-xl">
									The player has to try guessing the number in the given number of tries.
								</li>
								<li className="text-base md:text-lg xl:text-xl">
									Each number guessed by the player will get stored in the History section, which the player can use to check if the
									digits of the number they guessed were the correct and at the correct place, correct but at the wrong place, or
									incorrect.
								</li>
								<li className="text-base md:text-lg xl:text-xl">
									Instructions regarding each difficulty level are given in the "Difficuly Levels" section.
								</li>
								{/* <li className="text-base md:text-lg xl:text-xl"></li> */}
							</ol>
						</details>

						{/* Color Scheme */}
						<details className="flex flex-col text-justify gap-4">
							<summary className="w-fit text-xl md:text-2xl xl:text-3xl font-bold tracking-wider cursor-pointer">
								🎨 Color Scheme
							</summary>
							<div className="flex flex-col gap-4 text-base md:text-lg xl:text-xl">
								The digits of the number you have chosen will be associated with a color, in such a manner that:
								<ul className="list-disc list-inside flex flex-col gap-2 ml-4">
									<li className="">
										<span className="font-bold font-mono text-green-600 text-2xl">F </span>
										<span>denotes that the digit is correct and is at the right place.</span>
									</li>
									<li className="">
										<span className="font-bold font-mono text-yellow-500 text-2xl">P </span>
										<span>denotes that the digit is correct but is at the wrong place.</span>
									</li>
									<li className="">
										<span className="font-bold font-mono text-red-700 text-2xl">B </span>
										<span>denotes that the digit is incorrect.</span>
									</li>
								</ul>
								{/* <em># Note that the digits may not be colored, depending upon the Difficuly level you have chosen.</em> */}
							</div>
						</details>

						{/* Difficulty Levels */}
						<details className="flex flex-col text-justify gap-4">
							<summary className="w-fit text-xl md:text-2xl xl:text-3xl font-bold tracking-wider cursor-pointer">
								💪 Difficulty Levels
							</summary>
							<p className="text-base md:text-lg xl:text-xl">
								The game comes with 3 difficulty levels. The main difference in these difficulty levels is the number of trial chances
								given to the player. The trial chances for different difficulty levels are as follows:
								{/* The game comes with 3 difficulty levels. The main differences in these difficulty levels are the number of tries and
								the working of History section. Both of them are explained below: */}
							</p>
							{/* Easy Mode */}
							<section className="flex flex-col gap-2 mt-4">
								<h4 className="text-lg md:text-xl xl:text-2xl font-bold">😎 Easy Mode</h4>
								<ul className="list-disc list-inside flex flex-col gap-2 ml-4 xs:ml-8 md:ml-12">
									{/* <li className="text-base md:text-lg xl:text-xl">
										In the History section, each digit of the number you guessed will be colored according to the color scheme.
									</li> */}
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 3 digits, you will get 20 tries.</li>
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 4 digits, you will get 30 tries.</li>
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 5 digits, you will get 40 tries.</li>
								</ul>
							</section>
							{/* Normal Mode */}
							<section className="flex flex-col gap-2 mt-4">
								<h4 className="text-lg md:text-xl xl:text-2xl font-bold">🤨 Normal Mode</h4>
								<ul className="list-disc list-inside flex flex-col gap-2 ml-4 xs:ml-8 md:ml-12">
									{/* <li className="text-base md:text-lg xl:text-xl">
										In the History section, each digit of the number you guessed will be colored according to the color scheme.
									</li> */}
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 3 digits, you will get 15 tries.</li>
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 4 digits, you will get 20 tries.</li>
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 5 digits, you will get 25 tries.</li>
								</ul>
							</section>
							{/* Hard Mode */}
							<section className="flex flex-col gap-2 mt-4">
								<h4 className="text-lg md:text-xl xl:text-2xl font-bold">😩 Hard Mode</h4>
								<ul className="list-disc list-inside flex flex-col gap-2 ml-4 xs:ml-8 md:ml-12">
									{/* <li className="text-base md:text-lg xl:text-xl">
										In the History section, no digit of the number you guessed will be colored. The colors will be shown separately.
									</li> */}
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 3 digits, you will get 10 tries.</li>
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 4 digits, you will get 15 tries.</li>
									<li className="text-base md:text-lg xl:text-xl">If you are playing with 5 digits, you will get 20 tries.</li>
								</ul>
							</section>
						</details>

						{/* Settings Instructions */}
						<details className="flex flex-col text-justify gap-4">
							<summary className="w-fit text-xl md:text-2xl xl:text-3xl font-bold tracking-wider cursor-pointer">
								⚙️ Settings Instructions
							</summary>
							{/* Instructions */}
							<ul className="list-disc list-inside flex flex-col gap-4 md:ml-12">
								<li className="text-base md:text-lg xl:text-xl">
									<strong>No. of Digits</strong> setting represents the number of digits in the number chosen by the computer. For
									example, if you select 4 digits, every time you play the game, you have to guess a 4 digit number.
								</li>
								<li className="text-base md:text-lg xl:text-xl">
									<strong>Difficulty</strong> setting determines the difficulty level of the game. It determines how many guesses
									you have and how the coloring of digits in History panel would work. This is explained in detail in "Difficulty
									Levels" section.
								</li>
								{/* <li className="text-base md:text-lg xl:text-xl">
									<strong>Colored Digits</strong> setting determines if the digits in History panel would be colored or not. Turning
									it on will make the game a bit easier. It will get turned off automatically if Difficulty is set to Hard.
								</li>
								<li className="text-base md:text-lg xl:text-xl">
									<strong>Volume</strong> setting controls the volume of SFx throughout the game.
								</li> */}
								{/* <li className="text-base md:text-lg xl:text-xl"></li> */}
							</ul>
						</details>

						{/* Credits */}
						<section className="flex flex-col text-justify gap-4">
							<h3 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wider">©️ Credits</h3>
							<ul className="list-disc list-inside flex flex-col gap-2 md:ml-12">
								<li className="text-base md:text-lg xl:text-xl">Social Media Icons from Wikipedia & Wikimedia</li>
								<li className="text-base md:text-lg xl:text-xl">Home Page & 1 Footer Icon from Font Awesome</li>
								<li className="text-base md:text-lg xl:text-xl">Inspired by FreeGames library (Python)</li>
								<li className="text-base md:text-lg xl:text-xl">Designed & Developed by Aditya Pandey</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
