import { headerLinks, categories, regions } from "@/utils/data";
import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className='bg-primary-red text-white border-t border-blue-900'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12'>
					{/* Brand Section */}
					<div className='md:col-span-2 lg:col-span-1 space-y-6'>
						<Link href='/' className='inline-block'>
							<Image
								src={logo}
								alt='Business360 Logo'
								width={160}
								height={55}
								className='h-auto brightness-0 invert'
							/>
						</Link>
						<p className='text-blue-100 text-sm leading-relaxed max-w-sm font-light'>
							Bringing you authentic voices, compelling narratives,
							and insightful analysis from the world of business and
							innovation.
						</p>
					</div>

					{/* Company Links */}
					<div className='space-y-6'>
						<h3 className='font-bold text-lg text-white'>Company</h3>
						<nav className='space-y-4'>
							{headerLinks.map((link) => (
								<Link
									key={link.title}
									href={link.link}
									className='block text-blue-100 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1'
								>
									{link.title}
								</Link>
							))}
						</nav>
					</div>

					{/* Sections */}
					<div className='space-y-6'>
						<h3 className='font-bold text-lg text-white'>Sections</h3>
						<nav className='space-y-4'>
							{categories.map((category) => (
								<Link
									key={category.title}
									href={category.link}
									className='block text-blue-100 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1'
								>
									{category.title}
								</Link>
							))}
						</nav>
					</div>

					{/* Regions */}
					<div className='space-y-6'>
						<h3 className='font-bold text-lg text-white'>Markets</h3>
						<div className='space-y-4'>
							{regions.map((region) => (
								<p
									key={region.title}
									className='text-blue-100 text-sm cursor-default'
								>
									{region.title}
								</p>
							))}
						</div>
					</div>
				</footer>
			</div>

			{/* Bottom Bar */}
			<div className='border-t border-blue-800/50 bg-black/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					<div className='flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200'>
						<p>
							© {new Date().getFullYear()} Business360. All rights
							reserved.
						</p>
						<p>
							Developed by{" "}
							<Link
								href='https://tech360online.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-white hover:underline font-medium transition-colors duration-200'
							>
								Btech360
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
