"use client";
export default function ComboDisplay({ streak }: { streak: number }) {
  if (streak < 2) return null;
  return <div className="text-center text-accent font-bold text-lg animate-float">{streak}x Combo!</div>;
}

// combo: 1775828046753

// combo: 1775871032125
