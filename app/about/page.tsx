"use client";

import Image from "next/image";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";

export default function about() {
	return (
		<div className="h-screen w-1/2 mx-auto flex flex-col items-center justify-center">
			<div className="flex w-64 inline-block">
				<Image
					src="/author.jpg"
					width={500}
					height={500}
					alt="Picture of the author"
					className="rounded-full"
				/>
			</div>
			<div className="my-16">
				<h2 className="text-xl text-justify text-zinc-500 mx-6 text-gray-500">
				I'm an experienced backend software engineer with a passion for infosec. 
				My career took off in 2017, and I've had the opportunity to collaborate with numerous companies on a wide range of projects. 
				These have encompassed everything from rewriting legacy monolithic applications to fintech products. 
				I'm a dark theme lover, and my latest pastime involves devouring as many books as I can. 
				<br/><br/>
				As someone wise once imparted, I offer this guidance: <span className="text-white">"Stay hungry, stay foolish!"</span>
				</h2>
			</div>
			<div>
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={500}
			/>
			<Navigation />
			</div>
		</div>
	  )
}
