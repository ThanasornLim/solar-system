import { Planet, Planets } from "@/views/galaxy/solar.system.type";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface PlanetMenuRandomProps {
	planets: Planets;
	setIsGameFinishedRound: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlanetMenuRandom = ({ planets, setIsGameFinishedRound }: PlanetMenuRandomProps) => {
	const [activePlanet, setActivePlanet] = useState<Planet["href"] | null>(null);
	const router = useRouter();

	const startRandom = () => {
		let iterationNumber = 0;
		const maxIterations = 200; // Total number of iterations
		const maxDelay = 500; // Maximum delay in milliseconds
		const delayThreshold = 0.95; // Delay starts increasing after this percentage of iterations

		const randomizeWithDelay = () => {
			iterationNumber++;

			// Calculate delay based on iteration number
			const delayFactor = iterationNumber / maxIterations;
			let delay;

			if (delayFactor < delayThreshold) {
				// Minimal delay for the first 80% of iterations
				delay = Math.floor(maxDelay * 0.01);
			} else if (delayFactor < 0.7) {
				// Minimal delay for the first 80% of iterations
				delay = Math.floor(maxDelay * 0.05);
			} else {
				// Increasing delay for the remaining 5% of iterations
				const progressBeyondThreshold = (delayFactor - delayThreshold) / (1 - delayThreshold);
				delay = Math.floor(maxDelay * (0.1 + 0.9 * progressBeyondThreshold));
			}

			setTimeout(() => {
				const randomIndex = Math.floor(Math.random() * planets.length);
				setActivePlanet(planets[randomIndex].href);
				console.log(`Iteration ${iterationNumber}: Delay ${delay} ms`);

				if (iterationNumber < maxIterations) {
					randomizeWithDelay();
				} else {
					router.push("?active=" + planets[randomIndex].href);
					setIsGameFinishedRound(true);
					console.log("Iterations completed after 100 updates.");
				}
			}, delay);
		};

		randomizeWithDelay();
	};
	return (
		<div id="data">
			<button onClick={startRandom} className="p-2 border rounded-lg text-white border-white">
				START
			</button>
			{planets.map((planet) => {
				return (
					<Link
						key={planet.href}
						href={"?active=" + planet.href}
						title={planet.title}
						className={`${planet.className} ${
							activePlanet === planet.href ? "outline rounded-lg bg-cyan-100/20 active" : ""
						}`}
					>
						{planet.text}
					</Link>
				);
			})}
		</div>
	);
};

export default PlanetMenuRandom;
