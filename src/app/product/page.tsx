import Section from "@/components/ui/section";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const steps = [
  { icon: "Search", number: "01", title: "Browse the collection", body: "Explore new arrivals, bestsellers, and seasonal edits curated for you." },
  { icon: "Best Practice", number: "02", title: "Find your fit", body: "Size guides and fit notes on every product page, so what you order is what works." },
  { icon: "Recommendation", number: "03", title: "Get personalized picks", body: "Recommendations and offers tailored to your style and past purchases." },
  { icon: "Guaranteed", number: "04", title: "Checkout with confidence", body: "Secure payment, saved addresses, and free shipping over $75." },
  { icon: "Check", number: "05", title: "Track & return easily", body: "Real-time order tracking and 60-day free returns if it's not quite right." },
];

const categories = [
  { icon: "Search", label: "New Arrivals" },
  { icon: "Heart", label: "Favorites" },
  { icon: "Recommendation", label: "Recommended for You" },
  { icon: "Premium", label: "Best Sellers" },
];

export default function ProductPage() {
  return (
    <>
      <Section bg="neutral" className="pt-24 pb-20">
        <Eyebrow>Shop</Eyebrow>
        <h1 className="text-5xl font-black max-w-2xl">
          New season, new favorites
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mid-fir">
          Cozy knits, everyday denim, and outerwear built for however your
          week unfolds.
        </p>
      </Section>

      <Section bg="white">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-black max-w-2xl">
          From browsing to your doorstep
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
            <Eyebrow>Complete the look</Eyebrow>
            <h2 className="text-3xl font-black mb-4">
              Pair it with our best-selling basics
            </h2>
            <p className="text-mid-fir mb-6">
              Layer, mix, and match — our essentials collection is designed
              to work with everything else in your closet.
            </p>
            <Button href="/" variant="outline">
              Shop Essentials
            </Button>
          </div>
          <Card tone="dark" className="aspect-video flex items-center justify-center">
            <p className="font-mono text-sm text-neutral-4">
              [ product photo placeholder ]
            </p>
          </Card>
        </div>
      </Section>

      <Section image="/brand/backgrounds/opal-texture-green.webp">
        <Eyebrow>Shop by category</Eyebrow>
        <h2 className="text-3xl font-black mb-6">Find your next favorite</h2>
        <div className="grid gap-6 md:grid-cols-4 mb-6">
          {categories.map((category) => (
            <Card key={category.label} tone="neutral" className="flex flex-col items-center text-center gap-3">
              <Icon name={category.icon} tone="dark" size={36} />
              <p className="text-sm font-medium">{category.label}</p>
            </Card>
          ))}
        </div>
        <Card tone="dark" className="border border-dashed border-neutral-6">
          <p className="text-sm text-neutral-4">
            Free shipping on orders over $75, easy 60-day returns, and
            rewards every time you shop.
          </p>
        </Card>
      </Section>
    </>
  );
}
