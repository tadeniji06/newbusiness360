import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import ClarityScript from "@/components/Clarity";
import WhatsAppBanner from "@/components/WhatsAppBanner";

export const metadata: Metadata = {
	title: "Business360 | Global Business & Innovation",
	description:
		"Shaping the Narrative of Global Business & Innovation",
	icons: {
		icon: "/icon.jpg",
	},
	openGraph: {
		title: "Business360 | Global Business & Innovation",
		description:
			"Shaping the Narrative of Global Business & Innovation",
		url: "https://thisisbusiness360.com",
		siteName: "Business360",
		images: [
			{
				url: "/icon.jpg",
				width: 1200,
				height: 630,
				alt: "Business360 | Global Business & Innovation",
			},
		],
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Business360 | Global Business & Innovation",
		description:
			"Shaping the Narrative of Global Business & Innovation",
		images: ["/icon.jpg"],
		site: "@thisisbusiness360",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<Header />
				{children}
				<Footer />
				<WhatsAppBanner />
				<ClarityScript />
			</body>
		</html>
	);
}
