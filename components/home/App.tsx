import React from "react";
import BusinessVerticals from "@/components/home/BusinessVerticals";

const App: React.FC = () => {
	return (
		<div className='min-h-screen bg-white'>
			{/* HEADER */}
			<div className='bg-black text-white py-24 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-80' />
				<div className='max-w-6xl mx-auto px-6 text-center relative z-10'>
					<h1 className='text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight'>
						Business 360
					</h1>
					<p className='text-gray-300 text-xl max-w-2xl mx-auto font-light leading-relaxed'>
						Insights, analysis, data and stories powering the global
						tech, business and innovation future.
					</p>
				</div>
			</div>

			{/* BUSINESS VERTICALS BREAKDOWN */}
			<div className='pb-10 pt-4 bg-gray-50'>
				<BusinessVerticals />
			</div>
		</div>
	);
};

export default App;
