export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "T-Shirts" | "Hoodies" | "Shirts" | "Pants" | "Jackets" | "Sweatpants";
  price: number;
  compareAtPrice?: number;
  image: string;
  gallery?: string[];
  alt: string;
  description: string;
  details: { label: string; value: string }[];
  colors: string[];
  sizes: string[];
  badge?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
};

const image = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=86`;

export const products: Product[] = [
  {
    id: "p-001",
    slug: "essential-oversized-tee",
    name: "Essential Oversized T-Shirt",
    category: "T-Shirts",
    price: 48,
    compareAtPrice: 58,
    image: image("photo-1521572163474-6864f9cf17ab"),
    alt: "Black oversized t-shirt on a fashion model",
    description: "A heavyweight everyday essential with an architectural oversized silhouette. Cut from premium cotton jersey and finished with the AVIRO mark at the hem.",
    details: [
      { label: "Material", value: "100% combed cotton" },
      { label: "Fit", value: "Oversized / dropped shoulder" },
      { label: "Fabric weight", value: "260 GSM" },
      { label: "Care", value: "Cold wash inside out" },
      { label: "Origin", value: "Made in Portugal" },
    ],
    colors: ["Onyx", "Bone", "Ash"], sizes: ["S", "M", "L", "XL", "XXL", "3XL"], badge: "BESTSELLER", rating: 4.9, reviews: 86, inStock: true,
  },
  {
    id: "p-002",
    slug: "signature-hoodie",
    name: "Signature Hoodie",
    category: "Hoodies",
    price: 98,
    image: image("photo-1556821840-3a63f95609a7"),
    alt: "Minimal grey hoodie detail",
    description: "Our signature brushed-back fleece hoodie, engineered with a structured hood and clean lines for a considered off-duty uniform.",
    details: [
      { label: "Material", value: "80% cotton / 20% recycled polyester" },
      { label: "Fit", value: "Relaxed fit" },
      { label: "Fabric weight", value: "460 GSM" },
      { label: "Care", value: "Machine wash cold" },
      { label: "Origin", value: "Made in Turkey" },
    ],
    colors: ["Heather", "Onyx"], sizes: ["S", "M", "L", "XL", "XXL"], badge: "NEW", rating: 4.8, reviews: 42, inStock: true,
  },
  {
    id: "p-003",
    slug: "essential-cargo-pants",
    name: "Essential Cargo Pants",
    category: "Pants",
    price: 118,
    image: image("photo-1517438476312-10d79c077509"),
    alt: "Relaxed black cargo pants",
    description: "Utility refined. Relaxed cargo trousers with articulated knees, tonal hardware and enough room to move through the city.",
    details: [
      { label: "Material", value: "100% cotton ripstop" },
      { label: "Fit", value: "Relaxed / straight leg" },
      { label: "Fabric weight", value: "330 GSM" },
      { label: "Care", value: "Cold wash, hang dry" },
      { label: "Origin", value: "Made in Portugal" },
    ],
    colors: ["Onyx", "Moss"], sizes: ["S", "M", "L", "XL", "XXL", "3XL"], rating: 4.7, reviews: 31, inStock: true,
  },
  {
    id: "p-004",
    slug: "premium-overshirt",
    name: "Premium Overshirt",
    category: "Shirts",
    price: 128,
    compareAtPrice: 148,
    image: image("photo-1596755389378-c31d21fd1273"),
    alt: "Premium dark overshirt",
    description: "A layer for every transition. This softly structured overshirt pairs a generous cut with an understated, brushed texture.",
    details: [
      { label: "Material", value: "Cotton / wool blend" },
      { label: "Fit", value: "Relaxed fit" },
      { label: "Fabric weight", value: "380 GSM" },
      { label: "Care", value: "Dry clean recommended" },
      { label: "Origin", value: "Made in Italy" },
    ],
    colors: ["Charcoal", "Stone"], sizes: ["S", "M", "L", "XL", "XXL"], badge: "LIMITED", rating: 4.9, reviews: 18, inStock: true,
  },
  {
    id: "p-005",
    slug: "relaxed-fit-tee",
    name: "Relaxed Fit T-Shirt",
    category: "T-Shirts",
    price: 44,
    image: image("photo-1583743814966-8936f37f4e0"),
    alt: "Relaxed fit white t-shirt",
    description: "An elevated daily tee in dense, soft-touch cotton. The relaxed profile is made to sit easy without losing its shape.",
    details: [
      { label: "Material", value: "100% organic cotton" },
      { label: "Fit", value: "Relaxed fit" },
      { label: "Fabric weight", value: "240 GSM" },
      { label: "Care", value: "Cold wash inside out" },
      { label: "Origin", value: "Made in Portugal" },
    ],
    colors: ["Optic White", "Onyx", "Clay"], sizes: ["S", "M", "L", "XL", "XXL", "3XL"], rating: 4.6, reviews: 24, inStock: true,
  },
  {
    id: "p-006",
    slug: "essential-sweatpants",
    name: "Essential Sweatpants",
    category: "Sweatpants",
    price: 88,
    image: image("photo-1506629905607-d9d93c1f35f4"),
    alt: "Black relaxed sweatpants",
    description: "The foundation of a considered uniform. Straight-leg sweatpants with a clean hem, weighty fleece and tonal AVIRO embroidery.",
    details: [
      { label: "Material", value: "80% cotton / 20% recycled polyester" },
      { label: "Fit", value: "Relaxed straight leg" },
      { label: "Fabric weight", value: "420 GSM" },
      { label: "Care", value: "Machine wash cold" },
      { label: "Origin", value: "Made in Turkey" },
    ],
    colors: ["Onyx", "Heather"], sizes: ["S", "M", "L", "XL", "XXL"], rating: 4.8, reviews: 55, inStock: true,
  },
  {
    id: "p-007",
    slug: "signature-jacket",
    name: "Signature Jacket",
    category: "Jackets",
    price: 198,
    image: image("photo-1551028719-00167b16eac5"),
    alt: "Black leather-inspired jacket",
    description: "A sharp, minimal outer layer with a boxy cut and considered hardware. Designed to anchor every look from dusk to late night.",
    details: [
      { label: "Material", value: "Premium vegan leather" },
      { label: "Fit", value: "Boxy cropped fit" },
      { label: "Lining", value: "Recycled satin" },
      { label: "Care", value: "Professional clean only" },
      { label: "Origin", value: "Made in Italy" },
    ],
    colors: ["Onyx"], sizes: ["S", "M", "L", "XL", "XXL"], badge: "NEW", rating: 4.9, reviews: 12, inStock: true,
  },
  {
    id: "p-008",
    slug: "heavyweight-hoodie",
    name: "Heavyweight Hoodie",
    category: "Hoodies",
    price: 112,
    image: image("photo-1578681990290-665c76e0f0e4"),
    alt: "Dark heavyweight hoodie",
    description: "Built for colder days. A premium heavyweight hoodie with a sculpted shoulder and a soft, brushed interior.",
    details: [
      { label: "Material", value: "100% cotton fleece" },
      { label: "Fit", value: "Oversized fit" },
      { label: "Fabric weight", value: "500 GSM" },
      { label: "Care", value: "Cold wash, lay flat" },
      { label: "Origin", value: "Made in Portugal" },
    ],
    colors: ["Onyx", "Cement"], sizes: ["S", "M", "L", "XL", "XXL", "3XL"], rating: 4.8, reviews: 27, inStock: true,
  },
];

export const categories = [
  { name: "T-SHIRTS", image: image("photo-1521572163474-6864f9cf17ab", 900), slug: "T-Shirts" },
  { name: "HOODIES", image: image("photo-1556821840-3a63f95609a7", 900), slug: "Hoodies" },
  { name: "SHIRTS", image: image("photo-1596755389378-c31d21fd1273", 900), slug: "Shirts" },
  { name: "PANTS", image: image("photo-1517438476312-10d79c077509", 900), slug: "Pants" },
  { name: "JACKETS", image: image("photo-1551028719-00167b16eac5", 900), slug: "Jackets" },
  { name: "SWEATPANTS", image: image("photo-1506629905607-d9d93c1f35f4", 900), slug: "Sweatpants" },
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

// Replace these modules with HTTP clients that target API_BASE_URL when the ASP.NET Core API is ready.
export const authService = { login: async () => ({ success: true }), register: async () => ({ success: true }) };
export const productService = { list: async () => products, getBySlug: async (slug: string) => getProductBySlug(slug) };
export const categoryService = { list: async () => categories };
export const cartService = { get: async () => [], add: async () => ({ success: true }) };
export const wishlistService = { get: async () => [], toggle: async () => ({ success: true }) };
export const orderService = { create: async () => ({ success: true, orderId: "AV-20481" }) };
export const userService = { getProfile: async () => ({ name: "Alex Morgan", email: "alex@example.com" }) };
