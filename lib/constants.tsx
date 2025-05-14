import { Bot, Chrome, Cpu, Code, Globe, MapPin, MessageSquare, Smartphone, Sparkles, Utensils } from "lucide-react";

export const jsProjects = [
	{
		title: "Discord - Notion Bot",
		description: (
			<>
				Discord 채팅 메시지를 자동 수집하고 <br /> Notion에 정리하는 봇 개발
			</>
		),
		icon: <Bot className="h-10 w-10 text-primary" />,
		tags: ["Discord API", "Notion API", "Node.js", "자동화"],
	},
	{
		title: "외주 크롤링 확장 프로그램",
		description: (
			<>
				특정 사이트에서 게시글을 자동 크롤링하여
				<br /> 필터링/분류하는 Chrome 확장 프로그램
			</>
		),
		icon: <Chrome className="h-10 w-10 text-primary" />,
		tags: ["Chrome Extension", "JavaScript", "웹 크롤링", "고객과 소통"],
	},
];

export const vueProjects = [
	{
		title: "멀캠 맛지도",
		description: (
			<>
				1. Slack 메시지에서 음식점 정보를 수집
				<br />
				2. Spring 서버에 저장
				<br />
				3. Vue에서 지도 마커로 시각화
			</>
		),
		icon: <MapPin className="h-10 w-10 text-primary" />,
		tags: ["Vue", "Spring Boot", "Slack API", "Naver 지도 API", "EC2", "Vercel", "Mysql"],
		github: "https://github.com/MulCamMatMap",
		demo: "https://multicam-mat-map.vercel.app/",
	},
	{
		title: "코인게임",
		description: "실시간 대전으로 숫자 10을 만드는 게임",
		icon: <Sparkles className="h-10 w-10 text-primary" />,
		tags: ["Vue", "Spring Boot", "WebSocket", "EC2", "Github Actions", "Docker", "RDS"],
	},
	{
		title: "국평오",
		description: "투표를 통해 자신의 정도를 파악하는 통계사이트",
		icon: <Utensils className="h-10 w-10 text-primary" />,
		tags: ["Vue", "Spring Boot"],
	},
];

export const reactProjects = [
	{
		title: "쉼구의 블로그",
		description: "Markdown 기반 블로그 플랫폼. 커스텀 컴포넌트, 다크모드, 코드블럭 지원",
		icon: <Code className="h-10 w-10 text-primary" />,
		tags: ["React", "Markdown", "다크모드", "코드 하이라이팅"],
	},
];

export const flutterProjects = [
	{
		title: "안단테",
		description: (
			<>
				구글 정책 대응용 '앱 테스터 모집 플랫폼' 개발 및 출시
				<br /> 6주간 사용자 150명 확보, 기획 ~ 배포 전 과정 주도
			</>
		),
		icon: <Smartphone className="h-10 w-10 text-primary" />,
		tags: ["Flutter", "Firebase", "앱 출시", "사용자 확보"],
	},
];

export const internshipProjects = [
	{
		title: "AI Parking VINA",
		description: (
			<>
				베트남 기관 대상 건물 내부 실시간 길안내 기능 개발
				<br />
				소켓 통신 기반 실내 내비게이션 시스템 구축
				<br />앱 출시 이후 잔여 요구사항 개선 및 고객 피드백 반영
			</>
		),
		icon: <Globe className="h-10 w-10 text-primary" />,
		tags: ["Flutter", "Firebase", "Provider", "Socket", "내비게이션", "UI/UX 개선"],
	},
	{
		title: "TFLite Handy",
		description: (
			<>
				모바일 환경에서 AI 모델(TFLite) 최적화 및 동작 구현
				<br />
				Flutter의 isolate를 활용한 멀티프로세싱 도입
				<br />
				지연시간을 <span className="text-primary font-semibold">800ms → 350ms로 56% 개선</span>
			</>
		),
		icon: <MessageSquare className="h-10 w-10 text-primary" />,
		tags: ["Flutter", "TFLite", "GetX", "성능 최적화", "isolate", "멀티프로세싱"],
	},
];

export const totalCnt = jsProjects.length + vueProjects.length + flutterProjects.length + internshipProjects.length;

export const features = [
	{
		icon: <Code className="h-10 w-10 text-primary" />,
		title: "프론트엔드 개발",
		description: "React, Vue를 활용한 사용자 중심 인터페이스 개발",
		techs: ["React", "Vue", "JavaScript", "Chrome Extension"],
	},
	{
		icon: <Cpu className="h-10 w-10 text-primary" />,
		title: "백엔드 개발",
		description: "Spring Boot, Firebase를 활용한 안정적인 서버 구축",
		techs: ["Spring Boot", "NodeJS", "Firebase", "Docker", "AWS EC2"],
	},
	{
		icon: <Globe className="h-10 w-10 text-primary" />,
		title: "자동화 도구",
		description: "Notion API, Slack API, Discord API를 활용한 생산성 도구 개발",
		techs: ["Notion API", "Slack API", "Discord API", "Jira", "Web Automation"],
	},
	{
		icon: <Smartphone className="h-10 w-10 text-primary" />,
		title: "모바일 앱 개발",
		description: "Flutter를 활용한 크로스 플랫폼 모바일 앱 개발",
		techs: ["Flutter", "TFlite"],
	},
];
