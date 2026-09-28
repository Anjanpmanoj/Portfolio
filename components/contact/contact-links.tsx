import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { SocialLinks } from "@/config/socials";
import { siteConfig } from "@/config/site";

export function ContactLinks() {
  return (
    <div className="space-y-6">
      <p className="max-w-2xl text-muted-foreground">
        The quickest way to reach me is email. I&apos;m a final-year student
        looking for fresher full-stack roles, and I reply to every message.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {SocialLinks.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            target={item.name === "Email" ? undefined : "_blank"}
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-lg border bg-background p-5 transition-colors hover:bg-muted"
          >
            <item.icon className="h-8 w-8 flex-shrink-0" />
            <div className="min-w-0">
              <p className="font-bold">{item.name}</p>
              <p className="truncate text-sm text-muted-foreground">
                {item.username}
              </p>
            </div>
            <Icons.externalLink className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-foreground" />
          </Link>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        Based in {siteConfig.location}.
      </p>
    </div>
  );
}
