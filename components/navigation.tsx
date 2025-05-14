"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		setIsOpen(false);
		const element = document.querySelector(href);
		if (href === "#home") {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 right-0 z-40 transition-all duration-300",
				scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
			)}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<a
							href="#"
							className="text-xl font-bold text-primary"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
						>
							MinSeok.dev
						</a>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-foreground/80 hover:text-primary transition-colors"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href);
								}}
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Mobile Navigation Button */}
					<div className="md:hidden">
						<Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isOpen && (
				<div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href);
								}}
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
