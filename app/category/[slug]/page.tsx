import { getPostsByCategory, urlFor } from "@/utils/sanity";
import { businessVerticals } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

type Props = {
	params: Promise<{ slug: string }>;
};

// Generate metadata dynamically
export async function generateMetadata({
	params,
}: Props): Promise<Metadata> {
	const { slug } = await params;
	const category = businessVerticals.find((c) => c.slug === slug);

	if (!category) return { title: "Category Not Found" };

	return {
		title: `${category.title} - Business360`,
		description: category.description,
	};
}

export default async function CategoryPage({ params }: Props) {
	const { slug } = await params;

	// 1. Find the category configuration from our static data
	const category = businessVerticals.find((c) => c.slug === slug);

	if (!category) {
		return (
			<div className='min-h-[60vh] flex flex-col items-center justify-center p-6 text-center'>
				<Icon
					icon='mdi:alert-circle-outline'
					className='text-6xl text-gray-300 mb-4'
				/>
				<h1 className='text-2xl font-bold text-gray-900'>
					Category Not Found
				</h1>
				<p className='text-gray-500 mt-2'>
					The requested category could not be located.
				</p>
				<Link
					href='/'
					className='mt-6 px-6 py-2 bg-black text-white rounded-full'
				>
					Go Home
				</Link>
			</div>
		);
	}

	// 2. Fetch posts from Sanity using the cmsTitle (which matches the backend title)
	const posts = await getPostsByCategory(category.cmsTitle);

	return (
		<main className='min-h-screen bg-gray-50'>
			{/* Hero Section with Dynamic Gradient */}
			<div
				className={`relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br ${category.gradient}`}
			>
				<div className='absolute inset-0 bg-black/20' />
				<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

				<div className='container mx-auto px-6 relative z-10 text-center'>
					<div className='inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md mb-6 shadow-lg border border-white/20'>
						<Icon
							icon={category.icon}
							className='text-4xl text-white'
						/>
					</div>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-sm'>
						{category.title}
					</h1>
					<p className='text-gray-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light'>
						{category.description}
					</p>
				</div>
			</div>

			{/* Content Grid */}
			<div className='container mx-auto px-6 py-16'>
				{posts.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{posts.map((post) => (
							<Link
								href={`/posts/${post.slug.current}`}
								key={post._id}
								className='group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100'
							>
								<div className='relative h-56 overflow-hidden bg-gray-200'>
									{post.mainImage ? (
										<Image
											src={urlFor(post.mainImage)
												.width(600)
												.height(400)
												.url()}
											alt={post.title}
											fill
											className='object-cover group-hover:scale-105 transition-transform duration-500'
										/>
									) : (
										<div className='w-full h-full flex items-center justify-center text-gray-400'>
											<Icon icon={category.icon} width={48} />
										</div>
									)}
									<div
										className={`absolute top-4 left-4 ${category.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm`}
									>
										{category.title}
									</div>
								</div>

								<div className='p-6 flex-1 flex flex-col'>
									<div className='flex items-center gap-2 text-xs text-gray-500 font-medium mb-3'>
										<Icon
											icon='mdi:calendar-blank-outline'
											className={category.textColor}
										/>
										{new Date(post.publishedAt).toLocaleDateString(
											"en-US",
											{
												year: "numeric",
												month: "long",
												day: "numeric",
											},
										)}
									</div>

									<h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-red transition-colors line-clamp-2'>
										{post.title}
									</h3>

									{post.estimatedReadingTime > 0 && (
										<div className='mt-auto pt-4 border-t border-gray-50 text-xs font-medium text-gray-400 flex items-center gap-1'>
											<Icon icon='mdi:clock-outline' />{" "}
											{post.estimatedReadingTime} min read
										</div>
									)}
								</div>
							</Link>
						))}
					</div>
				) : (
					<div className='text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100'>
						<div className='bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6'>
							<Icon
								icon='mdi:file-document-outline'
								className='text-3xl text-gray-400'
							/>
						</div>
						<h3 className='text-xl font-bold text-gray-900 mb-2'>
							No articles found yet
						</h3>
						<p className='text-gray-500 max-w-md mx-auto'>
							We haven't published any stories in{" "}
							<strong>{category.title}</strong> yet. Check back soon
							for cutting-edge insights.
						</p>
						<Link
							href='/'
							className='mt-8 inline-block text-primary-red font-semibold hover:underline'
						>
							Return to Homepage
						</Link>
					</div>
				)}
			</div>
		</main>
	);
}
