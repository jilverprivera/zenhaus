"use client";

import { AnimatePresence } from "framer-motion";
import { FeatureCardComponent } from "./feature-card-component";
import { FeatureTitleComponent } from "./feature-title-component";
import featureSectionList from "@/data/features.json";

export const FeaturesSection = () => {
  return (
    <section className="max-w-screen-xl w-11/12 mx-auto relative mt-32">
      <h2 className="absolute top-0 left-0 text-4xl font-bold tracking-tight leading-snug text-gray-300 sm:text-7xl">
        Everything you need.{" "}
        <span className="bg-gradient-to-r from-sky-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          All in one platform.
        </span>
      </h2>
      <div className="flex w-full items-start justify-center gap-8">
        <div className="w-full py-[20vh] flex-1">
          {featureSectionList.map((feature) => (
            <FeatureTitleComponent key={feature.slug} {...feature} />
          ))}
        </div>
        <div className="sticky top-0 flex h-screen w-3/5 items-center">
          <div className="relative aspect-video w-full rounded-2xl [&:has(>_.active-card)]:bg-transparent">
            <AnimatePresence mode="sync">
              {featureSectionList.map((feature) => (
                <FeatureCardComponent key={feature.slug} {...feature} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
