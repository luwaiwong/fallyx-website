import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const Founders = () => {
	const { colors } = useTheme();
	
	const founders = [
		{
			initials: "AE",
			name: "Ayaan Esmail",
			title: "Co-Founder",
		},
		{
			initials: "RM",
			name: "Rishi Mehta",
			title: "Co-Founder",
		},
	];

	return (
		<section
			id="founders"
			className="relative overflow-hidden px-10 py-8 pt-0"
			style={{
				background: `radial-gradient(ellipse at center, ${hexToRgba(colors.accent, 0.1)}, ${colors.background})`,
			}}
		>
			<div className="relative z-2 mx-auto">
				<div className="mb-12 text-center">
					<h2 className="animate-on-scroll pt-8 text-5xl leading-tight font-black" style={{ color: colors.text }}>
						Our Founders
					</h2>
				</div>

				<div className="mb-8 grid grid-cols-2 items-center justify-center gap-6">
					{founders.map((founder, index) => (
						<div
							key={index}
							className="animate-on-scroll hover-lift hover-glow rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 md:rounded-3xl md:p-16 lg:p-20"
							style={{ 
								animationDelay: `${index * 0.1}s`,
								borderColor: colors.borderLight,
								backgroundColor: hexToRgba(colors.primaryLight, 0.05)
							}}
						>
							<div className="mb-8 flex flex-col items-center gap-6 text-center md:mb-12 md:gap-8 lg:mb-16 lg:gap-10">
								<div 
									className="hover-scale flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[3px] text-4xl font-extrabold transition-transform duration-300 md:h-32 md:w-32 md:text-5xl lg:h-40 lg:w-40 lg:text-6xl"
									style={{ 
										borderColor: colors.border, 
										backgroundColor: colors.primary,
										color: colors.text
									}}
								>
									{founder.initials}
								</div>
								<div>
									<h3 className="mb-2 text-2xl font-extrabold md:mb-3 md:text-3xl lg:text-4xl" style={{ color: colors.text }}>
										{founder.name}
									</h3>
									<p className="text-base md:text-lg lg:text-xl" style={{ color: colors.textMuted }}>
										{founder.title}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-5">
					<div 
						className="animate-on-scroll hover-lift hover-glow flex items-center justify-center rounded-2xl border p-4 backdrop-blur-sm transition-all duration-300 md:col-span-3 md:rounded-3xl md:p-6 lg:p-8"
						style={{ borderColor: colors.borderLight, backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}
					>
						<div className="flex aspect-video w-full items-center justify-center rounded-lg" style={{ backgroundColor: hexToRgba(colors.background, 0.2) }}>
							<a
								href="#"
								className="hover-scale inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-base font-bold transition-all duration-300 hover:opacity-90 hover:shadow-lg md:px-8 md:py-4 md:text-lg lg:text-xl"
								style={{ 
									backgroundColor: colors.primary, 
									color: colors.text,
									boxShadow: `0 0 20px ${colors.shadow}`
								}}
							>
								<svg
									className="h-6 w-6 md:h-8 md:w-8"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
								Watch Our Story
							</a>
						</div>
					</div>
					<div 
						className="animate-on-scroll hover-lift hover-glow flex items-center rounded-2xl border p-4 backdrop-blur-sm transition-all duration-300 md:col-span-2 md:rounded-3xl md:p-6 lg:p-8"
						style={{ borderColor: colors.borderLight, backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}
					>
						<p className="text-base leading-relaxed md:text-lg lg:text-xl" style={{ color: colors.textSecondary }}>
							Example text blurb about living in a retirement home.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Founders;
