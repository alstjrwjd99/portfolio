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
		content: (
			<div className="space-y-4 text-sm leading-relaxed text-foreground/80">
				<p>
					스터디 팀에서 <span className="font-medium">Discord 채팅 시간 인증 메시지</span>를 매주 수기로 Notion에
					정리해야 했고, 이로 인해 <span className="text-primary font-medium">4시간 이상의 반복 작업</span>과
					<span className="text-primary font-medium">데이터 누락</span> 문제가 발생했습니다.
				</p>
				<p>
					이를 해결하기 위해 <span className="font-medium">Discord Webhook + Notion API</span> 기반의
					<span className="text-primary font-medium">자동 기록 시스템</span>을 Node.js로 구축했습니다. 약 1,000건의
					메시지를 자동 기록하며 수작업을 완전히 제거했고, 학습 자료를 누락 없이 관리할 수 있게 되었습니다.
				</p>
				<p>
					추가로 Notion DB의 차트 뷰를 활용해 <span className="font-medium">스터디원들의 학습 시간 시각화</span>를
					제공했습니다. 이는 동기부여 요소로 작용했고, <span className="text-primary">평균 참여 시간이 2시간 증가</span>
					하는 성과로 이어졌습니다.
				</p>
				<p>
					반복되는 업무를 디지털화해 팀 생산성을 높이는 경험을 통해,
					<span className="font-medium">생산성 중심의 자동화 역량</span>을 키울 수 있었습니다.
				</p>
			</div>
		),
		github: "https://github.com/alstjrwjd99/DiscordNotionBot",
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
		content: (
			<>
				<p className="mb-2">
					저는 <span className="text-primary font-semibold">컴퓨팅적 사고</span>를 바탕으로 사람들에게 실질적인
					프로그램과 서비스를 제공하고자 사용자와 가장 맞닿아 있는{" "}
					<span className="text-primary font-semibold">프론트엔드 엔지니어</span>를 꿈꾸게 되었습니다. 이를 실현하기
					위해 대학 시절 <span className="text-primary font-semibold">웹 크롤링 외주 프로젝트</span>를 수행한 경험이
					있습니다.
				</p>
				<p className="mb-2">
					자바스크립트를 활용해 <span className="text-primary font-semibold">크롬 확장 프로그램</span> 형태의 크롤링
					툴을 제작했는데, 초기에는 <span className="text-primary font-semibold">단일 스레드 구조</span>로 인해 속도가
					느리고 병목 현상이 발생했습니다. 이를 해결하기 위해{" "}
					<span className="text-primary font-semibold">Web Worker</span>를 활용해{" "}
					<span className="text-primary font-semibold">병렬 처리 구조</span>로 개선했고,
					<span className="text-primary font-semibold">크롤링 속도를 약 4배 향상</span>시켜 고객이 원하는 데이터를
					신속하게 제공할 수 있었습니다.
				</p>
				<p>
					이 경험을 통해 <span className="text-primary font-semibold">성능 최적화</span>와{" "}
					<span className="text-primary font-semibold">사용자 관점의 문제 해결</span>에 흥미를 느끼게 되었고, IT 기술이{" "}
					<span className="text-primary font-semibold">실생활의 불편을 개선하는 수단</span>이 될 수 있다는 사실을
					느꼈습니다.
				</p>
			</>
		),
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
		content: (
			<>
				<p className="mb-2">
					<span className="text-primary font-semibold">슬랙 메시지 속 음식점 정보를 자동 수집</span>하고 이를 지도로
					시각화하는 서비스를 개발했습니다.
				</p>
				<p className="mb-2">
					Slack bot을 통해 수집한 메시지를 <span className="text-primary font-semibold">Spring Boot 서버</span>에
					저장하고,
					<span className="text-primary font-semibold">Naver 지도 API</span>와 연동하여 Vue 프론트엔드에서 마커로
					표시했습니다.
					<span className="text-primary font-semibold">EC2</span>와{" "}
					<span className="text-primary font-semibold">Vercel</span>을 사용해 백엔드와 프론트엔드를 각각 배포했습니다.
				</p>
				<p className="mb-2">
					지도 마커 클릭 시 사이드바에서 <span className="text-primary font-semibold">대표 이미지, 댓글, 별점</span> 등
					상세 정보 확인이 가능하며,
					<span className="text-primary font-semibold">리뷰 작성 및 자동 갱신</span> 기능도 구현했습니다.
				</p>
				<p>
					실제 슬랙 채널에서 수집한 데이터를 기반으로{" "}
					<span className="text-primary font-semibold">사용자들에게 유용한 정보를 자동 제공</span>하고,
					<span className="text-primary font-semibold">시각적 경험을 향상시킨 점</span>에서 높은 사용자 만족도를
					얻었습니다.
				</p>
			</>
		),
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
		demo: "https://avg5.vercel.app/",
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
		content: (
			<>
				<p className="mb-2">
					2023년 11월, 구글 플레이스토어는 앱 출시 전{" "}
					<span className="text-primary font-semibold">최소 20명의 테스터를 모집</span>해 2주간 비공개 테스트를 진행해야
					한다는 정책을 도입했습니다. 이에 따라 개인 개발자들이 겪는 불편함을 해결하기 위해{" "}
					<span className="text-primary font-semibold">테스터 모집 플랫폼</span>을 개발했습니다.
				</p>
				<p className="mb-2">
					저는 <span className="text-primary font-semibold">Flutter 기반 앱 개발</span>과{" "}
					<span className="text-primary font-semibold">PM 역할</span>을 맡아 백엔드 팀원과 함께
					<span className="text-primary font-semibold">1개월 내 MVP 완성</span>을 목표로 진행했습니다. 구글 문서 분석,
					사용자 경험 조사, 요구사항 정리를 통해 사용자 중심의 문제를 구체화했습니다.
				</p>
				<p className="mb-2">
					<span className="text-primary font-semibold">모집 게시판 및 댓글 기능</span>을 도입하여 테스터 모집 과정을{" "}
					<span className="text-primary font-semibold">두 단계 단축</span>했고,
					<span className="text-primary font-semibold">무한 스크롤, 스켈레톤 UI, 실시간 알림</span>을 통해 UX를
					개선했습니다. 알림에는 <span className="text-primary font-semibold">Google Play 링크</span>를 포함하여
					테스터의 참여를 유도했습니다.
				</p>
				<p className="mb-2">
					결과적으로 <span className="text-primary font-semibold">6개월간 150명 사용자 확보</span>,{" "}
					<span className="text-primary font-semibold">22개의 앱 출시 지원</span>이라는 성과를 거두었고, 블로그 글은{" "}
					<span className="text-primary font-semibold">185회 조회</span>를 기록하며 정보 공유로도 확장되었습니다.
				</p>
				<p>
					이 프로젝트를 통해 <span className="text-primary font-semibold">사용자 중심 문제 해결력</span>,
					<span className="text-primary font-semibold">빠른 실행력</span>,
					<span className="text-primary font-semibold">MVP 개발 능력</span>을 키울 수 있었고,
					<span className="text-primary font-semibold">개발자의 핵심 역할은 기능 구현이 아닌 실질적 문제 해결</span>
					이라는 점을 깊이 깨달았습니다.
				</p>
			</>
		),
		demo: "https://play.google.com/store/apps/details?id=com.codekunst.and20roid&hl=ko",
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
		content: (
			<>
				<p className="mb-2">
					기업에서 <span className="text-primary font-semibold">현장 체험형 인턴</span>으로 근무하며
					<span className="text-primary font-semibold">10만 줄 규모의 레거시 Flutter 코드</span>를 성공적으로 분석하고,
					이후
					<span className="text-primary font-semibold">버전 업그레이드</span>에 기여한 경험이 있습니다.
				</p>
				<p className="mb-2">
					제가 담당한 앱은 <span className="text-primary font-semibold">Flutter 2.5.1 기반</span>으로 개발되었으며, 사용
					중인 패키지 중 일부가 <span className="text-primary font-semibold">최신 Flutter 버전에서 지원되지 않음</span>
					에 따라
					<span className="text-primary font-semibold">앱 스토어 정책 제약</span>도 발생했습니다. 이를 해결하기 위해
					최신 Flutter 버전에 맞춘 마이그레이션을 제안하고 주도했습니다.
				</p>
				<p className="mb-2">
					먼저 사용 중인 <span className="text-primary font-semibold">패키지 전체 목록을 문서화</span>하고,
					<span className="text-primary font-semibold">의존성 충돌과 사용 중단된 함수</span>를 분석하여 대체 구현 방안을
					마련했습니다. 이후 <span className="text-primary font-semibold">Git 브랜치에서 마이그레이션</span>을 진행하고
					발생한 이슈를 정리하여
					<span className="text-primary font-semibold">CTO에게 보고</span>함으로써 기술적 의사결정에 기여했습니다.
				</p>
				<p className="mb-2">
					이 과정을 통해 전체 코드 구조를 깊이 있게 파악하게 되었고,
					<span className="text-primary font-semibold">후속 유지보수</span>와 신규 요구사항 대응에도 능동적으로 참여할
					수 있었습니다. 결과적으로 <span className="text-primary font-semibold">사내에서 Flutter 전문가로 인정</span>
					받아 더 큰 프로젝트에 참여할 수 있는 기회를 얻었습니다.
				</p>
				<p>
					이 경험은 <span className="text-primary font-semibold">레거시 시스템의 기술 부채 해소</span>와
					<span className="text-primary font-semibold">장기적인 유지보수 관점에서의 기여 역량</span>을 키우는 계기가
					되었고,
					<span className="text-primary font-semibold">문서화와 인수인계 문화</span>의 중요성을 몸소 체감한
					시간이었습니다.
				</p>
			</>
		),
		demo: "https://play.google.com/store/search?q=ai+parking&c=apps&hl=ko",
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
		content: (
			<>
				<p className="mb-2">
					대학 시절 기업 현장 실습형 인턴으로 참여하여{" "}
					<span className="text-primary font-semibold">AI 모델을 모바일 환경에서 최적화</span>하는 업무를 맡았습니다.
					Flutter 기반 앱에서 무거운 연산을 처리할 때 발생하는{" "}
					<span className="text-primary font-semibold">화면 끊김 문제</span>는 사용자 경험을 크게 저해하고 있었습니다.
				</p>
				<p className="mb-2">
					저는 먼저 <span className="text-primary font-semibold">비동기 이벤트 기반 처리</span>와{" "}
					<span className="text-primary font-semibold">메시지 큐 방식</span>을 도입하여 지연 시간을{" "}
					<span className="text-primary font-semibold">800ms까지 단축</span>했으나, 목표 성능에는 도달하지 못했습니다.
					더 나은 해법을 찾기 위해 <span className="text-primary font-semibold">서버 분산 처리 구조</span>도
					검토했습니다.
				</p>
				<p className="mb-2">
					이후 <span className="text-primary font-semibold">7개의 오픈소스 아키텍처 분석</span>을 통해{" "}
					<span className="text-primary font-semibold">Flutter의 isolate 기반 멀티프로세싱</span> 구조를 도입했습니다.
					UI와 모델 연산을 분리하여 처리함으로써{" "}
					<span className="text-primary font-semibold">지연 시간을 350ms까지 단축</span>, 성능을{" "}
					<span className="text-primary font-semibold">56% 향상</span>시켰습니다.
				</p>
				<p className="mb-2">
					해당 앱은 <span className="text-primary font-semibold">정부 지원 사업 데모 버전</span>으로 채택되어 실제 사업
					수주에도 기여했습니다. 이 경험은 <span className="text-primary font-semibold">끈기 있는 문제 해결력</span>과{" "}
					<span className="text-primary font-semibold">창의적인 접근 태도</span>가 얼마나 중요한지를 체감하게
					해주었습니다.
				</p>
				<p>
					저는 <span className="text-primary font-semibold">지속적으로 학습하며 개선하는 개발자</span>로서, 성능 향상을
					위한 구조적 고민과 사용자 경험을 고려한 기술 선택의 균형을 항상 추구하고 있습니다.
				</p>
			</>
		),
		demo: "https://play.google.com/store/apps/details?id=ai.lightvision.brnrflutter&hl=ko",
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
