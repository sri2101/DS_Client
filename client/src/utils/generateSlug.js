export const generateSlug = (name) => {
  if (!name || typeof name !== "string") return "";

  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")   // remove special characters
    .replace(/\s+/g, "-")           // replace spaces with dashes
    .replace(/-+/g, "-");           // collapse multiple dashes
};
