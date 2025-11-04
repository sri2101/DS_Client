import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Banner from "@/components/DestinationOverview/Banner";
import Filter from "@/components/DestinationOverview/Filter";
import TravelPackages from "@/components/DestinationOverview/TravelPackages";
import DestinationPackages from "@/components/DestinationData/DestinationPackages";

const API_BASE = import.meta?.env?.VITE_API_BASE || "";
const RELATED_LOCATIONS = {
  kolkata: ['sundarbans', 'sunderbans', 'sundarban', 'west bengal', 'south 24 parganas'],
  // add more mappings as needed
};

function DestinationOverview() {
  const { slug } = useParams();
  const slugLower = (slug || '').toLowerCase();

  // allPackages will try to come from backend; fallback to static DestinationPackages
  const [allPackages, setAllPackages] = useState(() =>
    DestinationPackages.filter((pkg) => pkg.slug.toLowerCase().includes((slug || '').toLowerCase()))
  );
  const [filteredPackages, setFilteredPackages] = useState(allPackages);
  const [compareSlugs, setCompareSlugs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/package/all`);
        if (!mounted) return;
        if (!res.ok) return; // keep fallback
        const body = await res.json();
        const pkgs = body?.data ?? body ?? [];
        // Filter packages relevant to this destination by matching slug, location or related tokens
        const matched = (Array.isArray(pkgs) ? pkgs : []).filter((p) => {
          const loc = (p.location || '').toLowerCase();
          const pslug = (p.slug || '').toLowerCase();
          const title = (p.title || '').toLowerCase();
          const highlights = (p.tripHighlights || []).join(' ').toLowerCase();
          const related = RELATED_LOCATIONS[slugLower] || [];

          const baseMatch =
            pslug.includes(slugLower) ||
            loc.includes(slugLower) ||
            loc.includes(slugLower.replace('-', ' ')) ||
            title.includes(slugLower) ||
            highlights.includes(slugLower);

          const relatedMatch = related.length
            ? related.some((tok) => {
                const t = tok.toLowerCase();
                return loc.includes(t) || title.includes(t) || highlights.includes(t);
              })
            : false;

          return baseMatch || relatedMatch;
        });
        if (mounted && matched.length) {
          setAllPackages(matched);
          setFilteredPackages(matched);
        }
      } catch (e) {
        // keep fallback
      }
    };
    load();
    return () => { mounted = false; };
  }, [slug]);

  const handleFilterChange = (filtered, filters) => {
    setFilteredPackages(filtered);
  };

  return (
    <div>
      <section>
        <Banner slug={slug} />
      </section>

      {/* Added mt-8 for breathing space below the banner */}
      <section className="relative mt-8">
        {compareSlugs.length > 0 && (
          <div className="max-w-7xl mx-auto flex justify-end mb-2 px-4">
            <button
              onClick={() => navigate(`/compare-packages?slugs=${compareSlugs.join(',')}&origin=${slug}`)}
              className="flex items-center gap-2 border border-blue-500 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 text-sm font-medium"
            >
              <span className="inline-flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span>
                Compare Packages({String(compareSlugs.length).padStart(2,'0')})
              </span>
            </button>
          </div>
        )}
        <Filter slug={slug} packages={allPackages} onFilterChange={handleFilterChange} />
      </section>

      <section>
        {filteredPackages.length > 0 ? (
          <TravelPackages
            packages={filteredPackages}
            onCompareChange={setCompareSlugs}
            existingCompare={compareSlugs}
          />
        ) : (
          <div className="max-w-7xl mx-auto py-12 text-center">
            <h2 className="text-2xl font-semibold">
              No packages available for{" "}
              <span className="capitalize">{slug}</span> yet.
            </h2>
          </div>
        )}
      </section>
    </div>
  );
}

export default DestinationOverview;

