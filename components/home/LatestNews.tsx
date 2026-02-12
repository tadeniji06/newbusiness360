"use client";
import { getNewsPosts, urlFor, NewsPost } from "@/utils/news";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const LatestNews = () => {
	const [news, setNews] = useState<NewsPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const latestNews = await getNewsPosts(3);
				setNews(latestNews);
			} catch (err) {
				console.error("Error fetching news:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, []);

	if (loading) return null; // Or a skeleton, but for homepage sections, simpler to just not show or show simplified
	if (news.length === 0) return null;

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<section className='py-20 px-6 lg:px-12 bg-gray-50 border-t border-gray-100'>
			<div className='max-w-[1400px] mx-auto'>
				<motion.div
					className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div>
						<span className='text-primary-red font-bold tracking-widest uppercase text-sm mb-2 block'>
							Updates
						</span>
						<h2 className='text-3xl md:text-5xl font-bold text-gray-900'>
							Latest News
						</h2>
					</div>

					<Link
						href='/news'
						className='inline-flex items-center gap-2 text-primary-red font-semibold hover:text-red-700 transition-colors group'
					>
						View Newsroom
						<Icon
							icon='lucide:arrow-right'
							width={20}
							height={20}
							className='transform group-hover:translate-x-1 transition-transform'
						/>
					</Link>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
				>
					{news.map((item) => (
						<motion.div key={item._id} variants={itemVariants}>
							<Link
								href={`/news/${item.slug.current}`}
								className='group block h-full'
							>
								<article className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border border-gray-100'>
									<div className='relative h-60 overflow-hidden bg-gray-200'>
										{item.mainImage ? (
											<Image
												src={urlFor(item.mainImage)
													.width(600)
													.height(400)
													.url()}
												alt={item.title}
												fill
												className='object-cover group-hover:scale-105 transition-transform duration-500'
											/>
										) : (
											<div className='w-full h-full flex items-center justify-center text-gray-400'>
												<Icon
													icon='mdi:newspaper-variant-outline'
													width={48}
												/>
											</div>
										)}
										<div className='absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm'>
											News
										</div>
									</div>

									<div className='p-6 flex-1 flex flex-col'>
										<div className='text-xs text-gray-500 font-medium mb-3 flex items-center gap-2'>
											<Icon icon='mdi:calendar-blank-outline' />
											{new Date(item.publishedAt).toLocaleDateString(
												"en-US",
												{
													month: "short",
													day: "numeric",
													year: "numeric",
												},
											)}
										</div>

										<h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-red transition-colors line-clamp-2'>
											{item.title}
										</h3>

										{item.excerpt && (
											<p className='text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4'>
												{item.excerpt}
											</p>
										)}

										<div className='mt-auto pt-4 border-t border-gray-50 text-sm font-semibold text-primary-red flex items-center gap-1 group-hover:gap-2 transition-all'>
											Read Article{" "}
											<Icon icon='mdi:arrow-right' width={16} />
										</div>
									</div>
								</article>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default LatestNews;
