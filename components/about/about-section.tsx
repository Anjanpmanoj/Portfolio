import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { achievements, certifications, education } from "@/config/education";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <div className="mx-auto grid max-w-[64rem] gap-6 md:grid-cols-2">
      <div className="rounded-lg border bg-background p-6 space-y-4">
        <h3 className="font-heading text-2xl">Education</h3>
        <ul className="space-y-4">
          {education.map((item) => (
            <li key={item.degree} className="space-y-0.5">
              <p className="font-bold">{item.degree}</p>
              <p className="text-sm text-muted-foreground">
                {item.institution}
              </p>
              <p className="text-sm text-muted-foreground">
                {item.period} · {item.score}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border bg-background p-6 space-y-4">
        <h3 className="font-heading text-2xl">Certifications</h3>
        <ul className="space-y-4">
          {certifications.map((item) => (
            <li key={item.title} className="space-y-0.5">
              <Link
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-bold underline-offset-4 hover:underline"
              >
                {item.title}
                <Icons.externalLink className="h-4 w-4 text-muted-foreground" />
              </Link>
              <p className="text-sm text-muted-foreground">{item.issuer}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border bg-background p-6 space-y-3">
        <h3 className="font-heading text-2xl">Problem Solving</h3>
        <p className="text-muted-foreground">
          200+ data structures &amp; algorithms problems solved.
        </p>
        <Link
          href={siteConfig.links.leetcode}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-bold underline-offset-4 hover:underline"
        >
          <Icons.leetcode className="h-5 w-5" />
          View my LeetCode profile
        </Link>
      </div>

      <div className="rounded-lg border bg-background p-6 space-y-3">
        <h3 className="font-heading text-2xl">Activities</h3>
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
