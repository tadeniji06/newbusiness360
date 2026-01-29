"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate network request
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setIsSubmitting(false);
		setSubmitted(true);
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		});
		setTimeout(() => setSubmitted(false), 5000);
	};

	const contactInfo = [
		{
			title: "Email Us",
			value: "hello@business360.com",
			icon: "lucide:mail",
			link: "mailto:hello@business360.com",
		},
		{
			title: "Call Us",
			value: "+1 (555) 123-4567",
			icon: "lucide:phone",
			link: "tel:+15551234567",
		},
		{
			title: "Visit Us",
			value: "123 Business Avenue, Suite 100, Tech City, TC 90210",
			icon: "lucide:map-pin",
			link: "#",
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 font-sans'>
			{/* Hero Section */}
			<section className='relative bg-primary-red text-white py-24 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent' />
				<div className='absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl' />
				<div className='absolute -top-24 -left-24 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl' />

				<div className='container mx-auto px-6 relative z-10 text-center'>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
					>
						Get in Touch
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='text-lg md:text-xl text-blue-100 max-w-2xl mx-auto'
					>
						Have questions or want to partner with us? We'd love to
						hear from you. Reach out to our team today.
					</motion.p>
				</div>
			</section>

			{/* Content Section */}
			<section className='py-16 md:py-24 -mt-10'>
				<div className='container mx-auto px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
						{/* Contact Info Cards */}
						<div className='lg:col-span-4 space-y-6'>
							{contactInfo.map((info, index) => (
								<motion.a
									key={index}
									href={info.link}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{
										duration: 0.5,
										delay: 0.3 + index * 0.1,
									}}
									className='flex items-start p-6 bg-white rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group'
								>
									<div className='p-4 bg-blue-50 text-primary-red rounded-xl group-hover:bg-primary-red group-hover:text-white transition-colors duration-300'>
										<Icon icon={info.icon} className='w-6 h-6' />
									</div>
									<div className='ml-5'>
										<h3 className='text-lg font-bold text-gray-900 group-hover:text-primary-red transition-colors duration-300'>
											{info.title}
										</h3>
										<p className='text-gray-600 mt-1 text-sm leading-relaxed'>
											{info.value}
										</p>
									</div>
								</motion.a>
							))}

							{/* Social Media Links */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className='p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white shadow-xl mt-8'
							>
								<h3 className='text-xl font-bold mb-4'>
									Connect With Us
								</h3>
								<p className='text-gray-400 text-sm mb-6'>
									Follow our journey on social media for the latest
									updates and insights.
								</p>
								<div className='flex gap-4'>
									{[
										"twitter",
										"linkedin",
										"instagram",
										"facebook",
									].map((platform, i) => (
										<a
											key={platform}
											href='#'
											className='p-3 bg-white/10 rounded-full hover:bg-primary-red hover:text-white transition-all duration-300'
										>
											<Icon
												icon={`lucide:${platform}`}
												className='w-5 h-5'
											/>
										</a>
									))}
								</div>
							</motion.div>
						</div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className='lg:col-span-8 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 p-8 md:p-12 overflow-hidden relative'
						>
							<div className='absolute top-0 right-0 w-64 h-64 bg-primary-red/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none' />

							<div className='relative z-10'>
								<h2 className='text-3xl font-bold text-gray-900 mb-2'>
									Send us a Message
								</h2>
								<p className='text-gray-500 mb-8'>
									Fill out the form below and we'll get back to you as
									soon as possible.
								</p>

								<form onSubmit={handleSubmit} className='space-y-6'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
										<div className='space-y-2'>
											<label
												htmlFor='firstName'
												className='text-sm font-medium text-gray-700 ml-1'
											>
												First Name
											</label>
											<input
												type='text'
												id='firstName'
												name='firstName'
												value={formData.firstName}
												onChange={handleChange}
												className='w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300'
												placeholder='John'
												required
											/>
										</div>
										<div className='space-y-2'>
											<label
												htmlFor='lastName'
												className='text-sm font-medium text-gray-700 ml-1'
											>
												Last Name
											</label>
											<input
												type='text'
												id='lastName'
												name='lastName'
												value={formData.lastName}
												onChange={handleChange}
												className='w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300'
												placeholder='Doe'
												required
											/>
										</div>
									</div>

									<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
										<div className='space-y-2'>
											<label
												htmlFor='email'
												className='text-sm font-medium text-gray-700 ml-1'
											>
												Email Address
											</label>
											<input
												type='email'
												id='email'
												name='email'
												value={formData.email}
												onChange={handleChange}
												className='w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300'
												placeholder='john@example.com'
												required
											/>
										</div>
										<div className='space-y-2'>
											<label
												htmlFor='subject'
												className='text-sm font-medium text-gray-700 ml-1'
											>
												Subject
											</label>
											<input
												type='text'
												id='subject'
												name='subject'
												value={formData.subject}
												onChange={handleChange}
												className='w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300'
												placeholder='Inquiry about...'
												required
											/>
										</div>
									</div>

									<div className='space-y-2'>
										<label
											htmlFor='message'
											className='text-sm font-medium text-gray-700 ml-1'
										>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											value={formData.message}
											onChange={handleChange}
											rows={5}
											className='w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-red focus:ring-2 focus:ring-primary-red/20 outline-none transition-all duration-300 resize-none'
											placeholder='How can we help you today?'
											required
										/>
									</div>

									<div className='pt-2'>
										<button
											type='submit'
											disabled={isSubmitting}
											className={`w-full md:w-auto px-8 py-4 bg-primary-red text-white font-bold rounded-xl shadow-lg shadow-primary-red/30 hover:shadow-xl hover:shadow-primary-red/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 ${
												isSubmitting ? "opacity-75 cursor-wait" : ""
											}`}
										>
											{isSubmitting ? (
												<>
													<Icon
														icon='lucide:loader-2'
														className='w-5 h-5 animate-spin'
													/>
													Sending...
												</>
											) : submitted ? (
												<>
													<Icon
														icon='lucide:check-circle'
														className='w-5 h-5'
													/>
													Message Sent!
												</>
											) : (
												<>
													<Icon
														icon='lucide:send'
														className='w-5 h-5'
													/>
													Send Message
												</>
											)}
										</button>
									</div>
								</form>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
