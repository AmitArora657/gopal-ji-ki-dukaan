import type { Category } from "../types/category";

import mukut from "../assets/images/products/mukut.jpg";
import dress_22 from "../assets/images/products/dress_22.png";
import Mala_1 from "../assets/images/products/mala_1.png";
// import bansuri from "../assets/images/products/bansuri.jpg";
// import mala from "../assets/images/products/mala.jpg";
import tub from "../assets/images/products/tub.png";

export const categories: Category[] = [
  {
    id: 1,
    name: "Mukut",
    slug: "mukut",
    image: mukut,
  },
  {
    id: 2,
    name: "Dress",
    slug: "dress",
    image: dress_22,
  },
  {
    id: 3,
    name: "Jewellery",
    slug: "jewellery",
    image: Mala_1,
  },
  {
    id: 4,
    name: "Accessories",
    slug: "accessories",
    image: tub,
  },
];
