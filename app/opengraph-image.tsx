import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#0f172a",
          color: "#f8fafc",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700 }}>
          {siteConfig.authorName}
        </div>
        <div style={{ fontSize: 44, marginTop: 16, color: "#cbd5e1" }}>
          {siteConfig.jobTitle}
        </div>
        <div style={{ fontSize: 30, marginTop: 40, color: "#94a3b8" }}>
          React · Node.js · MySQL · MongoDB · Python
        </div>
      </div>
    ),
    size
  );
}
