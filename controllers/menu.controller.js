  const { storage } = require("../mongoStorage");
  const { insertMenuItemSchema } = require("../validations/menuItem.schema");
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
      const validatedData = insertMenuItemSchema.parse(req.body);
      const newItem = await storage.createMenuItem(validatedData);
      res.status(201).json(newItem);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create menu item" });
    }
  };

  exports.updateMenuItem = async (req, res) => {
    try {
      const { id } = req.params;
      const validatedData = insertMenuItemSchema.parse(req.body);
      const updatedItem = await storage.updateMenuItem(id, validatedData);
      if (!updatedItem) return res.status(404).json({ error: "Menu item not found" });
      res.json(updatedItem);
    } catch {
      res.status(500).json({ error: "Failed to update menu item" });
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
