import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  className?: string;
  textClassName?: string;
}

// Shows public/profile.jpg when it exists; otherwise falls back to initials.
// To add your photo: save it as public/profile.jpg (square works best) and rebuild.
export function ProfileAvatar({ className, textClassName }: ProfileAvatarProps) {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "profile.jpg")
  );

  if (hasPhoto) {
    return (
      <Image
        src="/profile.jpg"
        width={256}
        height={256}
        priority
        alt={`${siteConfig.authorName} - ${siteConfig.jobTitle}`}
        className={cn(
          "rounded-full bg-primary object-cover border-8 border-primary",
          className
        )}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={siteConfig.authorName}
      className={cn(
        "flex items-center justify-center rounded-full bg-primary border-8 border-primary text-primary-foreground font-heading",
        className
      )}
    >
      <span className={cn("select-none", textClassName)}>
        {siteConfig.initials}
      </span>
    </div>
  );
}
