import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import ScrollNavigation from "./components/ScrollNavigation";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import Founders from "./components/Founders";
import Footer from "./components/Footer";
import Problem from "./components/Problem";
import Contact from "./components/Contact";

function App() {
	const [currentSection, setCurrentSection] = useState(0);

	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = "1";
					entry.target.style.transform = "translateY(0)";
				}
			});
		}, observerOptions);

		document.querySelectorAll(".animate-on-scroll").forEach((el) => {
			el.style.opacity = "0";
			el.style.transform = "translateY(20px)";
			el.style.transition = "all 1.2s ease";
			observer.observe(el);
		});

		const sections = document.querySelectorAll(".scroll-section");
		const sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = Array.from(sections).indexOf(entry.target);
						setCurrentSection(index);
					}
				});
			},
			{ threshold: 0.5 },
		);

		sections.forEach((section) => sectionObserver.observe(section));

		return () => {
			observer.disconnect();
			sectionObserver.disconnect();
		};
	}, []);

	const smoothScroll = (e, target) => {
		e.preventDefault();
		const element = document.querySelector(target);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const scrollToNext = () => {
		const sections = document.querySelectorAll(".scroll-section");
		const nextIndex = Math.min(currentSection + 1, sections.length - 1);
		sections[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<div className="scroll-smooth">
			<Navigation smoothScroll={smoothScroll} />

			<div className="scroll-section relative" id="hero">
				<Hero />
				<div className="absolute bottom-8 left-1/2 z-100 -translate-x-1/2 animate-bounce">
					<button
						onClick={scrollToNext}
						className="flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm transition-all hover:scale-110 hover:shadow-lg"
						style={{
							borderColor: 'var(--color-borderLight)',
							backgroundColor: 'var(--color-surface)'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.borderColor = 'var(--color-primary)';
							e.currentTarget.style.boxShadow = '0 0 20px var(--color-shadow)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.borderColor = 'var(--color-borderLight)';
							e.currentTarget.style.boxShadow = 'none';
						}}
						aria-label="Scroll to next section"
					>
						<span className="text-2xl" style={{ color: 'var(--color-text)' }}>↓</span>
					</button>
				</div>
			</div>

			<div className="scroll-section" id="testimonials">
				<Testimonials />
			</div>

			<div className="scroll-section" id="problem">
				<Problem />
			</div>

			<div className="scroll-section" id="products">
				<Products />
			</div>

			<div className="scroll-section" id="founders">
				<Founders />
			</div>

			<div className="scroll-section" id="contact">
				<Contact />
			</div>
			<Footer />

			<ScrollNavigation currentSection={currentSection} />
		</div>
	);
}

export default App;
