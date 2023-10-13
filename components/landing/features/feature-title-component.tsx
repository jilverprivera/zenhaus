"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import {
  onClearInViewFeature,
  onSetInViewFeature,
} from "@/store/slices/ui-slice";
import { IFeature } from "@/interfaces";

export const FeatureTitleComponent = ({
  slug,
  title,
  description,
}: IFeature) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const { inViewFeature } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();
  const prevIsInView = useRef<boolean | null>(null);

  useEffect(() => {
    if (isInView && !prevIsInView.current) {
      dispatch(onSetInViewFeature(slug));
    }
    if (!isInView && inViewFeature === slug) {
      dispatch(onClearInViewFeature());
    }
    prevIsInView.current = isInView;
  }, [dispatch, isInView, inViewFeature, slug]);

  return (
    <div ref={ref} className="my-48 space-y-4">
      <h3
        className={`feature-title text-5xl font-bold  ${
          isInView ? "text-neutral-100" : "text-neutral-600"
        }`}
      >
        {title}
      </h3>
      <p
        className={`feature-title text-lg font-normal ${
          isInView ? "text-neutral-100" : "text-neutral-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
};
