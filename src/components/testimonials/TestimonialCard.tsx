import type { Testimonial } from "../../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="mb-4 text-yellow-500">
        {"⭐".repeat(testimonial.rating)}
      </div>

      <p className="text-gray-600 italic">"{testimonial.message}"</p>

      <div className="mt-6">
        <h3 className="font-semibold">{testimonial.name}</h3>

        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
