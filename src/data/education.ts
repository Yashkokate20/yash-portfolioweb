// Education data configuration

import { Education } from '@/types';

export const educationData: Education[] = [
  {
    institution: "Stevens Institute of Technology",
    degree: "Master of Science",
    field: "Financial Technology & Analytics",
    location: "Hoboken, NJ",
    period: "Sep 2025 - May 2027",
    status: "Expected"
  },
  {
    institution: "St. Rock's College of Commerce and Science",
    degree: "Bachelor of Financial Markets",
    location: "Mumbai, India",
    period: "Jul 2020 - Apr 2023",
    honors: "with Distinction"
  }
];

export const educationConfig = {
  id: "education",
  title: "Education",
  subtitle: "Academic background and qualifications",
  animations: {
    section: {
      duration: 0.8,
      ease: "power3.out",
      trigger: "top 85%"
    },
    cards: {
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
      trigger: "top 85%"
    }
  }
};