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
		<div className='pb-20'>
			{/* Hero Section */}
			<section className='container mx-auto px-6 -mt-10 relative z-10 mb-16'>
				<Link
					href={`/news/${heroPost.slug.current}`}
					className='group block relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-primary-red/20'
				>
					{heroPost.mainImage ? (
						<Image
							src={urlFor(heroPost.mainImage)
								.width(1200)
								.height(800)
								.url()}
							alt={heroPost.title}
							fill
							className='object-cover transition-transform duration-700 group-hover:scale-105'
							priority
						/>
					) : (
						<div className='w-full h-full bg-gray-800 flex items-center justify-center'>
							<Icon
								icon='mdi:image-off-outline'
								className='text-white/20 text-6xl'
							/>
						</div>
					)}

					<div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90' />

					<div className='absolute bottom-0 left-0 w-full p-6 md:p-12'>
						<div className='max-w-3xl'>
							<span className='inline-block bg-primary-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4'>
								Latest News
							</span>
							<h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight'>
								{heroPost.title}
							</h2>
							{heroPost.excerpt && (
								<p className='text-gray-200 text-base md:text-lg line-clamp-2 md:line-clamp-3 max-w-2xl mb-6'>
									{heroPost.excerpt}
								</p>
							)}

							<div className='flex items-center gap-4 text-white/80 text-sm font-medium'>
								<span className='flex items-center gap-1.5'>
									<Icon icon='mdi:calendar-blank-outline' />
									{new Date(heroPost.publishedAt).toLocaleDateString(
										"en-US",
										{
											month: "long",
											day: "numeric",
											year: "numeric",
										},
									)}
								</span>
								<span className='flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300 text-white'>
									Read Article <Icon icon='mdi:arrow-right' />
								</span>
							</div>
						</div>
					</div>
				</Link>
			</section>

			{/* Grid Section */}
			{gridPosts.length > 0 && (
				<section className='container mx-auto px-6'>
					<div className='flex items-center justify-between mb-8'>
						<h3 className='text-2xl font-bold text-gray-900 flex items-center gap-2'>
							<Icon
								icon='mdi:newspaper-variant-multiple-outline'
								className='text-primary-red'
							/>
							Recent Stories
						</h3>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{gridPosts.map((post) => (
							<Link
								href={`/news/${post.slug.current}`}
								key={post._id}
								className='group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1'
							>
								<div className='relative h-52 w-full overflow-hidden bg-gray-100'>
									{post.mainImage ? (
										<Image
											src={urlFor(post.mainImage)
												.width(600)
												.height(400)
												.url()}
											alt={post.title}
											fill
											className='object-cover transition-transform duration-500 group-hover:scale-110'
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
										/>
									) : (
										<div className='w-full h-full flex items-center justify-center'>
											<Icon
												icon='mdi:image-outline'
												className='text-gray-300 text-4xl'
											/>
										</div>
									)}
									<div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm'>
										News
									</div>
								</div>

								<div className='p-6 flex flex-col flex-1'>
									<div className='flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide'>
										<Icon
											icon='mdi:calendar'
											className='text-primary-red'
											height={14}
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

									<h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-primary-red transition-colors'>
										{post.title}
									</h3>

									{post.excerpt && (
										<p className='text-gray-600 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed'>
											{post.excerpt}
										</p>
									)}

									<div className='mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-medium'>
										<span className='text-primary-red group-hover:underline'>
											Read More
										</span>
										<Icon
											icon='mdi:arrow-right'
											className='text-gray-400 group-hover:translate-x-1 transition-transform group-hover:text-primary-red'
										/>
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
