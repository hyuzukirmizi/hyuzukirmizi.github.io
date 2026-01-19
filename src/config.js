// Portfolio Configuration
// Update this file with your personal information

export const config = {
  // Personal Information
  personal: {
    name: "Haluk Yuzukirmizi",
    photo: "/Yuzukirmizi_Haluk.jpg", // Add your photo to the public folder
    summary: "I am a junior pursuing a B.S. in Computer Science with a Minor in Business at the University of Massachusetts Amherst. I am passionate about machine learning and artificial intelligence, I aim to further my education in the long run to develop myself more in these fields while eagerly preparing to launch my career in the industry after graduation. Fun fact, I love traveling different places and exploring cultures. I have been to Paris, Washington D.C., Frankfurt, Vienna, Prague and many more cities.",
    email: "hyuzukirmizi@umass.edu",
  },

  // Social Links
  social: {
    github: "https://github.com/hyuzukirmizi",
    linkedin: "https://www.linkedin.com/in/hyuzukirmizi/",
  },

  // Resume Link
  resumeUrl: "/resume.pdf", // Add your resume PDF to the public folder

  // GitHub Configuration
  github: {
    username: "hyuzukirmizi", // Your GitHub username
    pinnedRepos: [
      "repo-name-1", // Add repo names you want to pin
      "repo-name-2",
      "repo-name-3",
      "repo-name-4",
    ],
    excludedRepos: [
      "hyuzukirmizi.github.io", // Repositories to never show in projects section
    ],
  },

  // Experience (Timeline/Roadmap)
  experiences: [
    {
      id: 1,
      title: "Artificial Intelligence Intern",
      company: "Commonwealth of Massachusetts - EOTSS",
      location: "Amherst, MA",
      period: "Apr 2025 - Sept 2025",
      description: "Engineered a fully serverless multi-modal RAG chatbot for the Unity High-Performance Computing platform and integrated it to the team communication platform Slack, enabling 24/7 automated support for 2,000+ researchers.",
      technologies: ["Python", "AWS", "Streamlit", "S3", "API Gateway", "Lambda", ],
      logo: "/companies/CoMassachusetts.png",
      files: [
        {
          name: "Internship Certificate",
          url: "/files/ai4cw.jpg"
        }
      ]
    },
    {
      id: 2,
      title: "Undergraduate Research Associate",
      company: "University of Massachusetts Amherst - Computer Vision Lab",
      location: "Amherst, MA",
      period: "Sept 2024 - May 2024",
      description: "Conducted research under co-director Prof. Subhransu Maji on DISCount, a human-in-the-loop machine learning model for object counting in high-resolution images.",
      technologies: ["Python", "SciPy", "NumPy", "OpenCV", "Pandas","Matplotlib"],
      logo: "/companies/umass.png",
      files: [
        {
          name: "Program Certificate",
          url: "/files/ersp.pdf"
        },
        {
          name: "Project Poster",
          url: "/files/poster.pdf"
        }
      ]
    },
    {
      id: 3,
      title: "Technical Assistant",
      company: "Isenberg School of Management Technology Support & Service",
      location: "Amherst, MA",
      period: "Sept 2024 - Apr 2025",
      description: "Provided technical support by resolving 100+ ServiceNow tickets, maintaining 765+ technology assets for 322 faculty and staff, and supporting classroom and event technology across 65 learning spaces impacting 5,000+ students.",
      technologies: ["ServiceNow", "Atlassian", "VMWare", "AD"],
      logo: "/companies/Isenberg.jpg"
    },
    {
      id: 4,
      title: "Technical Assistant",
      company: "UMass Library Technology Services",
      location: "Amherst, MA",
      period: "Oct 2023 - May 2024",
      description: "Maintained and supported printers, terminal servers, and 300+ computers across 26 library floors, improved a Microsoft Access registry database by implementing refined query filters, and performed device imaging and OS installations using KACE for new and existing systems.",
      technologies: ["Microsoft Access", "KACE"],
      logo: "/companies/libraries.png"
    }
    // Add more experiences
  ],

  // Leadership & Extracurriculars
  leadership: [
    {
      id: 1,
      title: "Model Architecture Team Member",
      organization: "MIT Gen AI Global for AI 2027",
      period: "Sep 2025 - Present",
      description: "Defined model and agent system boundaries (I/O, tools, rate limits, permissions) to support safety and architecture reviews.",
      image: "/leadership/gen_ai.jpg",
    },
    {
      id: 2,
      title: "Research Fellow",
      organization: "Handshake AI",
      period: "Sept 2025 - Dec 2025",
      description: "Worked on AI content evaluation projects, providing quality assurance feedback on model-generated content to improve accuracy.",
      image: "/leadership/handshakeai.jpg",
    },
    {
      id: 3,
      title: "Ulaunch Competitor",
      organization: "UMass Entrepreneurship Club",
      period: "Fall 2023 - Spring 2024",
      description: "Won $2,000 in total as first-place winners in Fall 2023 with hydroponic agriculture website and Spring 2024 with dining common order app concept.",
      image: "/leadership/ulaunch.jpg",
    }
    // Add more leadership roles
  ],
};
