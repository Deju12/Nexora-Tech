import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How We Build Startups from Idea to Product",
    paragraph:
      "At Nexora Tech, we specialize in turning your startup ideas into fully functional products using modern tools like Next.js and Tailwind CSS.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Dejene Tesfaye",
      image: "/images/blog/author-01.png",
      designation: "FullStack Developer",
    },
    tags: ["startup", "development"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "The Power of a Strong Company Profile",
    paragraph:
      "A well-crafted company profile speaks for your brand. Learn how our designs help businesses build credibility and connect with clients.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Netsanet Alemu",
      image: "/images/blog/author-02.png",
      designation: "UI/UX Designer",
    },
    tags: ["branding", "design"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Essential Network Setup Tips for Small Businesses",
    paragraph:
      "Reliable networking is key for growth. Here’s how Nexora Tech ensures secure, scalable setups for Ethiopian startups and businesses.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Mekdes Fikre",
      image: "/images/blog/author-03.png",
      designation: "Network Engineer",
    },
    tags: ["networking", "security"],
    publishDate: "2025",
  },
];

export default blogData;
