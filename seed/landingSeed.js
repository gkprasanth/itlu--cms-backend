const { connectDB } = require("../config/db");
const {
  HeaderBanner,
  HeroSection,
  HeroScrollMenuItem,
  AboutSection,
  HowWeWorkItem,
  GalleryItem,
  FaqItem,
  Event,
  ContactSection,
  FooterContact,
  Testimonial,
  TeamMember,
  NavItem,
  FoodCategory,
  LocationSection,
} = require("../models/landing-page");

async function clearCollections() {
  await Promise.all([
    HeaderBanner.deleteMany({}),
    HeroSection.deleteMany({}),
    HeroScrollMenuItem.deleteMany({}),
    AboutSection.deleteMany({}),
    HowWeWorkItem.deleteMany({}),
    GalleryItem.deleteMany({}),
    FaqItem.deleteMany({}),
    Event.deleteMany({}),
    ContactSection.deleteMany({}),
    FooterContact.deleteMany({}),
    Testimonial.deleteMany({}),
    TeamMember.deleteMany({}),
    NavItem.deleteMany({}),
    FoodCategory.deleteMany({}),
    LocationSection.deleteMany({}),
  ]);
}

async function seed() {
  // Header Banner
  await HeaderBanner.create({
    address:
      "Cable Bridge Rd, Masthan Nagar, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033",
    email: "info@Itlu.com",
    openingHours: "Mon to Sat - 9am to 5pm",
    mobileNumber: "+263 6547 9875",
  });

  // Hero Section
  await HeroSection.create({
    title1: "Traditional Veg Flavors",
    title2: "Authentic Vegetarian Cuisine",
    backgroundImage: "/assets/img/hero/hero-img.png",
  });

  // Hero Scroll Menu (mirror static frontend categories so CMS shows all)
  const heroScrollItems = [
    {
      image: "/assets/img/category/category_1-1.png",
      title1: "South Indian Thali",
      title2: "12 Items Available",
      order: 1,
    },
    {
      image: "/assets/img/category/category_1-2.png",
      title1: "Paneer Butter Masala",
      title2: "10 Items Available",
      order: 2,
    },
    {
      image: "/assets/img/category/category_1-2.png",
      title1: "Masala Dosa",
      title2: "8 Items Available",
      order: 3,
    },
    {
      image: "/assets/img/category/category_1-4.png",
      title1: "Dal Tadka",
      title2: "9 Items Available",
      order: 4,
    },
    {
      image: "/assets/img/category/category_1-5.png",
      title1: "Mixed Veg Sabzi",
      title2: "7 Items Available",
      order: 5,
    },
    {
      image: "/assets/img/category/category_1-1.png",
      title1: "Gulab Jamun",
      title2: "5 Items Available",
      order: 6,
    },
  ];
  await HeroScrollMenuItem.insertMany(heroScrollItems);

  // About Section
  await AboutSection.create({
    leftImage: "/assets/img/about/about_1_1.png",
    rightTitle1: "About our restaurant",
    rightTitle2: "Inviting you to experience our",
    legendTitle: "Traditional Veg restaurant",
    description:
      "Rooted in the rich heritage of Indian vegetarian cuisine, ITLU brings you the flavors of home-cooked meals, crafted with love and tradition. Our chefs use time-honored recipes and the freshest ingredients to create dishes that celebrate the diversity and depth of vegetarian food. We believe that the best meals are those shared with loved ones, where every bite tells a story of heritage, culture, and love.",
  });

  // How We Work
  await HowWeWorkItem.insertMany([
    {
      image: "/assets/img/process/process-3-1.png",
      title: "Order Your Favorites",
      description:
        "Browse our menu filled with delicious dishes, from signature specials to classic foods.",
      order: 1,
    },
    {
      image: "/assets/img/process/process-3-2.png",
      title: "Freshly Prepared with Care",
      description:
        "Our chefs get to work, preparing your meal with fresh, high-quality ingredients.",
      order: 2,
    },
    {
      image: "/assets/img/process/process-3-3.png",
      title: "Enjoy & Savor Every Bite",
      description:
        "Relax and enjoy your food in our cozy restaurant, or take it to-go. Great taste, great service",
      order: 3,
    },
  ]);

  // Gallery
  await GalleryItem.insertMany([
    { image: "/assets/img/gallery/gallery_1_1.jpg", title: "Traditional Veg Thali", order: 1 },
    { image: "/assets/img/gallery/gallery_1_2.jpg", title: "Paneer Butter Masala", order: 2 },
    { image: "/assets/img/gallery/gallery_1_3.jpg", title: "South Indian Dosa", order: 3 },
    { image: "/assets/img/gallery/gallery_1_4.jpg", title: "Mixed Veg Curry", order: 4 },
    { image: "/assets/img/gallery/gallery_1_5.jpg", title: "Dal Tadka & Rice", order: 5 },
    { image: "/assets/img/gallery/gallery_1_6.jpg", title: "Indian Sweets Platter", order: 6 },
  ]);

  // FAQ
  const defaultFAQs = [
    {
      question: "What warranties do I have for my shipments?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 1,
    },
    {
      question: "Do you offer dine-in, takeout, and delivery services?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 2,
    },
    {
      question: "Can I place an order online or by phone?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 3,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 4,
    },
    {
      question: "How do you ensure food safety and hygiene?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 5,
    },
    {
      question: "Can I customize my meal (remove ingredients.)?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 6,
    },
    {
      question: "What about payment security?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 7,
    },
    {
      question: "What are your opening hours?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 8,
    },
    {
      question: "Do you offer any combo meals or special deals?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 9,
    },
    {
      question: "Are there any gluten-free items on your menu?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 10,
    },
    {
      question: "Are your ingredients fresh and locally sourced?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 11,
    },
    {
      question: "Is parking available at your restaurant location?",
      answer:
        "With any financial product that you buy, it is Important that you know you are getting the best advice from a reputable company as often you will have to provide sensitive information online or over the internet.",
      order: 12,
    },
  ];
  await FaqItem.insertMany(defaultFAQs);

  // Events
  await Event.insertMany([
    {
      image: "/assets/img/opening/opening-1-left.jpg",
      title: "Our Events",
      mondayToThursday: { startTime: "10:00 AM", endTime: "20:00 PM" },
      fridayToSaturday: { startTime: "12:00 AM", endTime: "23:00 PM" },
      order: 1,
    },
  ]);

  // Contact Section
  await ContactSection.create({
    address:
      "Cable Bridge Rd, Masthan Nagar, CBI Colony, Jubilee Hills 98380",
    email: "info@Itlu.com",
    mobileNumber: "+256-6547-98749",
    openingHours: "Monday - Saturday: 9:00am - 18:00pm; Sunday: Closed",
  });

  // Footer Contact
  await FooterContact.create({
    phone: "+256 3698 54789 / +16354786985",
    email: "info@Itlu.com",
  });

  // Testimonials
  await Testimonial.insertMany([
    {
      name: "Prabhas",
      role: "Hero",
      text:
        "The thali here reminded me of my grandmother's kitchen. Every dish was bursting with flavor and tradition!",
      image: "/assets/img/testimonial/testi-1-1.png",
      quoteImage: "/assets/img/icon/testi-1-quote.png",
      stars: 5,
      order: 1,
    },
    {
      name: "Sai Pallavi",
      role: "Heroine",
      text:
        "As a vegetarian, I finally found a place that celebrates authentic Indian food. The dosas and sweets are a must-try!",
      image: "/assets/img/testimonial/testi-1-2.png",
      quoteImage: "/assets/img/icon/testi-1-quote.png",
      stars: 5,
      order: 2,
    },
  ]);

  // Team Members
  await TeamMember.insertMany([
    {
      name: "Sathya",
      role: "Expert Chef",
      image: "/assets/img/team/team_1_1.png",
      bgImage: "/assets/img/bg/team-1-bg-shape.png",
      socials: [
        { platform: "twitter", url: "https://twitter.com/" },
        { platform: "facebook", url: "https://facebook.com/" },
        { platform: "instagram", url: "https://instagram.com/" },
        { platform: "youtube", url: "https://youtube.com/" },
        { platform: "phone", url: "https://whatsapp.com/" },
      ],
      order: 1,
    },
    {
      name: "Sai Kiran",
      role: "Expert Chef",
      image: "/assets/img/team/team_1_2.png",
      bgImage: "/assets/img/bg/team-1-bg-shape.png",
      socials: [
        { platform: "twitter", url: "https://twitter.com/" },
        { platform: "facebook", url: "https://facebook.com/" },
        { platform: "instagram", url: "https://instagram.com/" },
        { platform: "youtube", url: "https://youtube.com/" },
        { platform: "phone", url: "https://whatsapp.com/" },
      ],
      order: 2,
    },
    {
      name: "Vikram",
      role: "Expert Chef",
      image: "/assets/img/team/team_1_3.png",
      bgImage: "/assets/img/bg/team-1-bg-shape.png",
      socials: [
        { platform: "twitter", url: "https://twitter.com/" },
        { platform: "facebook", url: "https://facebook.com/" },
        { platform: "instagram", url: "https://instagram.com/" },
        { platform: "youtube", url: "https://youtube.com/" },
        { platform: "phone", url: "https://whatsapp.com/" },
      ],
      order: 3,
    },
    {
      name: "Chef",
      role: "Expert Chef",
      image: "/assets/img/team/team_1_4.png",
      bgImage: "/assets/img/bg/team-1-bg-shape.png",
      socials: [
        { platform: "twitter", url: "https://twitter.com/" },
        { platform: "facebook", url: "https://facebook.com/" },
        { platform: "instagram", url: "https://instagram.com/" },
        { platform: "youtube", url: "https://youtube.com/" },
        { platform: "phone", url: "https://whatsapp.com/" },
      ],
      order: 4,
    },
  ]);

  // Navbar
  const baseNavItems = [
    { label: "HOME", href: "/", order: 1 },
    { label: "ABOUT", href: "#about-sec", order: 2 },
    { label: "MENU", href: "#menu-sec", order: 3 },
    { label: "Events", href: "#events-sec", order: 4 },
    { label: "Gallery", href: "#gallery-sec-1", order: 5 },
    { label: "Testimonials", href: "#testi-sec", order: 6 },
    { label: "FAQs", href: "#faq-sec", order: 7 },
    { label: "CONTACT", href: "#contact-sec", order: 8 },
  ];
  await NavItem.insertMany(baseNavItems);

  // Food Categories (for marquee)
  await FoodCategory.insertMany([
    {
      title: "South Indian Thali",
      itemCount: 12,
      icon: "/assets/img/category/category_1-1.png",
      category: "thali",
      slug: "south-indian-thali",
      order: 1,
    },
    {
      title: "Paneer Butter Masala",
      itemCount: 10,
      icon: "/assets/img/category/category_1-2.png",
      category: "curries",
      slug: "paneer-butter-masala",
      order: 2,
    },
    {
      title: "Masala Dosa",
      itemCount: 8,
      icon: "/assets/img/category/category_1-2.png",
      category: "south-indian",
      slug: "masala-dosa",
      order: 3,
    },
    {
      title: "Dal Tadka",
      itemCount: 9,
      icon: "/assets/img/category/category_1-4.png",
      category: "dal",
      slug: "dal-tadka",
      order: 4,
    },
    {
      title: "Mixed Veg Sabzi",
      itemCount: 7,
      icon: "/assets/img/category/category_1-5.png",
      category: "vegetables",
      slug: "mixed-veg-sabzi",
      order: 5,
    },
    {
      title: "Gulab Jamun",
      itemCount: 5,
      icon: "/assets/img/category/category_1-1.png",
      category: "desserts",
      slug: "gulab-jamun",
      order: 6,
    },
  ]);

  // Location Section
  await LocationSection.create({
    address:
      "Cable Bridge Rd, Masthan Nagar, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033",
    openingLine1: "Monday - Saturday: 6:00pm – 10:00pm",
    openingLine2: "Sunday: is the holiday",
    socialLinks: {
      facebook: "https://www.facebook.com/",
      twitter: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
      whatsapp: "https://www.whatsapp.com/",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd",
  });
}

(async () => {
  try {
    await connectDB();
    await clearCollections();
    await seed();
    console.log("✅ Seeded landing page data successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Failed to seed landing page data:", err);
    process.exit(1);
  }
})();
