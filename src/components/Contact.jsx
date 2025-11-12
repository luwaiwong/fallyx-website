import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const Contact = () => {
	const { colors } = useTheme();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	const contactInfo = [
		{
			icon: "📧",
			title: "Email",
			content: "contact@ascenix.com",
			link: "mailto:contact@ascenix.com",
		},
		{
			icon: "📞",
			title: "Phone",
			content: "+1 (647) 999-9999",
			link: "tel:+16479999999",
		},
		{
			icon: "📍",
			title: "Location",
			content: "Toronto, ON",
			link: null,
		},
	];

	return (
		<section
			id="contact"
			className="relative flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden py-20 px-4"
		>
			<div
				className="absolute h-full w-full"
				style={{
					background:
						`radial-gradient(circle at 30% 50%, ${hexToRgba(colors.primary, 0.1)}, transparent 50%), radial-gradient(circle at 70% 50%, ${hexToRgba(colors.accent, 0.1)}, transparent 50%)`,
				}}
			></div>

			<div className="relative z-10 w-full max-w-7xl mx-auto">
				<div className="text-center mb-4">
					<h2 className="animate-on-scroll text-5xl leading-tight font-extrabold md:mb-6" style={{ animationDelay: "0.2s", color: colors.text }}>
						Get In Touch
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="animate-on-scroll border-2 rounded-3xl p-6 md:p-8 hover-lift hover-glow transition-all duration-300" style={{ backgroundColor: hexToRgba(colors.primaryLight, 0.1), borderColor: colors.border }}>
						<h3 className="text-2xl font-extrabold mb-6" style={{ color: colors.text }}>Contact Information</h3>
						<div className="flex flex-col gap-6">
							{contactInfo.map((info, index) => (
								<div
									key={index}
									className="flex items-start gap-4 p-4 border rounded-xl hover-brighten hover-glow transition-all duration-300"
									style={{ backgroundColor: hexToRgba(colors.primary, 0.05), borderColor: colors.borderLight }}
								>
									<div className="text-3xl hover-scale transition-transform duration-300">
										{info.icon}
									</div>
									<div className="flex-1">
										<h4 className="text-lg font-bold mb-1" style={{ color: colors.text }}>{info.title}</h4>
										{info.link ? (
											<a
												href={info.link}
												className="transition-colors duration-300 link-hover"
												style={{ color: colors.textSecondary }}
											>
												{info.content}
											</a>
										) : (
											<p style={{ color: colors.textSecondary }}>{info.content}</p>
										)}
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="animate-on-scroll border-2 rounded-3xl p-6 md:p-8 hover-lift hover-glow transition-all duration-300" style={{ animationDelay: "0.2s", backgroundColor: hexToRgba(colors.primaryLight, 0.1), borderColor: colors.border }}>
						<h3 className="text-2xl font-extrabold mb-6" style={{ color: colors.text }}>Send Us a Message</h3>
						<form onSubmit={handleSubmit} className="flex flex-col gap-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
									style={{ 
										backgroundColor: colors.surfaceElevated, 
										borderColor: colors.border, 
										color: colors.text
									}}
									onFocus={(e) => {
										e.currentTarget.style.borderColor = colors.primary;
										e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
									}}
									onBlur={(e) => {
										e.currentTarget.style.borderColor = colors.border;
										e.currentTarget.style.boxShadow = 'none';
									}}
									placeholder="Your name"
								/>
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
									style={{ 
										backgroundColor: colors.surfaceElevated, 
										borderColor: colors.border, 
										color: colors.text
									}}
									onFocus={(e) => {
										e.currentTarget.style.borderColor = colors.primary;
										e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
									}}
									onBlur={(e) => {
										e.currentTarget.style.borderColor = colors.border;
										e.currentTarget.style.boxShadow = 'none';
									}}
									placeholder="your.email@example.com"
								/>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: colors.textSecondary }}>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
									style={{ 
										backgroundColor: colors.surfaceElevated, 
										borderColor: colors.border, 
										color: colors.text
									}}
									onFocus={(e) => {
										e.currentTarget.style.borderColor = colors.primary;
										e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
									}}
									onBlur={(e) => {
										e.currentTarget.style.borderColor = colors.border;
										e.currentTarget.style.boxShadow = 'none';
									}}
									placeholder="Tell us about your needs..."
								/>
							</div>
							<button
								type="submit"
								className="w-full px-6 py-4 font-bold text-lg rounded-lg hover:opacity-90 hover-scale transition-all duration-300 hover:shadow-lg"
								style={{ 
									backgroundColor: colors.primary, 
									color: colors.text,
									boxShadow: `0 0 20px ${colors.shadow}`
								}}
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

