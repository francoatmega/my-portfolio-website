import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "About", href: "/about" },
	{ name: "Blog", href: "/blog" },
	// { name: "Presentations", href: "/presentations" },
	{ name: "CV", href: "/cv" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16">
				<ul className="flex flex-wrap items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={500}
			/>
			<h1 className="z-10 text-xl text-transparent bg-white cursor-default text-edge-outline font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
				Jardel Matias
			</h1>
			
			<div className="w-1/3 h-px mt-4 block block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<h1 className="z-10 text-3xl p-5 text-transparent bg-white cursor-default text-edge-outline font-display sm:text-3xl md:text-7xl whitespace-nowrap bg-clip-text ">
				Software Engineer
			</h1>

			<div className="my-16 text-center">
				<h2 className="text-sm text-zinc-500 mx-6">
					I'm a backend software engineer passionate about infosec.
				</h2>
			</div>
		</div>
	);
}
