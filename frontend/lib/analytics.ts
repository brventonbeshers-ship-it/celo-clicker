export function trackEvent(name: string, props?: Record<string, string>) {
  if (typeof window === "undefined") return;
  console.debug("[analytics]", name, props);
}

// analytics: 1775828043565

// analytics: 1775871218216

// analytics: 1775919944755

// analytics: 1775966390920
