import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

const _darkPalette = {
	background: "#000000",
	surface: "#0a0a0a",
	surfaceElevated: "#1a1a1a",
	text: "#ffffff",
	textSecondary: "rgba(255, 255, 255, 0.7)",
	textMuted: "rgba(255, 255, 255, 0.4)",
	primary: "#00d4ff",
	primaryLight: "#0066ff",
	accent: "#8a2be2",
	error: "#ff0066",
	border: "rgba(0, 212, 255, 0.3)",
	borderLight: "rgba(0, 212, 255, 0.2)",
	shadow: "rgba(0, 212, 255, 0.2)",
};

const lightPalette = {
	background: "#f8f9fa",
	surface: "#ffffff",
	surfaceElevated: "#f0f0f0",
	text: "#1a1a1a",
	textSecondary: "rgba(26, 26, 26, 0.7)",
	textMuted: "rgba(26, 26, 26, 0.4)",
	primary: "#0066cc",
	primaryLight: "#0088ff",
	accent: "#6a1b9a",
	error: "#d32f2f",
	border: "rgba(0, 102, 204, 0.3)",
	borderLight: "rgba(0, 102, 204, 0.2)",
	shadow: "rgba(0, 102, 204, 0.15)",
};

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== "undefined") {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		}
		return "dark";
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		
		const handleChange = (e) => {
			setTheme(e.matches ? "dark" : "light");
		};

		mediaQuery.addEventListener("change", handleChange);
		
		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	}, []);

	useEffect(() => {
		const colors = lightPalette;
		const root = document.documentElement;
		
		Object.entries(colors).forEach(([key, value]) => {
			root.style.setProperty(`--color-${key}`, value);
		});
		
		root.setAttribute("data-theme", "light");
	}, []);

	const colors = lightPalette;

	return (
		<ThemeContext.Provider value={{ theme, setTheme, colors }}>
			{children}
		</ThemeContext.Provider>
	);
};

