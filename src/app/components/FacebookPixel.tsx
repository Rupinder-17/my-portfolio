"use client";
import { useEffect } from "react";
import { FB_PIXEL_ID } from "@/lib/fpixel";

declare global {
  interface Window {
    fbq?: any;
  }
}

const FacebookPixel = () => {
  useEffect(() => {
    if (!FB_PIXEL_ID) return;

    // Initialize Facebook Pixel
    (window as any).fbq("init", FB_PIXEL_ID);
    (window as any).fbq("track", "PageView");
  }, [FB_PIXEL_ID]);

  return null;
};

export default FacebookPixel;
