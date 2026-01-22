import Posts from "./Posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Stories & Insights | Business360",
	description:
		"Discover inspiring stories, insights, and perspectives on global business and innovation.",
	keywords: [
		"business stories",
		"global insights",
		"finance",
		"innovation",
		"tech",
		"business360",
	],
	applicationName: "Business360",
	creator: "Business360 Team",
	publisher: "Business360",
	alternates: {
		canonical: "https://thisisbusiness360.com/posts",
	},
	openGraph: {
		title: "Stories & Insights | Business360",
		description:
			"Discover inspiring stories, insights, and perspectives on global business and innovation.",
		url: "https://thisisbusiness360.com/posts",
		siteName: "Business360",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/icon.jpg",
				width: 1200,
				height: 630,
				alt: "Business360 Stories",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Stories & Insights",
		description:
			"Discover inspiring stories, insights, and perspectives on global business and innovation.",
		creator: "@thisisbusiness360",
		images: ["/icon.jpg"],
	},
	icons: {
		icon: "/icon.jpg",
		shortcut: "/icon.jpg",
		apple: "/icon.jpg",
	},
	robots: {
		index: true,
		follow: true,
	},
};

const page = () => {
	return (
		<>
			<Posts />
		</>
	);
};

export default page;
