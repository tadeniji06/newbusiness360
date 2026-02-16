"use client";

import { NewsPost, urlFor } from "@/utils/news";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface NewsListProps {
	posts: NewsPost[];
}

export default function NewsList({ posts }: NewsListProps) {
	if (!posts || posts.length === 0) {
		return (
			<div className='container mx-auto px-6 py-20 text-center'>
				<div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4'>
					<Icon
						icon='mdi:newspaper-variant-outline'
						className='text-2xl text-gray-400'
					/>
				</div>
				<h3 className='text-xl font-bold text-gray-900'>
					No news articles found
				</h3>
				<p className='text-gray-500 mt-2'>
					Check back later for updates.
				</p>
			</div>
		);
	}

	const heroPost = posts[0];
	const gridPosts = posts.slice(1);

	return (
		<div className='pb-20 bg-gray-50/50'>
			{/* Hero Section */}
			<section className='container mx-auto px-6 -mt-10 relative z-10 mb-20'>
				<Link
					href={`/news/${heroPost.slug.current}`}
					className='group block relative h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-primary-red/10 border border-gray-100'
				>
					{heroPost.mainImage ? (
						<Image
							src={urlFor(heroPost.mainImage)
								.width(1600)
								.height(1000)
								.url()}
							alt={heroPost.title}
							fill
							className='object-cover transition-transform duration-1000 group-hover:scale-105'
							priority
						/>
					) : (
						<div className='w-full h-full bg-gray-900 flex items-center justify-center'>
							<Icon
								icon='mdi:image-off-outline'
								className='text-white/10 text-8xl'
							/>
						</div>
					)}

					<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-95' />

					<div className='absolute bottom-0 left-0 w-full p-8 md:p-14'>
						<div className='max-w-4xl'>
							<div className='flex items-center gap-3 mb-5'>
								<span className='bg-primary-red text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-primary-red/20'>
									Featured News
								</span>
								<span className='flex items-center gap-1.5 text-gray-300 text-xs md:text-sm font-medium tracking-wide'>
									<Icon
										icon='mdi:clock-outline'
										className='text-primary-red'
									/>
									{new Date(heroPost.publishedAt).toLocaleDateString(
										"en-US",
										{
											month: "long",
											day: "numeric",
											year: "numeric",
										},
									)}
								</span>
							</div>

							<h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-sm'>
								{heroPost.title}
							</h2>

							{heroPost.excerpt && (
								<p className='text-gray-200 text-base md:text-xl line-clamp-2 md:line-clamp-3 max-w-3xl mb-8 leading-relaxed font-light'>
									{heroPost.excerpt}
								</p>
							)}

							<div className='flex items-center justify-between border-t border-white/10 pt-6 mt-auto'>
								{/* Author Info */}
								{heroPost.author && (
									<div className='flex items-center gap-3'>
										{heroPost.author.image ? (
											<div className='relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20'>
												<Image
													src={urlFor(heroPost.author.image)
														.width(100)
														.height(100)
														.url()}
													alt={heroPost.author.name}
													fill
													className='object-cover'
												/>
											</div>
										) : (
											<div className='w-10 h-10 rounded-full bg-primary-red text-white flex items-center justify-center font-bold text-sm ring-2 ring-white/20'>
												{heroPost.author.name.charAt(0)}
											</div>
										)}
										<div className='flex flex-col'>
											<span className='text-white text-sm font-semibold tracking-wide'>
												{heroPost.author.name}
											</span>
											<span className='text-gray-400 text-xs uppercase tracking-wider'>
												Author
											</span>
										</div>
									</div>
								)}

								<span className='flex items-center gap-2 text-white font-semibold text-sm md:text-base group-hover:translate-x-2 transition-transform duration-300'>
									Read Full Story
									<div className='bg-white/10 rounded-full p-1 group-hover:bg-primary-red transition-colors duration-300'>
										<Icon icon='mdi:arrow-right' />
									</div>
								</span>
							</div>
						</div>
					</div>
				</Link>
			</section>

			{/* Grid Section */}
			{gridPosts.length > 0 && (
				<section className='container mx-auto px-6'>
					<div className='flex items-center justify-between mb-12 border-b border-gray-200 pb-4'>
						<h3 className='text-3xl font-bold text-gray-900 flex items-center gap-3 tracking-tight'>
							<Icon
								icon='mdi:newspaper-variant-multiple-outline'
								className='text-primary-red'
							/>
							Recent Stories
						</h3>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
						{gridPosts.map((post) => (
							<Link
								href={`/news/${post.slug.current}`}
								key={post._id}
								className='group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2'
							>
								<div className='relative h-64 w-full overflow-hidden bg-gray-100'>
									{post.mainImage ? (
										<Image
											src={urlFor(post.mainImage)
												.width(800)
												.height(600)
												.url()}
											alt={post.title}
											fill
											className='object-cover transition-transform duration-700 group-hover:scale-110'
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										/>
									) : (
										<div className='w-full h-full flex items-center justify-center bg-gray-50'>
											<Icon
												icon='mdi:image-outline'
												className='text-gray-300 text-5xl'
											/>
										</div>
									)}
									<div className='absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-md transform group-hover:scale-105 transition-transform'>
										News
									</div>
									<div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								</div>

								<div className='p-8 flex flex-col flex-1'>
									<div className='flex items-center gap-2 text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wider'>
										<Icon
											icon='mdi:calendar-blank'
											className='text-primary-red'
											height={16}
										/>
										{new Date(post.publishedAt).toLocaleDateString(
											"en-US",
											{
												month: "short",
												day: "numeric",
												year: "numeric",
											},
										)}
									</div>

									<h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-primary-red transition-colors duration-300'>
										{post.title}
									</h3>

									{post.excerpt && (
										<p className='text-gray-600 text-sm md:text-base line-clamp-3 mb-6 flex-1 leading-relaxed font-light'>
											{post.excerpt}
										</p>
									)}

									<div className='mt-auto pt-6 border-t border-gray-100 flex items-center justify-between'>
										{/* Author Mini */}
										{post.author ? (
											<div className='flex items-center gap-2'>
												{post.author.image ? (
													<div className='relative w-8 h-8 rounded-full overflow-hidden bg-gray-100'>
														<Image
															src={urlFor(post.author.image)
																.width(48)
																.height(48)
																.url()}
															alt={post.author.name}
															fill
															className='object-cover'
														/>
													</div>
												) : (
													<div className='w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-xs font-bold'>
														{post.author.name.charAt(0)}
													</div>
												)}
												<span className='text-xs font-medium text-gray-900 line-clamp-1 max-w-[100px]'>
													{post.author.name}
												</span>
											</div>
										) : (
											<span className='text-xs text-gray-400'>
												By Showcase Africa
											</span>
										)}

										<span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-400 group-hover:bg-primary-red group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-primary-red/30'>
											<Icon
												icon='mdi:arrow-right'
												className='transform group-hover:-rotate-45 transition-transform duration-300'
											/>
										</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</section>
			)}
		</div>
	);
}
