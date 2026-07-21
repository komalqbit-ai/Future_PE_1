import { createFileRoute, Link } from "@tanstack/react-router";
import fertilizerImg from "@/assets/product-fertilizer.jpg";
import compostImg from "@/assets/product-compost.jpg";
import vermiImg from "@/assets/product-vermicompost.jpg";
import pottingImg from "@/assets/product-pottingmix.jpg";
import consultationImg from "@/assets/consultation.jpg";
import deliveryImg from "@/assets/delivery.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Services — GreenGrow Organics" },
      { name: "description", content: "Organic fertilizers, premium compost, vermicompost, potting mix, garden consultations, and home delivery — from a 1kg bag to bulk orders." },
      { property: "og:title", content: "Products & Services — GreenGrow Organics" },
      { property: "og:description", content: "Organic fertilizers, compost, vermicompost, potting mix, consultations, and home delivery." },
    ],
  }),
  component: ProductsPage,
});

const items = [
  {
    name: "Organic All-Purpose Fertilizer",
    tagline: "Balanced feeding, no burn.",
    desc: "A balanced, slow-release organic fertilizer made from natural inputs — built to feed your plants without burning roots or building up chemical residue in your soil.",
    benefits: ["Balanced N-P-K from organic sources", "Improves soil structure over time", "Safe for edible and ornamental plants"],
    best: "Vegetable gardens, flower beds, lawns",
    cta: "Add to cart",
    img: fertilizerImg,
  },
  {
    name: "Premium Compost",
    tagline: "Ready to dig in.",
    desc: "Fully decomposed, nutrient-dense compost made from organic waste — ready to mix straight into your soil.",
    benefits: ["Boosts soil fertility and water retention", "Improves aeration in dense or clay soil", "Reduces need for chemical fertilizers"],
    best: "New garden beds, farms, large-scale planting",
    cta: "Order compost",
    img: compostImg,
  },
  {
    name: "Vermicompost",
    tagline: "Worm-processed, microbe-alive.",
    desc: "Compost processed by earthworms, resulting in a nutrient-rich, microbe-active soil amendment that's gentle enough for seedlings and powerful enough for mature plants.",
    benefits: ["High in beneficial microorganisms", "Improves root development", "Gentle — won't burn young plants"],
    best: "Seedlings, potted plants, organic farming",
    cta: "Shop vermicompost",
    img: vermiImg,
  },
  {
    name: "Potting Mix",
    tagline: "Container-ready, no fuss.",
    desc: "A lightweight, well-draining mix designed specifically for containers, raised beds, and indoor plants.",
    benefits: ["Prevents waterlogging and root rot", "Retains moisture without compacting", "Ready to use, no additional mixing needed"],
    best: "Container gardening, indoor plants, balconies",
    cta: "Get potting mix",
    img: pottingImg,
  },
  {
    name: "Garden Consultation",
    tagline: "One-on-one, actually useful.",
    desc: "A one-on-one session with our team to assess your soil, diagnose plant issues, and build a feeding and care plan that actually fits your garden.",
    benefits: ["Personalized soil and plant assessment", "Clear, practical recommendations", "Ongoing support for ongoing questions"],
    best: "New gardeners, struggling gardens, large properties",
    cta: "Book a consultation",
    img: consultationImg,
  },
  {
    name: "Home Delivery",
    tagline: "Skip the heavy lifting.",
    desc: "Order online and get your fertilizers, compost, and potting mix delivered straight to your door — no lifting heavy bags at a store.",
    benefits: ["Convenient, scheduled delivery", "Bulk delivery available for farms and nurseries", "Careful packaging to prevent spillage or damage"],
    best: "Anyone who'd rather not haul soil themselves",
    cta: "Check delivery availability",
    img: deliveryImg,
  },
];

function ProductsPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Products & services</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl md:text-6xl">
            Everything your soil needs — <span className="italic text-primary">nothing it doesn't.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A focused range for home gardeners, farms, nurseries, and landscapers. Available in bags, sacks, and bulk.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-20">
          {items.map((item, i) => (
            <article key={item.name} className={`grid gap-10 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10 blur-xl" />
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="aspect-[5/4] w-full rounded-3xl object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">0{i + 1} · {item.tagline}</p>
                <h2 className="mt-2 font-display text-4xl md:text-5xl">{item.name}</h2>
                <p className="mt-4 text-muted-foreground">{item.desc}</p>
                <ul className="mt-6 space-y-2">
                  {item.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-dashed border-border p-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">Best for</span>
                  <p className="mt-1 text-sm text-muted-foreground">{item.best}</p>
                </div>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
                  {item.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-display text-3xl">Farms, nurseries & landscapers</h3>
            <p className="mt-3 text-muted-foreground">Get bulk pricing. Tell us what you need and we'll put together a quote.</p>
            <Link to="/contact" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Request a quote →</Link>
          </div>
          <div className="rounded-3xl bg-accent p-8 text-accent-foreground">
            <h3 className="font-display text-3xl">New customer?</h3>
            <p className="mt-3 text-accent-foreground/80">Get 10% off your first order. Organic soil solutions, one step closer.</p>
            <Link to="/contact" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Claim your discount →</Link>
          </div>
        </div>
      </section>
    </>
  );
}