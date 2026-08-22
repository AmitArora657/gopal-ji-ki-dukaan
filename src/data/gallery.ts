import type { Gallery } from "../types/gallery";
import mukut from "../assets/images/products/mukut.jpg";
import bansuri from "../assets/images/products/bansuri.jpg";
import tub from "../assets/images/products/tub.png";
import dress_22 from "../assets/images/products/dress_22.png";
import dress from "../assets/images/products/dress.jpg";
import dress_33 from "../assets/images/products/dress_33.png";

export const gallery: Gallery[] = [
  {
    id: 1,
    image: mukut,
    alt: "mukut",
  },
  {
    id: 2,
    image: dress_22,
    alt: "dress_22",
  },
  {
    id: 3,
    image: dress_33,
    alt: "dress_33",
  },
  {
    id: 4,
    image: dress,
    alt: "dress",
  },
  {
    id: 5,
    image: bansuri,
    alt: "bansuri",
  },
  {
    id: 6,
    image: tub,
    alt: "tub",
  },
];
