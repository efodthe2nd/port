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
  video?: string; // YouTube video ID for card preview
  cardVideo?: string; // Local video for card preview
  heroVideo?: string; // Local video for project detail page
  screenVideo?: string; // Local video to replace one of the screen images
  i18nSection?: {
    title: string;
    subtitle: string;
    startIndex: number; // Index in screens array where i18n images start
  };
  accent: string;
  year: string;
}

export const projects: Project[] = [
  {
    slug: "skateboard",
    title: "Suburbia Skateboards",
    subtitle: "3D skateboard customizer with WebGL",
    description:
      "An immersive 3D skateboard customization experience. Users can design their perfect board with real-time 3D preview, custom graphics, and wheel configurations. Built with Three.js and React Three Fiber for smooth 60fps interactions.",
    stack: ["React", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS"],
    liveUrl: "https://suburbia-dave.vercel.app/",
    images: {
      hero: "/images/projects/skateboard/hero.png",
      screens: [
        "/images/projects/skateboard/screen-1.png",
        "/images/projects/skateboard/screen-2.png",
        "/images/projects/skateboard/screen-3.png",
      ],
    },
    cardVideo: "/images/projects/skateboard/card-video.mp4",
    heroVideo: "/images/projects/skateboard/hero-video.mp4",
    accent: "#ec4899", // Pink
    year: "2024",
  },
  {
    slug: "succession-story",
    title: "Succession Story",
    subtitle: "Legacy letter questionnaire for estate planning",
    description:
      "A guided questionnaire application helping attorneys collect meaningful legacy letters from their clients. Built with a focus on conversion optimization and seamless payment integration. The application guides users through thoughtful prompts to create lasting letters for their loved ones.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    liveUrl: "https://www.successionstory.now/login",
    images: {
      hero: "/images/projects/succession-story/hero.png",
      screens: [
        "/images/projects/succession-story/screen-1.png",
        "/images/projects/succession-story/screen-2.png",
        "/images/projects/succession-story/screen-3.png",
      ],
    },
    cardVideo: "/images/projects/succession-story/card-video.mp4",
    screenVideo: "/images/projects/succession-story/screen-video.mp4",
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
      hero: "/images/projects/gobonki/hero.png",
      screens: [
        "/images/projects/gobonki/screen-1.png",
        "/images/projects/gobonki/screen-2.png",
        "/images/projects/gobonki/screen-3.png",
        "/images/projects/gobonki/screen-4.png",
      ],
    },
    video: "HD9GT_2_0yo",
    i18nSection: {
      title: "Internationalization & Localization",
      subtitle: "Multi-language support with region-specific content adaptation for global market reach",
      startIndex: 1, // screens 2 and 3 (index 1 and 2)
    },
    accent: "#14b8a6", // Teal
    year: "2025",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
