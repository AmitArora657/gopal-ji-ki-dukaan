import type { Product } from "../types/product";

import mukut from "../assets/images/products/mukut.jpg";
import dress from "../assets/images/products/dress-1.jpg";
import bansuri from "../assets/images/products/bansuri.jpg";
import mala from "../assets/images/products/mala.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Laddu Gopal Dress",
    category: "Dress",
    price: 299,
    image: dress,
    description: "Beautiful handcrafted dress for Laddu Gopal.",
    featured: true,
  },
  {
    id: 2,
    name: "Mukut",
    category: "Accessories",
    price: 149,
    image: mukut,
    description: "Elegant golden mukut.",
    featured: true,
  },
  {
    id: 3,
    name: "Bansuri",
    category: "Accessories",
    price: 99,
    image: bansuri,
    description: "Traditional bansuri for Laddu Gopal.",
  },
  {
    id: 4,
    name: "Mala",
    category: "Jewellery",
    price: 199,
    image: mala,
    description: "Beautiful pearl mala.",
  },
];
