import { createFileRoute, Link } from "@tanstack/react-router";
import heroSoil from "@/assets/hero-soil.jpg";
import gardenBed from "@/assets/garden-bed.jpg";
import fertilizerImg from "@/assets/product-fertilizer.jpg";
import compostImg from "@/assets/product-compost.jpg";
import vermiImg from "@/assets/product-vermicompost.jpg";
import pottingImg from "@/assets/product-pottingmix.jpg";
import consultationImg from "@/assets/consultation.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  { title: "100% Organic, Always", body: "Every product is chemical-free, tested, and safe for kids, pets, and pollinators." },
  { title: "Built for Every Grower", body: "Home gardener or commercial farmer — our range scales from a 1kg bag to bulk orders." },
  { title: "Real Garden Advice", body: "Consultations with people who've actually grown things. Not a sales script." },
  { title: "Delivered to Your Door", body: "Order online, get it delivered. No hauling heavy bags from a store." },
  { title: "Soil-First Philosophy", body: "We focus on long-term soil health, not just quick greening." },
];

const products = [
  { name: "Organic All-Purpose Fertilizer", desc: "Balanced nutrition for vegetables, flowers, and lawns.", img: fertilizerImg },
  { name: "Premium Compost", desc: "Nutrient-rich, fully decomposed, ready to dig in.", img: compostImg },
  { name: "Vermicompost", desc: "Worm-processed, high in microbial life, gentle on roots.", img: vermiImg },
  { name: "Potting Mix", desc: "Lightweight, well-draining, made for containers and raised beds.", img: pottingImg },
];

const testimonials = [
  { quote: "I switched my raised beds to GreenGrow's compost last spring and the difference in my tomatoes was obvious by July. Less yellowing, more fruit.", name: "Priya M.", role: "Home Gardener" },
  { quote: "We buy vermicompost in bulk for the nursery now. Consistent quality, and delivery has never been late.", name: "Rajesh K.", role: "Nursery Owner" },
  { quote: "Booked a garden consultation not expecting much and it was genuinely useful — they told me my soil was compacted, not underfed.", name: "Ana T.", role: "Landscaper" },
];

const faqs = [
  { q: "Are your products safe for edible plants like vegetables and herbs?", a: "Yes. All our fertilizers and composts are 100% organic and safe for food crops." },
  { q: "What's the difference between compost and vermicompost?", a: "Compost is decomposed organic matter; vermicompost is compost processed further by earthworms, making it richer in nutrients and beneficial microbes." },
  { q: "Do you deliver to farms and nurseries in bulk?", a: "Yes — we offer bulk orders and delivery for farmers, nurseries, and landscapers. Contact us for bulk pricing." },
  { q: "How do I know which product is right for my garden?", a: "Book a garden consultation — we'll look at your soil, plants, and goals before recommending anything." },
  { q: "How long does delivery take?", a: "Most orders are delivered within a few business days. Exact timelines depend on your location." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:pt-24 md:pb-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs uppercase tracking-widest text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Soil-first since day one
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] text-foreground md:text-[5.5rem]">
              Real Soil.<br />
              Real Growth.<br />
              <span className="italic text-primary">No Chemicals.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Organic fertilizers, compost, and potting mixes made to help your plants — and your soil — actually thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5">
                Shop organic products
                <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                Book a consultation
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/10 blur-2xl" />
            <img
              src={heroSoil}
              alt="Hands cupping rich dark organic soil with a young green seedling"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-border bg-card p-4 shadow-lg md:block">
              <p className="font-display text-3xl text-primary">100%</p>
              <p className="text-xs text-muted-foreground">Organic inputs — every batch, every bag.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="font-display text-2xl leading-relaxed text-foreground/85 md:text-3xl">
            GreenGrow Organics makes and delivers organic fertilizers, compost, vermicompost, and potting mixes for anyone who grows something — a backyard tomato patch, a working farm, or a full nursery.{" "}
            <span className="text-muted-foreground">No synthetic shortcuts. Just soil that works the way nature intended.</span>
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why growers choose us</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl md:text-5xl">Better for plants. Better for the ground they live in.</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <div key={f.title} className={`rounded-2xl border border-border bg-card p-6 ${i === 0 ? "md:row-span-2 md:bg-primary md:text-primary-foreground" : ""}`}>
              <div className={`font-display text-4xl ${i === 0 ? "md:text-primary-foreground/50" : "text-accent/60"}`}>0{i + 1}</div>
              <h3 className={`mt-4 text-lg font-medium ${i === 0 ? "md:font-display md:text-2xl" : ""}`}>{f.title}</h3>
              <p className={`mt-2 text-sm ${i === 0 ? "md:text-primary-foreground/80" : "text-muted-foreground"}`}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <img
            src={gardenBed}
            alt="Overhead view of a thriving organic vegetable garden bed"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[5/4] w-full rounded-3xl object-cover"
          />
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">About GreenGrow</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Started with a simple frustration.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Most "plant food" on the market is built for fast results, not healthy soil. We make fertilizers and compost the way it should be done — slow, organic, and genuinely good for the ground you're growing in.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Every batch of compost and vermicompost is processed in-house, and every bag that leaves our facility is something we'd use in our own gardens.
            </p>
            <Link to="/about" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary underline underline-offset-4">
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Featured products</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">From 1kg bag to bulk order.</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-primary underline underline-offset-4">See full range →</Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md">
              <div className="aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} width={900} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <Link to="/products" className="mt-4 text-sm font-medium text-primary">Learn more →</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-6 rounded-2xl border border-border bg-card p-6 md:p-8">
          <img src={consultationImg} alt="Two consultants inspecting soil in a garden" width={1200} height={900} loading="lazy" className="hidden h-32 w-40 rounded-xl object-cover md:block" />
          <div className="flex-1">
            <h3 className="font-display text-2xl">Garden Consultation</h3>
            <p className="mt-1 text-muted-foreground">One-on-one advice on soil, feeding schedules, and plant health — from people who've actually grown things.</p>
          </div>
          <Link to="/contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground md:inline-flex">Book →</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">From the growers we work with</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">What people are saying.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                <span aria-hidden className="font-display text-5xl leading-none text-accent">"</span>
                <blockquote className="mt-2 flex-1 text-primary-foreground/90">{t.quote}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-primary-foreground/60">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">Questions, answered</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Before you dig in.</h2>
        <dl className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                <dt className="font-display text-xl text-foreground">{item.q}</dt>
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-lg text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <dd className="mt-3 pr-10 text-muted-foreground">{item.a}</dd>
            </details>
          ))}
        </dl>
        <p className="mt-8 text-sm text-muted-foreground">
          Still stuck? <Link to="/contact" className="text-primary underline underline-offset-4">Talk to someone who actually knows plants.</Link>
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-earth p-10 text-primary-foreground md:p-16">
          <div className="absolute inset-0 -z-10 grain-bg opacity-30" />
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <h2 className="max-w-xl font-display text-4xl leading-tight md:text-6xl">
                Your soil deserves better than <span className="italic text-accent">synthetic shortcuts.</span>
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                New customer? Get 10% off your first order. Organic soil solutions, one step closer.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground">
                Shop organic products →
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground">
                Claim 10% off
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
