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
	const [expandedProjectKey, setExpandedProjectKey] = useState<string | null>(null);

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
			{projects.map((project, index) => {
				const projectKey = `${project.title}-${index}`;
				const isExpanded = expandedProjectKey === projectKey;
				return (
					<div key={projectKey} className={cn("transition-all duration-500", isExpanded ? "w-full col-span-full" : "")}>
						<Card
							onClick={() => setExpandedProjectKey(isExpanded ? null : projectKey)}
							className={cn(
								"project-card h-full transition-all duration-700 flex flex-col cursor-pointer",
								isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
								isVisible && `delay-${delay + index * 100}`,
								isExpanded ? "scale-95" : "hover:shadow-lg"
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

								{isExpanded && project.content && (
									<div className="mt-6 animate-in fade-in text-sm text-foreground/80 leading-relaxed">
										{project.content}
									</div>
								)}
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
					</div>
				);
			})}
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
						{renderProjectCards(jsProjects, 100)}
						{renderProjectCards(vueProjects, 300)}
						{renderProjectCards(reactProjects, 500)}
						{renderProjectCards(flutterProjects, 600)}
						{renderProjectCards(internshipProjects, 700)}
					</TabsContent>

					<TabsContent value="js">{renderProjectCards(jsProjects)}</TabsContent>
					<TabsContent value="vue">{renderProjectCards(vueProjects)}</TabsContent>
					<TabsContent value="react">{renderProjectCards(reactProjects)}</TabsContent>
					<TabsContent value="flutter">{renderProjectCards(flutterProjects)}</TabsContent>
					<TabsContent value="internship">{renderProjectCards(internshipProjects)}</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
