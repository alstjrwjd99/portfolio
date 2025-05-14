"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { flutterProjects, internshipProjects, jsProjects, reactProjects, vueProjects } from "@/lib/constants";

export default function Projects() {
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

	const renderProjectCards = (projects: any[], delay = 0) => (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{projects.map((project, index) => (
				<Card
					key={project.title}
					className={cn(
						"project-card h-full transition-all duration-700 flex flex-col",
						isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
						isVisible && `delay-${delay + index * 100}`
					)}
				>
					<CardHeader>
						<div className="flex items-start justify-between">
							<div className="p-2 bg-primary/10 rounded-lg mb-3">{project.icon}</div>
						</div>
						<CardTitle>{project.title}</CardTitle>
						<CardDescription className="mt-2">{project.description}</CardDescription>
					</CardHeader>
					<CardContent className="flex-grow">
						<div className="flex flex-wrap gap-2 mt-2">
							{project.tags.map((tag: string) => (
								<Badge key={tag} variant="secondary">
									{tag}
								</Badge>
							))}
						</div>
					</CardContent>
					<CardFooter className="flex gap-2">
						{project.demo && (
							<Button asChild variant="ghost" className="flex-1 group">
								<a href={project.demo} target="_blank" rel="noopener noreferrer">
									배포 보기
									<ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</a>
							</Button>
						)}
						{project.github && (
							<Button asChild variant="ghost" className="flex-1 group">
								<a href={project.github} target="_blank" rel="noopener noreferrer">
									GitHub
									<ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</a>
							</Button>
						)}
					</CardFooter>
				</Card>
			))}
		</div>
	);

	return (
		<section id="projects" ref={sectionRef} className="py-24 bg-muted/50">
			<div className="section-container">
				<h2 className="section-title mb-16">Projects</h2>

				<Tabs defaultValue="all" className="w-full">
					<div className="flex justify-center mb-8">
						<TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-2xl">
							<TabsTrigger value="all">All</TabsTrigger>
							<TabsTrigger value="js">JavaScript</TabsTrigger>
							<TabsTrigger value="vue">Vue</TabsTrigger>
							<TabsTrigger value="react">React</TabsTrigger>
							<TabsTrigger value="flutter">Flutter</TabsTrigger>
							<TabsTrigger value="internship">Internship</TabsTrigger>
						</TabsList>
					</div>

					<TabsContent value="all" className="space-y-12">
						<div>
							<h3 className="text-2xl font-bold mb-6">JavaScript Projects</h3>
							{renderProjectCards(jsProjects, 100)}
						</div>
						<div>
							<h3 className="text-2xl font-bold mb-6">Vue + Spring Boot Projects</h3>
							{renderProjectCards(vueProjects, 300)}
						</div>
						<div>
							<h3 className="text-2xl font-bold mb-6">React Projects</h3>
							{renderProjectCards(reactProjects, 500)}
						</div>
						<div>
							<h3 className="text-2xl font-bold mb-6">Flutter Projects</h3>
							{renderProjectCards(flutterProjects, 600)}
						</div>
						<div>
							<h3 className="text-2xl font-bold mb-6">Internship Projects</h3>
							{renderProjectCards(internshipProjects, 700)}
						</div>
					</TabsContent>

					<TabsContent value="js">
						<h3 className="text-2xl font-bold mb-6">JavaScript Projects</h3>
						{renderProjectCards(jsProjects)}
					</TabsContent>

					<TabsContent value="vue">
						<h3 className="text-2xl font-bold mb-6">Vue + Spring Boot Projects</h3>
						{renderProjectCards(vueProjects)}
					</TabsContent>

					<TabsContent value="react">
						<h3 className="text-2xl font-bold mb-6">React Projects</h3>
						{renderProjectCards(reactProjects)}
					</TabsContent>

					<TabsContent value="flutter">
						<h3 className="text-2xl font-bold mb-6">Flutter Projects</h3>
						{renderProjectCards(flutterProjects)}
					</TabsContent>

					<TabsContent value="internship">
						<h3 className="text-2xl font-bold mb-6">Internship Projects</h3>
						{renderProjectCards(internshipProjects)}
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
