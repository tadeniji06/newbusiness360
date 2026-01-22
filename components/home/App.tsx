import React from "react";
import { Icon } from "@iconify/react";
import {
	bizz,
	culture,
	ent,
	politics,
	sports,
	travel,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";

const mockImages = {
	bizz: bizz,
	culture: culture,
	entertainment: ent,
	politics: politics,
	sports: sports,
	travel: travel,
};

interface CategoryCardProps {
	icon: string;
	title: string;
	image: any;
	description: string;
	detailedDescription: string;
	articleCount: number;
	spotlights: string[];
	trending?: boolean;
	className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
	icon,
	title,
	image,
	description,
	detailedDescription,
	articleCount,
	spotlights,
	trending = false,
	className = "",
}) => {
	return (
		<section
			className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 hover:scale-[1.01] mb-10 ${className}`}
		>
			{trending && (
				<div className='absolute top-4 right-4 z-20 bg-primary-red text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1'>
					<Icon icon='mdi:trending-up' className='w-4 h-4' />
					Trending
				</div>
			)}

			<div className='flex flex-col lg:flex-row'>
				{/* IMAGE */}
				<div className='w-full lg:w-[440px] relative grayscale hover:grayscale-0 transition-all duration-700'>
					<div className='h-48 sm:h-56 lg:h-full overflow-hidden'>
						<Image
							src={image}
							alt={title}
							className='w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[1200ms]'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent' />
					</div>
				</div>

				{/* CONTENT */}
				<div className='flex-1 p-6 lg:p-10'>
					{/* HEADER */}
					<div className='flex items-start gap-4 mb-6'>
						<div className='w-14 h-14 lg:w-16 lg:h-16 bg-primary-red rounded-xl flex items-center justify-center'>
							<Icon icon={icon} className='w-7 h-7 text-white' />
						</div>
						<div>
							<h2 className='text-2xl lg:text-3xl font-bold text-black leading-tight'>
								{title}
							</h2>
							<p className='text-gray-600 text-sm mt-1'>
								{articleCount} analytical reports
							</p>
						</div>
					</div>

					{/* TEXT */}
					<div className='mb-6'>
						<p className='text-gray-800 text-base leading-relaxed mb-3'>
							{description}
						</p>
						<p className='text-gray-600 text-sm leading-relaxed'>
							{detailedDescription}
						</p>
					</div>

					{/* SPOTLIGHT */}
					<div className='mb-6'>
						<h3 className='text-lg font-bold text-black flex items-center gap-2 mb-3'>
							<Icon icon='mdi:star-outline' className='w-5 h-5' />
							Key Focus Areas
						</h3>
						<div className='flex flex-wrap gap-2'>
							{spotlights.map((spotlight, i) => (
								<span
									key={i}
									className='px-3 py-1.5 bg-blue-50 rounded-full text-xs font-medium text-primary-red border border-blue-100 hover:bg-primary-red hover:text-white transition-all'
								>
									{spotlight}
								</span>
							))}
						</div>
					</div>

					{/* ACTIONS */}
					<div className='flex justify-center flex-col sm:flex-row gap-4'>
						<Link href='/posts' className='flex-1 sm:flex-initial'>
							<button className='w-full sm:w-auto bg-primary-red text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-800 transition-all flex items-center justify-center'>
								<Icon icon='mdi:eye' className='w-5 h-5' />
								<span className='ml-2'>Explore Insights</span>
							</button>
						</Link>

						<button className='w-full sm:w-auto border border-primary-red px-6 py-3 rounded-lg text-primary-red font-semibold text-sm hover:bg-primary-red hover:text-white transition-all flex items-center justify-center'>
							<Icon icon='mdi:bookmark-outline' className='w-5 h-5' />
							<span className='ml-2'>Save Category</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

/* --------------------------
   CATEGORY DEFINITIONS
--------------------------- */

const Business: React.FC = () => (
	<CategoryCard
		icon='mdi:finance'
		title='Startups & Funding'
		image={mockImages.bizz}
		description='Deep insights into startup ecosystems, venture capital trends, and technology-driven business models reshaping the global economy.'
		detailedDescription='From fintech dominance to SaaS expansion and AI innovations, explore funding reports, market breakdowns, and founder-led disruptions driving the digital economy.'
		articleCount={247}
		spotlights={[
			"Venture Capital",
			"Fintech Ecosystems",
			"Founder Spotlights",
			"Market Research",
			"Growth Playbooks",
			"Investment Reports",
		]}
		trending
	/>
);

const Culture: React.FC = () => (
	<CategoryCard
		icon='mdi:chip'
		title='Tech Culture & Innovation'
		image={mockImages.culture}
		description='A deep dive into the evolving tech workforce, engineering culture, and innovation hubs powering digital transformation.'
		detailedDescription='Explore developer communities, emerging technologies, work culture dynamics, and the infrastructure enabling a new generation of builders, creators, and future-forward talent.'
		articleCount={189}
		spotlights={[
			"Developer Ecosystems",
			"Innovation Hubs",
			"Engineering Culture",
			"Tech Education",
			"Data Communities",
			"Future of Work",
		]}
	/>
);

const Entertainment: React.FC = () => (
	<CategoryCard
		icon='mdi:video-box'
		title='Media, Streaming & Tech'
		image={mockImages.entertainment}
		description='How technology is reshaping media, digital entertainment, and the global creative economy.'
		detailedDescription='From streaming platforms scaling across regions to creator monetization tools and digital rights infrastructure, explore how tech is powering the billion-dollar entertainment evolution.'
		articleCount={356}
		spotlights={[
			"Streaming Platforms",
			"Creator Economy",
			"Digital Ads",
			"Content Technology",
			"Media Analytics",
			"IP Infrastructure",
		]}
		trending
	/>
);

const Politics: React.FC = () => (
	<CategoryCard
		icon='mdi:bank'
		title='Tech Policy & Regulation'
		image={mockImages.politics}
		description='Understand the policies, regulations, and digital governance frameworks shaping the technology landscape.'
		detailedDescription='We cover AI laws, data protection frameworks, fintech regulation, digital ID systems, cybersecurity decisions, and cross-border digital trade shaping the tech future.'
		articleCount={198}
		spotlights={[
			"AI Regulation",
			"Cybersecurity",
			"Digital ID",
			"Data Protection",
			"Policy Analysis",
			"Tech Diplomacy",
		]}
	/>
);

const Sports: React.FC = () => (
	<CategoryCard
		icon='mdi:chart-line'
		title='Sports Technology & Analytics'
		image={mockImages.sports}
		description='Where sports meet data — analyzing the rise of sports tech, performance analytics, fan engagement, and digital broadcasting.'
		detailedDescription='Dive into athlete data tracking, sports startups, eSports, smart stadiums, and the business of sports evolving under a new generation of analytics tools.'
		articleCount={412}
		spotlights={[
			"Performance Analytics",
			"Sports Startups",
			"eSports",
			"Sports Media Tech",
			"AI in Sports",
			"Fan Engagement",
		]}
	/>
);

const Travel: React.FC = () => (
	<CategoryCard
		icon='mdi:map'
		title='Mobility, Logistics & TravelTech'
		image={mockImages.travel}
		description='The technologies transforming transportation, travel, logistics, and mobility across complex infrastructure.'
		detailedDescription='We break down ride-hailing innovation, aviation growth, last-mile logistics, smart transport systems, e-mobility, and the future of travel enabled by digital tools.'
		articleCount={156}
		spotlights={[
			"Ride-Hailing Tech",
			"TravelTech",
			"Logistics Infrastructure",
			"E-Mobility",
			"Urban Transport",
			"Aviation Growth",
		]}
	/>
);

const App: React.FC = () => {
	return (
		<div className='min-h-screen bg-white'>
			{/* HEADER */}
			<div className='bg-primary-red text-white py-12'>
				<div className='max-w-6xl mx-auto px-6 text-center'>
					<div className='flex items-center justify-center gap-3 mb-4'>
						<Icon icon='mdi:server' className='w-10 h-10' />
						<h1 className='text-4xl lg:text-5xl font-extrabold'>
							Business360
						</h1>
					</div>
					<p className='text-gray-200 text-lg max-w-2xl mx-auto'>
						Insights, analysis, data and stories powering the global
						tech, business and innovation future.
					</p>
				</div>
			</div>

			{/* CONTENT */}
			<div className='max-w-6xl mx-auto px-4 py-14 space-y-14'>
				<Business />
				<Culture />
				<Entertainment />
				<Politics />
				<Sports />
				<Travel />
			</div>
		</div>
	);
};

export default App;
