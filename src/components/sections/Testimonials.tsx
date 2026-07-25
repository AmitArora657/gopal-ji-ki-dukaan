import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import TestimonialCard from "../testimonials/TestimonialCard";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16">
      <Container>
        <Heading
          title="What Our Customers Say"
          subtitle="Read what our happy customers have to say about our products."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
