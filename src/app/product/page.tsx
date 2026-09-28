import Section from "@/components/ui/section";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const steps = [
  { icon: "Analytics", number: "01", title: "Set a goal", body: "Pick the metric that matters and let the platform track it end to end." },
  { icon: "Visual Editor", number: "02", title: "Build a variation", body: "No-code visual editor or full code control — your call." },
  { icon: "Targeting", number: "03", title: "Target your audience", body: "Layer in segments, flags, and rollout rules without a ticket." },
  { icon: "Rollout", number: "04", title: "Ship with confidence", body: "Stats engine tells you when a result is real, not noise." },
  { icon: "Stats Engine", number: "05", title: "Learn and repeat", body: "Every test feeds the next one, so the platform gets smarter with you." },
];

const galleryIcons = ["Flag", "Toggle", "AI", "Personalization"];

export default function ProductPage() {
  return (
    <>
      <Section bg="neutral" className="pt-24 pb-20">
        <Eyebrow>Product</Eyebrow>
        <h1 className="text-5xl font-black max-w-2xl">
          Built for teams who'd rather ship than argue
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mid-fir">
          This page is the starting point for product-specific components —
          add feature callouts, device mockups, or interactive demos below.
        </p>
      </Section>

      <Section bg="white">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-black max-w-2xl">
          Five steps from idea to shipped experiment
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number}>
              <Icon name={step.icon} tone="dark" size={32} />
              <p className="font-mono text-sm text-light-fir mt-3 mb-2">{step.number}</p>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-mid-fir">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="neutral">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <Eyebrow>Related product</Eyebrow>
            <h2 className="text-3xl font-black mb-4">
              Pair it with Content Management
            </h2>
            <p className="text-mid-fir mb-6">
              Swap this block for a real feature callout — headline, short
              body, and a device or product screenshot placeholder.
            </p>
            <Button href="/customer-stories" variant="outline">
              See it in action
            </Button>
          </div>
          <Card tone="dark" className="aspect-video flex items-center justify-center">
            <p className="font-mono text-sm text-neutral-4">
              [ device mockup placeholder ]
            </p>
          </Card>
        </div>
      </Section>

      {/* Add new product components below this line. */}
      <Section image="/brand/backgrounds/opal-texture-green.webp">
        <Eyebrow>Component gallery</Eyebrow>
        <h2 className="text-3xl font-black mb-6">Drop new components here</h2>
        <div className="grid gap-6 md:grid-cols-4 mb-6">
          {galleryIcons.map((name) => (
            <Card key={name} tone="neutral" className="flex flex-col items-center text-center gap-3">
              <Icon name={name} tone="dark" size={36} />
              <p className="text-sm font-medium">{name}</p>
            </Card>
          ))}
        </div>
        <Card tone="dark" className="border border-dashed border-neutral-6">
          <p className="text-sm text-neutral-4">
            The icon cards above pull straight from the brand icon library
            (see /public/icons) — swap this card for whatever product
            component comes next (comparison table, pricing tiers,
            interactive widget, etc.).
          </p>
        </Card>
      </Section>
    </>
  );
}
