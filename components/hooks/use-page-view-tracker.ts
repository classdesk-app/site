"use client";

import { useMemo } from "react";

export function usePageViewTracker() {
    const appId = "6905b1f0d2326f0019f5a265";
    const nocache = useMemo(() => Math.random().toString(36).substring(7), []);
    const src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${nocache}`;

    const onLoad = () => {
        if (typeof window !== "undefined") {
            const win = window as typeof window & {
                trackingFunctions?: {
                    onLoad?: (options: { appId: string }) => void;
                };
            };
            if (
                typeof win.trackingFunctions === "object" &&
                typeof win.trackingFunctions?.onLoad === "function"
            ) {
                win.trackingFunctions.onLoad({ appId });
            } else {
                console.error("Tracking functions not found");
            }
        }
    };

    return {
        src,
        onLoad,
    };
}

