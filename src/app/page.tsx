"use client";
import Hero from "@/components/home/Hero";
import Snapshot from "@/components/home/Snapshot";
import WhyUs from "@/components/home/WhyUs";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Snapshot />
      <WhyUs />
      <Reviews />
    </main>
  );
}
