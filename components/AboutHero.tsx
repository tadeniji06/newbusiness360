import Link from "next/link";

const AboutHero = () => {
	return (
		<section className='relative py-24 px-6 lg:px-12 bg-primary-red text-white overflow-hidden'>
			{/* Decorative gradient overlay */}
			<div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none' />

			<div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10'>
				{/* TEXT */}
				<div className='flex-1 text-center lg:text-left'>
					<h1 className='text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8 tracking-tight'>
						Shaping the Narrative of <br />
						<span className='text-blue-200'>Global Business</span> &
						Innovation
					</h1>

					<p className='text-blue-100 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto lg:mx-0 font-light'>
						Connecting the dots between Tech, Finance, and the Future
						of Work. See who is winning the global tech race.
					</p>

					<Link
						// target='_blank'
						// href='https://www.instagram.com/showcaseafrica_?igsh=MWZ1N2QzZzU5Z3JiNQ=='
						href={"/contact"}
					>
						<button className='mt-10 bg-white text-primary-red px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto lg:mx-0'>
							Connect With Us
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};
export default AboutHero;
