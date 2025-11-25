  const { storage } = require("../mongoStorage");
  const { insertMenuItemSchema } = require("../validations/menuItem.schema");
  const { FoodCategory } = require("../models/landing-page");
  const { z } = require("zod");

  exports.getAllMenuItems = async (req, res) => {
    try {
      const items = await storage.getAllMenuItems();
      const mapped = items.map((doc) => {
        const obj = doc.toObject();
        // If remote image with provided local fallback, use fallback path
        if (obj.imageUrl && /^https?:\/\//.test(obj.imageUrl) && obj.fallbackImagePath) {
          obj.imageUrl = obj.fallbackImagePath;
        }
        return obj;
      });
      res.json(mapped);
    } catch {
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  };

  exports.getMenuItemByCategory = async (req, res) => {
    try {
      const { category } = req.params;
      const items = await storage.getMenuItemsByCategory(category);
      const mapped = items.map((doc) => {
        const obj = doc.toObject();
        if (obj.imageUrl && /^https?:\/\//.test(obj.imageUrl) && obj.fallbackImagePath) {
          obj.imageUrl = obj.fallbackImagePath;
        }
        return obj;
      });
      res.json(mapped);
    } catch {
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  };

  exports.getMenuItemById = async (req, res) => {
    try {
      const { id } = req.params;
      const item = await storage.getMenuItemById(id);
      if (!item) return res.status(404).json({ error: "Menu item not found" });
      const obj = item.toObject();
      if (obj.imageUrl && /^https?:\/\//.test(obj.imageUrl) && obj.fallbackImagePath) {
        obj.imageUrl = obj.fallbackImagePath;
      }
      res.json(obj);
    } catch {
      res.status(500).json({ error: "Failed to fetch menu item" });
    }
  };

  exports.createMenuItem = async (req, res) => {
    try {
      console.log("[menu:create] raw body", req.body);

      // If a category string is provided, enforce that it exists in FoodCategory collection
      if (req.body.category) {
        const cat = await FoodCategory.findOne({
          $or: [
            { slug: req.body.category },
            { category: req.body.category },
            { title: req.body.category }
          ]
        });
        if (!cat) {
          return res.status(400).json({ error: "Category does not exist. Please choose one from Food Categories." });
        }
        // Normalize stored category to the slug if available for consistency
        if (cat.slug) {
          req.body.category = cat.slug;
        }
      }

      // If an array of categories is provided, validate each against FoodCategory
      if (Array.isArray(req.body.categories)) {
        const incoming = req.body.categories.filter((v) => typeof v === "string");
        if (incoming.length !== req.body.categories.length) {
          return res.status(400).json({ error: "Invalid categories payload." });
        }
        const cats = await FoodCategory.find({
          $or: [
            { slug: { $in: incoming } },
            { category: { $in: incoming } },
            { title: { $in: incoming } },
          ],
        }).lean();
        const matchSet = new Map();
        for (const c of cats) {
          // prefer slug, fall back to category, else title
          const normalized = c.slug || c.category || c.title;
          matchSet.set((c.slug || c.category || c.title).toString(), normalized);
        }
        const notFound = incoming.filter((x) => !matchSet.has(x));
        if (notFound.length > 0) {
          return res.status(400).json({
            error: `Unknown categories: ${notFound.join(", ")}. Please add them in Food Categories first.`,
          });
        }
        // Normalize all incoming values to slugs (or best available canonical)
        req.body.categories = incoming.map((x) => matchSet.get(x));
      }

      const result = insertMenuItemSchema.safeParse(req.body);
      let payload = req.body;
      if (!result.success) {
        console.warn("[menu:create] validation errors (bypassed)", result.error.errors);
      } else {
        payload = result.data;
      }
      const newItem = await storage.createMenuItem(payload);
      return res.status(201).json(newItem);
    } catch (error) {
      console.error("[menu:create] exception", error);
      return res.status(500).json({ error: "Failed to create menu item" });
    }
  };

  exports.updateMenuItem = async (req, res) => {
    try {
      const { id } = req.params;
      console.log("[menu:update] raw body", req.body);

      if (req.body.category) {
        const cat = await FoodCategory.findOne({
          $or: [
            { slug: req.body.category },
            { category: req.body.category },
            { title: req.body.category }
          ]
        });
        if (!cat) {
          return res.status(400).json({ error: "Category does not exist. Please choose one from Food Categories." });
        }
        if (cat.slug) {
          req.body.category = cat.slug;
        }
      }

      if (Array.isArray(req.body.categories)) {
        const incoming = req.body.categories.filter((v) => typeof v === "string");
        const cats = await FoodCategory.find({
          $or: [
            { slug: { $in: incoming } },
            { category: { $in: incoming } },
            { title: { $in: incoming } },
          ],
        }).lean();
        const matchSet = new Map();
        for (const c of cats) {
          const normalized = c.slug || c.category || c.title;
          matchSet.set((c.slug || c.category || c.title).toString(), normalized);
        }
        const notFound = incoming.filter((x) => !matchSet.has(x));
        if (notFound.length > 0) {
          return res.status(400).json({
            error: `Unknown categories: ${notFound.join(", ")}. Please add them in Food Categories first.`,
          });
        }
        req.body.categories = incoming.map((x) => matchSet.get(x));
      }

      const result = insertMenuItemSchema.safeParse(req.body);
      let payload = req.body;
      if (result.success) {
        payload = result.data;
      } else {
        console.warn("[menu:update] validation errors (bypassed)", result.error.errors);
      }
      const updatedItem = await storage.updateMenuItem(id, payload);
      if (!updatedItem) return res.status(404).json({ error: "Menu item not found" });
      return res.json(updatedItem);
    } catch (e) {
      console.error("[menu:update] exception", e);
      return res.status(500).json({ error: "Failed to update menu item" });
    }
  };

  exports.deleteMenuItem = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteMenuItem(id);
      if (!deleted) return res.status(404).json({ error: "Menu item not found" });
      res.status(204).send();
    } catch {
      res.status(500).json({ error: "Failed to delete menu item" });
    }
  };
