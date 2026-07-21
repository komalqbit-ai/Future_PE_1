import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GreenGrow Organics" },
      { name: "description", content: "Talk to someone who actually knows plants. Book a consultation, request bulk pricing, or check delivery to your area." },
      { property: "og:title", content: "Contact GreenGrow Organics" },
      { property: "og:description", content: "Book a consultation, request bulk pricing, or check delivery." },
    ],
  }),
  component: ContactPage,
});

const topics = [
  { title: "General question", body: "Not sure which product you need? Ask." },
  { title: "Book a consultation", body: "One-on-one soil and plant assessment." },
  { title: "Bulk / wholesale quote", body: "Farms, nurseries, landscapers — get pricing." },
  { title: "Delivery availability", body: "Check whether we deliver to your area." },
];

function ContactPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Contact us</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">
            Talk to someone who <span className="italic text-primary">actually knows plants.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Got questions about your soil or your order? We'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <form
            className="rounded-3xl border border-border bg-card p-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch shortly.");
            }}
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="topic" className="text-xs font-semibold uppercase tracking-widest text-foreground/70">What's this about?</label>
                <select id="topic" className="rounded-lg border border-border bg-background px-4 py-3 text-sm">
                  {topics.map((t) => <option key={t.title}>{t.title}</option>)}
                </select>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-foreground/70">Name</label>
                  <input id="name" required className="rounded-lg border border-border bg-background px-4 py-3 text-sm" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-foreground/70">Email</label>
                  <input id="email" type="email" required className="rounded-lg border border-border bg-background px-4 py-3 text-sm" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="location" className="text-xs font-semibold uppercase tracking-widest text-foreground/70">City / area (for delivery)</label>
                <input id="location" className="rounded-lg border border-border bg-background px-4 py-3 text-sm" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-foreground/70">Tell us about your garden</label>
                <textarea id="message" rows={5} required className="rounded-lg border border-border bg-background px-4 py-3 text-sm" />
              </div>
              <button type="submit" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
                Send message →
              </button>
            </div>
          </form>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
              <h2 className="font-display text-3xl">Prefer email?</h2>
              <p className="mt-2 text-primary-foreground/80">hello@greengroworganics.com</p>
              <p className="mt-6 text-xs uppercase tracking-widest text-primary-foreground/60">Hours</p>
              <p className="mt-1 text-primary-foreground/90">Monday – Saturday, 8am – 6pm</p>
            </div>
            <div className="space-y-3">
              {topics.map((t) => (
                <div key={t.title} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-display text-lg">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.body}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}