"use client";

import Button from "@/components/ui/button";
import Personalize from "@/components/personalize";

// FX flag: "home_hero" — string variables `headline`, `subheadline`,
// `ctaLabel`. Create the flag with these three variables in the FX
// dashboard, then run an experiment or targeted rule that overrides them
// per audience/variation.
const HOME_HERO_DEFAULTS = {
  headline: "Turn more browsers into buyers",
  subheadline:
    "One platform to experiment, merchandise, and sell — so your retail team can stop fighting the stack and get back to growing revenue.",
  ctaLabel: "Explore the platform",
};

export default function HomeHero() {
  return (
    <Personalize flagKey="home_hero" defaults={HOME_HERO_DEFAULTS}>
      {(vars, { track }) => (
        <>
          <h1 className="text-5xl md:text-6xl font-black max-w-3xl">
            {vars.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-mid-fir">
            {vars.subheadline}
          </p>
          <div className="mt-10 flex gap-4">
            <Button
              href="/product"
              variant="primary"
              onClick={() => track("hero_cta_click")}
            >
              {vars.ctaLabel}
            </Button>
            <Button href="/customer-stories" variant="outline">
              See customer stories
            </Button>
          </div>
        </>
      )}
    </Personalize>
  );
}
