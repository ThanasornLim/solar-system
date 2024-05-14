import { planets } from "./constants/planets.constant";

export type Planets = typeof planets;
export type Planet = (typeof planets)[number];

export type DisplayMode = "2D" | "3D";
export type ZoomMode = "close" | "large";
