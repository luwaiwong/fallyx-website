import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const ProductCard = ({ title, description, features, icon }) => {
	const { colors } = useTheme();

	return (
		<div
			className="hover-glow hover-lift flex h-full flex-col rounded-2xl border p-6 pb-8 transition-all duration-300 md:p-8 md:pb-10"
			style={{
				backgroundColor: hexToRgba(colors.primaryLight, 0.05),
				borderColor: colors.borderLight,
			}}
		>
			<div
				className="relative mb-6 flex w-full items-center justify-center overflow-hidden rounded-2xl border-2 text-6xl transition-all duration-300 md:text-7xl"
				style={{
					backgroundColor: hexToRgba(colors.primaryLight, 0.2),
					borderColor: colors.border,
				}}
			>
				<div className="product-visual-rotate"></div>
				<span className="relative z-10">{icon}</span>
			</div>
			<h2
				className="mb-4 text-2xl font-extrabold"
				style={{ color: colors.text }}
			>
				{title}
			</h2>
			<p
				className="mb-6 grow text-sm leading-relaxed md:text-base"
				style={{ color: colors.textSecondary }}
			>
				{description}
			</p>
			<div className="flex flex-col gap-3">
				{features.map((feature, i) => (
					<div
						key={i}
						className="hover-brighten flex items-center gap-3 rounded-lg border-l-[3px] p-3 transition-all duration-300"
						style={{
							backgroundColor: hexToRgba(colors.primary, 0.05),
							borderLeftColor: colors.primary,
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.backgroundColor = hexToRgba(
								colors.primary,
								0.1,
							);
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.backgroundColor = hexToRgba(
								colors.primary,
								0.05,
							);
						}}
					>
						<span className="hover-scale text-lg transition-transform duration-300 md:text-xl">
							{feature.icon}
						</span>
						<div className="text-xs md:text-sm" style={{ color: colors.text }}>
							<strong>{feature.title}</strong> - {feature.desc}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const Products = () => {
	const { colors } = useTheme();

	const products = [
		{
			title: "Wearable Sensors",
			description:
				"Our advanced waist-worn sensors provide continuous monitoring with industry-leading accuracy. Combining accelerometers, gyroscopes, and location tracking, our sensors detect falls with 99.8% accuracy.",
			icon: "⌚",
			features: [
				{
					icon: "⚡",
					title: "50Hz Sampling Rate",
					desc: "Real-time motion detection",
				},
				{
					icon: "🔋",
					title: "7-Day Battery Life",
					desc: "Minimal charging interruptions",
				},
				{
					icon: "📍",
					title: "±0.5m Location Accuracy",
					desc: "Precise positioning",
				},
			],
		},
		{
			title: "Glenn AI Assistant",
			description:
				"Glenn is more than a voice assistant—it's a comprehensive AI companion that understands senior needs. With natural language processing and healthcare-specific training, Glenn provides 24/7 intelligent support.",
			icon: "🎙️",
			features: [
				{
					icon: "💬",
					title: "<200ms Response Time",
					desc: "Instant interaction",
				},
				{ icon: "🌍", title: "12 Languages", desc: "Multilingual support" },
				{
					icon: "🎯",
					title: "95% Intent Accuracy",
					desc: "Understands context",
				},
			],
		},
		{
			title: "EHR Integration",
			description:
				"Seamless integration with PointClickCare and major EHR systems. Our platform aggregates data from medical records, providing comprehensive health insights and predictive analytics.",
			icon: "🏥",
			features: [
				{
					icon: "🔒",
					title: "HIPAA Compliant",
					desc: "Enterprise-grade security",
				},
				{
					icon: "⚡",
					title: "<2s Data Latency",
					desc: "Real-time synchronization",
				},
				{ icon: "🔄", title: "99.9% Uptime", desc: "Always available" },
			],
		},
	];

	return (
		<section
			id="products"
			className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden px-4"
		>
			<div className="relative z-10 mx-auto w-full max-w-7xl">
				<h2
					className="animate-on-scroll w-full pt-5 pb-8 text-center text-5xl leading-tight font-black"
					style={{ color: colors.text }}
				>
					The Solution
				</h2>
				<div
					className="animate-on-scroll hover-lift rounded-3xl border-2 p-6 transition-all duration-300"
					style={{
						backgroundColor: hexToRgba(colors.primaryLight, 0.1),
						borderColor: colors.border,
					}}
				>
					<h3
						className="animate-on-scroll text-center text-3xl leading-tight font-extrabold md:mb-6"
						style={{ animationDelay: "0.2s", color: colors.text }}
					>
						Cortex
					</h3>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{products.map((product, index) => (
							<ProductCard key={index} {...product} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;
