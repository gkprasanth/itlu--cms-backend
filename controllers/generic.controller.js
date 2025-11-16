// controllers/generic.controller.js
exports.createController = (model) => ({
  getAll: async (req, res) => {
    try {
      const items = await model.find();
      res.json(items);
    } catch {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  },

  getById: async (req, res) => {
    try {
      const item = await model.findById(req.params.id);
      if (!item) return res.status(404).json({ error: "Not found" });
      res.json(item);
    } catch {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  },

  create: async (req, res) => {
    try {
      const newItem = await model.create(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updated) return res.status(404).json({ error: "Not found" });
      res.json(updated);
    } catch {
      res.status(500).json({ error: "Failed to update" });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await model.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ error: "Not found" });
      res.status(204).send();
    } catch {
      res.status(500).json({ error: "Failed to delete" });
    }
  },
});
