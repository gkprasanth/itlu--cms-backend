const { createServer } = require("http");
const menuController = require("./controllers/menu.controller");
const landingController = require("./controllers/landing.controller");

async function registerRoutes(app) {

  // Header Banner Routes
  app.get("/api/header-banner", landingController.getHeaderBanner);
  app.put("/api/header-banner", landingController.updateHeaderBanner);

  // Hero Section Routes
  app.get("/api/hero-section", landingController.getHeroSection);
  app.put("/api/hero-section", landingController.updateHeroSection);

  // Hero Scroll Menu Routes
  app.get("/api/hero-scroll-menu", landingController.getAllHeroScrollMenuItems);
  app.post("/api/hero-scroll-menu", landingController.createHeroScrollMenuItem);
  app.put("/api/hero-scroll-menu/:id", landingController.updateHeroScrollMenuItem);
  app.delete("/api/hero-scroll-menu/:id", landingController.deleteHeroScrollMenuItem);

  // About Section Routes
  app.get("/api/about-section", landingController.getAboutSection);
  app.put("/api/about-section", landingController.updateAboutSection);
  app.post("/api/about-section", landingController.createAboutSection);

  // How We Work Routes
  app.get("/api/how-we-work", landingController.getAllHowWeWorkItems);
  app.post("/api/how-we-work", landingController.createHowWeWorkItem);
  app.put("/api/how-we-work/:id", landingController.updateHowWeWorkItem);
  app.delete("/api/how-we-work/:id", landingController.deleteHowWeWorkItem);

  // Gallery Routes
  app.get("/api/gallery", landingController.getAllGalleryItems);
  app.post("/api/gallery", landingController.createGalleryItem);
  app.put("/api/gallery/:id", landingController.updateGalleryItem);
  app.delete("/api/gallery/:id", landingController.deleteGalleryItem);

  // FAQ Routes
  app.get("/api/faq", landingController.getAllFaqItems);
  app.post("/api/faq", landingController.createFaqItem);
  app.put("/api/faq/:id", landingController.updateFaqItem);
  app.delete("/api/faq/:id", landingController.deleteFaqItem);

  // Events Routes
  app.get("/api/events", landingController.getAllEvents);
  app.post("/api/events", landingController.createEvent);
  app.put("/api/events/:id", landingController.updateEvent);
  app.delete("/api/events/:id", landingController.deleteEvent);

  // Contact Section Routes
  app.get("/api/contact-section", landingController.getContactSection);
  app.post("/api/contact-section", landingController.createContactSection);
  app.put("/api/contact-section", landingController.updateContactSection);

  // Footer Contact Routes
  app.get("/api/footer-contact", landingController.getFooterContact);
  app.post("/api/footer-contact", landingController.createFooterContact);
  app.put("/api/footer-contact", landingController.updateFooterContact);

  // Testimonials Routes
  app.get("/api/testimonials", landingController.getAllTestimonials);
  app.post("/api/testimonials", landingController.createTestimonial);
  app.put("/api/testimonials/:id", landingController.updateTestimonial);
  app.delete("/api/testimonials/:id", landingController.deleteTestimonial);

  // Team Members Routes
  app.get("/api/team", landingController.getAllTeamMembers);
  app.post("/api/team", landingController.createTeamMember);
  app.put("/api/team/:id", landingController.updateTeamMember);
  app.delete("/api/team/:id", landingController.deleteTeamMember);

  // Navbar Routes
  app.get("/api/navbar", landingController.getAllNavItems);
  app.post("/api/navbar", landingController.createNavItem);
  app.put("/api/navbar/:id", landingController.updateNavItem);
  app.delete("/api/navbar/:id", landingController.deleteNavItem);

  // Food Categories Routes
  app.get("/api/food-categories", landingController.getAllFoodCategories);
  app.post("/api/food-categories", landingController.createFoodCategory);
  app.put("/api/food-categories/:id", landingController.updateFoodCategory);
  app.delete("/api/food-categories/:id", landingController.deleteFoodCategory);

  // Location Section Routes
  app.get("/api/location-section", landingController.getLocationSection);
  app.put("/api/location-section", landingController.updateLocationSection);



  // Menu routes
  app.get("/api/menu", menuController.getAllMenuItems);
  app.get("/api/menu/category/:category", menuController.getMenuItemByCategory);
  app.get("/api/menu/:id", menuController.getMenuItemById);
  app.post("/api/menu", menuController.createMenuItem);
  app.put("/api/menu/:id", menuController.updateMenuItem);
  app.delete("/api/menu/:id", menuController.deleteMenuItem);

  const httpServer = createServer(app);
  return httpServer;
}

module.exports = { registerRoutes };
