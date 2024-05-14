import { Planets } from "@/views/galaxy/solar.system.type";
import Link from "next/link";
import React from "react";

interface PlanetMenuProps {
	planets: Planets;
	activePlanet: string;
}

const PlanetMenu = ({ planets, activePlanet }: PlanetMenuProps) => {
	return (
		<div id="data">
			{planets.map((planet) => {
				return (
					<Link
						key={planet.href}
						href={"?active=" + planet.href}
						title={planet.title}
						className={`${planet.className} ${activePlanet === planet.href ? "active" : ""}`}
					>
						{planet.text}
					</Link>
				);
			})}
		</div>
	);
};

export default PlanetMenu;
