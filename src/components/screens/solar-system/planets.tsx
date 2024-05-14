import type { Planet } from "@/views/galaxy/solar.system.type";
import React from "react";

interface PlanetProps {
	planet: Planet;
}

const Moon = () => {
	return (
		<div className="orbit">
			<div className="pos">
				<div className="moon"></div>
			</div>
		</div>
	);
};

const Planet = ({ planet, hasMoon }: { planet: Planet; hasMoon: boolean }) => {
	return (
		<div id={planet.id} className="orbit ">
			<div className="pos ">
				{hasMoon && <Moon />}

				<div className="planet outline-red-400 outline-4 bg-red-200">
					<dl className="infos">
						<dt>{planet.text}</dt>
						<dd>
							<span></span>
						</dd>
					</dl>
				</div>
			</div>
		</div>
	);
};

const Planets = ({ planet }: PlanetProps) => {
	if (planet["text"] === "Earth") {
		return <Planet planet={planet} hasMoon />;
	}
	return <Planet planet={planet} hasMoon />;
};

export default Planets;
