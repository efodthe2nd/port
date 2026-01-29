export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: {
    hero: string;
    screens: string[];
  };
  accent: string;
  year: string;
}

export const projects: Project[] = [
  {
    slug: "succession-story",
    title: "Succession Story",
    subtitle: "Legacy letter questionnaire for estate planning",
    description:
      "A guided questionnaire application helping attorneys collect meaningful legacy letters from their clients. Built with a focus on conversion optimization and seamless payment integration. The application guides users through thoughtful prompts to create lasting letters for their loved ones.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    liveUrl: "https://successionstory.com",
    images: {
      hero: "/images/projects/succession-story/hero.svg",
      screens: [
        "/images/projects/succession-story/screen-1.svg",
        "/images/projects/succession-story/screen-2.svg",
        "/images/projects/succession-story/screen-3.svg",
        "/images/projects/succession-story/mobile.svg",
      ],
    },
    accent: "#8b5cf6", // Purple
    year: "2025",
  },
  {
    slug: "gobonki",
    title: "Gobonki",
    subtitle: "Digital loyalty cards for local businesses",
    description:
      "Your phone is now your loyalty cards. A digital stamp card platform that works with Apple Wallet and Google Wallet. Built for restaurants, cafes, and barbers who want to reward their regulars without the paper waste. No app download required for customers.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Apple Wallet API", "Tailwind CSS"],
    liveUrl: "https://gobonki.com",
    images: {
      hero: "/images/projects/gobonki/hero.svg",
      screens: [
        "/images/projects/gobonki/screen-1.svg",
        "/images/projects/gobonki/screen-2.svg",
        "/images/projects/gobonki/screen-3.svg",
        "/images/projects/gobonki/screen-4.svg",
      ],
    },
    accent: "#14b8a6", // Teal
    year: "2025",
  },
  {
    slug: "skateboard",
    title: "Suburbia Skateboards",
    subtitle: "3D skateboard customizer with WebGL",
    description:
      "An immersive 3D skateboard customization experience. Users can design their perfect board with real-time 3D preview, custom graphics, and wheel configurations. Built with Three.js and React Three Fiber for smooth 60fps interactions.",
    stack: ["React", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
    liveUrl: "#",
    images: {
      hero: "/images/projects/skateboard/hero.svg",
      screens: [
        "/images/projects/skateboard/screen-1.svg",
        "/images/projects/skateboard/screen-2.svg",
        "/images/projects/skateboard/screen-3.svg",
      ],
    },
    accent: "#ec4899", // Pink
    year: "2024",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
