import { Icon } from "@iconify/react/dist/iconify.js";
import { pod } from "@/assets";
import Image from "next/image";

const OurStory = () => {
	return (
		<section className='py-24 bg-white'>
			<div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
				{/* TEXT */}
				<div>
					<div className='flex items-center gap-4 mb-8'>
						<div className='w-14 h-14 rounded-2xl bg-primary-red flex items-center justify-center shadow-lg shadow-blue-900/20'>
							<Icon
								icon='lucide:book-open'
								className='text-white w-7 h-7'
							/>
						</div>
						<h2 className='text-4xl md:text-5xl font-bold text-gray-900 tracking-tight'>
							Our Story
						</h2>
					</div>

					<div className='text-gray-800 text-lg leading-relaxed space-y-5'>
						<p>
							We’re not just a media production team — we’re{" "}
							<strong>storytellers</strong>. From concept to final
							cut, we transform your vision into powerful visuals that
							captivate and connect.
						</p>

						<p>
							Whether it’s video, photography, audio, or motion
							graphics, we craft content that makes your brand
							unforgettable.
						</p>

						<ul className='space-y-3 mt-4'>
							<li>
								<strong>Creative Direction:</strong> Bold ideas that
								bring your story to life.
							</li>
							<li>
								<strong>High-End Production:</strong> Cinematic
								visuals, crisp audio, flawless edits.
							</li>
							<li>
								<strong>End-to-End Process:</strong> From
								brainstorming to delivery, we handle it all.
							</li>
						</ul>
					</div>
				</div>

				{/* IMAGE */}
				<div className='flex justify-center'>
					<Image
						src={pod}
						alt='Podcast illustration'
						className='rounded-2xl shadow-lg w-full max-w-lg object-cover'
					/>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
