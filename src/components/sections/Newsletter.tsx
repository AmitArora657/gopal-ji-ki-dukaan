import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import NewsletterForm from "../newsletter/NewsletterForm";

const Newsletter = () => {
  return (
    <section className="bg-red-900 py-16 text-white">
      <Container>
        <Heading
          className="text-white"
          title="Stay Connected"
          subtitle="Subscribe to receive updates on new arrivals, festive collections, and exclusive offers."
        />

        <div className="mt-10">
          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
