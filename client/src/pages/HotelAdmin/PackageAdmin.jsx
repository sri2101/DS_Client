import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PackageAdmin() {
  const [packages, setPackages] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    slug: "",
    title: "",
    description: "",
    duration: "",
    packageType: "",
    themes: "",
    flight: "",
    numNights: "",
    numDays: "",
    tag: "",
    location: "",
    images: "",
    tripHighlights: "",
    itinerary: "",
    inclusions: "",
    exclusions: "",
    additionalInfo: "",
    priceDetails: "",
    durationAndInclusions: "",
    contact: "",
  });

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    image5: null,
  });
  const [previews, setPreviews] = useState({});
  const [themesArray, setThemesArray] = useState([]);
  const [themeInput, setThemeInput] = useState("");
  const [itineraryEditor, setItineraryEditor] = useState([]);
  const [priceDetailsEditor, setPriceDetailsEditor] = useState({
    originalPrice: "",
    discountedPrice: "",
    emiOptions: { noCostPlans: [], standardPlans: [] },
  });

  // Additional Info (non-JSON inputs)
  const [additionalTravelValidity, setAdditionalTravelValidity] = useState("");
  const [additionalHighlightsInput, setAdditionalHighlightsInput] = useState(""); // temp input
  const [additionalHighlights, setAdditionalHighlights] = useState([]);

  // Trip highlights (structured tags)
  const [tripHighlightsArray, setTripHighlightsArray] = useState([]);
  const [tripHighlightInput, setTripHighlightInput] = useState("");

  // Contact (email + phones)
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhones, setContactPhones] = useState([]);
  const [contactPhoneInput, setContactPhoneInput] = useState("");

  // Duration & Inclusions (structured inputs instead of raw JSON)
  const [durAndInclDuration, setDurAndInclDuration] = useState("");
  const [durAndInclLocation, setDurAndInclLocation] = useState("");
  const [includesList, setIncludesList] = useState([]); // { label, icon }
  const [includeLabelInput, setIncludeLabelInput] = useState("");
  const [includeIconInput, setIncludeIconInput] = useState("🏨");

  const PACKAGE_TYPES = ["customizable", "groupDeparture", "bookNow"];
  const THEME_PRESETS = ["solo", "winter", "summer", "honeymoon"];
  const FLIGHT_OPTIONS = ["withFlight", "withoutFlight"];
  const INCLUSIONS_PRESET = ["Hotel stay", "Transfers", "Sightseeing"];
  const EXCLUSIONS_PRESET = [
    "Flights",
    "Meals not mentioned",
    "Personal expenses",
  ];
  const PACKAGE_TYPE_ICONS = {
    customizable: "🛠️",
    groupDeparture: "🧑‍🤝‍🧑",
    bookNow: "⚡",
  };
  const THEME_ICONS = {
    solo: "🧭",
    winter: "❄️",
    summer: "☀️",
    honeymoon: "💖",
  };
  const INCLUSION_ICONS = {
    "Hotel stay": "🏨",
    Transfers: "🚗",
    Sightseeing: "🏛️",
  };
  const EXCLUSION_ICONS = {
    Flights: "✈️",
    "Meals not mentioned": "🍽️",
    "Personal expenses": "💸",
  };

  // helper: map badge text to an emoji (checks known maps, falls back to tag)
  const getBadgeIcon = (badge) => {
    if (!badge) return "🏷️";
    // exact matches
    if (INCLUSION_ICONS[badge]) return INCLUSION_ICONS[badge];
    if (EXCLUSION_ICONS[badge]) return EXCLUSION_ICONS[badge];
    // themes can be stored lowercase in THEME_ICONS keys
    const key = String(badge).toLowerCase();
    for (const k of Object.keys(THEME_ICONS)) {
      if (k.toLowerCase() === key) return THEME_ICONS[k];
    }
    // common fallbacks for some known words
    if (/hotel|stay/i.test(badge)) return "🏨";
    if (/transfer|taxi|car|transfer/i.test(badge)) return "🚗";
    if (/sightseeing|tour/i.test(badge)) return "🏛️";
    if (/flight|air/i.test(badge)) return "✈️";
    if (/meal|food|dinner|breakfast/i.test(badge)) return "🍽️";
    return "🏷️";
  };

  // new helper: truncate description after N words and return ellipsis
  const truncateWords = (text, maxWords = 12) => {
    if (!text) return "";
    const parts = String(text).trim().split(/\s+/);
    if (parts.length <= maxWords) return text;
    return parts.slice(0, maxWords).join(" ") + "...";
  };

  const [inclusionsArray, setInclusionsArray] = useState([]);
  const [exclusionsArray, setExclusionsArray] = useState([]);
  const [customInclusion, setCustomInclusion] = useState("");
  const [customExclusion, setCustomExclusion] = useState("");

  const API_BASE = import.meta?.env?.VITE_API_BASE || "http://localhost:3000";

  /** Fetch all packages */
  const fetchPackages = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/v1/package/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPackages(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch packages:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  /** Open form for editing an existing package */
  const openForEdit = (pkg) => {
    setEditMode(true);
    setSelectedSlug(pkg.slug);

    // client-side deep parse to defensively handle double-encoded or escaped JSON strings
    const tryParseOnceClient = (v) => {
      if (v === undefined || v === null) return v;
      if (typeof v === 'object') return v;
      if (typeof v !== 'string') return v;
      let s = v.trim();
      if (!s) return s;
      try { s = s.replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'); } catch (e) {}
      if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) s = s.slice(1, -1);
      try { return JSON.parse(s); } catch (e) { return v; }
    };
    const deepParseClient = (val) => {
      let cur = val;
      for (let i = 0; i < 4; i++) {
        const next = tryParseOnceClient(cur);
        if (next === cur) break;
        cur = next;
      }
      return cur;
    };

    // compute safe string values for form initial state
    const safeThemes = (() => {
      const t = deepParseClient(pkg.themes);
      if (Array.isArray(t)) return t.join(',');
      if (typeof t === 'string') return t;
      return '';
    })();
    const safeTripHighlights = (() => {
      const t = deepParseClient(pkg.tripHighlights);
      if (Array.isArray(t)) return t.join('||');
      if (typeof t === 'string') return t;
      return '';
    })();
    const safeInclusions = (() => {
      const t = deepParseClient(pkg.inclusions);
      if (Array.isArray(t)) return t.join(',');
      if (typeof t === 'string') return t;
      return '';
    })();
    const safeExclusions = (() => {
      const t = deepParseClient(pkg.exclusions);
      if (Array.isArray(t)) return t.join(',');
      if (typeof t === 'string') return t;
      return '';
    })();
    const safeItinerary = (() => {
      const t = deepParseClient(pkg.itinerary);
      if (Array.isArray(t) || typeof t === 'object') return JSON.stringify(t, null, 2);
      if (typeof t === 'string') return t;
      return '';
    })();
    const safePriceDetails = (() => {
      const t = deepParseClient(pkg.priceDetails);
      if (typeof t === 'object') return JSON.stringify(t, null, 2);
      if (typeof t === 'string') return t;
      return '';
    })();
    const safeDurationAndInclusions = (() => {
      const t = deepParseClient(pkg.durationAndInclusions);
      if (typeof t === 'object') return JSON.stringify(t, null, 2);
      if (typeof t === 'string') return t;
      return '';
    })();
    const safeAdditionalInfo = (() => {
      const t = deepParseClient(pkg.additionalInfo);
      if (typeof t === 'object') return JSON.stringify(t, null, 2);
      if (typeof t === 'string') return t;
      return '';
    })();
    const safeContact = (() => {
      const t = deepParseClient(pkg.contact);
      if (typeof t === 'object') return JSON.stringify(t, null, 2);
      if (typeof t === 'string') return t;
      return '';
    })();

    setForm({
      slug: pkg.slug || "",
      title: pkg.title || "",
      description: pkg.description || "",
      duration: pkg.duration || "",
      packageType: pkg.packageType || "",
      themes: safeThemes,
      flight: pkg.flight || "",
      numNights: pkg.numNights || "",
      numDays: pkg.numDays || "",
      tag: pkg.tag || "",
      location: pkg.location || "",
      images: Array.isArray(pkg.images) ? pkg.images.join(",") : pkg.images || "",
      tripHighlights: safeTripHighlights,
      itinerary: safeItinerary,
      inclusions: safeInclusions,
      exclusions: safeExclusions,
      additionalInfo: safeAdditionalInfo,
      priceDetails: safePriceDetails,
      durationAndInclusions: safeDurationAndInclusions,
      contact: safeContact,
    });

    // Set previews for existing images
    const p = {};
    if (Array.isArray(pkg.images)) {
      for (let i = 0; i < Math.min(5, pkg.images.length); i++) {
        p[`image${i + 1}`] = pkg.images[i];
      }
    }
    setPreviews(p);

    setThemesArray(
      (() => {
        try {
          if (Array.isArray(pkg.themes)) return pkg.themes.slice();
          if (pkg.themes && typeof pkg.themes === 'string') {
            try {
              const parsed = JSON.parse(pkg.themes);
              if (Array.isArray(parsed)) return parsed.map(String);
            } catch (e) {}
            return String(pkg.themes).split(',').map(s => s.trim()).filter(Boolean);
          }
        } catch (e) {}
        return [];
      })()
    );
    setImages({ image1: null, image2: null, image3: null, image4: null, image5: null });
    setInclusionsArray(() => {
      try {
        if (Array.isArray(pkg.inclusions)) return pkg.inclusions.slice();
        if (pkg.inclusions && typeof pkg.inclusions === 'string') {
          try {
            const parsed = JSON.parse(pkg.inclusions);
            if (Array.isArray(parsed)) return parsed.map(String);
          } catch (e) {}
          return String(pkg.inclusions).split(',').map(s => s.trim()).filter(Boolean);
        }
      } catch (e) {}
      return [];
    });
    setExclusionsArray(() => {
      try {
        if (Array.isArray(pkg.exclusions)) return pkg.exclusions.slice();
        if (pkg.exclusions && typeof pkg.exclusions === 'string') {
          try {
            const parsed = JSON.parse(pkg.exclusions);
            if (Array.isArray(parsed)) return parsed.map(String);
          } catch (e) {}
          return String(pkg.exclusions).split(',').map(s => s.trim()).filter(Boolean);
        }
      } catch (e) {}
      return [];
    });
    if (Array.isArray(pkg.itinerary)) {
      setItineraryEditor(
        pkg.itinerary.map((d) => ({
          day: d.day,
          title: d.title,
          points: Array.isArray(d.points) ? d.points.slice() : [],
        }))
      );
    } else {
      setItineraryEditor([]);
    }
    if (pkg.priceDetails && typeof pkg.priceDetails === "object") {
      setPriceDetailsEditor({
        originalPrice: pkg.priceDetails.originalPrice || "",
        discountedPrice: pkg.priceDetails.discountedPrice || "",
        emiOptions: {
          noCostPlans: Array.isArray(pkg.priceDetails.emiOptions?.noCostPlans)
            ? pkg.priceDetails.emiOptions.noCostPlans.slice()
            : [],
          standardPlans: Array.isArray(pkg.priceDetails.emiOptions?.standardPlans)
            ? pkg.priceDetails.emiOptions.standardPlans.slice()
            : [],
        },
      });
    } else {
      setPriceDetailsEditor({ originalPrice: "", discountedPrice: "", emiOptions: { noCostPlans: [], standardPlans: [] } });
    }

    // populate durationAndInclusions structured state
    try {
      let dair = pkg.durationAndInclusions;
      if (dair && typeof dair === 'string') {
        try { dair = JSON.parse(dair); } catch (e) { /* keep as string if not JSON */ }
      }
      if (dair && typeof dair === 'object') {
        setDurAndInclDuration(dair.duration || '');
        setDurAndInclLocation(dair.location || '');
        // normalize includes into {label, icon} objects
        if (Array.isArray(dair.includes)) {
          const norm = dair.includes.map((it) => {
            if (!it) return null;
            if (typeof it === 'string') return { label: it, icon: '' };
            if (typeof it === 'object') return { label: it.label || it.name || '', icon: it.icon || '' };
            return { label: String(it), icon: '' };
          }).filter(Boolean);
          setIncludesList(norm);
        } else {
          setIncludesList([]);
        }
      } else {
        setDurAndInclDuration('');
        setDurAndInclLocation('');
        setIncludesList([]);
      }
    } catch (e) {
      setDurAndInclDuration('');
      setDurAndInclLocation('');
      setIncludesList([]);
    }

    // Populate trip highlights into structured array state
    try {
      if (Array.isArray(pkg.tripHighlights)) setTripHighlightsArray(pkg.tripHighlights.slice());
      else if (pkg.tripHighlights && typeof pkg.tripHighlights === 'string') {
        try {
          const parsed = JSON.parse(pkg.tripHighlights);
          if (Array.isArray(parsed)) setTripHighlightsArray(parsed.map(String));
          else setTripHighlightsArray(String(pkg.tripHighlights).split('||').map(s => s.trim()).filter(Boolean));
        } catch (e) {
          setTripHighlightsArray(String(pkg.tripHighlights).split('||').map(s => s.trim()).filter(Boolean));
        }
      } else setTripHighlightsArray([]);
    } catch (e) { setTripHighlightsArray([]); }

    // Populate additional info inputs
    if (pkg.additionalInfo && typeof pkg.additionalInfo === 'object') {
      setAdditionalTravelValidity(pkg.additionalInfo.travelValidity || '');
      setAdditionalHighlights((pkg.additionalInfo.highlights || []).slice());
      setAdditionalHighlightsInput('');
    } else {
      setAdditionalTravelValidity('');
      setAdditionalHighlights([]);
      setAdditionalHighlightsInput('');
    }

    // Populate contact inputs
    if (pkg.contact && typeof pkg.contact === 'object') {
      setContactEmail(pkg.contact.email || '');
      setContactPhones(Array.isArray(pkg.contact.phones) ? pkg.contact.phones.slice() : []);
    } else {
      setContactEmail('');
      setContactPhones([]);
    }

    setOpen(true);
  };

  /** Open form for creating new package */
  const openForCreate = () => {
    setEditMode(false);
    setSelectedSlug(null);
    setForm({
      slug: "",
      title: "",
      description: "",
      duration: "",
      packageType: "",
      themes: "",
      flight: "",
      numNights: "",
      numDays: "",
      tag: "",
      location: "",
      images: "",
      tripHighlights: "",
      itinerary: "",
      inclusions: "",
      exclusions: "",
      additionalInfo: "",
      priceDetails: "",
      durationAndInclusions: "",
      contact: "",
    });
    setImages({ image1: null, image2: null, image3: null, image4: null, image5: null });
    setPreviews({});
    setThemesArray([]);
    setThemeInput("");
    setItineraryEditor([]);
  setPriceDetailsEditor({ originalPrice: "", discountedPrice: "", emiOptions: { noCostPlans: [], standardPlans: [] } });
    setInclusionsArray([]);
    setExclusionsArray([]);
    setCustomInclusion("");
    setCustomExclusion("");
  setAdditionalTravelValidity('');
  setAdditionalHighlightsInput('');
  setAdditionalHighlights([]);
    setTripHighlightsArray([]);
    setContactEmail('');
    setContactPhones([]);
    setContactPhoneInput('');
    // reset duration & inclusions
    setDurAndInclDuration('');
    setDurAndInclLocation('');
    setIncludesList([]);
    setIncludeLabelInput('');
    setIncludeIconInput('🏨');
    setOpen(true);
  };

  /** Common handlers */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e, key) => {
    const file = e.target.files && e.target.files[0];
    setImages((prev) => ({ ...prev, [key]: file }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setPreviews((prev) => ({ ...prev, [key]: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  /** Itinerary handlers */
  const addItineraryDay = () =>
    setItineraryEditor((prev) => [
      ...prev,
      { day: prev.length + 1, title: "", points: [""] },
    ]);
  const removeItineraryDay = (idx) =>
    setItineraryEditor((prev) => prev.filter((_, i) => i !== idx));
  const updateItineraryDay = (idx, field, value) =>
    setItineraryEditor((prev) =>
      prev.map((d, i) => (i === idx ? { ...d, [field]: value } : d))
    );
  const addItineraryPoint = (dayIdx) =>
    setItineraryEditor((prev) =>
      prev.map((d, i) =>
        i === dayIdx ? { ...d, points: [...d.points, ""] } : d
      )
    );
  const updateItineraryPoint = (dayIdx, pIdx, value) =>
    setItineraryEditor((prev) =>
      prev.map((d, i) =>
        i === dayIdx
          ? { ...d, points: d.points.map((p, pi) => (pi === pIdx ? value : p)) }
          : d
      )
    );
  const removeItineraryPoint = (dayIdx, pIdx) =>
    setItineraryEditor((prev) =>
      prev.map((d, i) =>
        i === dayIdx
          ? { ...d, points: d.points.filter((_, pi) => pi !== pIdx) }
          : d
      )
    );

  /** Price details (EMI) handlers */
  const addNoCostPlan = () =>
    setPriceDetailsEditor((prev) => ({
      ...prev,
      emiOptions: {
        ...prev.emiOptions,
        noCostPlans: [...(prev.emiOptions?.noCostPlans || []), { months: "", amount: "" }],
      },
    }));

  const addStandardPlan = () =>
    setPriceDetailsEditor((prev) => ({
      ...prev,
      emiOptions: {
        ...prev.emiOptions,
        standardPlans: [...(prev.emiOptions?.standardPlans || []), { months: "", amount: "" }],
      },
    }));

  const updateNoCostPlan = (idx, field, value) =>
    setPriceDetailsEditor((prev) => ({
      ...prev,
      emiOptions: {
        ...prev.emiOptions,
        noCostPlans: prev.emiOptions.noCostPlans.map((p, i) => (i === idx ? { ...p, [field]: value } : p)),
      },
    }));

  const updateStandardPlan = (idx, field, value) =>
    setPriceDetailsEditor((prev) => ({
      ...prev,
      emiOptions: {
        ...prev.emiOptions,
        standardPlans: prev.emiOptions.standardPlans.map((p, i) => (i === idx ? { ...p, [field]: value } : p)),
      },
    }));

  const removeNoCostPlan = (idx) =>
    setPriceDetailsEditor((prev) => ({
      ...prev,
      emiOptions: {
        ...prev.emiOptions,
        noCostPlans: prev.emiOptions.noCostPlans.filter((_, i) => i !== idx),
      },
    }));

  const removeStandardPlan = (idx) =>
    setPriceDetailsEditor((prev) => ({
      ...prev,
      emiOptions: {
        ...prev.emiOptions,
        standardPlans: prev.emiOptions.standardPlans.filter((_, i) => i !== idx),
      },
    }));

  /** Themes, inclusions, exclusions handlers */
  const handleAddTheme = (e) => {
    e.preventDefault();
    const val = themeInput.trim();
    if (!val) return;
    if (themesArray.includes(val)) {
      setThemeInput("");
      return;
    }
    setThemesArray((prev) => [...prev, val]);
    setThemeInput("");
  };
  const removeTheme = (t) => setThemesArray((prev) => prev.filter((x) => x !== t));
  const toggleThemePreset = (t) =>
    themesArray.includes(t)
      ? removeTheme(t)
      : setThemesArray((prev) => [...prev, t]);

  const toggleInclusion = (inc) =>
    inclusionsArray.includes(inc)
      ? setInclusionsArray((prev) => prev.filter((x) => x !== inc))
      : setInclusionsArray((prev) => [...prev, inc]);

  const toggleExclusion = (exc) =>
    exclusionsArray.includes(exc)
      ? setExclusionsArray((prev) => prev.filter((x) => x !== exc))
      : setExclusionsArray((prev) => [...prev, exc]);

  const addCustomInclusion = () => {
    if (customInclusion.trim()) {
      setInclusionsArray((prev) => [...prev, customInclusion.trim()]);
      setCustomInclusion("");
    }
  };
  const addCustomExclusion = () => {
    if (customExclusion.trim()) {
      setExclusionsArray((prev) => [...prev, customExclusion.trim()]);
      setCustomExclusion("");
    }
  };

  const setPackageType = (type) =>
    setForm((prev) => ({ ...prev, packageType: type }));
  const setFlightOption = (opt) => setForm((prev) => ({ ...prev, flight: opt }));

  /** Handle form submission for create/update */
  const handleSubmit = async () => {
    if (!form.slug || !form.title) {
      alert("Slug and Title are required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();

      // Basic fields
      [
        "slug",
        "title",
        "description",
        "duration",
        "packageType",
        "flight",
        "numNights",
        "numDays",
        "tag",
        "location",
      ].forEach((k) => {
        if (
          form[k] !== undefined &&
          form[k] !== null &&
          String(form[k]).trim() !== ""
        ) {
          formData.append(k, String(form[k]));
        }
      });

      // Themes
      if (themesArray && themesArray.length) {
        formData.append("themes", JSON.stringify(themesArray));
      }

      // Trip highlights (use structured array if present, else fallback to legacy input)
      if (tripHighlightsArray && tripHighlightsArray.length) {
        formData.append("tripHighlights", JSON.stringify(tripHighlightsArray));
      } else if (form.tripHighlights) {
        const arr = form.tripHighlights
          .split("||")
          .map((s) => s.trim())
          .filter(Boolean);
        if (arr.length) formData.append("tripHighlights", JSON.stringify(arr));
      }

      // Inclusions & exclusions
      if (inclusionsArray && inclusionsArray.length) {
        formData.append("inclusions", JSON.stringify(inclusionsArray));
      } else if (form.inclusions) {
        const arr = form.inclusions
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        formData.append("inclusions", JSON.stringify(arr));
      }

      if (exclusionsArray && exclusionsArray.length) {
        formData.append("exclusions", JSON.stringify(exclusionsArray));
      } else if (form.exclusions) {
        const arr = form.exclusions
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        formData.append("exclusions", JSON.stringify(arr));
      }

      // Itinerary
      if (itineraryEditor && itineraryEditor.length) {
        formData.append(
          "itinerary",
          JSON.stringify(
            itineraryEditor.map((d) => ({
              day: d.day,
              title: d.title,
              points: d.points,
            }))
          )
        );
      } else if (form.itinerary) {
        try {
          JSON.parse(form.itinerary);
          formData.append("itinerary", form.itinerary);
        } catch (e) {
          alert("Invalid JSON in itinerary");
          setLoading(false);
          return;
        }
      }

      // Price details
      if (
        priceDetailsEditor &&
        (priceDetailsEditor.originalPrice ||
          priceDetailsEditor.discountedPrice ||
          (priceDetailsEditor.emiOptions &&
            ((priceDetailsEditor.emiOptions.noCostPlans && priceDetailsEditor.emiOptions.noCostPlans.length) || (priceDetailsEditor.emiOptions.standardPlans && priceDetailsEditor.emiOptions.standardPlans.length))))
      ) {
        formData.append("priceDetails", JSON.stringify(priceDetailsEditor));
      } else if (form.priceDetails) {
        try {
          JSON.parse(form.priceDetails);
          formData.append("priceDetails", form.priceDetails);
        } catch (e) {
          alert("Invalid JSON in priceDetails");
          setLoading(false);
          return;
        }
      }

      // Note: durationAndInclusions is handled below from structured inputs

      // helper: remove internal keys from payloads (like _id, __v)
      const stripInternal = (obj) => {
        if (!obj || typeof obj !== 'object') return obj;
        const out = Array.isArray(obj) ? [] : {};
        if (Array.isArray(obj)) {
          return obj.map(item => (typeof item === 'object' && item ? stripInternal(item) : item));
        }
        Object.entries(obj).forEach(([k, v]) => {
          if (String(k).startsWith('_') || k === '__v' || k === 'id') return;
          if (v && typeof v === 'object') out[k] = stripInternal(v);
          else out[k] = v;
        });
        return out;
      };

      // Append Additional Info from structured inputs
      const additionalInfoPayload = {};
      if (additionalTravelValidity && String(additionalTravelValidity).trim()) additionalInfoPayload.travelValidity = additionalTravelValidity;
      if (additionalHighlights && additionalHighlights.length) {
        additionalInfoPayload.highlights = additionalHighlights.slice();
      } else if (additionalHighlightsInput && String(additionalHighlightsInput).trim()) {
        additionalInfoPayload.highlights = additionalHighlightsInput.split('||').map(s => s.trim()).filter(Boolean);
      }
      if (Object.keys(additionalInfoPayload).length) {
        formData.append('additionalInfo', JSON.stringify(stripInternal(additionalInfoPayload)));
      }

      // Append Contact from structured inputs
      const contactPayload = {};
      if (contactEmail && String(contactEmail).trim()) contactPayload.email = contactEmail.trim();
      if (contactPhones && contactPhones.length) contactPayload.phones = contactPhones.slice();
      if (Object.keys(contactPayload).length) {
        formData.append('contact', JSON.stringify(stripInternal(contactPayload)));
      }

      // Append Duration & Inclusions structured object
      const durInclPayload = {};
      if (durAndInclDuration && String(durAndInclDuration).trim()) durInclPayload.duration = durAndInclDuration.trim();
      if (durAndInclLocation && String(durAndInclLocation).trim()) durInclPayload.location = durAndInclLocation.trim();
      if (includesList && includesList.length) durInclPayload.includes = includesList.map(i => {
        if (!i) return null;
        if (typeof i === 'string') return { label: i, icon: '' };
        if (typeof i === 'object') return { label: i.label || i.name || String(i), icon: i.icon || '' };
        return { label: String(i), icon: '' };
      }).filter(Boolean);
      if (Object.keys(durInclPayload).length) {
        formData.append('durationAndInclusions', JSON.stringify(stripInternal(durInclPayload)));
      }

      // Images: include existing URLs if any
      const existingUrls = Object.values(previews).filter(
        (v) => v && typeof v === "string" && v.startsWith("http")
      );
      if (existingUrls.length) {
        formData.append("images", JSON.stringify(existingUrls));
      }
      // Append new image files
      Object.entries(images).forEach(([key, file]) => {
        if (file) {
          formData.append(key, file);
        }
      });

      // Choose endpoint
      const url = editMode
        ? `${API_BASE}/api/v1/package/${selectedSlug}`
        : `${API_BASE}/api/v1/package/create`;
      const method = editMode ? "put" : "post";

      // Debug: log FormData keys for inspection
      try {
        // eslint-disable-next-line no-console
        for (const pair of formData.entries()) {
          console.log('FormData entry:', pair[0], pair[1]);
        }
      } catch (e) {}

      await axios({
        method,
        url,
        data: formData,
        headers: { Authorization: `Bearer ${token}` },
      });

      await fetchPackages();
      setOpen(false);
    } catch (err) {
      console.error("Save failed:", err.response?.data || err.message);
      alert(
        err.response?.data?.message || err.message || "Failed to save package"
      );
    } finally {
      setLoading(false);
    }
  };

  /** Handle delete */
  const handleDelete = async (slug) => {
    if (!window.confirm("Delete this package?")) return;
    try {
      await axios.delete(`${API_BASE}/api/v1/package/${slug}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPackages(packages.filter((p) => p.slug !== slug));
    } catch (err) {
      console.error("Delete failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || err.message || "Failed to delete");
    }
  };

  return (
    <div className="p-8 bg-gradient-to-b from-[#f8f9ff] to-[#eef1ff] min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#4b3fb3]">📦 Package Management</h1>
        <Button
          onClick={openForCreate}
          className="bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
        >
          + Add Package
        </Button>
      </div>

      {packages.length === 0 ? (
        <p className="text-gray-500">No packages found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const img = Array.isArray(pkg.images) && pkg.images.length ? pkg.images[0] : null;
            // safe parse priceDetails if it was sent as a string
            let priceObj = pkg.priceDetails;
            if (priceObj && typeof priceObj === 'string') {
              try { priceObj = JSON.parse(priceObj); } catch (e) { /* ignore */ }
            }
            const originalPrice = priceObj && priceObj.originalPrice ? priceObj.originalPrice : null;
            const discountedPrice = priceObj && priceObj.discountedPrice ? priceObj.discountedPrice : null;
            const badgesSource = Array.isArray(pkg.inclusions) && pkg.inclusions.length ? pkg.inclusions : (Array.isArray(pkg.themes) && pkg.themes.length ? pkg.themes : []);

            return (
              <Card key={pkg.slug} className="rounded-2xl overflow-hidden shadow-md p-0">
                <div className="relative h-44 bg-gray-100">
                  {img ? (
                    // banner image
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img} alt={pkg.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                  {/* location pill */}
                  {pkg.location ? (
                    <div className="absolute left-4 top-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm shadow-sm flex items-center gap-2">
                      <span className="text-xs">📍</span>
                      <span className="text-sm">{pkg.location}</span>
                    </div>
                  ) : null}
                </div>

                <CardContent className="px-4 pb-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{pkg.title}</h3>
                    <p
                      className="text-sm text-gray-600 mt-1"
                      title={pkg.description || ""}
                    >
                      {truncateWords(pkg.description, 12)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      {originalPrice ? (
                        <div className="text-sm text-gray-400 line-through">₹{originalPrice}</div>
                      ) : null}
                      {discountedPrice ? (
                        <div className="text-lg font-semibold text-emerald-600">₹{discountedPrice}</div>
                      ) : null}
                    </div>
                    <div className="text-sm text-gray-500">{pkg.duration || ''}</div>
                  </div>

                  <div className="mt-3 overflow-x-auto no-scrollbar whitespace-nowrap flex gap-2 pb-2">
                    {(badgesSource && badgesSource.length) ? badgesSource.map((b, i) => (
                      <div key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border text-sm text-gray-700">
                        <span className="text-xs">{getBadgeIcon(b)}</span>
                        <span>{b}</span>
                      </div>
                    )) : (<div className="text-sm text-gray-400">No badges</div>)}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <Button onClick={() => openForEdit(pkg)} className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white text-indigo-600">
                      <span>✏️</span>
                      <span>Edit</span>
                    </Button>
                    <Button onClick={() => handleDelete(pkg.slug)} className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md">
                      <span>🗑️</span>
                      <span>Delete</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogContent className="max-w-6xl w-full max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-2xl border shadow-lg"> */}
  <DialogContent
    className="w-full max-w-screen-xl max-h-[90vh] overflow-auto px-6 sm:px-12 py-6 sm:py-8 rounded-2xl border shadow-lg min-w-0"
    style={{ maxWidth: 'min(1280px, 95vw)', zIndex: 60 }}
  >

          <DialogHeader className="pb-2">
            <DialogTitle className="text-2xl">
              {editMode ? "Edit Package" : "Add Package"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-10 mt-8 px-4 pb-8 min-w-0 break-words">
            {/* Basic Info Section */}
            <section className="space-y-6 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
                <Input
                  name="slug"
                  placeholder="Slug *"
                  value={form.slug}
                  onChange={handleChange}
                  disabled={editMode}
                  className="w-full"
                />
                <Input
                  name="title"
                  placeholder="Title *"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <Textarea
                name="description"
                placeholder="Short description"
                value={form.description}
                onChange={handleChange}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
                <Input
                  name="duration"
                  placeholder="Duration"
                  value={form.duration}
                  onChange={handleChange}
                  className="w-full"
                />
                <Input
                  name="location"
                  placeholder="Location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
            </section>

            {/* Package Type & Themes Section */}
            <section className="space-y-6 pt-8 border-t min-w-0">
              <Label className="text-lg font-semibold text-[#4b3fb3]">Package Type</Label>
              <div className="flex flex-wrap gap-6 mt-4">
                {PACKAGE_TYPES.map((t) => {
                  const selected = form.packageType === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setPackageType(selected ? "" : t)}
                      className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-base font-medium whitespace-nowrap ${
                        selected
                          ? "bg-indigo-100 text-indigo-800"
                          : "bg-[#eef2ff] text-[#2b2b2b]"
                      }`}
                    >
                      <span className="text-base">{PACKAGE_TYPE_ICONS[t]}</span>
                      <span className="capitalize whitespace-nowrap">
                        {t === "groupDeparture"
                          ? "Group Departure"
                          : t === "bookNow"
                          ? "Book Now"
                          : "Customizable"}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 min-w-0">
                <Label className="text-lg font-semibold text-[#4b3fb3]">Themes</Label>
                <div className="flex gap-3 mb-6 mt-4 overflow-x-auto whitespace-nowrap flex-nowrap pb-2">
                  {themesArray && themesArray.length ? (
                    themesArray.map((t) => (
                      <div
                        key={t}
                        className="flex items-center bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm"
                      >
                        <span className="mr-2">{t}</span>
                        <button
                          type="button"
                          onClick={() => removeTheme(t)}
                          className="text-xs px-1"
                        >
                          ✖️
                        </button>
                      </div>
                    ))
                  ) : (
                    <span className="text-gray-400 text-sm">
                      No themes added
                    </span>
                  )}
                </div>

                <form
                  onSubmit={handleAddTheme}
                  className="flex flex-col sm:flex-row gap-4 items-start"
                >
                  <Input
                    value={themeInput}
                    onChange={(e) => setThemeInput(e.target.value)}
                    placeholder="Add theme (press Add)"
                    className="w-full"
                  />
                  <Button
                    type="submit"
                    className="px-4 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white w-full sm:w-auto"
                  >
                    Add
                  </Button>
                </form>

                <div className="flex gap-4 mt-6 overflow-x-auto whitespace-nowrap flex-nowrap pb-2">
                  {THEME_PRESETS.map((tp) => {
                    const sel = themesArray.includes(tp);
                    return (
                      <button
                        key={tp}
                        type="button"
                        onClick={() => toggleThemePreset(tp)}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          sel
                            ? "bg-indigo-100 text-indigo-800"
                            : "bg-[#eef2ff] text-[#2b2b2b]"
                        }`}
                      >
                        <span className="text-sm">{THEME_ICONS[tp]}</span>
                        <span className="capitalize">{tp}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Trip highlights Section (moved above Images) */}
            <section className="space-y-6 pt-8 border-t">
              <Label className="text-lg font-semibold text-[#4b3fb3]">Trip highlights</Label>
              <div className="mt-3">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add trip highlight (e.g. Temple visit)"
                    value={tripHighlightInput}
                    onChange={(e) => setTripHighlightInput(e.target.value)}
                    className="w-full"
                  />
                  <Button
                    onClick={() => {
                      const v = tripHighlightInput.trim();
                      if (!v) return;
                      setTripHighlightsArray((prev) => [...prev, v]);
                      setTripHighlightInput("");
                    }}
                    className="px-4 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
                  >
                    Add
                  </Button>
                </div>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {tripHighlightsArray && tripHighlightsArray.length ? (
                    tripHighlightsArray.map((t, idx) => (
                      <div key={idx} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-800">
                        <span className="text-sm">{t}</span>
                        <button type="button" onClick={() => setTripHighlightsArray((prev) => prev.filter((_, i) => i !== idx))} className="text-xs px-1">✖️</button>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-400">No trip highlights added</div>
                  )}
                </div>
              </div>
            </section>

            {/* Images Section */}
            <section className="space-y-6 pt-8 border-t">
              <Label className="text-lg font-semibold text-[#4b3fb3]">Upload Images</Label>
              <p className="text-sm text-gray-500">
                Upload files or manage existing images. Use the remove button to
                drop an existing URL.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 min-w-0">
                {[1, 2, 3, 4, 5].map((i) => {
                  const key = `image${i}`;
                  const src = previews[key];
                  return (
                    <div key={key} className="space-y-2">
                      <div className="relative w-full h-24 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border">
                        {src ? (
                          <img
                            src={src}
                            alt="preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs">No Image</span>
                        )}
                      </div>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, key)}
                        className="text-xs w-full"
                      />
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="space-y-6 pt-8 border-t">
              <div className="space-y-6">
                <Label className="text-lg font-semibold text-[#4b3fb3]">Inclusions</Label>
                <div className="flex gap-3 mt-4 overflow-x-auto whitespace-nowrap flex-nowrap pb-2">
                  {INCLUSIONS_PRESET.map((inc) => (
                    <button
                      key={inc}
                      type="button"
                      onClick={() => toggleInclusion(inc)}
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        inclusionsArray.includes(inc)
                          ? "bg-green-100 text-green-800"
                          : "bg-[#eef2ff] text-[#2b2b2b]"
                      }`}
                    >
                      <span className="text-sm">{INCLUSION_ICONS[inc]}</span>
                      <span>{inc}</span>
                    </button>
                  ))}
                  {inclusionsArray
                    .filter((i) => !INCLUSIONS_PRESET.includes(i))
                    .map((custom) => (
                      <span
                        key={custom}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                      >
                        <span>{custom}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setInclusionsArray((prev) =>
                              prev.filter((x) => x !== custom)
                            )
                          }
                          className="text-xs px-1"
                        >
                          ✖️
                        </button>
                      </span>
                    ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Input
                    value={customInclusion}
                    onChange={(e) => setCustomInclusion(e.target.value)}
                    placeholder="Add inclusion"
                  />
                  <Button
                    onClick={addCustomInclusion}
                    className="px-4 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>

              <div className="space-y-6 pt-8">
                <Label className="text-lg font-semibold text-[#4b3fb3]">Exclusions</Label>
                <div className="flex gap-3 mt-4 overflow-x-auto whitespace-nowrap flex-nowrap pb-2">
                  {EXCLUSIONS_PRESET.map((exc) => (
                    <button
                      key={exc}
                      type="button"
                      onClick={() => toggleExclusion(exc)}
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        exclusionsArray.includes(exc)
                          ? "bg-red-100 text-red-800"
                          : "bg-[#eef2ff] text-[#2b2b2b]"
                      }`}
                    >
                      <span className="text-sm">{EXCLUSION_ICONS[exc]}</span>
                      <span>{exc}</span>
                    </button>
                  ))}
                  {exclusionsArray
                    .filter((i) => !EXCLUSIONS_PRESET.includes(i))
                    .map((custom) => (
                      <span
                        key={custom}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
                      >
                        <span>{custom}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setExclusionsArray((prev) =>
                              prev.filter((x) => x !== custom)
                            )
                          }
                          className="text-xs px-1"
                        >
                          ✖️
                        </button>
                      </span>
                    ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Input
                    value={customExclusion}
                    onChange={(e) => setCustomExclusion(e.target.value)}
                    placeholder="Add exclusion"
                  />
                  <Button
                    onClick={addCustomExclusion}
                    className="px-4 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
                  >
                    Add
                  </Button>
                </div>
              </div>
            </section>

            {/* Flight Option */}
            <section className="pt-8 border-t">
              <Label className="text-lg font-semibold text-[#4b3fb3]">Flight Option</Label>
              <div className="flex gap-6 mt-4">
                {FLIGHT_OPTIONS.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFlightOption(f)}
                    className={`px-4 py-1 rounded-full border ${
                      form.flight === f
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-[#2b2b2b]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </section>

            {/* Itinerary Section */}
            <section className="pt-8 border-t">
              <div className="flex items-center justify-between mb-6">
                <Label className="text-lg font-semibold text-[#4b3fb3]">Itinerary</Label>
                <Button
                  size="sm"
                  onClick={addItineraryDay}
                  className="bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
                >
                  + Add day
                </Button>
              </div>
              {itineraryEditor && itineraryEditor.length ? (
                itineraryEditor.map((day, idx) => (
                  <div
                    key={idx}
                    className="p-6 mb-8 border rounded-md bg-white space-y-6"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <div className="font-medium">Day {day.day}</div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeItineraryDay(idx)}
                      >
                        Remove day
                      </Button>
                    </div>
                    <Input
                      value={day.title}
                      onChange={(e) =>
                        updateItineraryDay(idx, "title", e.target.value)
                      }
                      placeholder="Day title"
                    />
                    <div className="space-y-4">
                      {day.points.map((p, pi) => (
                        <div
                          key={pi}
                          className="flex gap-2 items-start"
                        >
                          <Textarea
                            value={p}
                            onChange={(e) =>
                              updateItineraryPoint(idx, pi, e.target.value)
                            }
                            className="flex-1"
                          />
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeItineraryPoint(idx, pi)}
                          >
                            Remove point
                          </Button>
                        </div>
                      ))}
                      <Button
                        size="sm"
                        onClick={() => addItineraryPoint(idx)}
                        className="bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
                      >
                        + Add point
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-400">
                  No itinerary days yet. Use “+ Add day” to create.
                </div>
              )}
            </section>

            {/* Price Details Section */}
            <section className="pt-8 pb-8 border-t">
              <div className="flex items-center justify-between mb-6">
                <Label className="text-lg font-semibold text-[#4b3fb3]">Price Details</Label>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8 min-w-0">
                <Input
                  value={priceDetailsEditor.originalPrice}
                  onChange={(e) =>
                    setPriceDetailsEditor((prev) => ({
                      ...prev,
                      originalPrice: e.target.value,
                    }))
                  }
                  placeholder="Original price"
                />
                <Input
                  value={priceDetailsEditor.discountedPrice}
                  onChange={(e) =>
                    setPriceDetailsEditor((prev) => ({
                      ...prev,
                      discountedPrice: e.target.value,
                    }))
                  }
                  placeholder="Discounted price"
                />
              </div>

              <div className="mb-6">
                <Label className="font-medium py-3">No-cost EMI plans</Label>
                {priceDetailsEditor.emiOptions && priceDetailsEditor.emiOptions.noCostPlans && priceDetailsEditor.emiOptions.noCostPlans.length ? (
                  priceDetailsEditor.emiOptions.noCostPlans.map((p, idx) => (
                    <div key={idx} className="p-4 mb-4 border rounded-md bg-white flex gap-4 items-center">
                      <Input value={p.months} onChange={(e) => updateNoCostPlan(idx, 'months', e.target.value)} placeholder="Months" />
                      <Input value={p.amount} onChange={(e) => updateNoCostPlan(idx, 'amount', e.target.value)} placeholder="Amount" />
                      <Button size="sm" variant="destructive" onClick={() => removeNoCostPlan(idx)}>Remove</Button>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-400">No no-cost plans added</div>
                )}
                <Button size="sm" onClick={addNoCostPlan} className="mt-2 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white">+ Add no-cost plan</Button>
              </div>

              <div className="mb-6">
                <Label className="font-medium py-3">Standard EMI plans</Label>
                {priceDetailsEditor.emiOptions && priceDetailsEditor.emiOptions.standardPlans && priceDetailsEditor.emiOptions.standardPlans.length ? (
                  priceDetailsEditor.emiOptions.standardPlans.map((p, idx) => (
                    <div key={idx} className="p-4 mb-4 border rounded-md bg-white flex gap-4 items-center">
                      <Input value={p.months} onChange={(e) => updateStandardPlan(idx, 'months', e.target.value)} placeholder="Months" />
                      <Input value={p.amount} onChange={(e) => updateStandardPlan(idx, 'amount', e.target.value)} placeholder="Amount" />
                      <Button size="sm" variant="destructive" onClick={() => removeStandardPlan(idx)}>Remove</Button>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-400">No standard plans added</div>
                )}
                <Button size="sm" onClick={addStandardPlan} className="mt-2 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white">+ Add standard plan</Button>
              </div>
            </section>

            {/* Additional Info & Contact (structured inputs) */}
            <section className="pt-8 border-t space-y-6">
              <Label className="text-lg font-semibold text-[#4b3fb3]">Additional Info</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-0">
                <Input
                  placeholder="Travel validity (e.g. 2025)"
                  value={additionalTravelValidity}
                  onChange={(e) => setAdditionalTravelValidity(e.target.value)}
                  className="w-full"
                />
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add highlight (e.g. Boat ride)"
                      value={additionalHighlightsInput}
                      onChange={(e) => setAdditionalHighlightsInput(e.target.value)}
                      className="w-full"
                    />
                    <Button
                      onClick={() => {
                        const v = additionalHighlightsInput.trim();
                        if (!v) return;
                        setAdditionalHighlights((prev) => [...prev, v]);
                        setAdditionalHighlightsInput('');
                      }}
                      className="px-4 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
                    >
                      Add
                    </Button>
                  </div>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {additionalHighlights && additionalHighlights.length ? (
                      additionalHighlights.map((h, idx) => (
                        <div key={idx} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800">
                          <span className="text-sm">{h}</span>
                          <button type="button" onClick={() => setAdditionalHighlights(prev => prev.filter((_, i) => i !== idx))} className="text-xs px-1">✖️</button>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-gray-400">No highlights added</div>
                    )}
                  </div>
                </div>
              </div>

              <Label className="text-lg font-semibold text-[#4b3fb3]">Contact</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start min-w-0">
                <Input
                  placeholder="Contact email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full"
                />
                <div>
                  <div className="flex gap-2 mb-2">
                    <Input
                      placeholder="Add phone number"
                      value={contactPhoneInput}
                      onChange={(e) => setContactPhoneInput(e.target.value)}
                      className="w-full"
                    />
                    <Button
                      onClick={() => {
                        const val = contactPhoneInput.trim();
                        if (!val) return;
                        setContactPhones((prev) => [...prev, val]);
                        setContactPhoneInput('');
                      }}
                      className="px-4 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
                    >
                      Add
                    </Button>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    {contactPhones.length ? (
                      contactPhones.map((p, idx) => (
                        <div key={idx} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100">
                          <span className="text-sm">{p}</span>
                          <button
                            type="button"
                            onClick={() => setContactPhones((prev) => prev.filter((_, i) => i !== idx))}
                            className="text-xs px-1"
                          >
                            ✖️
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-gray-400">No phones added</div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Duration & Inclusions Section (visual card + preset toggles) */}
            <section className="pt-8 border-t space-y-6">
              <Label className="text-lg font-semibold text-[#4b3fb3]">Duration & Inclusions</Label>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {/* Inputs */}
                <div className="flex-1 min-w-0">
                  <Input
                    placeholder="Duration (e.g. 5 Nights / 6 Days)"
                    value={durAndInclDuration}
                    onChange={(e) => setDurAndInclDuration(e.target.value)}
                    className="mb-2"
                  />
                  <Input
                    placeholder="Location (short string)"
                    value={durAndInclLocation}
                    onChange={(e) => setDurAndInclLocation(e.target.value)}
                  />
                </div>

                {/* Live preview card */}
                <div className="w-full sm:w-[360px]">
                  <div className="border rounded-2xl p-4 shadow-sm bg-white">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-pink-600 text-lg">⏱️</span>
                        <span className="font-semibold">Duration:</span>
                        <span className="truncate">{durAndInclDuration || <span className="text-gray-400">Not set</span>}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-rose-600 text-lg">📍</span>
                        <span className="font-semibold">Places to Visit:</span>
                        <span className="truncate">{durAndInclLocation || <span className="text-gray-400">Not set</span>}</span>
                      </div>
                    </div>

                    <div className="border-t mt-4 pt-4">
                      <div className="text-center text-sm font-semibold border px-4 py-1 w-fit mx-auto rounded-full bg-gray-100 text-gray-700 mb-4">
                        Package Includes
                      </div>

                      <div className="grid grid-cols-4 gap-4 justify-items-center">
                        {includesList && includesList.length ? includesList.map((inc) => (
                          <div key={inc.label} className="flex flex-col items-center text-sm text-gray-700">
                            <div className="text-2xl">{inc.icon}</div>
                            <span className="mt-1 text-xs">{inc.label}</span>
                          </div>
                        )) : (
                          <div className="col-span-4 text-sm text-gray-400">No includes added</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preset toggles + custom add */}
              <div>
                <Label className="text-sm font-medium">Choose Includes (tap to toggle preset)</Label>
                <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {INCLUSIONS_PRESET.map((inc) => {
                    const selected = includesList.some(i => String(i.label).toLowerCase() === String(inc).toLowerCase());
                    return (
                      <button
                        type="button"
                        key={inc}
                        onClick={() => {
                          setIncludesList(prev => {
                            const exists = prev.find(x => String(x.label).toLowerCase() === String(inc).toLowerCase());
                            if (exists) return prev.filter(x => String(x.label).toLowerCase() !== String(inc).toLowerCase());
                            const icon = INCLUSION_ICONS[inc] || '🏷️';
                            return [...prev, { label: inc, icon }];
                          });
                        }}
                        className={`flex flex-col items-center gap-1 p-2 rounded-lg border ${selected ? 'bg-blue-50 border-blue-300' : 'bg-gray-50 border-gray-200'}`}
                      >
                        <div className="text-2xl">{INCLUSION_ICONS[inc] || '🏷️'}</div>
                        <div className="text-xs text-gray-700">{inc}</div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-3 flex gap-2 items-center">
                  <Input placeholder="Custom label (e.g. Guide)" value={includeLabelInput} onChange={(e) => setIncludeLabelInput(e.target.value)} />
                  <Input placeholder="Emoji/icon" value={includeIconInput} onChange={(e) => setIncludeIconInput(e.target.value)} className="w-24" />
                  <Button onClick={() => {
                    const label = (includeLabelInput || '').trim();
                    const icon = (includeIconInput || '').trim() || '🏨';
                    if (!label) return;
                    setIncludesList(prev => [...prev, { label, icon }]);
                    setIncludeLabelInput('');
                    setIncludeIconInput('🏨');
                  }} className="px-4 bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white">Add</Button>
                </div>
              </div>
            </section>
          </div>

          <DialogFooter className="mt-10 flex justify-end gap-6 px-4 pb-8">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-gradient-to-r from-[#7B8EDD] to-[#5470E2] text-white"
            >
              {loading
                ? editMode
                  ? "Updating..."
                  : "Adding..."
                : editMode
                ? "Update Package"
                : "Add Package"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

