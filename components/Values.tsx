"use client";

import { values } from "@/utils/data";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Values = () => {
	return (
		<section className='max-w-7xl mx-auto px-6 py-24'>
			{/* HEADER */}
			<div className='flex items-center gap-4 mb-14'>
				<div className='w-14 h-14 rounded-2xl bg-primary-red flex items-center justify-center shadow-lg shadow-blue-900/20'>
					<Icon icon='lucide:star' className='text-white w-7 h-7' />
				</div>
				<h2 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>
					Our Core Values
				</h2>
			</div>

			{/* GRID */}
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{values.map((value, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.12 }}
						viewport={{ once: true }}
						className='bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group hover:-translate-y-1'
					>
						<h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-red transition-colors'>
							{value.title}
						</h3>
						<p className='text-gray-700 leading-relaxed'>
							{value.body}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Values;
