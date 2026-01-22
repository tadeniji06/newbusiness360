import { Icon } from "@iconify/react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Magazines | Business360",
	description:
		"A magazine showcasing the best of global business, innovation, and lifestyle.",
	keywords: [
		"magazines",
		"business360",
		"global business",
		"innovation",
		"finance",
		"future of work",
	],
	applicationName: "Business360",
	creator: "Business360 Team",
	publisher: "Business360",
	alternates: {
		canonical: "https://thisisbusiness360.com/magazine",
	},
	openGraph: {
		title: "Magazines | Business360",
		description:
			"Explore stories, innovations, and culture in our monthly magazine editions.",
		url: "https://thisisbusiness360.com/magazine",
		siteName: "Business360",
		type: "article",
		locale: "en_US",
		images: [
			{
				url: "/icon.jpg",
				width: 1200,
				height: 630,
				alt: "Business360 Magazine",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Magazines | Business360",
		description:
			"A magazine showcasing the best of global business, innovation, and lifestyle.",
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
		<main className='min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden'>
			{/* Decorative Elements */}
			<div className='absolute inset-0 bg-white'>
				<div className='absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 skew-x-12 transform origin-top-right' />
			</div>

			<div className='relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-24'>
				<div className='text-center lg:text-left'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-primary-red text-sm font-bold mb-8'>
						<Icon icon='lucide:sparkles' className='w-4 h-4' />
						<span>Coming Soon</span>
					</div>

					<h1 className='text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight'>
						Redefining <br />
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-blue-600'>
							Business Media.
						</span>
					</h1>

					<p className='text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed mb-10'>
						A premium collection of stories, interviews, and insights
						from the world's most innovative minds.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
						<div className='flex-1 max-w-sm relative'>
							<input
								type='email'
								placeholder='Enter your email'
								className='w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red outline-none transition-all pl-12'
							/>
							<Icon
								icon='lucide:mail'
								className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5'
							/>
						</div>
						<button className='px-8 py-4 bg-primary-red text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 whitespace-nowrap'>
							Get Notified
						</button>
					</div>

					<div className='mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500'>
						<span className='flex items-center gap-2'>
							<Icon
								icon='lucide:check-circle'
								className='text-primary-red w-4 h-4'
							/>{" "}
							Exclusive Interviews
						</span>
						<span className='flex items-center gap-2'>
							<Icon
								icon='lucide:check-circle'
								className='text-primary-red w-4 h-4'
							/>{" "}
							Market Analysis
						</span>
					</div>
				</div>

				<div className='relative hidden lg:block'>
					<div className='relative z-10 bg-white rounded-3xl p-2 shadow-2xl border border-gray-100 transform rotate-3 hover:rotate-0 transition-all duration-500'>
						<div className='bg-primary-red rounded-2xl h-[500px] flex items-center justify-center relative overflow-hidden group'>
							<div className='absolute inset-0 bg-gradient-to-tr from-blue-900 to-transparent opacity-80' />
							<div className='absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center'>
								<h2 className='text-4xl font-bold mb-4 font-serif italic'>
									The Pioneer Edition
								</h2>
								<p className='opacity-80'>Vol. 01 — 2026</p>
								<div className='mt-8 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform'>
									<Icon icon='lucide:lock' className='w-6 h-6' />
								</div>
							</div>
						</div>
					</div>
					<div className='absolute top-10 -right-10 w-full h-full bg-gray-100 rounded-3xl -z-10 transform -rotate-2' />
				</div>
			</div>
		</main>
	);
};

export default page;
