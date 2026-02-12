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
		<article className='min-h-screen bg-gray-50 pb-20'>
			{/* Hero Header */}
			<div className='relative h-[60vh] min-h-[400px] w-full bg-black overflow-hidden'>
				{post.mainImage ? (
					<Image
						src={urlFor(post.mainImage).width(1600).height(900).url()}
						alt={post.title}
						fill
						className='object-cover opacity-60'
						priority
					/>
				) : (
					<div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90' />
				)}
				<div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent' />

				<div className='container mx-auto px-6 h-full flex flex-col justify-end pb-16 relative z-10'>
					<Link
						href='/news'
						className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-medium text-sm uppercase tracking-wide group'
					>
						<span className='group-hover:-translate-x-1 transition-transform'>
							←
						</span>{" "}
						Back to News
					</Link>

					<h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight drop-shadow-lg'>
						{post.title}
					</h1>

					<div className='flex items-center gap-6 text-gray-200 text-sm md:text-base font-medium'>
						<span className='flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10'>
							📅{" "}
							{new Date(post.publishedAt).toLocaleDateString(
								"en-US",
								{
									year: "numeric",
									month: "long",
									day: "numeric",
								},
							)}
						</span>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className='container mx-auto px-6 -mt-10 relative z-20'>
				<div className='bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto border border-gray-100'>
					<div className='prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-red prose-img:rounded-xl prose-img:shadow-md'>
						<PortableText value={post.body} />
					</div>

					<div className='mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6'>
						<div className='flex flex-col'>
							<span className='text-sm text-gray-400 uppercase tracking-widest font-bold mb-1'>
								Published
							</span>
							<span className='text-gray-900 font-medium'>
								{new Date(post.publishedAt).toLocaleDateString(
									"en-US",
									{ dateStyle: "full" },
								)}
							</span>
						</div>

						<Link
							href='/news'
							className='px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-medium transition-colors cursor-pointer'
						>
							View All News
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
