import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Alpine Edge",
  description:
    "An astro website for an exclusive luxury ski retreat company called Alpine Edge",
  url: "https://alpineedge.com",
  lang: "en",
  locale: "en_GB",
  author: "David Walker",
  twitter: "@N/A",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/DavidWalker-hub/alpine-edge",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Widgets", href: "/widgets" },
  ],
};
