import Section from "@/components/ui/section";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import HomeHero from "@/components/home-hero";

const features = [
  {
    icon: "Guaranteed",
    title: "Free shipping & returns",
    body: "Free shipping on orders over $75, plus 60 days to return anything that's not quite right.",
  },
  {
    icon: "Premium",
    title: "Made to last",
    body: "Durable fabrics and construction, tested for real life — not just the runway.",
  },
  {
    icon: "Heart",
    title: "Loved by customers",
    body: "Rated 4.8 stars by thousands of shoppers who keep coming back for more.",
  },
];

const stats = [
  { value: "50,000+", label: "happy customers" },
  { value: "4.8★", label: "average rating" },
  { value: "60-day", label: "free returns" },
];

export default function Home() {
  return (
    <>
      <Section bg="neutral" className="pt-24 pb-24">
        <Eyebrow>New Season</Eyebrow>
        <HomeHero />
      </Section>

      <Section bg="white">
        <Eyebrow>Why shop with us</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-black max-w-2xl">
          Everything you need for effortless style
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} tone="neutral">
              <Icon name={feature.icon} tone="dark" size={36} />
              <h3 className="text-xl font-bold mt-4 mb-3">{feature.title}</h3>
              <p className="text-sm text-mid-fir">{feature.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section image="/brand/backgrounds/landscape-mountains.webp" className="py-32">
        <Card tone="dark" className="max-w-md">
          <Eyebrow>Built for wherever you're headed</Eyebrow>
          <p className="text-2xl font-bold">
            Layers that keep up, from the trailhead to the train platform.
          </p>
        </Card>
      </Section>

      <Section bg="dark">
        <Eyebrow>Loved by shoppers everywhere</Eyebrow>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-black text-lf-green">
                {stat.value}
              </p>
              <p className="mt-2 text-neutral-4">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="green">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-black max-w-xl">
            Ready to refresh your wardrobe?
          </h2>
          <Button href="/product" variant="primary">
            Shop Now
          </Button>
        </div>
      </Section>
    </>
  );
}
