const { HeaderBanner, HeroSection, HeroScrollMenuItem, AboutSection, HowWeWorkItem, GalleryItem, FaqItem, Event, ContactSection, FooterContact, Testimonial, TeamMember, NavItem, FoodCategory, LocationSection } = require("../models/landing-page");

// Header Banner Controller
exports.getHeaderBanner = async (req, res) => {
  try {
    const banner = await HeaderBanner.findOne();
    if (!banner) return res.status(404).json({ error: "Header banner not found" });
    res.json(banner);
  } catch {
    res.status(500).json({ error: "Failed to fetch header banner" });
  }
};

exports.updateHeaderBanner = async (req, res) => {
  try {
    const banner = await HeaderBanner.findOneAndUpdate({}, req.body, { 
      new: true, 
      upsert: true 
    });
    res.json(banner);
  } catch {
    res.status(500).json({ error: "Failed to update header banner" });
  }
};

// Hero Section Controller
exports.getHeroSection = async (req, res) => {
  try {
    const hero = await HeroSection.findOne();
    if (!hero) return res.status(404).json({ error: "Hero section not found" });
    res.json(hero);
  } catch {
    res.status(500).json({ error: "Failed to fetch hero section" });
  }
};

exports.updateHeroSection = async (req, res) => {
  try {
    const hero = await HeroSection.findOneAndUpdate({}, req.body, { 
      new: true, 
      upsert: true 
    });
    res.json(hero);
  } catch {
    res.status(500).json({ error: "Failed to update hero section" });
  }
};

// Hero Scroll Menu Controller
exports.getAllHeroScrollMenuItems = async (req, res) => {
  try {
    const items = await HeroScrollMenuItem.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch scroll menu items" });
  }
};

exports.createHeroScrollMenuItem = async (req, res) => {
  try {
    const item = await HeroScrollMenuItem.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create scroll menu item" });
  }
};

exports.updateHeroScrollMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await HeroScrollMenuItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update scroll menu item" });
  }
};

exports.deleteHeroScrollMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await HeroScrollMenuItem.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete scroll menu item" });
  }
};

// About Section Controller
exports.getAboutSection = async (req, res) => {
  try {
    const about = await AboutSection.findOne();
    if (!about) return res.status(404).json({ error: "About section not found" });
    res.json(about);
  } catch {
    res.status(500).json({ error: "Failed to fetch about section" });
  }
};

exports.updateAboutSection = async (req, res) => {
  try {
    const about = await AboutSection.findOneAndUpdate({}, req.body, { 
      new: true, 
      upsert: true 
    });
    res.json(about);
  } catch {
    res.status(500).json({ error: "Failed to update about section" });
  }
};


exports.createAboutSection = async (req, res) => {
  try {
    const about = await AboutSection.create(req.body);
    res.status(201).json(about);
  } catch {
    res.status(500).json({ error: "Failed to create about section" });
  }
};

// How We Work Controller
exports.getAllHowWeWorkItems = async (req, res) => {
  try {
    const items = await HowWeWorkItem.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch how we work items" });
  }
};

exports.createHowWeWorkItem = async (req, res) => {
  try {
    const item = await HowWeWorkItem.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create how we work item" });
  }
};

exports.updateHowWeWorkItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await HowWeWorkItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update how we work item" });
  }
};

exports.deleteHowWeWorkItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await HowWeWorkItem.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete how we work item" });
  }
};

// Gallery Controller
exports.getAllGalleryItems = async (req, res) => {
  try {
    const items = await GalleryItem.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch gallery items" });
  }
};

exports.createGalleryItem = async (req, res) => {
  try {
    const item = await GalleryItem.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create gallery item" });
  }
};

exports.updateGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await GalleryItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update gallery item" });
  }
};

exports.deleteGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await GalleryItem.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete gallery item" });
  }
};

// FAQ Controller
exports.getAllFaqItems = async (req, res) => {
  try {
    const items = await FaqItem.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch FAQ items" });
  }
};

exports.createFaqItem = async (req, res) => {
  try {
    const item = await FaqItem.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create FAQ item" });
  }
};

exports.updateFaqItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await FaqItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update FAQ item" });
  }
};

exports.deleteFaqItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await FaqItem.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete FAQ item" });
  }
};

