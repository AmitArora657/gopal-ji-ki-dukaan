import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import GalleryImage from "../gallery/GalleryImage";
import { gallery } from "../../data/gallery";

const Gallery = () => {
  return (
    <section className="py-16">
      <Container>
        <Heading
          title="Gallery"
          subtitle="A glimpse of our beautiful Laddu Gopal collection."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((item) => (
            <GalleryImage key={item.id} gallery={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
