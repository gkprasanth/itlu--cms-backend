/*
 * Food Categories Seeder
 * Idempotently ensures a baseline set of FoodCategory documents exist.
 * Run with:  pnpm seed:categories  (after adding script in package.json)
 */

const { connectDB } = require("../config/db");
const { FoodCategory } = require("../models/landing-page");

// Source list provided by user
const RAW_CATEGORIES = [
  "All Categories",
  "north-indian",
  "lunch",
  "dinner",
  "sweets",
  "snacks",
  "breakfast",
  "south-indian",
];

// Helpers
const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toTitleCase = (str) =>
  str
    .split(/[-\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

async function seed() {
  await connectDB();
  console.log("🔌 Connected. Seeding food categories...");

  let order = 1;
  const results = [];

  for (const raw of RAW_CATEGORIES) {
    const slug = toSlug(raw);
    const title = /categories/i.test(raw) ? raw : toTitleCase(raw); // Keep 'All Categories' as-is

    // Upsert based on slug OR title so reruns are safe.
    const doc = await FoodCategory.findOneAndUpdate(
      { $or: [{ slug }, { title }] },
      {
        title,
        slug,
        category: slug, // normalize internal category field to slug
        order,
      },
      { new: true, upsert: true }
    );
    results.push({ title: doc.title, slug: doc.slug, order: doc.order });
    order++;
  }

  console.table(results);
  console.log("✅ Food categories seed complete (" + results.length + " items)." );
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed", err);
  process.exit(1);
});
