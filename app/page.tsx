import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = {
	title: "Portfolio | 사용자 중심 개발자",
	description: "사용자 중심 문제 해결을 추구하는 개발자 포트폴리오",
};

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Hero />
			<About />
			<Projects />
			<Contact />
			<div className="fixed bottom-4 right-4 z-50">
				<ThemeToggle />
			</div>
		</main>
	);
}
