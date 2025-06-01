import logo from "./logo.png";
import banner from "./banner.png";
import bannerLarge from "./banner-l.png";
import kitchen_dish from "./categories/kitchen_dish.png";
import plant_pot from "./dummyProducts/plant_pot.png";
import star_icon from "./dummyProducts/star_icon.svg";
import dull_icon from "./dummyProducts/star_dull_icon.svg";


export const assets = {
  logo,
  banner,
  bannerLarge,
  star_icon,
  dull_icon,

  // category
  kitchen_dish,

  // dummy products
  plant_pot,
};

// categories
export const categories = [
  {
    title: "Plant Pots",
    path: "Plant-pots",
    image: kitchen_dish,
    bgColor: "#DFF5E3",
  },
  {
    title: "Diyas & Lamps",
    path: "Diyas",
    image: kitchen_dish,
    bgColor: "#FFE4C9",
  },
  {
    title: "Kitchen & Cooking",
    path: "Kitchen",
    image: kitchen_dish,
    bgColor: "#FFF7CE",
  },
  {
    title: "Gifting & Hampers",
    path: "Gifting",
    image: kitchen_dish,
    bgColor: "#E0F7FA",
  },
  {
    title: "Festival Special",
    path: "Festival",
    image: kitchen_dish,
    bgColor: "#FFE3ED",
  },
  {
    title: "Decorative Pieces",
    path: "Decorative",
    image: kitchen_dish,
    bgColor: "#E9E6FF",
  },
  {
    title: "Toys",
    path: "Toys",
    image: kitchen_dish,
    bgColor: "#FFF4D7",
  },
];

// dummy products
export const dummyProducts = [
  {
    id: "p1",
    name: "Terracotta Pot",
    category: "Plant Pots",
    price: 399,
    offerPrice: 299,
    images: [plant_pot, plant_pot, plant_pot, plant_pot, plant_pot],
    description: [
      "Handcrafted from 100% natural terracotta clay",
      "Ideal for indoor and outdoor plant decoration",
      "Porous material allows air and water flow to roots",
      "Eco-friendly and biodegradable",
      "Perfect for succulents, herbs, and decorative plants",
    ],
    createdAt: "2025-05-20T12:00:00Z",
    updatedAt: "2025-05-28T10:00:00Z",
    inStock: true,
  },
  {
    id: "p2",
    name: "Clay Diwali Diyas",
    category: "Diyas",
    price: 199,
    offerPrice: 149,
    images: [plant_pot, plant_pot, plant_pot, plant_pot, plant_pot],
    description: [
      "Traditional Diwali diyas made from pure clay",
      "Hand-painted in vibrant festive colors",
      "Reusable and easy to clean",
      "Perfect for gifting and decorations",
      "Safe for oil or LED tealights",
    ],
    createdAt: "2025-04-10T08:30:00Z",
    updatedAt: "2025-04-15T14:00:00Z",
    inStock: true,
  },
  {
    id: "p3",
    name: "Cookware Handi",
    category: "Kitchen",
    price: 799,
    offerPrice: 649,
    images: [plant_pot, plant_pot, plant_pot, plant_pot, plant_pot],
    description: [
      "Traditional clay handi for authentic Indian cooking",
      "Enhances natural flavor and aroma of food",
      "Suitable for gas stove or open fire use",
      "No toxic chemicals or coating used",
      "Ideal for biryanis, dals, and curries",
    ],
    createdAt: "2025-03-01T10:00:00Z",
    updatedAt: "2025-03-10T12:00:00Z",
    inStock: true,
  },
  {
    id: "p4",
    name: "Decorative Bowl",
    category: "Decorative",
    price: 599,
    offerPrice: 499,
    images: [plant_pot, plant_pot, plant_pot, plant_pot, plant_pot],
    description: [
      "Handcrafted urli bowl with traditional carvings",
      "Use for floating flowers and candles",
      "Perfect for home entryways and festive setups",
      "Made from durable terracotta",
      "Blends well with ethnic and modern interiors",
    ],
    createdAt: "2025-01-20T11:15:00Z",
    updatedAt: "2025-02-01T09:30:00Z",
    inStock: true,
  },
  {
    id: "p5",
    name: "Piggy Bank",
    category: "Toys",
    price: 299,
    offerPrice: 249,
    images: [plant_pot, plant_pot, plant_pot, plant_pot, plant_pot],
    description: [
      "Cute hand-painted clay piggy bank for kids",
      "Encourages saving habits from a young age",
      "Breakable design for traditional clay bank feel",
      "Bright colors and fun designs",
      "Makes a great birthday gift or decor item",
    ],
    createdAt: "2025-05-01T07:00:00Z",
    updatedAt: "2025-05-10T16:45:00Z",
    inStock: true,
  },
  {
    id: "p6",
    name: "Piggy Bank",
    category: "Toys",
    price: 299,
    offerPrice: 249,
    images: [plant_pot, plant_pot, plant_pot, plant_pot, plant_pot],
    description: [
      "Cute hand-painted clay piggy bank for kids",
      "Encourages saving habits from a young age",
      "Breakable design for traditional clay bank feel",
      "Bright colors and fun designs",
      "Makes a great birthday gift or decor item",
    ],
    createdAt: "2025-05-01T07:00:00Z",
    updatedAt: "2025-05-10T16:45:00Z",
    inStock: true,
  },
];
