import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      // 🔐 Secure by Design
      <svg width="40" height="45" viewBox="0 0 64 64" className="fill-current">
        <path d="M32 2L6 14v18c0 16.568 13.432 30 30 30s30-13.432 30-30V14L32 2z"/>
        <path d="M26 34l6 6 12-12" stroke="#fff" strokeWidth="4" fill="none"/>
      </svg>
    ),
    title: "🔐 Secure by Design",
    paragraph:
      "Every solution we provide is built with data security in mind—ensuring your digital assets, networks, and client information remain protected.",
  },
  {
    id: 2,
    icon: (
      // 📡 Smart Network Integration
      <svg width="40" height="45" viewBox="0 0 64 64" className="fill-current">
        <circle cx="32" cy="32" r="6" fill="currentColor"/>
        <line x1="32" y1="32" x2="32" y2="6" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="32" x2="32" y2="58" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="32" x2="6" y2="32" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "📡 Smart Network Integration",
    paragraph:
      "From small offices to growing enterprises, we design and install network systems that are stable, scalable, and smart—ready for the demands of modern business.",
  },
  {
    id: 3,
    icon: (
      // 🧠 Tech Simplified
      <svg width="40" height="45" viewBox="0 0 64 64" className="fill-current">
        <path d="M32 2a20 20 0 00-20 20c0 7.732 4.418 14.432 10.828 17.828V50h18.344v-10.172C47.582 36.432 52 29.732 52 22A20 20 0 0032 2z"/>
        <path d="M26 52h12v4H26z"/>
      </svg>
    ),
    title: "🧠 Tech Simplified",
    paragraph:
      "We break down complex IT systems into simple, usable solutions that empower your team, not confuse them.",
  },
  {
    id: 4,
    icon: (
      // 🌐 Unified Digital Ecosystem
      <svg width="40" height="45" viewBox="0 0 64 64" className="fill-current">
        <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none"/>
        <circle cx="32" cy="32" r="10" fill="currentColor"/>
        <line x1="32" y1="2" x2="32" y2="22" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="42" x2="32" y2="62" stroke="currentColor" strokeWidth="2"/>
        <line x1="2" y1="32" x2="22" y2="32" stroke="currentColor" strokeWidth="2"/>
        <line x1="42" y1="32" x2="62" y2="32" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "🌐 Unified Digital Ecosystem",
    paragraph:
      "Web, brand, marketing, and IT—all in one place. Nexora creates connected systems that work seamlessly together.",
  },
  {
    id: 5,
    icon: (
      // 📈 Results-Driven Strategy
      <svg width="40" height="45" viewBox="0 0 64 64" className="fill-current">
        <path d="M8 56h48v4H8z"/>
        <path d="M16 40h8v12h-8zM28 32h8v20h-8zM40 24h8v28h-8z"/>
        <path d="M52 16l-4 4 6 6-6 6 4 4 10-10z"/>
      </svg>
    ),
    title: "📈 Results-Driven Strategy",
    paragraph:
      "We align every service with clear business goals—whether it's increasing visibility, streamlining operations, or boosting client engagement.",
  },
  {
    id: 6,
    icon: (
      // 🤝 Local Expertise, Global Standards
      <svg width="40" height="45" viewBox="0 0 64 64" className="fill-current">
        <path d="M32 4C17.664 4 6 15.664 6 30s11.664 26 26 26 26-11.664 26-26S46.336 4 32 4zM32 48c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18z"/>
        <path d="M20 20a4 4 0 118 0 4 4 0 01-8 0z"/>
        <path d="M14 40c0-5.523 4.477-10 10-10s10 4.477 10 10H14z"/>
      </svg>
    ),
    title: "🤝 Local Expertise, Global Standards",
    paragraph:
      "Headquartered in Ethiopia with a global mindset, we blend local understanding with international best practices in every project.",
  },
];

export default featuresData;
