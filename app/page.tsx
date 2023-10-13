import { Fragment } from "react";

import { HeroSection } from "@/components/landing/hero";
import { MoreFeaturesSection } from "@/components/landing/features";
import { FeaturesSection } from "@/components/landing/features/features-section";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <FeaturesSection />
      {/* <MoreFeaturesSection />'90 */}
    </Fragment>
  );
}
