import type { Gallery } from "../../types/gallery";

interface GalleryImageProps {
  gallery: Gallery;
}

const GalleryImage = ({ gallery }: GalleryImageProps) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm transition hover:shadow-lg">
      <img
        src={gallery.image}
        alt={gallery.alt}
        className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default GalleryImage;
