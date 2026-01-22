
export interface HeaderLink {
	title: string;
	link: string;
	dropdownItems?: { title: string; link: string }[];
}

export const headerLinks: HeaderLink[] = [
	{
		title: "Home",
		link: "/",
	},
	{
		title: "News",
		link: "/posts",
	},
	{
		title: "People",
		link: "/posts",
	},
	{
		title: "Business",
		link: "/posts",
	},
	{
		title: "Companies",
		link: "/posts",
	},
	{
		title: "Opportunities",
		link: "/posts",
	},

	{
		title: "Reports",
		link: "/reports",
	},
	{
		title: "Magazine",
		link: "/magazine",
	},
	{
		title: "About",
		link: "/about",
	},
	{
		title: "Contact",
		link: "/contact",
	},
];

export const categories = [
	{
		title: "Robotics",
		link: "/",
	},
	{
		title: "MarTech",
		link: "/",
	},
	{
		title: "AI & Emerging Tech",
		link: "/",
	},
	{
		title: "Ecommerce",
		link: "/",
	},
	{
		title: "Sports",
		link: "/",
	},
];

export const regions = [
	{
		title: "West Africa",
	},
	{
		title: "East Africa",
	},
	{
		title: "North Africa",
	},
	{
		title: "South Africa",
	},
	{
		title: "Central Africa",
	},
];

export const missions = [
	{
		title: "Make African Markets Understandable",
		body: "We simplify complex business trends, policies, and technology shifts so founders, operators, and investors can make smarter decisions.",
	},
	{
		title: "Champion Builders & Innovators",
		body: "We spotlight the people and companies creating real economic value, pushing the ecosystem forward through execution and resilience.",
	},
	{
		title: "Strengthen Ecosystem Knowledge",
		body: "We provide data-rich analysis and practical insights that help African businesses grow, adapt, and stay competitive on a global stage.",
	},
	{
		title: "Bridge Information Gaps",
		body: "We ensure emerging markets in Africa get the visibility and understanding they deserve by connecting stories, data, and lived realities.",
	},
];

export const values = [
	{
		title: "Sharp Insight",
		body: "We break down Africa’s fast-evolving tech and business landscape with clarity, accuracy, and context — no hype, no noise.",
	},
	{
		title: "Integrity",
		body: "We report with transparency and intellectual honesty, keeping our analysis grounded in facts, not popular opinion.",
	},
	{
		title: "Execution Mindset",
		body: "We highlight builders, operators, and real business impact — celebrating progress driven by innovation, not theatrics.",
	},
	{
		title: "Ecosystem Growth",
		body: "We contribute to a stronger African tech economy by sharing knowledge, spotlighting founders, and enabling informed conversations.",
	},
	{
		title: "Innovation",
		body: "We embrace modern tools and forward-thinking methods to deliver smart, data-driven content that moves the ecosystem forward.",
	},
	{
		title: "Balanced Perspective",
		body: "We cover both the wins and the growing pains — providing honest, nuanced views of Africa’s tech and business realities.",
	},
];

export const socialLinks = [
	{
		title: "LinkedIn",
		link: "https://www.linkedin.com/company/the-showcase-africa/",
		icon: "mdi:linkedin",
	},
	{
		title: "Twitter",
		link: "https://x.com/showcaseafrica_?s=09",
		icon: "mdi:twitter",
	},
	{
		title: "YouTube",
		link: "https://m.youtube.com/@showcaseafricatv",
		icon: "mdi:youtube",
	},
	{
		title: "Instagram",
		link: "https://www.instagram.com/showcaseafrica_?igsh=MWZ1N2QzZzU5Z3JiNQ==",
		icon: "mdi:instagram",
	},
	{
		title: "Tiktok",
		link: "https://www.tiktok.com/@showcaseafrica_?_t=ZS-8zbd5jJ08VW&_r=1",
		icon: "ic:baseline-tiktok",
	},
];
