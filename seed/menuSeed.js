const { connectDB } = require("../config/db.js");
const MenuItem = require("../models/menuItem.model.js");

const seedMenuItems = async () => {
  const seedItems = [
    // ✅ your existing seed data remains unchanged
    {
      title: "Paneer Butter Masala",
      description: "Soft paneer cubes in a creamy tomato gravy, a North Indian favorite",
      price: 40,
      imageUrl: "https://example.com/paneer-butter-masala.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-1.jpg",
      categories: ["north-indian", "lunch", "dinner"],
    },
    {
      title: "Veggie Delight with Vegetable",
      description: "Fresh seasonal vegetables in aromatic spices",
      price: 60,
      imageUrl: "https://example.com/veggie-delight.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-2.jpg",
      categories: ["north-indian", "lunch", "dinner"],
    },
    {
      title: "Marrakesh Vegetarian Curry",
      description: "Exotic Moroccan-style vegetable curry with warming spices",
      price: 30,
      imageUrl: "https://example.com/marrakesh-vegetarian-curry.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-3.jpg",
      categories: ["north-indian", "lunch", "dinner"],
    },
    {
      title: "Spicy Vegan Potato Curry",
      description: "Bold and flavorful potato curry with aromatic spices",
      price: 50,
      imageUrl: "https://example.com/spicy-vegan-potato-curry.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-4.jpg",
      categories: ["north-indian", "lunch", "dinner"],
    },
    {
      title: "Apple Pie with Cream",
      description: "Classic dessert with buttery crust and sweet apple filling",
      price: 80,
      imageUrl: "https://example.com/apple-pie-with-cream.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-5.jpg",
      categories: ["sweets", "snacks"],
    },
    {
      title: "French Onion Soup",
      description: "Rich caramelized onion soup with melted cheese",
      price: 28,
      imageUrl: "https://example.com/french-onion-soup.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-6.jpg",
      categories: ["snacks", "breakfast", "lunch"],
    },
    {
      title: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potatoes, served with chutney and sambar",
      price: 80,
      imageUrl: "https://example.com/masala-dosa.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-1.jpg",
      categories: ["south-indian", "breakfast"],
    },
    {
      title: "Dal Tadka",
      description: "Yellow lentils tempered with spices, a staple of Indian comfort food",
      price: 90,
      imageUrl: "https://example.com/dal-tadka.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-2.jpg",
      categories: ["north-indian", "lunch", "dinner"],
    },
    {
      title: "Aloo Paratha",
      description: "Whole wheat flatbread stuffed with spiced potatoes, served with curd",
      price: 70,
      imageUrl: "https://example.com/aloo-paratha.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-3.jpg",
      categories: ["north-indian", "breakfast"],
    },
    {
      title: "Vegetable Pulao",
      description: "Fragrant basmati rice cooked with mixed vegetables and spices",
      price: 110,
      imageUrl: "https://example.com/vegetable-pulao.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-4.jpg",
      categories: ["north-indian", "lunch", "dinner"],
    },
    {
      title: "Chole Bhature",
      description: "Spicy chickpea curry served with fluffy fried bread",
      price: 120,
      imageUrl: "https://example.com/chole-bhature.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-5.jpg",
      categories: ["north-indian", "breakfast", "lunch"],
    },
    {
      title: "Gulab Jamun",
      description: "Soft, syrup-soaked milk dumplings, the perfect sweet ending",
      price: 60,
      imageUrl: "https://example.com/gulab-jamun.jpg",
      fallbackImagePath: "/assets/img/menu/menu-1-item-1-6.jpg",
      categories: ["sweets"],
    },
  ];

  try {
    await MenuItem.deleteMany({});
    console.log("🗑 Existing menu items removed");

    await MenuItem.insertMany(seedItems);
    console.log("✅ Seeded menu items successfully!");
  } catch (error) {
    console.error("❌ Failed to seed menu items:", error);
  }
};

(async () => {
  await connectDB(); // ✅ ensure DB is connected
  await seedMenuItems();
  process.exit(0);  // ✅ exit cleanly
})();
