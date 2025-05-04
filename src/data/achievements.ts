
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "Certificate Link";
  year: string;
  description: string;
  certificateLink: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Complete Machine Learning and Data Science Program",
    type: "Certificate Link",
    year: "2024",
    description: "A comprehensive program covering essential machine learning and data science concepts and techniques.",
    certificateLink:"https://media.geeksforgeeks.org/courses/certificates/425cdb1686bd8f93ead8f306d781b255.pdf",
    icon: Award,
  },
  {
    id: 2,
    title: "Dynamic Programming, Greedy Algorithms",
    type: "Certificate Link", 
    year: "2024",
    description: "A course focused on mastering dynamic programming and greedy algorithm techniques for problem-solving.",
    certificateLink:"https://www.coursera.org/account/accomplishments/verify/4YB8X3XFRKRE",
    icon: Award,
  },
  {
    id: 3,
    title: "Generative AI with Large Language Models ",
    type: "Certificate Link",
    year: "2024",
    description: "An in-depth course on leveraging large language models for generative AI applications.",
    certificateLink:"https://www.coursera.org/account/accomplishments/verify/H6NV346WZH8P",
    icon: Award,
  },
  {
    id: 4,
    title: "Approximation Algorithms and Linear Programming",
    type: "Certificate Link",
    year: "2024",
    description: "A course on linear programming and approximation algorithms with guaranteed solution quality.",
    certificateLink:"https://www.coursera.org/account/accomplishments/verify/34RJ3552WB9Y",
    icon: Award,
  },
  {
    id: 5,
    title: "Data Science BootCamp - From Analysing Data To Creating ML Models",
    type: "Certificate Link",
    year: "2024",
    description: "has successfully completed a 6-week course on Data Science BootCamp - From Analysing Data To Creating ML Models.",
    certificateLink:"https://media.geeksforgeeks.org/courses/certificates/f948ccd083804bba21bc3453da3c46d3.pdf",
    icon: Award,
  },
  {
    id: 6,
    title: "Understanding Cloud Fundamentals",
    type: "Certificate Link",
    year: "2022",
    description: "Foundations of Cloud Computing: Models, Platforms,Services, and Careers.",
    certificateLink:"https://www.linkedin.com/learning/certificates/c209cff720ce01d2de2feb8a7858d421a23a13ce8ff638c789e293b9a2f8393d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BCCWQOMqqRFWeCalfft4ynQ%3D%3D",
    icon: Award,
  },
];
