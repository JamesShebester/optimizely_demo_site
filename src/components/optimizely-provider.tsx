"use client";

import {
  createInstance,
  createPollingProjectConfigManager,
  OptimizelyProvider,
} from "@optimizely/react-sdk";
import { useMemo, type ReactNode } from "react";

const sdkKey = process.env.NEXT_PUBLIC_OPTIMIZELY_SDK_KEY;

export default function OptimizelyClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const optimizely = useMemo(() => {
    if (!sdkKey) return null;
    return createInstance({
      projectConfigManager: createPollingProjectConfigManager({ sdkKey }),
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
      {children}
    </OptimizelyProvider>
  );
}
