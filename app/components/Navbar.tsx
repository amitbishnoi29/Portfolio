"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`paddingX
			w-full flex items-center py-1 fixed top-0 z-20 shadow ${scrolled ? "backdrop-blur-xl shadow-md" : "bg-transparent"
				}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<Link href="https://github.com/omunite215">
						<Image
							src="/logo.png"
							width={80}
							height={80}
							alt="logo"
							priority
							className="object-contain"
						/>
					</Link>
					<p className="text-primary font-bold cursor-pointer flex">
						Amit &nbsp; <span className="sm:block hidden ">| amitbishnoi29</span>
					</p>
				</div>

				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((nav) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<li
							key={nav.id}
							className={`${active === nav.title ? "text-primary" : "text-secondary"
								} hover:text-primary  font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<Link href={`#${nav.id}`}>{nav.title}</Link>
						</li>
					))}
				</ul>
				<div className="mt-2 lg:block hidden">
					<ResumeButton />
				</div>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					{/* <CloseIcon /> */}
					<Image
						src={toggle ? "/close.svg" : "/menu.svg"}
						width={28}
						height={28}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${!toggle ? "hidden" : "flex"
							} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
										}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<Link href={`#${nav.id}`}>{nav.title}</Link>
								</li>
							))}
							<li>
								<div className="mt-2">
									<ResumeButton />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

const CloseIcon = () => (
	<svg width="20" height="12" viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2L19 2C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.480429 19.7071 0.292892C19.5196 0.105356 19.2652 0 19 0L9 0C8.73478 0 8.48043 0.105356 8.29289 0.292892C8.10536 0.480429 8 0.734784 8 1C8 1.26522 8.10536 1.51957 8.29289 1.70711C8.48043 1.89464 8.73478 2 9 2ZM19 10L1 10C0.734784 10 0.480429 10.1054 0.292892 10.2929C0.105356 10.4804 0 10.7348 0 11C0 11.2652 0.105356 11.5196 0.292892 11.7071C0.480429 11.8946 0.734784 12 1 12L19 12C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10V10ZM1 7L19 7C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5L1 5C0.734784 5 0.480429 5.10536 0.292892 5.29289C0.105356 5.48043 0 5.73478 0 6C0 6.26522 0.105356 6.51957 0.292892 6.70711C0.480429 6.89464 0.734784 7 1 7Z" />
</svg>

)

export default Navbar;
