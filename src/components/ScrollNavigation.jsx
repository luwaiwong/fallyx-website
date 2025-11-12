import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const ScrollNavigation = ({ currentSection }) => {
	const { colors } = useTheme();

	const sections = ["Hero", "Testimonials", "Problem", "Products", "Founders", "Contact"];

	const scrollToSection = (index) => {
		const sectionElements = document.querySelectorAll(".scroll-section");
		sectionElements[index]?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className="fixed top-1/2 right-6 z-998 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
			{sections.map((label, index) => (
				<button
					key={label}
					onClick={() => scrollToSection(index)}
					className={`group relative h-3 w-3 rounded-full transition-all hover-scale ${
						currentSection === index
							? "scale-125 shadow-lg"
							: "hover:scale-110"
					}`}
					style={{
						backgroundColor: currentSection === index ? colors.primary : colors.textMuted,
						boxShadow: currentSection === index ? `0 0 20px ${hexToRgba(colors.primary, 0.3)}` : 'none',
						transitionProperty: "background-color, transform, box-shadow"
					}}
					onMouseEnter={(e) => {
						if (currentSection !== index) {
							e.currentTarget.style.backgroundColor = colors.textSecondary;
						}
					}}
					onMouseLeave={(e) => {
						if (currentSection !== index) {
							e.currentTarget.style.backgroundColor = colors.textMuted;
						}
					}}
					aria-label={`Go to ${label}`}
				>
					<span 
						className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 rounded px-3 py-1 text-xs whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100" 
						style={{ 
							backgroundColor: colors.surfaceElevated, 
							color: colors.text 
						}}
					>
						{label}
					</span>
				</button>
			))}
		</div>
	);
};

export default ScrollNavigation;

