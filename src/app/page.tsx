import SolarSystem from "@/views/galaxy/solar-system";

export default function Home({
	searchParams,
}: {
	searchParams: {
		active?: string;
	};
}) {
	return <SolarSystem activePlanet={searchParams?.active || "earth"} />;
}
