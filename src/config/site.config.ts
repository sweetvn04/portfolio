// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};


export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  author_img: string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    tips: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    image?: string; // default og image
    imageAlt?: string;
    locale?: string;
    type?: string;
    twitterCard?: string;
    robots?: string;
    themeColor?: string;
  };

}

export const siteConfig: SiteConfig = {
  siteName: 'sweet\'s Portfolio',
  domain: 'sweetvn2004.id.vn',
  author: 'sweetvn',
  description: 'System/DevOps Engineer & Full Stack Learner. Building Homelabs & AI Assistants.',
  about:
    'I am a final year student with a strong background in System/DevOps (Linux, Docker, Networking). I enjoy reverse engineering and building self-hosted infrastructures. Currently exploring Next.js and AI VTuber technologies.',
  author_img: '/img/aquatic.png', // Placeholder
  keywords: [
    'System Admin',
    'DevOps',
    'Docker',
    'Linux',
    'Self-hosted',
    'Next.js',
    'React',
    'Homelab',
    'AI VTuber'
  ],
  ogImage: '/og.png',
  twitterHandle: '@sweetvn04',

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    website: 'https://sweetvn2004.id.vn',
    github: 'https://github.com/sweetvn04',
    linkedin: 'https://www.linkedin.com/in/quoc-bao-nguyen-62b3593a2/',
    tips: '#',
    email: 'mailto:nguyenquocbao2004tvc@gmail.com',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/sweetvn04', icon: 'github' },
    // { label: 'LinkedIn', url: 'https://www.linkedin.com/feed/', icon: 'linkedin' },
    { label: 'Website', url: 'https://sweetvn2004.id.vn', icon: 'globe' },
    { label: 'Tip', url: 'https://sweetvn2004.id.vn', icon: 'coffee' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    // { label: 'Posts', href: '/posts' },
    // { label: 'Chat', href: '/chat' },
    { label: 'Contact', href: '/contact' }
  ],


  seo: {
    title: 'sweetvn\'s Portfolio',
    description: 'Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.',
    keywords: [
      'sweetvn',
      'Full Stack Developer',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
      'Framer Motion',
      'Machine Learning',
      'AI',
      'Docker',
      'Linux',
      'System Admin',
      'DevOps',
      'Self-hosted',
      'React',
      'Homelab',
      'AI VTuber'
    ],
    canonical: 'https://sweetvn2004.id.vn',
    image: '/og.png',
    imageAlt: "sweetvn's Portfolio",
    locale: 'en-US',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },

};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? 'website',
      locale: seo.locale,
    },
    twitter: {
      card: seo.twitterCard ?? 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    other: {
      robots: seo.robots,
      'theme-color': seo.themeColor,
      'og:image:alt': seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
