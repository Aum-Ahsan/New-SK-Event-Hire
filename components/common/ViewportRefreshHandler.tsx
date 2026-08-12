"use client";

import { useEffect, useRef } from "react";

function getDeviceCategory(width: number): "mobile" | "ipad" | "desktop" {
  if (width < 700) return "mobile";
  if (width < 1024) return "ipad";
  return "desktop";
}

export function ViewportRefreshHandler() {
  const categoryRef = useRef<"mobile" | "ipad" | "desktop" | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    categoryRef.current = getDeviceCategory(window.innerWidth);

    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const currentCategory = getDeviceCategory(window.innerWidth);
        if (categoryRef.current && categoryRef.current !== currentCategory) {
          categoryRef.current = currentCategory;
          window.location.reload();
        }
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
