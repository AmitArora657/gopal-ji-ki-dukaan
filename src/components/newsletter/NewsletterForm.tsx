import { useState } from "react";
import Button from "../ui/Button";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email);

    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-2xl flex-col gap-4 md:flex-row"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-900"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button type="submit">Subscribe</Button>
    </form>
  );
};

export default NewsletterForm;