// Events Controller
exports.getAllEvents = async (req, res) => {
  try {
    const items = await Event.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const item = await Event.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create event" });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Event.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Event not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update event" });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Event.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Event not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete event" });
  }
};

// Contact Section Controller
exports.getContactSection = async (req, res) => {
  try {
    const contact = await ContactSection.findOne();
    if (!contact) return res.status(404).json({ error: "Contact section not found" });
    res.json(contact);
  } catch {
    res.status(500).json({ error: "Failed to fetch contact section" });
  }
};

exports.createContactSection = async (req, res) => {
  try {
    const contact = await ContactSection.create(req.body);
    res.status(201).json(contact);
  } catch {
    res.status(500).json({ error: "Failed to create contact section" });
  }
};

exports.updateContactSection = async (req, res) => {
  try {
    const contact = await ContactSection.findOneAndUpdate({}, req.body, { 
      new: true, 
      upsert: true 
    });
    res.json(contact);
  } catch {
    res.status(500).json({ error: "Failed to update contact section" });
  }
};

// Footer Contact Controller
exports.getFooterContact = async (req, res) => {
  try {
    const footer = await FooterContact.findOne();
    if (!footer) return res.status(404).json({ error: "Footer contact not found" });
    res.json(footer);
  } catch {
    res.status(500).json({ error: "Failed to fetch footer contact" });
  }
};

exports.createFooterContact = async (req, res) => {
  try {
    const footer = await FooterContact.create(req.body);
    res.status(201).json(footer);
  } catch {
    res.status(500).json({ error: "Failed to create footer contact" });
  }
};

exports.updateFooterContact = async (req, res) => {
  try {
    const footer = await FooterContact.findOneAndUpdate({}, req.body, { 
      new: true, 
      upsert: true 
    });
    res.json(footer);
  } catch {
    res.status(500).json({ error: "Failed to update footer contact" });
  }
};

// Testimonials Controller
exports.getAllTestimonials = async (req, res) => {
  try {
    const items = await Testimonial.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch testimonials" });
  }
};

exports.createTestimonial = async (req, res) => {
  try {
    const item = await Testimonial.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create testimonial" });
  }
};

exports.updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Testimonial.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Testimonial not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update testimonial" });
  }
};

exports.deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Testimonial.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Testimonial not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete testimonial" });
  }
};

// Team Members Controller
exports.getAllTeamMembers = async (req, res) => {
  try {
    const items = await TeamMember.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch team members" });
  }
};

exports.createTeamMember = async (req, res) => {
  try {
    const item = await TeamMember.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create team member" });
  }
};

exports.updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await TeamMember.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Team member not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update team member" });
  }
};

exports.deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await TeamMember.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Team member not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete team member" });
  }
};

// Navbar Items Controller
exports.getAllNavItems = async (req, res) => {
  try {
    const items = await NavItem.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch navbar items" });
  }
};

exports.createNavItem = async (req, res) => {
  try {
    const item = await NavItem.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create navbar item" });
  }
};

exports.updateNavItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await NavItem.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Navbar item not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update navbar item" });
  }
};

exports.deleteNavItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await NavItem.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Navbar item not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete navbar item" });
  }
};

// Food Categories Controller
exports.getAllFoodCategories = async (req, res) => {
  try {
    const items = await FoodCategory.find().sort({ order: 1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch food categories" });
  }
};

exports.createFoodCategory = async (req, res) => {
  try {
    const item = await FoodCategory.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(500).json({ error: "Failed to create food category" });
  }
};

exports.updateFoodCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await FoodCategory.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Food category not found" });
    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to update food category" });
  }
};

exports.deleteFoodCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await FoodCategory.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ error: "Food category not found" });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete food category" });
  }
};

// Location Section Controller
exports.getLocationSection = async (req, res) => {
  try {
    const section = await LocationSection.findOne();
    if (!section) return res.status(404).json({ error: "Location section not found" });
    res.json(section);
  } catch {
    res.status(500).json({ error: "Failed to fetch location section" });
  }
};

exports.updateLocationSection = async (req, res) => {
  try {
    const section = await LocationSection.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(section);
  } catch {
    res.status(500).json({ error: "Failed to update location section" });
  }
};