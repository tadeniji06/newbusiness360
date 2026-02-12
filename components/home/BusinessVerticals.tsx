"use client";

import { businessVerticals } from "@/utils/data";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";

const BusinessVerticals = () => {
	return (
		<section className='bg-white py-14'>
			<div className='max-w-[1400px] mx-auto px-6 lg:px-12'>
				{/* HEADLINE */}
				<div className='mb-12 text-center'>
					<div className='inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-3'>
						<Icon icon='mdi:domain' />
						Sectors & Markets
					</div>
					<h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4'>
						Business Verticals
					</h2>
					<p className='text-gray-500 text-lg max-w-2xl mx-auto'>
						Comprehensive coverage of the industries shaping the
						future of African business and technology.
					</p>
				</div>

				{/* GRID */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{businessVerticals.map((category, index) => (
						<motion.div
							key={category.slug}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Link
								href={`/category/${category.slug}`}
								className={`group relative block h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border ${category.borderColor} overflow-hidden`}
							>
								{/* Hover Gradient Background */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
								/>

								<div className='relative z-10'>
									{/* Icon */}
									<div
										className={`w-14 h-14 rounded-xl ${category.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
									>
										<Icon
											icon={category.icon}
											className={`text-2xl ${category.textColor}`}
										/>
									</div>

									{/* Content */}
									<h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors flex items-center justify-between'>
										{category.title}
										<Icon
											icon='mdi:arrow-right'
											className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${category.textColor}`}
										/>
									</h3>

									<p className='text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-600'>
										{category.description}
									</p>

									{/* Decorative line */}
									<div
										className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.gradient} opacity-50 group-hover:w-full transition-all duration-500`}
									/>
								</div>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BusinessVerticals;
