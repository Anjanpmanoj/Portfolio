import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "GitHub",
    username: "@Anjanpmanoj",
    icon: Icons.gitHub,
    link: siteConfig.links.github,
  },
  {
    name: "LinkedIn",
    username: "Anjan P Manoj",
    icon: Icons.linkedin,
    link: siteConfig.links.linkedin,
  },
  {
    name: "LeetCode",
    username: "@Anjanpmanoj",
    icon: Icons.leetcode,
    link: siteConfig.links.leetcode,
  },
  {
    name: "Email",
    username: siteConfig.email,
    icon: Icons.gmail,
    link: `mailto:${siteConfig.email}`,
  },
];
