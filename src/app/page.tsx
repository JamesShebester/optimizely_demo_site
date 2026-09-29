import Section from "@/components/ui/section";
import Eyebrow from "@/components/ui/eyebrow";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import HomeHero from "@/components/home-hero";

const features = [
  {
    icon: "Experimentation",
    title: "Experimentation",
    body: "Test bold ideas and ship the ones that work, backed by data instead of debate.",
  },
  {
    icon: "Content Management",
    title: "Content management",
    body: "Give every team the tools to build, personalize, and publish without waiting on IT.",
  },
  {
    icon: "Commerce",
    title: "Commerce",
    body: "Connect content and commerce so every experience feels like one product, not three.",
  },
];

const stats = [
  { value: "9,000+", label: "brands liberated" },
  { value: "1.2B", label: "experiments run" },
  { value: "35%", label: "average lift reported" },
];

export default function Home() {
  return (
    <>
      <Section bg="neutral" className="pt-24 pb-24">
        <Eyebrow>Optimizely</Eyebrow>
        <HomeHero />
      </Section>

      <Section bg="white">
        <Eyebrow>What you get</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-black max-w-2xl">
          Everything an experience-maker needs, in one place
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
          <Eyebrow>The lands of the liberated</Eyebrow>
          <p className="text-2xl font-bold">
            35% average lift, without the guesswork.
          </p>
        </Card>
      </Section>

      <Section bg="dark">
        <Eyebrow>The world leader in experimentation</Eyebrow>
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
            Ready to break the cycle?
          </h2>
          <Button href="/product" variant="primary">
            Get a demo
          </Button>
        </div>
      </Section>
    </>
  );
}
