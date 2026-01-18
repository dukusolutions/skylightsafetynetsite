'use client';

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export function Contact() {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Reset form
		setFormData({ name: '', email: '', phone: '', message: '' });
		alert('Thank you for your message! We will get back to you soon.');
	};

	return (
		<div>
			{/* Hero Section */}
			<section className='relative overflow-hidden bg-black'>
				<div className='absolute inset-0 opacity-40 [background:radial-gradient(80rem_40rem_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]' />
				<div className='absolute inset-0 opacity-30 [background:radial-gradient(50rem_30rem_at_20%_10%,rgba(249,115,22,0.30),transparent_60%)]' />
				<div className='relative mx-auto max-w-6xl px-6 py-16'>
					<p className='text-sm font-semibold tracking-wide text-orange-500'>
						Get in Touch
					</p>
					<h1 className='mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl'>
						Contact Us
					</h1>
					<p className='mt-4 max-w-3xl text-base leading-relaxed text-gray-200'>
						Have questions about our products or services? We'd love to hear
						from you. Reach out to our team and we'll get back to you as soon
						as possible.
					</p>

					<div className='mt-8 flex flex-wrap gap-3'>
						<Link
							href='/'
							className='inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600'
						>
							Back to Home <span className='ml-2'>→</span>
						</Link>
					</div>
				</div>
			</section>

			{/* Contact Content */}
			<section style={{ backgroundColor: '#c0652c' }}>
				<div className='mx-auto max-w-6xl px-6 py-16'>
					<div className='grid gap-12 lg:grid-cols-2'>
						{/* Contact Form */}
						<div className='rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
							<h2 className='text-2xl font-bold text-white'>Send us a Message</h2>
							<p className='mt-2 text-white/80'>
								Fill out the form below and we'll get back to you within 24 hours.
							</p>

							<form onSubmit={handleSubmit} className='mt-6 space-y-4'>
								<div>
									<label className='block text-sm font-semibold text-white'>
										Name
									</label>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='mt-2 w-full rounded-lg border border-orange-600/30 bg-black/30 px-4 py-2 text-white placeholder-white/50 transition focus:border-orange-500 focus:outline-none'
										placeholder='Your name'
									/>
								</div>

								<div>
									<label className='block text-sm font-semibold text-white'>
										Email
									</label>
									<input
										type='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='mt-2 w-full rounded-lg border border-orange-600/30 bg-black/30 px-4 py-2 text-white placeholder-white/50 transition focus:border-orange-500 focus:outline-none'
										placeholder='your@email.com'
									/>
								</div>

								<div>
									<label className='block text-sm font-semibold text-white'>
										Phone (Optional)
									</label>
									<input
										type='tel'
										name='phone'
										value={formData.phone}
										onChange={handleChange}
										className='mt-2 w-full rounded-lg border border-orange-600/30 bg-black/30 px-4 py-2 text-white placeholder-white/50 transition focus:border-orange-500 focus:outline-none'
										placeholder='(555) 000-0000'
									/>
								</div>

								<div>
									<label className='block text-sm font-semibold text-white'>
										Message
									</label>
									<textarea
										name='message'
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className='mt-2 w-full rounded-lg border border-orange-600/30 bg-black/30 px-4 py-2 text-white placeholder-white/50 transition focus:border-orange-500 focus:outline-none'
										placeholder='Tell us how we can help...'
									/>
								</div>

								<button
									type='submit'
									className='w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600'
								>
									Send Message
								</button>
							</form>
						</div>

						{/* Contact Details */}
						<div className='space-y-6'>
							{/* Phone */}
							<div className='rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
								<div className='flex items-start gap-4'>
									<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20'>
										<FaPhone className='text-orange-500' size={24} />
									</div>
									<div>
										<h3 className='text-lg font-bold text-white'>Phone</h3>
										<p className='mt-2 text-white/80'>
											Call us directly for immediate assistance.
										</p>
										<a
											href='tel:+1234567890'
											className='mt-3 inline-block text-orange-400 hover:text-orange-300 transition'
										>
											(123) 456-7890
										</a>
									</div>
								</div>
							</div>

							{/* Email */}
							<div className='rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
								<div className='flex items-start gap-4'>
									<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20'>
										<FaEnvelope className='text-orange-500' size={24} />
									</div>
									<div>
										<h3 className='text-lg font-bold text-white'>Email</h3>
										<p className='mt-2 text-white/80'>
											Email us with your inquiry and we'll respond promptly.
										</p>
										<a
											href='mailto:info@skylightsafety.net'
											className='mt-3 inline-block text-orange-400 hover:text-orange-300 transition'
										>
											info@skylightsafety.net
										</a>
									</div>
								</div>
							</div>

							{/* Address */}
							<div className='rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
								<div className='flex items-start gap-4'>
									<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20'>
										<FaMapMarkerAlt className='text-orange-500' size={24} />
									</div>
									<div>
										<h3 className='text-lg font-bold text-white'>Address</h3>
										<p className='mt-2 text-white/80'>
											123 Safety Street
											<br />
											Denver, CO 80202
											<br />
											United States
										</p>
									</div>
								</div>
							</div>

							{/* Hours */}
							<div className='rounded-3xl border border-orange-600/30 bg-[#3D2C28] p-8 shadow-sm'>
								<div className='flex items-start gap-4'>
									<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20'>
										<FaClock className='text-orange-500' size={24} />
									</div>
									<div>
										<h3 className='text-lg font-bold text-white'>
											Business Hours
										</h3>
										<div className='mt-2 space-y-1 text-white/80'>
											<div>Monday - Friday: 8:00 AM - 6:00 PM</div>
											<div>Saturday: 9:00 AM - 4:00 PM</div>
											<div>Sunday: Closed</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-black'>
				<div className='mx-auto max-w-6xl px-6 py-16'>
					<div className='rounded-3xl border border-white/10 bg-white/5 p-8'>
						<h2 className='text-2xl font-extrabold tracking-tight text-white sm:text-3xl'>
							Still have questions?
						</h2>
						<p className='mt-3 max-w-3xl text-sm leading-relaxed text-gray-200'>
							Check out our FAQs or reach out to our team directly. We're here
							to help!
						</p>

						<div className='mt-6 flex flex-wrap gap-3'>
							<Link
								href='/#faq'
								className='inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600'
							>
								View FAQs <span className='ml-2'>→</span>
							</Link>
							<Link
								href='/'
								className='inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
							>
								Back to Home
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
