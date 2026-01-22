"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import NewsLetterSub from "@/components/others/NewsLetterSub";
import { report, bc } from "@/assets";

interface ReportItem {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	image: any;
	pdf: string;
	tag?: string;
}

const REPORTS: ReportItem[] = [
	{
		id: "commerce",
		title: "Profitable Commerce in Africa",
		subtitle: "Winning Strategies for the Digital Economy",
		description:
			"Actionable insights into Africa’s fast-growing commerce ecosystem — covering consumer behavior, payments, logistics, and monetization strategies.",
		image: report,
		pdf: "/Profitable_Commerce.pdf",
		tag: "Most Downloaded",
	},
	{
		id: "blockchain",
		title: "Blockchain & Crypto",
		subtitle: "The New Frontier in African Finance",
		description:
			"A deep dive into blockchain, crypto adoption, Web3 infrastructure, regulation, and real use cases shaping Africa’s financial future.",
		image: bc,
		pdf: "/blockchain_report.pdf",
		tag: "New",
	},
];

const Reports = () => {
	const [openModal, setOpenModal] = useState(false);
	const [activeReport, setActiveReport] = useState<ReportItem | null>(null);

	const handleAccess = (report: ReportItem) => {
		setActiveReport(report);
		setOpenModal(true);
	};

	const handleSuccess = () => {
		if (activeReport) {
			window.location.href = activeReport.pdf;
		}
	};

	return (
		<div className="relative min-h-screen p-6 bg-black text-white flex items-center justify-center overflow-hidden">
			{/* BACKGROUND */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
				<div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-tr from-gray-700/10 to-white/5 rounded-full blur-2xl" />
			</div>

			<div className="relative z-10 w-full max-w-6xl">
				{/* HEADER */}
				<div className="flex items-center justify-center gap-3 mb-12">
					<Icon icon="mdi:chart-timeline-variant" className="w-12 h-12" />
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
						Premium Reports
					</h1>
				</div>

				{/* REPORT GRID */}
				<div className="grid md:grid-cols-2 gap-10 mb-14">
					{REPORTS.map((item) => (
						<div
							key={item.id}
							className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
						>
							{item.tag && (
								<span className="absolute top-4 right-4 text-xs font-semibold bg-gradient-to-r from-gray-600 to-black px-3 py-1 rounded-full">
									{item.tag}
								</span>
							)}

							<Image
								src={item.image}
								alt={item.title}
								className="rounded-xl shadow-lg mb-6"
							/>

							<h2 className="text-2xl font-bold mb-1">{item.title}</h2>
							<p className="text-sm text-gray-400 mb-4">
								{item.subtitle}
							</p>

							<p className="text-gray-300 text-sm leading-relaxed mb-6">
								{item.description}
							</p>

							<button
								onClick={() => handleAccess(item)}
								className="w-full bg-white text-black font-bold py-3 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition"
							>
								<Icon icon="mdi:download" className="w-5 h-5" />
								Access Full Report
								<Icon icon="mdi:arrow-right" className="w-5 h-5" />
							</button>
						</div>
					))}
				</div>

				{/* TRUST STRIP */}
				<div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
					<span>Research-Backed</span>
					<span>Updated Regularly</span>
					<span>Actionable Insights</span>
				</div>
			</div>

			{/* MODAL */}
			{openModal && activeReport && (
				<NewsLetterSub
					// reportTitle={activeReport.title}
					// reportId={activeReport.id}
					onComplete={handleSuccess}
					onClose={() => setOpenModal(false)}
				/>
			)}

			<style jsx>{`
				@keyframes pulse-slow {
					0%,
					100% {
						opacity: 0.4;
					}
					50% {
						opacity: 0.9;
					}
				}
				.animate-pulse-slow {
					animation: pulse-slow 4s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
};

export default Reports;
