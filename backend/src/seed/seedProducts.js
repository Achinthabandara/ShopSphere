
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
const Product = require("../models/Product");

const sampleProducts = [
  {
    name: "Wireless Mouse",
    description: "Comfortable wireless mouse for everyday use.",
    price: 2500,
    category: "Electronics",
    image: "",
    stock: 25,
  },
  {
    name: "Mechanical Keyboard",
    description: "Mechanical keyboard suitable for gaming and programming.",
    price: 8500,
    category: "Electronics",
    image: "",
    stock: 15,
  },
  {
    name: "USB-C Hub",
    description: "Multiport USB-C hub for laptops and other devices.",
    price: 4500,
    category: "Electronics",
    image: "",
    stock: 20,
  },
  {
    name: "Notebook",
    description: "A5 notebook for studying and taking notes.",
    price: 600,
    category: "Stationery",
    image: "",
    stock: 50,
  },
  {
    name: "Backpack",
    description: "Everyday backpack for university and travel.",
    price: 5500,
    category: "Accessories",
    image: "",
    stock: 12,
  },
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");

    await Product.insertMany(sampleProducts);

    console.log("Sample products inserted successfully");
  } catch (error) {
    console.error("Error seeding products:", error.message);
  } finally {
    await mongoose.disconnect();
  }
}

seedProducts();
