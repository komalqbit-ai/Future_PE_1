import { createFileRoute, Link } from "@tanstack/react-router";
import gardenBed from "@/assets/garden-bed.jpg";
import consultationImg from "@/assets/consultation.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GreenGrow Organics" },
      { name: "description", content: "GreenGrow Organics makes slow, organic fertilizers, compost, and potting mixes — genuinely good for the ground you're growing in." },
      { property: "og:title", content: "About GreenGrow Organics" },
      { property: "og:description", content: "Slow, organic, and genuinely good for the ground you're growing in." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our story</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Started with a simple <span className="italic text-primary">frustration.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Most "plant food" on the market is built for fast results, not healthy soil. We wanted to do it differently.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <img src={gardenBed} alt="Overhead view of a thriving organic vegetable garden bed" loading="lazy" className="aspect-[3/2] w-full rounded-3xl object-cover" />
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            GreenGrow Organics makes fertilizers and compost the way it should be done — slow, organic, and genuinely good for the ground you're growing in.
          </p>
          <p>
            Every batch of compost and vermicompost is processed in-house. Every bag that leaves our facility is something we'd use in our own gardens. There's no separate line for "customer product" and "the good stuff." It's the same soil, going out the same door.
          </p>
          <p>
            We work with everyone — a first-time balcony gardener with a single tomato plant, a nursery ordering pallets, a farm rebuilding tired fields. The scale changes; the philosophy doesn't.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 rounded-3xl bg-primary p-10 text-primary-foreground md:grid-cols-2 md:p-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Soil-first. Always.</h2>
            <p className="mt-4 text-primary-foreground/80">
              Quick greening is easy. Long-term soil health is what actually keeps a garden productive year after year. That's what we build for.
            </p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground">
              Talk to our team →
            </Link>
          </div>
          <img src={consultationImg} alt="Consultants inspecting a garden together" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        </div>
      </section>
    </>
  );
}