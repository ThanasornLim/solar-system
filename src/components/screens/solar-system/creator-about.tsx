import React from "react";

const CreateAbout = () => {
	// const setDataRef = (e: React.MouseEvent<HTMLAnchorElement>) => {
	// 	const ref = e.currentTarget.getAttribute("class");
	// 	if (ref) {
	// 		solarSys.current!.className = ref;
	// 		const links = e.currentTarget.parentNode!.querySelectorAll("a");
	// 		links.forEach((link) => link.classList.remove("active"));
	// 		e.currentTarget.classList.add("active");
	// 	}
	// };
	return (
		<div id="navbar">
			{/* <a id="toggle-data" href="#data" onClick={setDataRef}>
				<i className="icon-data"></i>Data
			</a> */}
			<h1>
				3D Solar System
				<br />
				<span>
					by{" "}
					<a href="https://twitter.com/JulianGarnier" target="_blank">
						@JulianGarnier
					</a>
				</span>
			</h1>
			<a id="toggle-controls" href="#controls">
				<i className="icon-controls"></i>Controls
			</a>
		</div>
	);
};

export default CreateAbout;
