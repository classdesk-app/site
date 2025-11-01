"use client";

import Script from "next/script";
import { usePageViewTracker } from "./hooks/use-page-view-tracker";

export function AnalyticsScript() {
    const { src, onLoad } = usePageViewTracker();

    return <Script src={src} strategy="afterInteractive" onLoad={onLoad} />;
}

