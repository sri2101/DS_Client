import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
	{ id: 1, image: "/kolkata3.png", slug: "kolkata" },
	{ id: 2, image: "/Rajasthan.webp", slug: "rajasthan" },
	{ id: 3, image: "/kerala.webp", slug: "kerala" },
	{ id: 4, image: "/Kashmir.webp", slug: "kashmir" },
	{ id: 5, image: "/Andaman.webp", slug: "andaman" },
	{ id: 6, image: "/Uttarakhand.webp", slug: "uttarakhand" },
	{ id: 7, image: "/Himachal.webp", slug: "himachal" },
	{ id: 8, image: "/Ladakh.webp", slug: "ladakh" },
	{ id: 9, image: "/Lakshadweep.webp", slug: "lakshadweep" },
	{ id: 10, image: "/Arunachal.webp", slug: "arunachal" },
	{ id: 11, image: "/Goa.webp", slug: "goa" },
	{ id: 12, image: "/Meghalaya.webp", slug: "meghalaya" },
	{ id: 13, image: "/Darjeeling.webp", slug: "darjeeling" },
	{ id: 14, image: "/Agra.webp", slug: "agra" },
];

export default function IndianDestinations() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [packagesByLocation, setPackagesByLocation] = useState({});
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	// Related location aliases (destination slug -> related tokens)
	const RELATED_LOCATIONS = {
		kolkata: [
			"sundarbans",
			"sunderbans",
			"sundarban",
			"west bengal",
			"south 24 parganas",
			"wb",
		],
	};

	

	useEffect(() => {
		let mounted = true;
		const load = async () => {
			try {
				const base = import.meta.env.VITE_API_BASE || "";
				const res = await fetch(`/api/v1/package/all`);
				if (!mounted) return;
				if (!res.ok) return setLoading(false);
				const body = await res.json();
				const pkgs = body?.data ?? body ?? [];
				const map = {};
				(Array.isArray(pkgs) ? pkgs : []).forEach((p) => {
					const loc = (p.location || "").toLowerCase();
					if (!map[loc]) map[loc] = [];
					map[loc].push(p);
				});
				setPackagesByLocation(map);
			} catch (e) {
				// ignore
			} finally {
				if (mounted) setLoading(false);
			}
		};
		load();
		return () => {
			mounted = false;
		};
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prev) =>
			prev + 1 < destinations.length ? prev + 1 : prev
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
	};

	return (
		<section className="py-14 bg-gray-50">
			{/* Heading */}
			<div className="text-center mb-10">
				<h2 className="text-3xl font-bold text-gray-900 tracking-tight">
					Incredible India, Cultural Journeys
				</h2>
				<p className="text-md text-gray-600 mt-3">
					Discover the Wonders Next Door – Explore, Experience, Embrace India
				</p>
			</div>

			{/* Carousel */}
			<div className="relative max-w-7xl mx-auto">
				<div className="overflow-hidden">
					<div
						className="flex transition-transform duration-500"
						style={{
							transform: `translateX(-${currentIndex * 276}px)`,
						}}
					>
						{destinations.map((item) => {
							// find package similarly to PopularDestinations
							const pkgs = packagesByLocation[item.slug];
							let pkg = pkgs && pkgs.length ? pkgs[0] : null;
							if (!pkg) {
								pkg = Object.values(packagesByLocation)
									.flat()
									.find((p) => {
										const loc = (p.location || "").toLowerCase();
										const title = (p.title || "").toLowerCase();
										const highlights = (p.tripHighlights || [])
											.join(" ")
											.toLowerCase();
										return (
											loc.includes(item.slug) ||
											title.includes(item.slug) ||
											highlights.includes(item.slug)
										);
									});
							}
							if (!pkg) {
								const related = RELATED_LOCATIONS[item.slug] || [];
								pkg = related.length
									? Object.values(packagesByLocation)
											.flat()
											.find((p) => {
												const loc = (p.location || "").toLowerCase();
												const title = (p.title || "").toLowerCase();
												const highlights = (p.tripHighlights || [])
													.join(" ")
													.toLowerCase();
												return related.some((tok) => {
													const t = tok.toLowerCase();
													return (
														loc.includes(t) ||
														title.includes(t) ||
														highlights.includes(t)
													);
												});
											})
									: null;
							}

							// const imageSrc = (pkg && pkg.images && pkg.images[0]) || item.image;
							// show the listed destination image (kolkata3.png, etc.) for the card regardless of package images
							const imageSrc = item.image;
							const caption = pkg && pkg.title ? pkg.title : null;

							return (
								<div
									key={item.id}
									className="w-[260px] h-[207px] mr-4 rounded-xl overflow-hidden shadow-lg relative flex-shrink-0 cursor-pointer"
									onClick={() => {
										// Always navigate to the destination overview page for this destination
										navigate(`/destinations-overview/${item.slug}`);
									}}
								>
									<img
										src={imageSrc}
										alt={`Destination ${item.id}`}
										className="w-full h-full object-cover absolute inset-0"
									/>
									{/* {caption && (
										<div className="absolute left-3 bottom-3 bg-black/60 text-white px-3 py-1 rounded-md text-sm">
											{caption}
										</div>
									)} */}
								</div>
							);
						})}
					</div>
				</div>

				{/* Navigation */}
				<div className="flex justify-center items-center mt-5 space-x-3">
					{/* Prev Button */}
					<Button
						onClick={prevSlide}
						size="icon"
						variant="outline"
						className="rounded-full w-10 h-10 bg-slate-800 text-white hover:bg-slate-700 border-0"
					>
						<ChevronLeft className="w-3 h-3" />
					</Button>

					{/* Dash + Dots */}
					<div className="flex items-center space-x-2">
						{/* Red dash */}
						<span className="w-6 h-1 bg-red-500 rounded-full"></span>

						{/* Fixed red dots */}
						{Array.from({ length: 3 }).map((_, idx) => (
							<span
								key={idx}
								className="h-2 w-2 rounded-full bg-red-500"
							/>
						))}
					</div>

					{/* Next Button */}
					<Button
						onClick={nextSlide}
						size="icon"
						variant="outline"
						className="rounded-full w-10 h-10 bg-slate-800 text-white hover:bg-slate-700 border-0"
					>
						<ChevronRight className="w-3 h-3" />
					</Button>
				</div>
			</div>
		</section>
	);
}