"use client";
export default function ComboDisplay({ streak }: { streak: number }) {
  if (streak < 2) return null;
  return <div className="text-center text-accent font-bold text-lg animate-float">{streak}x Combo!</div>;
}

// combo: 1775828046753

// combo: 1775871032125

// combo: 1775919882731

// combo: 1775966494566

// combo: 1776046088720

// combo: 1776062561823

// combo: 1776083598741

// combo: 1776115668087

// combo: 1776143424761

// combo: 1776170301738

// combo: 1776185895440

// combo: 1776215002080

// combo: 1776247484460

// combo: 1776256034053

// combo: 1776269329820

// combo: 1776315368925
