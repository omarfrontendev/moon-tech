"use client"

import DreamBigger from "@/components/sections/dream-bigger";
import FitFuelSection from "@/components/sections/fit-fuel";
import FitGuide from "@/components/sections/fit-guide";
import GetYourFit from "@/components/sections/get-your-fit";
import Hero from "@/components/sections/hero";
import Palette from "@/components/sections/palette";
import Tracking from "@/components/sections/tracking";
import TypographyShowcase from "@/components/sections/typography-showcase";
import Workout from "@/components/sections/workout";

export default function Home() {
  return (
    <div >
      <Hero />
      <div className="d-flex flex-column gap-3 margin-top-80">
        <GetYourFit />
        <FitGuide />
        <Workout />
        <TypographyShowcase />
        <DreamBigger />
        <Palette />
        <Tracking />
        <FitFuelSection />
      </div>
    </div>
  );
}
