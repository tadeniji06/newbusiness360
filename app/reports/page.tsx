import { Metadata } from "next";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Reports | Business360",
	description:
		"In-depth analysis, reports, and data on legal, business trends, and innovation.",
	openGraph: {
		title: "Reports | Business360",
		description:
			"In-depth analysis, reports, and data on legal, business trends, and innovation.",
		url: "https://thisisbusiness360.com/reports",
		siteName: "Business360",
		images: [
			{
				url: "/icon.jpg",
				width: 1200,
				height: 630,
				alt: "Business360 Reports",
			},
		],
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Reports | Business360",
		description:
			"In-depth analysis, reports, and data on legal, business trends, and innovation.",
		images: ["/icon.jpg"],
		creator: "@thisisbusiness360",
	},
};

const page = () => {
	return (
		<main className='min-h-screen bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden'>
			{/* Decorative Background */}
			<div className='absolute inset-0 z-0'>
				<div className='absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2' />
				<div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl translate-x-1/4 translate-y-1/4' />
				{/* Grid Pattern */}
				<div className='absolute inset-0 bg-[linear-gradient(rgba(0,63,192,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,63,192,0.03)_1px,transparent_1px)] bg-[size:40px_40px]' />
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 lg:gap-8 items-center py-20'>
				{/* Left Content */}
				<div className='order-2 lg:order-1 space-y-8'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-blue-100 shadow-sm text-primary-red text-sm font-bold'>
						<Icon icon='lucide:bar-chart-2' className='w-4 h-4' />
						<span className='tracking-wide uppercase text-xs'>
							Intelligence Unit
						</span>
					</div>

					<h1 className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1]'>
						Decode the <br />
						<span className='text-primary-red'>Global Economy.</span>
					</h1>

					<p className='text-xl text-gray-600 max-w-lg leading-relaxed font-light'>
						Proprietary data, deep-dive market analysis, and strategic
						forecasting for the leaders shaping tomorrow.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 max-w-md'>
						<button className='flex-1 px-8 py-4 bg-primary-red text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 group'>
							<span>Join Waitlist</span>
							<Icon
								icon='lucide:arrow-right'
								className='w-4 h-4 group-hover:translate-x-1 transition-transform'
							/>
						</button>
						<button className='px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2'>
							<Icon icon='lucide:download' className='w-4 h-4' />
							<span>Sample Report</span>
						</button>
					</div>

					<div className='pt-8 border-t border-gray-200 max-w-md'>
						<p className='text-xs font-bold text-gray-400 uppercase tracking-wider mb-4'>
							Focus Areas
						</p>
						<div className='flex flex-wrap gap-3'>
							{[
								"Fintech 2.0",
								"Emerging Markets",
								"Crypto Regulation",
								"AI Policy",
							].map((tag) => (
								<span
									key={tag}
									className='px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-gray-600 font-medium'
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Right Visual - Stacked Reports */}
				<div className='order-1 lg:order-2 relative flex justify-center lg:justify-end perspective-1000'>
					<div className='relative w-full max-w-md  aspect-[3/4]'>
						{/* Card 3 (Back) */}
						<div className='absolute top-0 right-0 w-full h-full bg-blue-50 border border-blue-100 rounded-2xl shadow-lg transform translate-x-8 -translate-y-8 rotate-6 transition-transform duration-500 hover:translate-x-10 hover:-translate-y-10 flex flex-col p-8 opacity-60'>
							<div className='w-12 h-12 bg-blue-100/50 rounded-lg mb-auto' />
							<div className='space-y-3'>
								<div className='h-4 bg-blue-100/50 rounded w-3/4' />
								<div className='h-4 bg-blue-100/50 rounded w-1/2' />
							</div>
						</div>

						{/* Card 2 (Middle) */}
						<div className='absolute top-0 right-0 w-full h-full bg-white border border-gray-100 rounded-2xl shadow-xl transform translate-x-4 -translate-y-4 rotate-3 transition-transform duration-500 hover:translate-x-6 hover:-translate-y-6 flex flex-col p-8 z-10'>
							<div className='flex justify-between items-start mb-auto'>
								<div className='w-12 h-12 bg-gray-100 rounded-lg' />
								<Icon
									icon='lucide:lock'
									className='text-gray-300 w-5 h-5'
								/>
							</div>
							<div className='space-y-4'>
								<h3 className='text-xl font-bold text-gray-300'>
									Market Trends 2025
								</h3>
								<div className='space-y-2'>
									<div className='h-2 bg-gray-100 rounded w-full' />
									<div className='h-2 bg-gray-100 rounded w-full' />
									<div className='h-2 bg-gray-100 rounded w-2/3' />
								</div>
							</div>
						</div>

						{/* Card 1 (Front) */}
						<div className='absolute top-0 right-0 w-full h-full bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col z-20 overflow-hidden group'>
							{/* Card Header Color */}
							<div className='h-2 bg-primary-red w-full' />

							<div className='p-8 flex-1 flex flex-col'>
								<div className='flex justify-between items-start mb-8'>
									<div className='w-14 h-14 bg-blue-50 text-primary-red rounded-xl flex items-center justify-center'>
										<Icon
											icon='lucide:pie-chart'
											className='w-7 h-7'
										/>
									</div>
									<span className='px-3 py-1 bg-gray-100 text-xs font-bold text-gray-500 rounded-full'>
										Q3 REPORT
									</span>
								</div>

								<h3 className='text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-red transition-colors'>
									State of Global Venture Capital
								</h3>

								<p className='text-gray-500 leading-relaxed text-sm mb-8'>
									Comprehensive analysis of funding flows, liquidity
									events, and emerging hubs across the 2026 landscape.
								</p>

								{/* Mock Chart */}
								<div className='mt-auto pt-6 border-t border-gray-100'>
									<div className='flex items-end gap-2 h-24 mb-2'>
										{[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
											<div
												key={i}
												className='flex-1 bg-blue-50 hover:bg-primary-red/80 transition-colors rounded-t-sm relative group/bar'
												style={{ height: `${h}%` }}
											></div>
										))}
									</div>
									<div className='flex justify-between text-xs text-gray-400 font-medium'>
										<span>JAN</span>
										<span>JUL</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
export default page;
