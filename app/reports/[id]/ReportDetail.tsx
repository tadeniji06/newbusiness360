"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import NewsLetterSub from "@/components/others/NewsLetterSub";
import { ReportItem } from "@/utils/reportsData";

interface Props {
	report: ReportItem;
}

const ReportDetail = ({ report }: Props) => {
	const [openModal, setOpenModal] = useState(false);

	const handleSuccess = () => {
		// Provide the download link to the user
		window.location.href = report.pdf;
	};

	return (
		<div className='max-w-4xl mx-auto px-6 lg:px-12'>
			{/* Back Navigation */}
			<div className='mb-12'>
				<Link
					href='/reports'
					className='inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors'
				>
					<Icon icon='mdi:arrow-left' className='w-4 h-4' />
					Back to All Reports
				</Link>
			</div>

			<div className='bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 lg:gap-16 items-start'>
				{/* Left Side: Image */}
				<div className='w-full md:w-5/12 shrink-0'>
					<div className='relative aspect-[3/4] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-md border border-gray-200'>
						<Image
							src={report.image}
							alt={report.title}
							fill
							className='object-cover'
							priority
						/>
					</div>
				</div>

				{/* Right Side: Details */}
				<div className='w-full md:w-7/12 flex flex-col pt-2 lg:pt-6'>
					{report.tag && (
						<div className='mb-6'>
							<span className='text-[10px] uppercase tracking-wider font-bold bg-black text-white px-3 py-1 rounded-full'>
								{report.tag}
							</span>
						</div>
					)}

					<h1 className='text-3xl lg:text-5xl font-extrabold text-black mb-4 leading-tight'>
						{report.title}
					</h1>

					<h2 className='text-lg lg:text-xl font-semibold text-primary-red mb-8 uppercase tracking-wide'>
						{report.subtitle}
					</h2>

					<div className='h-px w-16 bg-gray-200 mb-8'></div>

					<div className='prose prose-lg text-gray-600 mb-10'>
						<p className='leading-relaxed'>
							{report.details || report.description}
						</p>
					</div>

					<div className='mt-auto'>
						<button
							onClick={() => setOpenModal(true)}
							className='w-full md:w-auto bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-md hover:shadow-lg active:scale-95'
						>
							<Icon icon='mdi:download' className='w-5 h-5' />
							Access Full Report
						</button>
					</div>
				</div>
			</div>

			{/* Newsletter Subscription Modal */}
			{openModal && (
				<NewsLetterSub
					onComplete={handleSuccess}
					onClose={() => setOpenModal(false)}
				/>
			)}
		</div>
	);
};

export default ReportDetail;
