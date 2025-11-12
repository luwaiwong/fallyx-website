import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const ProblemItem = ({ number, title, description }) => {
	const { colors } = useTheme();
	
	return (
		<div 
			className="animate-on-scroll flex gap-4 rounded-lg border-l-4 p-4 transition-all md:gap-6 md:p-6 cursor-pointer"
			style={{
				borderLeftColor: colors.error,
				backgroundColor: hexToRgba(colors.error, 0.05),
				transitionProperty: "background-color, transform",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.backgroundColor = hexToRgba(colors.error, 0.1);
				e.currentTarget.style.transform = "translateX(12px)";
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.backgroundColor = hexToRgba(colors.error, 0.05);
				e.currentTarget.style.transform = "translateX(0)";
			}}
		>
			<div className="shrink-0">
				<div 
					className="hover-scale flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold transition-transform duration-300 md:h-12 md:w-12 md:text-xl"
					style={{ backgroundColor: colors.error, color: colors.text }}
				>
					{number}
				</div>
			</div>
			<div>
				<h3 className="mb-2 text-lg font-bold md:text-xl" style={{ color: colors.text }}>
					{title}
				</h3>
				<p className="text-sm leading-relaxed md:text-base" style={{ color: colors.textSecondary }}>
					{description}
				</p>
			</div>
		</div>
	);
};

const Problem = () => {
	const { colors } = useTheme();
	
	const problems = [
		{
			number: 1,
			title: "Data Mismanagement",
			description:
				"Understanding data from EHR is mismanaged. Critical health information gets lost in complex systems, making it difficult for caregivers to make informed decisions.",
		},
		{
			number: 2,
			title: "Execution Breakdown",
			description:
				"Homes can't execute on the information they get from residents & operations are a nightmare. The disconnect between data and action leads to inefficiencies and compromised care.",
		},
		{
			number: 3,
			title: "Outdated Technology",
			description:
				"Current systems in homes are outdated like pendants, call bells & intercoms. Legacy technology fails to meet modern care standards and resident expectations.",
		},
	];

	return (
		<section
			id="problem"
			className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32"
		>
			<div className="mx-auto">

				<div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col gap-6 md:gap-8">

						<div className="animate-on-scroll text-center">
							<h2 className="text-5xl font-extrabold  " style={{ color: colors.text }}>
								The Problem
							</h2>
						</div>
						{problems.map((problem) => (
							<ProblemItem key={problem.number} {...problem} />
						))}
					</div>
					<div 
						className="animate-on-scroll hover-glow hover-scale relative flex w-full items-center justify-center overflow-hidden rounded-3xl border-2 text-6xl transition-all duration-300  md:text-7xl  lg:text-8xl h-full"
						style={{
							borderColor: hexToRgba(colors.error, 0.3),
							backgroundColor: hexToRgba(colors.error, 0.2)
						}}
					>
						<div 
							className="absolute inset-0"
							style={{
								background: `radial-gradient(circle at 50% 50%, ${hexToRgba(colors.error, 0.1)}, transparent 50%)`
							}}
						></div>
						<span className="hover-scale relative z-10 transition-transform duration-300">
							⚠️
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Problem;
