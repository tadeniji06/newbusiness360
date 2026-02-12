"use client";

import { logo } from "@/assets";
import { headerLinks } from "@/utils/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const headerRef = useRef<HTMLElement>(null);

	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	// Click-outside -> close menus
	useEffect(() => {
		function handleDocClick(e: MouseEvent | TouchEvent) {
			if (!headerRef.current) return;
			if (
				e.target instanceof Node &&
				!headerRef.current.contains(e.target)
			) {
				setIsMobileMenuOpen(false);
			}
		}

		function handleKey(e: KeyboardEvent) {
			if (e.key === "Escape") {
				setIsMobileMenuOpen(false);
			}
		}

		document.addEventListener("mousedown", handleDocClick);
		document.addEventListener("touchstart", handleDocClick);
		document.addEventListener("keydown", handleKey);
		return () => {
			document.removeEventListener("mousedown", handleDocClick);
			document.removeEventListener("touchstart", handleDocClick);
			document.removeEventListener("keydown", handleKey);
		};
	}, []);

	// If user resizes to desktop, ensure mobile menu is closed
	useEffect(() => {
		function onResize() {
			if (window.innerWidth >= 1024) {
				setIsMobileMenuOpen(false);
			}
		}
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return (
		<header
			ref={headerRef}
			className='sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md'
		>
			<div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
				<nav className='flex items-center justify-between md:h-[100px] h-20'>
					{/* Logo/Brand */}
					<Link href={"/"}>
						<Image
							className='md:h-[80px] md:w-[180px] h-[60px] w-[140px] object-contain'
							width={180}
							height={80}
							alt='Business360 Logo'
							src={logo}
						/>
					</Link>

					{/* Desktop Navigation */}
					<ul className='hidden xl:flex items-center space-x-6'>
						{headerLinks.map((link) => (
							<li key={link.title}>
								<Link
									href={link.link}
									className='text-gray-900 hover:text-primary-red font-semibold transition-colors duration-200 text-sm uppercase tracking-wide'
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>

					{/* Desktop Action Buttons */}
					<div className='hidden md:flex items-center gap-4'>
						<button
							className='p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200'
							aria-label='Search'
						>
							<Icon
								icon={"ic:baseline-search"}
								className='text-gray-900 text-2xl'
							/>
						</button>
						<Link href='https://www.instagram.com/' target='_blank'>
							<Icon
								icon={"mdi:instagram"}
								className='text-gray-900 text-2xl hover:text-primary-red transition-colors'
							/>
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						onClick={toggleMobileMenu}
						className='xl:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors duration-200'
						aria-expanded={isMobileMenuOpen}
						aria-label='Toggle navigation menu'
						type='button'
					>
						<Icon
							icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"}
							className='h-7 w-7 text-gray-900'
						/>
					</button>
				</nav>

				{/* Mobile Navigation Menu */}
				<div
					className={`xl:hidden fixed inset-x-0 top-[80px] md:top-[100px] bottom-0 bg-white transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${
						isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className='flex flex-col p-6 space-y-4 h-full'>
						{headerLinks.map((link) => (
							<Link
								key={link.title}
								href={link.link}
								onClick={closeMobileMenu}
								className='text-lg font-bold text-gray-900 hover:text-primary-red py-2 border-b border-gray-100'
							>
								{link.title}
							</Link>
						))}

						<div className='mt-auto flex flex-col gap-4'>
							<button className='flex items-center justify-center gap-2 bg-gray-100 text-gray-900 rounded-lg px-4 py-3 hover:bg-gray-200 transition-colors w-full'>
								<Icon
									icon={"ic:baseline-search"}
									className='text-xl'
								/>
								<span className='font-medium'>Search</span>
							</button>
							<Link
								href={"/contact"}
								onClick={closeMobileMenu}
								className='flex items-center justify-center gap-2 bg-primary-red text-white rounded-lg px-4 py-3 hover:bg-red-700 transition-colors w-full font-bold'
							>
								Get In Touch
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
