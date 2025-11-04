import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  { id: 1, image: "/Thailand.webp", slug: "thailand" },
  { id: 2, image: "/Bali.webp", slug: "bali" },
  { id: 3, image: "/Europe.webp", slug: "europe" },
  { id: 4, image: "/Vietnam.webp", slug: "vietnam" },
  { id: 5, image: "/Maldives.webp", slug: "maldives" },
  { id: 6, image: "/Singapore.webp", slug: "singapore" },
  { id: 7, image: "/Mauritius.webp", slug: "mauritius" },
  { id: 8, image: "/Srilanka.webp", slug: "srilanka" },
  { id: 9, image: "/Malaysia.webp", slug: "malaysia" },
  { id: 10, image: "/Kenya.webp", slug: "kenya" },
  { id: 11, image: "/Dubai.webp", slug: "dubai" },
];

export default function Destinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [packagesByLocation, setPackagesByLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all packages and index them by their location (lowercased)
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const base = import.meta.env.VITE_API_BASE || '';
        const res = await fetch(`${base}/api/v1/package/all`);
        if (!mounted) return;
        if (!res.ok) return setLoading(false);
        const body = await res.json();
        const pkgs = body?.data ?? body ?? [];
        const map = {};
        (Array.isArray(pkgs) ? pkgs : []).forEach((p) => {
          const loc = (p.location || '').toLowerCase();
          if (!map[loc]) map[loc] = [];
          map[loc].push(p);
        });
        setPackagesByLocation(map);
      } catch (e) {
        // ignore - we'll render fallback UI
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
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
          Popular Destinations
        </h2>
        <p className="text-md text-gray-600 mt-3">
          Handpicked Getaways Loved by Thousands
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
            {destinations.map((item) => (
              <div
                key={item.id}
                className="w-[260px] h-[207px] mr-4 rounded-xl overflow-hidden shadow-lg relative flex-shrink-0 cursor-pointer"
                onClick={() => {
                  // If we have a package for this destination, navigate to package detail
                  const pkgs = packagesByLocation[item.slug];
                  const pkg = pkgs && pkgs.length ? pkgs[0] : Object.values(packagesByLocation).flat().find(p => (p.location || '').toLowerCase().includes(item.slug));
                  if (pkg && pkg.slug) navigate(`/package/${pkg.slug}`);
                  else navigate(`/destinations-overview/${item.slug}`);
                }}
              >
                {
                  // Prefer package image if available
                }
                <img
                  src={(packagesByLocation[item.slug] && packagesByLocation[item.slug][0] && packagesByLocation[item.slug][0].images && packagesByLocation[item.slug][0].images[0]) || item.image}
                  alt={`Destination ${item.id}`}
                  className="w-full h-full object-cover absolute inset-0"
                />

                {/* If package exists, show small caption */}
                {packagesByLocation[item.slug] && packagesByLocation[item.slug][0] && (
                  <div className="absolute left-3 bottom-3 bg-black/60 text-white px-3 py-1 rounded-md text-sm">
                    {packagesByLocation[item.slug][0].title}
                  </div>
                )}
              </div>
            ))}
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