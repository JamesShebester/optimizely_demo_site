"use client";

import { useDecide } from "@optimizely/react-sdk";
import type { EventTags } from "@optimizely/optimizely-sdk";
import type { ReactNode } from "react";
import { useOptimizelyReady } from "./optimizely-provider";

type Meta = {
  enabled: boolean;
  isLoading: boolean;
  /** Track a conversion event against this decision's user context. A
   * no-op when FX isn't configured. */
  track: (eventKey: string, eventTags?: EventTags) => void;
};

type PersonalizeProps<T extends Record<string, unknown>> = {
  /** Feature flag key in the FX project — create it with a string/boolean/
   * number variable per key in `defaults`, then run an experiment or
   * targeted rule that overrides those variable values per audience. */
  flagKey: string;
  /** Fallback values used before FX is configured, while the decision is
   * loading, or for any variable the flag doesn't define. */
  defaults: T;
  children: (vars: T, meta: Meta) => ReactNode;
};

const noopTrack: Meta["track"] = () => {};

export default function Personalize<T extends Record<string, unknown>>({
  flagKey,
  defaults,
  children,
}: PersonalizeProps<T>) {
  const ready = useOptimizelyReady();

  // useDecide() throws outside an OptimizelyProvider, and hooks can't be
  // called conditionally — so when FX isn't configured we render a
  // separate component that never calls the hook at all.
  if (!ready) {
    return <>{children(defaults, { enabled: false, isLoading: false, track: noopTrack })}</>;
  }

  return (
    <PersonalizeWithDecision flagKey={flagKey} defaults={defaults}>
      {children}
    </PersonalizeWithDecision>
  );
}

function PersonalizeWithDecision<T extends Record<string, unknown>>({
  flagKey,
  defaults,
  children,
}: PersonalizeProps<T>) {
  const { decision, isLoading } = useDecide(flagKey);
  const variables = { ...defaults, ...decision?.variables } as T;
  const track: Meta["track"] = (eventKey, eventTags) => {
    decision?.userContext.trackEvent(eventKey, eventTags);
  };
  return (
    <>{children(variables, { enabled: decision?.enabled ?? false, isLoading, track })}</>
  );
}
