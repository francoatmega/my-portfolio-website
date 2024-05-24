"use client";
import Image from "next";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function talks() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
						<Card>
							<div
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-7 md:py-22  lg:pb-44  md:p-14"
							>
								<Image></Image>
							</div>
						</Card>
				</div>
			</div>
		</div>
	);
}
