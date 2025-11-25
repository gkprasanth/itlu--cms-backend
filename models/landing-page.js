const mongoose = require("mongoose");

// 1. Header Banner Schema
const headerBannerSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Must be a valid email",
      },
    },
    openingHours: {
      type: String,
      required: false,
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

const HeaderBanner = mongoose.model("HeaderBanner", headerBannerSchema);

// 2. Hero Section Schema
const heroSectionSchema = new mongoose.Schema(
  {
    title1: {
      type: String,
      required: false,
      trim: true,
    },
    title2: {
      type: String,
      required: false,
      trim: true,
    },
    backgroundImage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const HeroSection = mongoose.model("HeroSection", heroSectionSchema);

// 3. Hero Bottom Scroll Menu Schema
const heroScrollMenuItemSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    title1: {
      type: String,
      required: false,
      trim: true,
    },
    title2: {
      type: String,
      required: false,
      trim: true,
    },
    order: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const HeroScrollMenuItem = mongoose.model("HeroScrollMenuItem", heroScrollMenuItemSchema);

// 4. About Section Schema
const aboutSectionSchema = new mongoose.Schema(
  {
    leftImage: {
      type: String,
      required: false,
    },
    rightTitle1: {
      type: String,
      required: false,
      trim: true,
    },
    rightTitle2: {
      type: String,
      required: false,
      trim: true,
    },
    legendTitle: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const AboutSection = mongoose.model("AboutSection", aboutSectionSchema);

// 5. How We Work Schema
const howWeWorkItemSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    order: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const HowWeWorkItem = mongoose.model("HowWeWorkItem", howWeWorkItemSchema);

// 6. Gallery Schema
const galleryItemSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
      trim: true,
    },
    order: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const GalleryItem = mongoose.model("GalleryItem", galleryItemSchema);

// 7. FAQ Schema
const faqItemSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: false,
      trim: true,
    },
    answer: {
      type: String,
      required: false,
    },
    order: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const FaqItem = mongoose.model("FaqItem", faqItemSchema);

// 8. Events Schema
const eventSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    mondayToThursday: {
      startTime: {
        type: String,
        required: false,
      },
      endTime: {
        type: String,
        required: false,
      },
    },
    fridayToSaturday: {
      startTime: {
        type: String,
        required: false,
      },
      endTime: {
        type: String,
        required: false,
      },
    },
    order: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);

// 9. Contact Section Schema
const contactSectionSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Must be a valid email",
      },
    },
    mobileNumber: {
      type: String,
      required: false,
      trim: true,
    },
    openingHours: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

const ContactSection = mongoose.model("ContactSection", contactSectionSchema);

// 10. Footer Contact Info Schema
const footerContactSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: false,
      validate: {
        validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Must be a valid email",
      },
    },
  },
  { timestamps: true }
);

const FooterContact = mongoose.model("FooterContact", footerContactSchema);

// 11. Testimonial Schema
const testimonialSchema = new mongoose.Schema(
  {
  name: { type: String, required: false, trim: true },
  role: { type: String, required: false, trim: true },
  text: { type: String, required: false },
  image: { type: String, required: false },
    quoteImage: { type: String, required: false },
  stars: { type: Number, required: false, min: 1, max: 5, default: 5 },
  order: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

// 12. Team Member Schema
const socialLinkSchema = new mongoose.Schema(
  {
  platform: { type: String, required: false },
  url: { type: String, required: false },
  },
  { _id: false }
);

const teamMemberSchema = new mongoose.Schema(
  {
  name: { type: String, required: false, trim: true },
  role: { type: String, required: false, trim: true },
  image: { type: String, required: false },
    bgImage: { type: String, required: false },
    socials: { type: [socialLinkSchema], default: [] },
  order: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

const TeamMember = mongoose.model("TeamMember", teamMemberSchema);

// 13. Navbar Item Schema
const navItemSchema = new mongoose.Schema(
  {
  label: { type: String, required: false, trim: true },
  href: { type: String, required: false, trim: true },
  order: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

const NavItem = mongoose.model("NavItem", navItemSchema);

// 14. Food Category (for marquee) Schema
const foodCategorySchema = new mongoose.Schema(
  {
  title: { type: String, required: false, trim: true },
  itemCount: { type: Number, required: false, default: 0 },
  icon: { type: String, required: false },
  category: { type: String, required: false, trim: true },
  slug: { type: String, required: false, trim: true },
  order: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

const FoodCategory = mongoose.model("FoodCategory", foodCategorySchema);

// 15. Location Section Schema
const locationSectionSchema = new mongoose.Schema(
  {
  address: { type: String, required: false },
  openingLine1: { type: String, required: false },
    openingLine2: { type: String, required: false },
    socialLinks: {
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      whatsapp: { type: String },
    },
  mapEmbedUrl: { type: String, required: false },
  },
  { timestamps: true }
);

const LocationSection = mongoose.model("LocationSection", locationSectionSchema);

module.exports = {
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
};