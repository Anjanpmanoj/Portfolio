import { redirect } from "next/navigation";

import { siteConfig } from "@/config/site";

// Serves the PDF in public/. To update the resume, replace that file (keep the name).
export default function ResumePage() {
  redirect(siteConfig.resumePath);
}
