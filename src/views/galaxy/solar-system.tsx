"use client";
import React, { useEffect, useRef, useState } from "react";
import { planets } from "./constants/planets.constant";
import PlanetMenu from "@/components/screens/solar-system/planet-menu";
import ControlPanel from "@/components/screens/solar-system/control-panel";
import Planets from "@/components/screens/solar-system/planets";
import { DisplayMode, ZoomMode } from "./solar.system.type";
import PlanetMenuRandom from "@/components/screens/solar-system/planet-menu-random";

interface SolarSystemProps {
	activePlanet: string;
}

function SolarSystem({ activePlanet }: SolarSystemProps) {
	const [displayMode, setDisplayMode] = useState<DisplayMode>("2D");
	const [zoomMode, setZoomMode] = useState<ZoomMode>("close");
	const [isGameFinishedRound, setIsGameFinishedRound] = useState(false);

	const bodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const body = bodyRef.current;

		const init = () => {
			body!.classList.remove("opening");
			body!.classList.remove("hide-UI");
			body!.classList.add("view-3D");
			body!.classList.add("set-speed");
		};

		init();

		// Cleanup
		return () => {};
	}, []);

	return (
		<div
			ref={bodyRef}
			className={`
            opening 
            background-img
            view-3D
            zoom-close data-close controls-close`}
		>
			{/* <PlanetMenu activePlanet={activePlanet} planets={planets} /> */}
			<ControlPanel
				bodyRef={bodyRef}
				displayMode={displayMode}
				setDisplayMode={setDisplayMode}
				zoomMode={zoomMode}
				setZoomMode={setZoomMode}
				isGameFinishedRound={isGameFinishedRound}
				setIsGameFinishedRound={setIsGameFinishedRound}
			/>
			<PlanetMenuRandom planets={planets} setIsGameFinishedRound={setIsGameFinishedRound} />

			<div id="universe" className="scale-stretched">
				<div id="galaxy">
					<div id="solar-system" className={activePlanet}>
						<div id="sun">
							<dl className="infos">
								<dt>Sun</dt>
								<dd>
									<span></span>
								</dd>
							</dl>
						</div>
						{planets.map((planet) => {
							return <Planets key={planet.id} planet={planet} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SolarSystem;
