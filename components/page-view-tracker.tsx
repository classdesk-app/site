"use client";

import Script from "next/script";
import { usePageViewTracker } from "@/components/hooks/use-page-view-tracker";

export function PageViewTracker() {
  const { src, onLoad } = usePageViewTracker();

  return <Script src={src} async defer onLoad={onLoad} />;
}

