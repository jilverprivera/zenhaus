"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useAppSelector } from "@/utils/hooks";
import { IFeature } from "@/interfaces";

export const FeatureCardComponent = ({ slug, imageUrl }: IFeature) => {
  const controls = useAnimation();
  const { inViewFeature } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const animations = {
      hidden: { opacity: 0.25, scale: 1, y: -20, height: "0%" },
      visible: { opacity: 1, scale: 1, y: 0, height: "100%" },
      exit: { opacity: 0, height: "0%", y: 20 },
    };
    const isCurrent = inViewFeature === slug;
    if (isCurrent) {
      controls.start(animations.visible);
    } else {
      controls.start(animations.hidden);
    }
  }, [inViewFeature, controls, slug]);

  return (
    <motion.div
      animate={controls}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`absolute top-0 left-0 inset-0 h-full w-full rounded-2xl transition-opacity overflow-hidden cursor-pointer ${
        inViewFeature === slug
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0 hidden "
      }`}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={slug}
          width={1920}
          height={1080}
          objectFit="contain"
          className="hover:scale-105 duration-300"
        />
      )}
    </motion.div>
  );
};
