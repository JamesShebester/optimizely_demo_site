import Section from "@/components/ui/section";
import Eyebrow from "@/components/ui/eyebrow";
import Card from "@/components/ui/card";

const logos = ["Acme Co.", "Northwind", "Globex", "Initech", "Umbrella", "Stark Retail"];

const quotes = [
  {
    quote:
      "We used to spend weeks debating what to launch. Now we launch it, test it, and know the answer in days.",
    name: "Jordan Lee",
    title: "VP Marketing, Acme Co.",
  },
  {
    quote:
      "The platform gave every team the same playbook — no more three tools duct-taped together.",
    name: "Priya Shah",
    title: "Head of Growth, Northwind",
  },
];

const stats = [
  { value: "42%", label: "faster time to launch" },
  { value: "3x", label: "more experiments per quarter" },
  { value: "98%", label: "customer satisfaction" },
];

export default function CustomerStoriesPage() {
  return (
    <>
      <Section bg="neutral" className="pt-24 pb-20">
        <Eyebrow>Customer stories</Eyebrow>
        <h1 className="text-5xl font-black max-w-2xl">
          Real teams, real results
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mid-fir">
          The brands that ditched the guesswork and started shipping with
          confidence.
        </p>
      </Section>

      <Section bg="white">
        <Eyebrow>Jump on the brandwagon</Eyebrow>
        <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-headline text-xl font-bold text-neutral-6"
            >
              {logo}
            </span>
          ))}
        </div>
      </Section>

      <Section bg="neutral">
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <Card key={q.name} tone="green">
              <p className="text-lg font-medium mb-6">&ldquo;{q.quote}&rdquo;</p>
              <p className="text-sm font-bold">{q.name}</p>
              <p className="text-sm text-mid-fir">{q.title}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section image="/brand/backgrounds/landscape-road.webp" className="py-32 flex justify-end">
        <Card tone="dark" className="max-w-lg ml-auto">
          <p className="text-xl font-medium mb-6">
            &ldquo;We stopped shipping guesses and started shipping evidence
            &mdash; every team moves faster because of it.&rdquo;
          </p>
          <p className="text-sm font-bold">Mateo Alvarez</p>
          <p className="text-sm text-neutral-4">CTO, Globex</p>
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
    </>
  );
}
