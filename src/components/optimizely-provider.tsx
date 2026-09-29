"use client";

import {
  createInstance,
  createBatchEventProcessor,
  createPollingProjectConfigManager,
  getSendBeaconEventDispatcher,
  OptimizelyProvider,
} from "@optimizely/react-sdk";
import { createContext, useContext, useMemo, type ReactNode } from "react";

const sdkKey = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY;

// Lets components check "is FX actually configured" without calling an FX
// hook directly — calling useDecide() outside an OptimizelyProvider throws,
// and hooks can't be called conditionally. Components branch on this flag
// to pick between a decision-driven child and a static-default child.
const OptimizelyReadyContext = createContext(false);

export function useOptimizelyReady() {
  return useContext(OptimizelyReadyContext);
}

export default function OptimizelyClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const optimizely = useMemo(() => {
    if (!sdkKey) return null;
    return createInstance({
      projectConfigManager: createPollingProjectConfigManager({ sdkKey }),
      // closingEventDispatcher uses sendBeacon for the final flush on page
      // unload — a plain fetch/XHR dispatch can get cancelled mid-flight
      // when a click (e.g. the hero CTA) immediately navigates away.
      eventProcessor: createBatchEventProcessor({
        closingEventDispatcher: getSendBeaconEventDispatcher(),
      }),
    });
  }, []);

  if (!optimizely) {
    // No NEXT_PUBLIC_OPTIMIZELY_SDK_KEY set — render children unwrapped so
    // the rest of the site still works before FX is configured.
    return <>{children}</>;
  }

  return (
    // TODO: replace with a real per-visitor id (e.g. a persisted cookie/uuid)
    // once this is wired to an actual FX project.
    <OptimizelyProvider client={optimizely} user={{ id: "anonymous" }}>
      <OptimizelyReadyContext.Provider value={true}>
        {children}
      </OptimizelyReadyContext.Provider>
    </OptimizelyProvider>
  );
}
