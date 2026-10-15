import Section from "@/components/ui/section";
import Eyebrow from "@/components/ui/eyebrow";
import Card from "@/components/ui/card";

const press = ["Vogue", "GQ", "Elle", "Refinery29", "Highsnobiety", "The Strategist"];

const quotes = [
  {
    quote:
      "The fit is perfect and the fabric feels so much better than I expected. Already ordering it in two more colors.",
    name: "Jordan L.",
    title: "★★★★★ Verified Buyer",
  },
  {
    quote:
      "Returns were so easy when a size didn't work out — real customer service, not just a bot.",
    name: "Priya S.",
    title: "★★★★★ Verified Buyer",
  },
];

const stats = [
  { value: "4.8/5", label: "average rating across 12,000+ reviews" },
  { value: "92%", label: "would recommend to a friend" },
  { value: "60-day", label: "free returns, no questions asked" },
];

export default function CustomerStoriesPage() {
  return (
    <>
      <Section bg="neutral" className="pt-24 pb-20">
        <Eyebrow>Reviews</Eyebrow>
        <h1 className="text-5xl font-black max-w-2xl">
          Loved by thousands of shoppers
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mid-fir">
          Don&apos;t just take our word for it — here&apos;s what customers
          are saying.
        </p>
      </Section>

      <Section bg="white">
        <Eyebrow>As seen in</Eyebrow>
        <div className="flex flex-wrap gap-x-10 gap-y-6 items-center">
          {press.map((name) => (
            <span
              key={name}
              className="font-headline text-xl font-bold text-neutral-6"
            >
              {name}
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
            &ldquo;I&apos;ve bought three jackets now and they all still
            look brand new. Worth every penny.&rdquo;
          </p>
          <p className="text-sm font-bold">Mateo A.</p>
          <p className="text-sm text-neutral-4">★★★★★ Verified Buyer</p>
        </Card>
      </Section>

      <Section bg="dark">
        <Eyebrow>Why shoppers keep coming back</Eyebrow>
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
