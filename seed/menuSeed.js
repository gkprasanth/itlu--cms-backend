const { connectDB } = require("../config/db.js");
const MenuItem = require("../models/menuItem.model.js");

const seedMenuItems = async () => {
  const seedItems = [
    // ── Mocktails ──────────────────────────────────────────────────
    {
      title: "Lavender Haze",
      description: "Floral & refreshing mocktail",
      price: 349,
      imageUrl:
        "https://itlu-menu.s3.eu-north-1.amazonaws.com/menu-items/1766333612661-429318247.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Mango Habanero",
      description: "Sweet & spicy mango mocktail",
      price: 329,
      imageUrl:
        "https://itlu-menu.s3.eu-north-1.amazonaws.com/menu-items/1766333696750-107950456.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Cucumber Mint Mojito",
      description: "Cooling cucumber & mint mocktail",
      price: 299,
      imageUrl:
        "https://oliviaskitchen.com/wp-content/uploads/2025/01/cucumber-mojito-mocktail-featured.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Kiwi Lemonade",
      description: "Tangy kiwi & lemon mocktail",
      price: 279,
      imageUrl: "https://i.ytimg.com/vi/-YuqwXOtnY8/hq720.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Guava Glow",
      description: "Pink guava mocktail",
      price: 299,
      imageUrl:
        "https://itlu-menu.s3.eu-north-1.amazonaws.com/menu-items/1766333774366-832204015.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Lychee Sunrise",
      description: "Lychee & orange layered mocktail",
      price: 349,
      imageUrl:
        "https://itlu-menu.s3.eu-north-1.amazonaws.com/menu-items/1766333349533-73511829.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Sweet Sunrise",
      description: "Orange & grenadine mocktail",
      price: 299,
      imageUrl:
        "https://i0.wp.com/sweetsandthankyou.com/wp-content/uploads/2022/01/Sweet-Sunrise-Mocktail23-2.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Blue Lagoon",
      description: "Blue curaçao lemonade mocktail",
      price: 279,
      imageUrl:
        "https://itlu-menu.s3.eu-north-1.amazonaws.com/menu-items/1766332783822-442719255.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Mango Milk Shake",
      description: "Creamy mango shake",
      price: 249,
      imageUrl:
        "https://www.funfoodfrolic.com/wp-content/uploads/2021/05/Mango-Shake-Thumbnail.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Strawberry Milk Shake",
      description: "Fresh strawberry shake",
      price: 249,
      imageUrl:
        "https://assets.epicurious.com/photos/647df8cad9749492c4d5d407/1:1/w_4506,h_4506,c_limit/StrawberryMilkshake_RECIPE_053123_3599.jpg",
      categories: ["mocktails"],
    },
    {
      title: "Chocolate Milk Shake",
      description: "Rich chocolate shake",
      price: 249,
      imageUrl:
        "https://www.organicvalley.coop/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5dqbssss%2Fproduction-v3%2F3ba3f137c02a6f320c156bb7c39e362bdbd87bb8-1356x1576.jpg&w=3840&q=75",
      categories: ["mocktails"],
    },

    // ── Thalis ────────────────────────────────────────────────────
    {
      title: "ITLU Weekend Special Thalli",
      description: "Special weekend feast with premium dishes & extras",
      price: 899,
      imageUrl:
        "https://itlu-menu.s3.eu-north-1.amazonaws.com/menu-items/1767164413150-728942580.jpg",
      categories: ["thalis"],
    },
    {
      title: "Weekday Thalli",
      description: "Wholesome everyday thali with rotating curries",
      price: 599,
      imageUrl: "",
      categories: ["thalis"],
    },

    // ── Ala Carte ─────────────────────────────────────────────────
    {
      title: "Dal Tadka",
      description: "Yellow lentils tempered with ghee & spices",
      price: 349,
      imageUrl:
        "https://vegecravings.com/wp-content/uploads/2018/01/Dal-Tadka-Recipe-Step-By-Step-Instructions-1024x822.jpg",
      categories: ["alacarte"],
    },
    {
      title: "Channa Masala",
      description: "Punjabi style chickpea curry",
      price: 379,
      imageUrl:
        "https://sixhungryfeet.com/wp-content/uploads/2023/06/Easy-Chana-Masala-Recipe-8.jpg",
      categories: ["alacarte"],
    },
    {
      title: "Kajju Paneer",
      description: "Paneer in rich cashew nut gravy",
      price: 449,
      imageUrl: "https://i.ytimg.com/vi/Cu9P1hUelRs/maxresdefault.jpg",
      categories: ["alacarte"],
    },
    {
      title: "Phool Makhana Curry",
      description: "Fox nuts in creamy gravy",
      price: 449,
      imageUrl:
        "https://www.madhuseverydayindian.com/wp-content/uploads/2025/09/dhaba-style-makhana-curry.jpg",
      categories: ["alacarte"],
    },
    {
      title: "Malai Kofta",
      description: "Cheese & veggie dumplings in creamy gravy",
      price: 449,
      imageUrl:
        "https://carameltintedlife.com/wp-content/uploads/2020/11/Malai-Kofta-1-of-1-9.jpg",
      categories: ["alacarte"],
    },
    {
      title: "Saag Paneer",
      description: "Paneer cubes in creamy spinach gravy",
      price: 429,
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saag-paneer-4893170.jpg",
      categories: ["alacarte"],
    },
    {
      title: "Paneer Butter Masala",
      description: "Classic paneer in buttery tomato gravy",
      price: 429,
      imageUrl: "",
      categories: ["alacarte"],
    },
    {
      title: "Paneer Tikka Masala",
      description: "Grilled paneer in spiced masala",
      price: 449,
      imageUrl: "",
      categories: ["alacarte"],
    },
    {
      title: "Kadai Paneer",
      description: "Paneer tossed in kadai spices",
      price: 429,
      imageUrl: "",
      categories: ["alacarte"],
    },
    {
      title: "Dal Makhani",
      description: "Slow-cooked black lentils in butter",
      price: 399,
      imageUrl: "",
      categories: ["alacarte"],
    },

    // ── Bakery ────────────────────────────────────────────────────
    {
      title: "Pineapple Pastry",
      description: "Eggless pineapple cream pastry",
      price: 149,
      imageUrl: "https://i.ytimg.com/vi/-ktkATXlRiU/maxresdefault.jpg",
      categories: ["bakery"],
    },
    {
      title: "Butterscotch Pastry",
      description: "Eggless butterscotch cream pastry",
      price: 149,
      imageUrl:
        "https://thumbs.dreamstime.com/b/butterscotch-pastry-various-kinds-baked-products-made-mainly-flour-sugar-milk-butter-42550303.jpg",
      categories: ["bakery"],
    },
    {
      title: "Black Forest Pastry",
      description: "Eggless chocolate & cherry pastry",
      price: 149,
      imageUrl:
        "https://kreamz.in/wp-content/uploads/2023/12/black-forest-pastry.webp",
      categories: ["bakery"],
    },
    {
      title: "Honey Cake",
      description: "Honey soaked cake slice",
      price: 129,
      imageUrl: "https://www.onceuponachef.com/images/2024/09/honey-cake-2.jpg",
      categories: ["bakery"],
    },
    {
      title: "Rasmalai Pastry",
      description: "Eggless rasmalai flavored cream pastry",
      price: 199,
      imageUrl: "",
      categories: ["bakery"],
    },
    {
      title: "Tiramisu Pastry",
      description: "Eggless tiramisu flavored cream pastry",
      price: 249,
      imageUrl: "",
      categories: ["bakery"],
    },
    {
      title: "Badam Milk Pastry",
      description: "Eggless almond milk flavored cream pastry",
      price: 249,
      imageUrl: "",
      categories: ["bakery"],
    },
    {
      title: "Dilpasand (Slice)",
      description: "Coconut & tutti-frutti filled sweet bread",
      price: 99,
      imageUrl:
        "https://m.media-amazon.com/images/I/61Cf6YKfipL._AC_UF894,1000_QL80_.jpg",
      categories: ["bakery"],
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
  process.exit(0); // ✅ exit cleanly
})();
