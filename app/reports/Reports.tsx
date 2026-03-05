"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { REPORTS } from "@/utils/reportsData";

const Reports = () => {
	return (
		<div className='relative min-h-screen py-32 px-6 bg-white text-black flex items-center justify-center overflow-hidden'>
			<div className='relative z-10 w-full max-w-6xl'>
				{/* HEADER */}
				<div className='flex flex-col items-center justify-center gap-4 mb-16 text-center'>
					<Icon
						icon='mdi:chart-timeline-variant'
						className='w-12 h-12 text-black'
					/>
					<h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-black'>
						Premium Reports
					</h1>
					<p className='text-gray-500 max-w-2xl mt-4'>
						In-depth research, actionable insights, and data-driven
						analysis of Africa's digital economy. Download our latest
						reports to stay ahead.
					</p>
				</div>

				{/* REPORT GRID */}
				<div className='flex justify-center mb-16'>
					{REPORTS.map((item) => (
						<div
							key={item.id}
							className='w-full max-w-2xl group relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300'
						>
							{item.tag && (
								<span className='absolute top-6 right-6 text-[10px] uppercase tracking-wider font-bold bg-black text-white px-3 py-1 rounded-full z-10'>
									{item.tag}
								</span>
							)}

							<div className='w-full h-auto aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-100 mb-6 border border-gray-100'>
								<Image
									src={item.image}
									alt={item.title}
									fill
									className='object-cover group-hover:scale-105 transition-transform duration-500'
								/>
							</div>

							<h2 className='text-2xl font-bold mb-2 text-black leading-tight group-hover:text-red-600 transition-colors'>
								{item.title}
							</h2>
							<p className='text-sm text-red-600 font-semibold mb-4 uppercase tracking-wide'>
								{item.subtitle}
							</p>

							<p className='text-gray-600 text-sm leading-relaxed mb-8 line-clamp-3'>
								{item.description}
							</p>

							<Link href={`/reports/${item.id}`}>
								<button className='w-full bg-black text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-md group-hover:shadow-lg'>
									<Icon
										icon='mdi:file-document-outline'
										className='w-5 h-5'
									/>
									View Report Details
									<Icon icon='mdi:arrow-right' className='w-4 h-4' />
								</button>
							</Link>
						</div>
					))}
				</div>

				{/* TRUST STRIP */}
				<div className='flex flex-wrap justify-center gap-8 text-gray-500 text-sm font-medium uppercase tracking-wider border-t border-gray-200 pt-10'>
					<span className='flex items-center gap-2'>
						<Icon icon='mdi:check-circle' className='text-black' />{" "}
						Research-Backed
					</span>
					<span className='flex items-center gap-2'>
						<Icon icon='mdi:clock-outline' className='text-black' />{" "}
						Updated Regularly
					</span>
					<span className='flex items-center gap-2'>
						<Icon
							icon='mdi:lightbulb-outline'
							className='text-black'
						/>{" "}
						Actionable Insights
					</span>
				</div>
			</div>
		</div>
	);
};

export default Reports;
