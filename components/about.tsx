"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Cpu, Globe, Smartphone } from "lucide-react";
import { features, totalCnt } from "@/lib/constants";

export default function About() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<section id="about" ref={sectionRef} className="py-24 bg-muted/50">
			<div className="section-container">
				<h2 className="section-title mb-16">About Me</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					<div
						className={cn(
							"transition-all duration-1000 delay-100",
							isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
						)}
					>
						<h3 className="text-2xl font-bold mb-4">
							사용자의 <span className="text-primary">서비스 필요성</span>을 끊임없이 고민하는 개발자입니다.
						</h3>
						<p className="text-foreground/80 mb-4 leading-relaxed">
							다양한 아이디어를 빠르게 구현하고 사용자 피드백을 반영하며 성장해왔습니다. Flutter, React, Vue, Spring
							Boot 기반의 사이드 프로젝트
							<span className="text-primary font-semibold"> {totalCnt}건</span>을 기획부터 개발, 배포까지 주도하며
							<span className="text-primary font-medium">실제 사용자 확보 경험</span>을 쌓았습니다. 완벽한 프로그램은
							없지만 피드백을 통해 완성도를 높일 수 있다는 신념을 가지고 있습니다.
						</p>

						<p className="text-foreground/80 leading-relaxed">
							반복적인 업무를 줄이고 팀의 효율을 높이는 <span className="text-primary">자동화</span>에 흥미가 있습니다.
							Notion, Discord, Slack, Jira API를 활용해
							<span className="text-primary font-semibold"> 1000건 이상의 채팅 데이터</span>를 자동 수집 및 시각화하고
							맛집 데이터를 <span className="text-primary"> 시각화</span>하며 업무를 자동 분배하는 도구를 개발했습니다.
							이를 통해 반복 업무 시간 절감과 효율적인 정보 공유/역할 분담이라는 성과를 냈습니다.
						</p>
					</div>

					<div
						className={cn(
							"transition-all duration-1000 delay-300",
							isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
						)}
					>
						<div className="bg-card rounded-lg shadow-lg p-6 h-full">
							<h3 className="text-2xl font-bold mb-4 text-primary">주요 관심사</h3>
							<ul className="space-y-5">
								<li className="flex items-start">
									<span className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 mr-3">
										<Code className="h-5 w-5 text-primary" />
									</span>
									<span>사용자 중심 UI/UX 개발</span>
								</li>
								<li className="flex items-start">
									<span className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 mr-3">
										<Cpu className="h-5 w-5 text-primary" />
									</span>
									<span>자동화 도구 개발</span>
								</li>
								<li className="flex items-start">
									<span className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 mr-3">
										<Globe className="h-5 w-5 text-primary" />
									</span>
									<span>웹/모바일 애플리케이션 개발</span>
								</li>
								<li className="flex items-start">
									<span className="inline-flex items-center justify-center rounded-md bg-primary/10 p-1 mr-3">
										<Smartphone className="h-5 w-5 text-primary" />
									</span>
									<span>크로스 플랫폼 솔루션</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
					{features.map((feature, index) => (
						<div
							key={index}
							className={cn(
								"bg-card rounded-lg p-6 shadow-md transition-all duration-700",
								isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
								isVisible && `delay-${(index + 1) * 200}`
							)}
						>
							<div className="mb-4">{feature.icon}</div>
							<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
							<p className="text-foreground/70 mb-3">{feature.description}</p>
							<div className="flex flex-wrap gap-2 mt-2">
								{feature.techs.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-sm hover:bg-primary/20 transition-colors"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
