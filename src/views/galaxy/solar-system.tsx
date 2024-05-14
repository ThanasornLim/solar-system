"use client";
import { Span } from "next/dist/trace";
import Link from "next/link";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { planets } from "./constants/planets.constant";
import PlanetMenu from "@/components/screens/solar-system/planet-menu";
import ControlPanel from "@/components/screens/solar-system/control-panel";
import { ZoomMode } from "./solar.system.type";
import Planets from "@/components/screens/solar-system/planets";

interface SolarSystemProps {
	activePlanet: string;
}

function SolarSystem({ activePlanet }: SolarSystemProps) {
	// const [activePlanet, setActivePlanet] = useState("");

	const [displayMode, setDisplayMode] = useState<"2D" | "3D">("2D");
	const [zoomMode, setZoomMode] = useState<"large" | "close">("large");

	const bodyRef = useRef<HTMLDivElement>(null);
	const solarSys = useRef<HTMLDivElement>(null);

	// const navRef = useRef<HTMLDivElement>(null);
	const pathName = usePathname();

	// const setMenuActive = (name: string) => {
	// 	setActivePlanet(name);
	// };

	// useEffect(() => {
	// 	setActivePlanet(pathName.split("#")[1]);
	// }, [pathName]);

	const setView3D = () => {
		if (displayMode === "2D") {
			bodyRef.current!.classList.remove("view-2D");
			bodyRef.current!.classList.add("view-3D");
			setDisplayMode("3D");
			return;
		}
		bodyRef.current!.classList.remove("view-3D");
		bodyRef.current!.classList.add("view-2D");
		setDisplayMode("2D");
	};
	const setZoom = () => {
		bodyRef.current!.classList.toggle("zoom-large");
		if (zoomMode === "close") {
			bodyRef.current!.classList.remove("zoom-close");
			bodyRef.current!.classList.add("zoom-large");
			setZoomMode("large");
			return;
		}
		bodyRef.current!.classList.remove("zoom-large");
		bodyRef.current!.classList.add("zoom-close");
		setZoomMode("close");
	};

	useEffect(() => {
		const body = bodyRef.current;

		const init = () => {
			body!.classList.remove("opening");
			body!.classList.add("view-3D");
			body!.classList.add("set-speed");
			body!.classList.remove("hide-UI");
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
            zoom-large data-close controls-close`}
		>
			<PlanetMenu activePlanet={activePlanet} planets={planets} />
			<ControlPanel
				bodyRef={bodyRef}
				displayMode={displayMode}
				setDisplayMode={setDisplayMode}
				zoomMode={zoomMode}
				setZoomMode={setZoomMode}
			/>

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
