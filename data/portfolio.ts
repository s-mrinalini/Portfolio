export const personalInfo = {
  name: "Mrinalini S",
  firstName: "Mrinalini",
  lastName: "S",
  title: "Full Stack Developer & UI/UX Designer",
  tagline: "CRAFTING DIGITAL EXPERIENCES SINCE — Y:2019",
  bio: [
    "I'm a full-stack developer and UI/UX designer with a passion for building beautiful, performant web applications. I bridge the gap between design and engineering, crafting experiences that are both visually refined and technically robust.",
    "With expertise in React, Next.js, Node.js, and modern design tools, I've shipped products used by thousands. I believe the best digital products are those where every pixel and every line of code serves the user."
  ],
  location: "San Francisco, CA, USA",
  email: "mrinalini@example.com",
  website: "https://mrinalini.dev",
  socials: {
    linkedin: "https://linkedin.com/in/mrinalini",
    github: "https://github.com/s-mrinalini",
    twitter: "https://twitter.com/mrinalini"
  },
  resumeUrl: "/resume.pdf"
};

export const skills = [
  { name: "React / Next.js", percentage: 95 },
  { name: "TypeScript", percentage: 90 },
  { name: "UI/UX Design", percentage: 88 },
  { name: "Node.js / Express", percentage: 85 },
  { name: "Tailwind CSS", percentage: 92 },
  { name: "Figma", percentage: 87 },
  { name: "PostgreSQL", percentage: 80 },
  { name: "AWS / DevOps", percentage: 75 },
];

export const projects = [
  { slug: "lumina-dashboard", title: "Lumina Dashboard", category: "Web Application", description: "A real-time analytics dashboard built with Next.js and D3.js, handling millions of data points with sub-second render times.", image: "/images/projects/lumina.jpg", tags: ["Next.js", "D3.js", "PostgreSQL"] },
  { slug: "nova-mobile", title: "Nova Mobile App", category: "Mobile Design", description: "End-to-end design and frontend for a fintech mobile app. Conducted user research, built the design system, and implemented React Native screens.", image: "/images/projects/nova.jpg", tags: ["React Native", "Figma", "Node.js"] },
  { slug: "orbit-design-system", title: "Orbit Design System", category: "Design System", description: "A comprehensive component library used across 5 product teams. Includes 80+ components, dark/light themes, and full accessibility compliance.", image: "/images/projects/orbit.jpg", tags: ["React", "Storybook", "TypeScript"] },
  { slug: "apex-ecommerce", title: "Apex E-Commerce", category: "Full Stack", description: "A high-performance e-commerce platform with a custom checkout flow, real-time inventory, and a headless CMS backend.", image: "/images/projects/apex.jpg", tags: ["Next.js", "Stripe", "Sanity"] },
];

export const experience = [
  { title: "Senior Frontend Engineer", company: "Vercel", period: "2023 — Present", description: "Leading the developer experience team, building Next.js tooling and improving the deployment pipeline. Reduced build times by 40% through custom optimization strategies." },
  { title: "Full Stack Developer", company: "Linear", period: "2021 — 2023", description: "Built and maintained core product features for the project management tool used by top engineering teams. Shipped the roadmap view feature and real-time collaboration improvements." },
  { title: "UI Engineer", company: "Stripe", period: "2019 — 2021", description: "Developed components for the Stripe Dashboard design system. Worked closely with design to implement pixel-perfect, accessible UI components used by millions of merchants." },
];

export const education = [
  { degree: "B.S. Computer Science", institution: "UC Berkeley", period: "2015 — 2019", description: "Graduated with Honors. Focus areas: Human-Computer Interaction, Distributed Systems, and Software Engineering. Led the ACM Design chapter." },
  { degree: "UX Design Certificate", institution: "Google / Coursera", period: "2020", description: "Completed the Google UX Design Professional Certificate, covering the full design lifecycle from user research and wireframing to prototyping and usability testing." },
];

export const writing = [
  { slug: "design-systems-at-scale", title: "Building Design Systems at Scale", date: "Mar 2024", category: "Design", excerpt: "How to create a component library that actually gets adopted by your engineering team.", content: "..." },
  { slug: "nextjs-performance", title: "Next.js Performance Patterns I Wish I Knew Earlier", date: "Jan 2024", category: "Engineering", excerpt: "From ISR to edge functions — the patterns that cut our LCP in half.", content: "..." },
  { slug: "dark-ui-design", title: "The Art of Dark UI: Beyond Just Black", date: "Nov 2023", category: "Design", excerpt: "Why most dark themes fail and how to build one that feels truly premium.", content: "..." },
  { slug: "typescript-tips", title: "TypeScript Patterns for React Developers", date: "Sep 2023", category: "Engineering", excerpt: "10 TypeScript patterns that will make your React components dramatically safer.", content: "..." },
];

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
];

export const marqueeTools = ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "FIGMA", "TAILWIND CSS", "POSTGRESQL", "AWS", "FRAMER MOTION", "STORYBOOK"];
