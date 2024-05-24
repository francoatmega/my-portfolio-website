"use client";
import Image from "next/image";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

export default function talks() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:grid-cols-3 lg:gap-12">
						<Card>
							<Image
								src="/images/bsides-sp-19.png"
								alt="Picture of the author"
								height={200}
								width={300}
								className="w-full"
							/>
							<div className="flex flex-col gap-4 duration-700 p-4">
								<h3 className="text-white text-4xl mt-2">Bsidessp19</h3>
								<p className="text-neutral-400">Eu fui frescar nessa palestra</p>
								<div className="gap-8 flex">
									<Link
										href="/link"
										className="duration-200 text-blue-500 hover:text-blue-600"
									>
										Link da palestra
									</Link>
									<Link
										href="/link"
										className="duration-200 text-blue-500 hover:text-blue-600"
									>
										Link da video
									</Link>
								</div>
							</div>
						</Card>
						<Card>
							<Image
								src="/images/bsides-sp-19.png"
								alt="Picture of the author"
								height={200}
								width={300}
								className="w-full"
							/>
							<div className="flex flex-col gap-4 duration-700 p-4">
								<h3 className="text-white text-4xl mt-2">Bsidessp19</h3>
								<p className="text-neutral-400">Eu fui frescar nessa palestra</p>
							</div>
						</Card>
						<Card>
							<Image
								src="/images/bsides-sp-19.png"
								alt="Picture of the author"
								height={200}
								width={300}
								className="w-full"
							/>
							<div className="flex flex-col gap-4 duration-700 p-4">
								<h3 className="text-white text-4xl mt-2">Bsidessp19</h3>
								<p className="text-neutral-400">Eu fui frescar nessa palestra</p>
							</div>
						</Card>
				</div>
			</div>
		</div>
	);
}
