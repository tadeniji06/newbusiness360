"use client";
import { missions } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Mission = () => {
	return (
		<section className='max-w-7xl mx-auto px-6 py-24 bg-gray-50/50'>
			{/* HEADER */}
			<div className='flex items-center gap-4 mb-14'>
				<div className='w-14 h-14 rounded-2xl bg-primary-red flex items-center justify-center shadow-lg shadow-blue-900/20'>
					<Icon icon='lucide:leaf' className='text-white w-7 h-7' />
				</div>
				<h2 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>
					Our Mission
				</h2>
			</div>

			{/* MISSION CARDS */}
			<div className='grid md:grid-cols-2 gap-8'>
				{missions.map((mission, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className='bg-white rounded-3xl border border-gray-100 p-10 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group'
					>
						<h3 className='text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-red transition-colors'>
							{mission.title}
						</h3>
						<p className='text-gray-700 leading-relaxed'>
							{mission.body}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Mission;
