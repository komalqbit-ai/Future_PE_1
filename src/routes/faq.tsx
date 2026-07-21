import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — GreenGrow Organics" },
      { name: "description", content: "Answers about organic fertilizers, compost vs vermicompost, bulk delivery, product selection, and shipping times." },
      { property: "og:title", content: "FAQ — GreenGrow Organics" },
      { property: "og:description", content: "Answers about our organic products, bulk delivery, and consultations." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Are your products safe for edible plants like vegetables and herbs?", a: "Yes. All our fertilizers and composts are 100% organic and safe for food crops." },
  { q: "What's the difference between compost and vermicompost?", a: "Compost is decomposed organic matter; vermicompost is compost processed further by earthworms, making it richer in nutrients and beneficial microbes." },
  { q: "Do you deliver to farms and nurseries in bulk?", a: "Yes — we offer bulk orders and delivery for farmers, nurseries, and landscapers. Contact us for bulk pricing." },
  { q: "How do I know which product is right for my garden?", a: "Book a garden consultation — we'll look at your soil, plants, and goals before recommending anything." },
  { q: "How long does delivery take?", a: "Most orders are delivered within a few business days. Exact timelines depend on your location." },
];

function FAQPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Frequently asked</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Before you <span className="italic text-primary">dig in.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <dl className="divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.q} className="group py-6" open>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                <dt className="font-display text-xl md:text-2xl">{item.q}</dt>
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-lg text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <dd className="mt-3 pr-10 text-muted-foreground">{item.a}</dd>
            </details>
          ))}
        </dl>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="font-display text-3xl">Still have a question?</h2>
          <p className="mt-2 text-muted-foreground">Talk to someone who actually knows plants — no scripts, no sales pitch.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Contact us →</Link>
        </div>
      </section>
    </>
  );
}