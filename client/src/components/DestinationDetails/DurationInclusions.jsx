import {
  Clock,
  MapPin,
  Hotel,
  Binoculars,
  Car,
  UtensilsCrossed,
} from "lucide-react";

const iconMap = {
  hotel: <Hotel className="w-7 h-7 text-gray-700" />,
  sightseeing: <Binoculars className="w-7 h-7 text-gray-700" />,
  transfer: <Car className="w-7 h-7 text-gray-700" />,
  meal: <UtensilsCrossed className="w-7 h-7 text-gray-700" />,
};

const tryParseOnce = (v) => {
  if (v === undefined || v === null) return v;
  if (typeof v === 'object') return v;
  if (typeof v !== 'string') return v;
  let s = v.trim();
  if (!s) return s;
  try { s = s.replace(/&quot;/g, '"').replace(/&amp;/g, '&'); } catch (e) {}
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) s = s.slice(1, -1);
  try { return JSON.parse(s); } catch (e) { return v; }
};

const deepParse = (val) => {
  let cur = val;
  for (let i = 0; i < 3; i++) {
    const next = tryParseOnce(cur);
    if (next === cur) break;
    cur = next;
  }
  return cur;
};

const mapLabelToIconKey = (label) => {
  if (!label) return null;
  const s = String(label).toLowerCase();
  if (s.includes('hotel')) return 'hotel';
  if (s.includes('sight') || s.includes('tour')) return 'sightseeing';
  if (s.includes('transfer') || s.includes('taxi') || s.includes('transfer')) return 'transfer';
  if (s.includes('meal') || s.includes('food')) return 'meal';
  return null;
};

export default function DurationInclusions(props) {
  // props may include: duration, location, includes OR durationAndInclusions object, or inclusions array
  const dai = props.durationAndInclusions || {};
  const rawDuration = props.duration || dai.duration || '';
  const rawLocation = props.location || dai.location || '';
  const rawIncludes = props.includes ?? dai.includes ?? props.inclusions ?? [];

  // normalize includes: accept array of objects, array of strings, or stringified JSON
  let includes = [];
  try {
    const parsed = deepParse(rawIncludes);
    if (Array.isArray(parsed)) {
      includes = parsed.map((it) => {
        if (!it) return null;
        if (typeof it === 'string') {
          // try parsing item
          const p = deepParse(it);
          if (p && typeof p === 'object') return { label: p.label || String(p), icon: p.icon || '' };
          return { label: it, icon: mapLabelToIconKey(it) || '' };
        }
        if (typeof it === 'object') return { label: it.label || it.name || '', icon: it.icon || mapLabelToIconKey(it.label || it.name || '') || '' };
        return { label: String(it), icon: mapLabelToIconKey(String(it)) || '' };
      }).filter(Boolean);
    } else if (typeof parsed === 'string') {
      // comma separated
      includes = String(parsed).split(',').map(s => ({ label: s.trim(), icon: mapLabelToIconKey(s) || '' })).filter(i => i.label);
    }
  } catch (e) { includes = []; }

  const duration = rawDuration || '';
  const location = rawLocation || '';

  return (
    <div className="border rounded-2xl p-4 shadow-sm bg-white w-full max-w-md mx-auto">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Clock className="text-pink-600 w-5 h-5" />
          <span className="font-semibold">Duration:</span>
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-rose-600 w-5 h-5" />
          <span className="font-semibold">Places to Visit:</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="border-t mt-4 pt-4">
        <div className="text-center text-sm font-semibold border px-4 py-1 w-fit mx-auto rounded-full bg-gray-100 text-gray-700 mb-4">
          Package Includes
        </div>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {includes.map(({ label, icon }) => (
            <div key={label} className="flex flex-col items-center text-sm text-gray-700">
              {/* render known icons or emoji/fallback */}
              {icon && iconMap[icon] ? iconMap[icon] : (
                // if icon is an emoji or raw string, render it
                icon ? <span className="text-2xl">{icon}</span> : <span className="w-7 h-7" />
              )}
              <span className="mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
