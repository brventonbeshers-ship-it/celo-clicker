export function trackEvent(name: string, props?: Record<string, string>) {
  if (typeof window === "undefined") return;
  console.debug("[analytics]", name, props);
}

// analytics: 1775828043565

// analytics: 1775871218216

// analytics: 1775919944755

// analytics: 1775966390920

// analytics: 1776046256676

// analytics: 1776062558431

// analytics: 1776083616454
