import { DisplayMode, ZoomMode } from "@/views/galaxy/solar.system.type";
import React from "react";

interface ControlPanelProps {
	displayMode: DisplayMode;
	zoomMode: ZoomMode;
	bodyRef: React.RefObject<HTMLDivElement>;
	setDisplayMode: React.Dispatch<React.SetStateAction<DisplayMode>>;
	setZoomMode: React.Dispatch<React.SetStateAction<ZoomMode>>;
}

const ControlPanel = ({ displayMode, zoomMode, bodyRef, setDisplayMode, setZoomMode }: ControlPanelProps) => {
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

	// const setSpeed = () => {
	// 	setView("scale-stretched set-speed");
	// };
	// const setSize = () => {
	// 	setView("scale-s set-size");
	// };
	// const setDistance = () => {
	// 	setView("scale-d set-distance");
	// };

	return (
		<div id="controls">
			<label className="set-view" onClick={setView3D}>
				<input type="checkbox" />
			</label>
			<label className="set-zoom" onClick={setZoom}>
				<input type="checkbox" />
			</label>
		</div>
	);
};

export default ControlPanel;
