"use client";

import { useState } from "react";

interface Props {
	onComplete: () => void;
	onClose: () => void;
}

const NewsLetterSub = ({ onComplete, onClose }: Props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [phone, setPhone] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const submitForm = async () => {
		if (!email.trim())
			return setError("Please enter your email address");

		try {
			setLoading(true);
			setError("");

			const res = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, country, phone }),
			});

			if (!res.ok) throw new Error("Failed to submit");

			onComplete();
			onClose();
		} catch (err) {
			setError("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !loading) {
			submitForm();
		}
	};

	return (
		<div className='fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 z-50'>
			{/* MODAL BOX */}
			<div className='relative z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 p-8 rounded-2xl w-full max-w-md shadow-2xl space-y-5 animate-fadeIn'>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-gray-400 hover:text-white transition-colors'
					aria-label='Close modal'
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>

				{/* Header */}
				<div className='space-y-2'>
					<h3 className='text-3xl font-bold text-white'>
						Get Instant Access
					</h3>
					<p className='text-gray-400 text-sm'>
						Enter your details below to download the report and stay
						updated with our latest insights.
					</p>
				</div>

				{/* Form */}
				<div className='space-y-4' onKeyPress={handleKeyPress}>
					<div>
						<label className='block text-gray-300 text-sm font-medium mb-2'>
							Full Name
						</label>
						<input
							type='text'
							className='w-full bg-white/5 border border-white/10 text-white p-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
							placeholder='John Doe'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-gray-300 text-sm font-medium mb-2'>
							Email Address <span className='text-blue-400'>*</span>
						</label>
						<input
							type='email'
							className='w-full bg-white/5 border border-white/10 text-white p-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
							placeholder='john@example.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						<div>
							<label className='block text-gray-300 text-sm font-medium mb-2'>
								Country
							</label>
							<input
								type='text'
								className='w-full bg-white/5 border border-white/10 text-white p-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
								placeholder='Nigeria'
								value={country}
								onChange={(e) => setCountry(e.target.value)}
							/>
						</div>

						<div>
							<label className='block text-gray-300 text-sm font-medium mb-2'>
								Phone
							</label>
							<input
								type='tel'
								className='w-full bg-white/5 border border-white/10 text-white p-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
								placeholder='+234...'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
					</div>
				</div>

				{/* Error Message */}
				{error && (
					<div className='bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm p-3 rounded-lg flex items-center gap-2'>
						<svg
							className='w-5 h-5 flex-shrink-0'
							fill='currentColor'
							viewBox='0 0 20 20'
						>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
								clipRule='evenodd'
								// strokeLinecap='round'
								// strokeLinejoin='round'
							/>
						</svg>
						{error}
					</div>
				)}

				{/* Buttons */}
				<div className='space-y-3 pt-2'>
					<button
						onClick={submitForm}
						disabled={loading}
						className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
					>
						{loading ? (
							<>
								<svg
									className='animate-spin h-5 w-5'
									viewBox='0 0 24 24'
								>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'
										fill='none'
									/>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
									/>
								</svg>
								Processing...
							</>
						) : (
							<>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
									/>
								</svg>
								Download Report
							</>
						)}
					</button>

					<button
						onClick={onClose}
						className='w-full text-gray-400 text-sm py-2 hover:text-white transition-colors'
					>
						Maybe later
					</button>
				</div>

				{/* Privacy Note */}
				<p className='text-gray-500 text-xs text-center pt-2'>
					We respect your privacy. Your information will never be
					shared.
				</p>
			</div>

			{/* Animation */}
			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(30px) scale(0.95);
					}
					to {
						opacity: 1;
						transform: translateY(0) scale(1);
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)
						forwards;
				}
			`}</style>
		</div>
	);
};

export default NewsLetterSub;
