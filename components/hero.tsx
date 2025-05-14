"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const scrollToContact = () => {
		const contactSection = document.querySelector("#contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background"></div>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-30"></div>
			</div>

			<div className="section-container relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<div
						className={cn(
							"transition-all duration-1000 transform",
							isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
						)}
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							안녕하세요, <span className="text-primary">개발자 정민석</span>입니다
						</h1>
						<p className="text-xl md:text-2xl text-foreground/80 mb-8">
							사용자 중심 문제 해결을 추구하며, 빠르게 실행하고 피드백을 반영해 성장합니다
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg" className="group" onClick={scrollToContact}>
								연락하기
								<Mail className="ml-2 h-4 w-4 group-hover:animate-bounce" />
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="group"
								onClick={() => window.open("https://github.com/alstjrwjd99", "_blank")}
							>
								GitHub
								<Github className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
							</Button>
						</div>
					</div>
				</div>

				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => {
							const aboutSection = document.querySelector("#about");
							if (aboutSection) {
								aboutSection.scrollIntoView({ behavior: "smooth" });
							}
						}}
						aria-label="Scroll down"
					>
						<ArrowDown className="h-6 w-6" />
					</Button>
				</div>
			</div>
		</section>
	);
}
