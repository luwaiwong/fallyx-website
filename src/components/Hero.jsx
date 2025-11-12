import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/useTheme";

const Hero = () => {
	const { colors } = useTheme();
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		const gradientColors = [
			{ r: 0, g: 100, b: 255 },
			{ r: 0, g: 212, b: 255 },
			{ r: 138, g: 43, b: 226 },
			{ r: 75, g: 0, b: 130 },
		];

		const blobs = Array.from({ length: 5 }, (_, i) => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.5,
			vy: (Math.random() - 0.5) * 0.5,
			radius: 200 + Math.random() * 300,
			color: gradientColors[i % gradientColors.length],
			phase: Math.random() * Math.PI * 2,
		}));

		let animationId;
		const animate = (time) => {
			ctx.fillStyle = colors.background;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			blobs.forEach((blob, i) => {
				blob.x += blob.vx;
				blob.y += blob.vy;
				blob.phase += 0.01;

				const sizePulse = Math.sin(blob.phase) * 50;
				const currentRadius = blob.radius + sizePulse;

				if (blob.x < -currentRadius || blob.x > canvas.width + currentRadius)
					blob.vx *= -1;
				if (blob.y < -currentRadius || blob.y > canvas.height + currentRadius)
					blob.vy *= -1;

				const gradient = ctx.createRadialGradient(
					blob.x,
					blob.y,
					0,
					blob.x,
					blob.y,
					currentRadius,
				);

				const alpha = 0.3 + Math.sin(time * 0.0005 + i) * 0.1;
				gradient.addColorStop(
					0,
					`rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha})`,
				);
				gradient.addColorStop(
					0.5,
					`rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${alpha * 0.4})`,
				);
				gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

				ctx.fillStyle = gradient;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			});

			ctx.globalCompositeOperation = "screen";
			blobs.forEach((blob) => {
				const gradient = ctx.createRadialGradient(
					blob.x,
					blob.y,
					0,
					blob.x,
					blob.y,
					blob.radius * 0.6,
				);
				gradient.addColorStop(
					0,
					`rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.15)`,
				);
				gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
				ctx.fillStyle = gradient;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			});
			ctx.globalCompositeOperation = "source-over";

			animationId = requestAnimationFrame(animate);
		};

		animate(0);

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationId);
		};
	}, [colors]);

	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden">
			<canvas ref={canvasRef} className="absolute inset-0 z-0" />

			<div className="absolute inset-0 z-1 flex items-center justify-center">
				<div className="grid-visualization"></div>
			</div>

			<div
				className="absolute inset-0 z-2"
				style={{
					background:
						`radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, ${colors.background}cc 100%)`,
				}}
			></div>

			<div
				className="pointer-events-none absolute top-0 right-0 left-0 z-3 h-32 md:h-40"
				style={{
					background:
						`linear-gradient(to bottom, ${colors.background} 0%, ${colors.background}cc 30%, ${colors.background}4d 60%, transparent 100%)`,
				}}
			></div>

			<div
				className="pointer-events-none absolute right-0 bottom-0 left-0 z-3 h-48 md:h-64 lg:h-80"
				style={{
					background:
						`linear-gradient(to top, ${colors.background} 0%, ${colors.background}f2 20%, ${colors.background}d9 40%, ${colors.background}99 60%, ${colors.background}4d 80%, transparent 100%)`,
				}}
			></div>

			<div className="relative z-10 px-4 text-center md:px-8">
				<h1 className="animate-on-scroll mb-6 text-4xl leading-tight font-extrabold tracking-tight md:mb-8 md:text-6xl lg:text-7xl xl:text-[5.5rem]" style={{ color: colors.text }}>
					The Future of Senior Care
				</h1>
				<p
					className="animate-on-scroll mb-8 px-8 text-base leading-relaxed md:mb-12 md:text-lg lg:text-xl"
					style={{ animationDelay: "0.4s", color: colors.textSecondary }}
				>
					Developing the next-generation of fall detection and prevention
					technology <br /> to enhance resident safety in senior care.
				</p>
			</div>
		</section>
	);
};

export default Hero;
