import { getNewsPost, urlFor } from "@/utils/news";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	const { slug } = await params;
	const post = await getNewsPost(slug);
	if (!post) return { title: "Not Found" };

	return {
		title: `${post.title} - Newsroom`,
		description:
			post.excerpt || `Read the latest news: ${post.title}`,
		openGraph: {
			images: post.mainImage
				? [urlFor(post.mainImage).width(1200).height(630).url()]
				: [],
		},
	};
}

// Client component wrapper for Icons if needed, but next.js handles importing client components into server components fine.
// Actually, Iconify's Icon IS a client component.
// However, to be safe and avoid hydration warnings if it's not fully compatible,
// usually it's fine.
// BUT: Standard import from "@iconify/react" is preferred if config allows.
// I'll stick to the project's pattern: "@iconify/react/dist/iconify.js" but I will create a Client wrapper if I encounter issues.
// For now, direct usage.

export default async function NewsPostPage({ params }: Props) {
	const { slug } = await params;
	const post = await getNewsPost(slug);

	if (!post) {
		notFound();
	}

	return (
		<article className='min-h-screen bg-gray-50/50 pb-20'>
			{/* Hero Header */}
			<div className='relative h-[60vh] min-h-[500px] w-full bg-black overflow-hidden'>
				{post.mainImage ? (
					<Image
						src={urlFor(post.mainImage).width(1600).height(900).url()}
						alt={post.title}
						fill
						className='object-cover opacity-70'
						priority
					/>
				) : (
					<div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90' />
				)}
				<div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent' />

				<div className='container mx-auto px-6 h-full flex flex-col justify-end pb-16 relative z-10'>
					<Link
						href='/news'
						className='inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors font-medium text-sm uppercase tracking-widest group w-fit'
					>
						<span className='bg-white/10 p-1.5 rounded-full group-hover:bg-primary-red transition-colors duration-300'>
							<Icon icon='mdi:arrow-left' />
						</span>
						Back to News
					</Link>

					<div className='max-w-4xl'>
						<h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg tracking-tight'>
							{post.title}
						</h1>

						<div className='flex flex-wrap items-center gap-6 md:gap-8 text-white/90'>
							{/* Author */}
							{post.author ? (
								<div className='flex items-center gap-3 pr-6 border-r border-white/20'>
									{post.author.image ? (
										<div className='relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/30'>
											<Image
												src={urlFor(post.author.image)
													.width(100)
													.height(100)
													.url()}
												alt={post.author.name}
												fill
												className='object-cover'
											/>
										</div>
									) : (
										<div className='w-12 h-12 rounded-full bg-primary-red flex items-center justify-center text-sm font-bold ring-2 ring-white/30'>
											{post.author.name.charAt(0)}
										</div>
									)}
									<div>
										<div className='text-xs text-white/60 uppercase tracking-wider font-semibold'>
											Written by
										</div>
										<div className='font-semibold text-lg'>
											{post.author.name}
										</div>
									</div>
								</div>
							) : null}

							<div className='flex items-center gap-3'>
								<div className='bg-white/10 p-2 rounded-full backdrop-blur-sm'>
									<Icon
										icon='mdi:calendar-blank-outline'
										className='text-xl'
									/>
								</div>
								<div>
									<div className='text-xs text-white/60 uppercase tracking-wider font-semibold'>
										Published
									</div>
									<div className='font-semibold text-lg'>
										{new Date(post.publishedAt).toLocaleDateString(
											"en-US",
											{
												year: "numeric",
												month: "long",
												day: "numeric",
											},
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className='container mx-auto px-6 -mt-20 relative z-20'>
				<div className='bg-white rounded-3xl shadow-xl p-8 md:p-14 lg:p-20 max-w-4xl mx-auto border border-gray-100'>
					<div className='prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-loose prose-a:text-primary-red prose-img:rounded-2xl prose-img:shadow-lg prose-blockquote:border-l-primary-red prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:rounded-r-lg'>
						<PortableText value={post.body} />
					</div>

					{/* Post Footer / Share / Tags could go here */}
					<div className='mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6'>
						<div className='flex flex-col'>
							<span className='text-xs text-gray-400 uppercase tracking-widest font-bold mb-2'>
								Share this story
							</span>
							<div className='flex gap-4'>
								{[
									"mdi:twitter",
									"mdi:linkedin",
									"mdi:facebook",
									"mdi:whatsapp",
								].map((icon) => (
									<button
										key={icon}
										className='p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-600 hover:text-primary-red transition-colors'
									>
										<Icon icon={icon} className='text-xl' />
									</button>
								))}
							</div>
						</div>

						<Link
							href='/news'
							className='group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-black text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1'
						>
							View All News
							<Icon
								icon='mdi:arrow-right'
								className='group-hover:translate-x-1 transition-transform'
							/>
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
