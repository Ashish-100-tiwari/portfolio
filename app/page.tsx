"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('cursor-pointer')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  const contactInfo = {
    location: "New Delhi - 110045, India",
    email: "ashishtiwari1332@gmail.com",
    phone: "+91 7982015467",
    portfolio: "#",
    linkedin: "https://www.linkedin.com/in/ashish-tiwari-ai-engineer/",
    github: "https://github.com/Ashish-100-tiwari",
    leetcode: "https://leetcode.com/sachin_Ashish/",
  };

  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Vintillix Global Innovation",
      period: "February 2025 - present",
      description: "",
      bullets: [
        "Built the wake-word processing pipeline on Raspberry Pi, including on-device speech to-text, command handling, and text-to-speech response generation.",
        "Developed a hybrid wake-word detection system using a bundle of ONNX models for improved accuracy and stability.",
        "Created an LLM server using llama.cpp + FastAPI with RAG, web search, one-shot classifier, and MongoDB-based short-term memory; optimized server latency from 8s → 2s (75% reduction).",
        "Designed the complete Edubot system architecture, enabling seamless communication among server, mobile app, and microprocessor.",
        "Implemented bot navigation control via MQTT on Raspberry Pi, enabling stable and responsive movement operations.",
        "Quantized Microsoft Phi model for Raspberry Pi (4 cores), reducing inference latency from 60s → 4–6s up to 90% improvement.",
        "Integrated WebRTC video calling between Raspberry Pi 4 and Android using custom STUN/TURN servers with Coturn, achieving stable video at <300 ms jitter on private networks.",
        "Consolidated all bot-related software modules into a unified monolithic system on Raspberry Pi for seamless deployment.",
        "Built and tested sensor-validation software for a cooking machine using Kivy, implementing temperature threshold checks with mux and TTL components.",
      ],
    },
    {
      title: "Prompt Engineer",
      company: "Softage AI",
      period: "March 2024 - June 2024",
      description: "",
      bullets: [
        "Designed and refined 1200+ prompts while reviewing and improving 4000+ existing ones to enhance model quality.",
        "Led a major project for Perplexity.ai, focused on improving their Response Handling Logic Framework (RHLF).",
        "Collaborated with the client to optimize data patterns, resulting in improved model accuracy and overall system performance.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "DesignScript",
      period: "November 2023 - February 2024",
      description: "As a Full Stack Developer, I played a pivotal role in elevating online presence and customer engagement. I designed, developed, and maintained a dynamic website showcasing diverse projects, facilitating seamless client connections.",
      bullets: [],
    },
    {
      title: "Subject Matter Expert AI/ML",
      company: "House of Couton Private Limited",
      period: "July 2023 - September 2023",
      description: "Conducted research and analysis in healthcare, technology, and marketing domains for over 10+ projects. Expertise in data-driven insights. Utilized statistical tools, produced actionable reports, and delivered valuable recommendations.",
      bullets: [],
    },
    {
      title: "Data Science",
      company: "Celebal Technologies",
      period: "May 2023 - July 2023",
      description: "Worked on a variety of projects in different domains of data science, including machine learning, deep learning, computer vision, and natural language processing (NLP). Used Python libraries such as NumPy, Pandas, Seaborn, and Matplotlib for data analysis.",
      bullets: [],
    },
    {
      title: "Data Analysis",
      company: "FICE",
      period: "February 2022 - June 2022",
      description: "Worked on Customer attrition modeling predicts and understands churn. Criminal Face Detection System, a Python GUI, features account creation, training, detection, and test pages for comprehensive criminal face recognition.",
      bullets: [],
    },
  ];

  const projects = [
    {
      name: "Tour Planner | Full Stack | LLM Server",
      description: "AI-powered travel platform with authenticated user management, intelligent trip planning comparing bus, train, and flight options, delivering optimal routes with best prices and availability through integrated transport APIs with LLM server.",
      tech: "Llama.cpp, Flask, Rest API, NextJs, Tailwind CSS, Mongodb",
      github: "https://github.com/Ashish-100-tiwari/tour-planner-backend",
      live: "#",
    },
    {
      name: "Tiny Language Model | Build language model from Scratch",
      description: "Built a tiny, child-friendly language model for kids' learning, focused on simple and engaging educational interactions. The model was pretrained on AWS SageMaker (p4 instances) and fine-tuned using supervised instruction tuning on a g4dn.xlarge instance with synthetic NCERT-aligned datasets generated via Amazon Bedrock, enabling personalized and kid-centric responses.",
      tech: "AWS Sagemaker AI, Bedrock, S3, AWS Training Job",
      github: "#",
      live: "#",
    },
    {
      name: "Whatsapp Chat Analyzer",
      description: "It helps users understand various aspects of their WhatsApp conversations, such as message frequency, word count, most active participants, popular emojis, and common topics of discussion. Chat Analyzer include: - Message Statistics, Participant Analysis, Word Frequency and Clouds, Emojis and Media Analysis and Conversation Trends",
      tech: "Jupyter Notebook, Streamlit and Python",
      github: "https://github.com/Ashish-100-tiwari/Whatsapp-chat-Analyzer",
      live: "https://ashish-100-tiwari-whatsapp-chat-analyzer-app-sn2r40.streamlit.app/",
    },
    {
      name: "Dukan Web App",
      description: "Full-featured eCommerce MERN stack web app with user authentication, product management, shopping cart, payment integration, and responsive design. It has some functionality like Login/Sign out, add to cart, User/admin authentication, Admin dashboard. Some features Backend Error Handling, Search, Filter & Pagination, Payment using Stripe.",
      tech: "React, Express, Mongodb, NodeJs",
      github: "https://github.com/Ashish-100-tiwari/Dukan",
      live: "https://dukan-backend.vercel.app/",
    },
    {
      name: "Book Recommendation",
      description: "The website consists of two pages. On the home page, a recommender system based on popularity is implemented. The second page utilizes Collaborative Filtering, a widely used approach in Recommender Systems, to suggest books.",
      tech: "HTML, CSS, Jupyter Notebook, Flask, and Python",
      github: "https://github.com/Ashish-100-tiwari/Book-Recommendation-website",
      live: "https://book-recommender-j328.onrender.com/",
    },
  ];

  const education = [
    {
      degree: "Computer Science and Engineering",
      institution: "Galgotias University, Uttar Pradesh, India",
      period: "2020-2024",
      details: "CGPA 8.7",
    },
    {
      degree: "XII (CBSE)",
      institution: "Jindal Public School, New Delhi, India",
      period: "2020",
      details: "89 Percentage",
    },
  ];

  const achievements = [
    {
      name: "1st RUNNER UP IN PITCH ME COMPETITION ORGANISED BY ECELL [2022]",
      link: "https://www.linkedin.com/in/ashish-tiwari-ai-engineer/details/honors/643544415/multiple-media-viewer/?profileId=ACoAADak6acBdnZHV8XNJLmr9ZNdBhceQFcEdUs&treasuryMediaId=1635544016405",
    },
    {
      name: "2nd RUNNER UP IN UNIFEST IDEATHON ORGANISED BY GCET [2022]",
      link: null,
    },
    {
      name: "1st RUNNER UP IN HACKER RANK CODING COMPETITION ORGANISED BY DEPARTMENT OF RESEARCH GROUP IN GU [2022]",
      link: "https://www.linkedin.com/in/ashish-tiwari-ai-engineer/details/honors/1635544011864/single-media-viewer/?profileId=ACoAADak6acBdnZHV8XNJLmr9ZNdBhceQFcEdUs",
    },
    {
      name: "SCHOLARSHIP AWARDED BY GOVERNMENT OF UTTAR PRADESH - SCHOLAR AT GALGOTIAS UNIVERSITY [2020]",
      link: null,
    },
    {
      name: "PARTICIPATED IN 3+ HACKATHON AND 4+ IDEATHON [2020-2024]",
      link: null,
    },
  ];

  const skills = {
    programming: ["Python", "C++", "SQL"],
    tools: [
      "Git",
      "VS Code",
      "Jupyter Notebook",
      "Docker",
      "Bit Bucket",
      "Jira",
      "AWS Sagemaker AI",
      "AWS Training Job",
      "S3",
      "EC2",
      "AWS Iot Thing",
    ],
    others: [
      "GenAI",
      "ML",
      "DL",
      "OOPs",
      "DBMS",
      "Operating system",
      "Computer Network",
    ],
  };

  const certificates = [
    {
      name: "DBMS BY ORACLE ACADEMY",
      link: null,
    },
    {
      name: "SQL BY ORACLE ACADEMY",
      link: null,
    },
    {
      name: "PYTHON BY IBM",
      link: null,
    },
    {
      name: "DATA SCIENCE BY IBM",
      link: null,
    },
    {
      name: "CRIMINAL FACE DETECTION CERTIFICATE",
      link: "https://www.linkedin.com/in/ashish-tiwari-ai-engineer/details/honors/1635544011858/single-media-viewer/?profileId=ACoAADak6acBdnZHV8XNJLmr9ZNdBhceQFcEdUs",
    },
    {
      name: "SHARK TANK CERTIFICATION",
      link: "https://www.linkedin.com/in/ashish-tiwari-ai-engineer/details/honors/1635544016412/single-media-viewer/?profileId=ACoAADak6acBdnZHV8XNJLmr9ZNdBhceQFcEdUs",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-cyan-400 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="grid-background"></div>

      {/* Scan Line Effect */}
      <div className="scan-line"></div>

      {/* Circuit Pattern Overlay */}
      <div className="circuit-pattern fixed inset-0 pointer-events-none opacity-30"></div>

      {/* Custom Cursor Follower */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className={`w-8 h-8 rounded-full border-2 ${isHovering ? 'border-pink-500' : 'border-cyan-400'} opacity-60`}>
          <div className={`absolute inset-0 rounded-full ${isHovering ? 'bg-pink-500' : 'bg-cyan-400'} blur-md opacity-40`}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            {/* Profile Photo - Centered Row */}
            <div className="flex-shrink-0">
              <div className="relative inline-block float-animation">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="relative w-60 h-60 md:w-70 md:h-70">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-spin-slow"></div>
                  <div className="absolute inset-2 rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/profile-photo.png"
                      alt="Ashish Tiwari - AI ML Engineer"
                      width={280}
                      height={280}
                      className="rounded-full object-cover w-full h-full"
                      style={{ objectPosition: 'center 20%' }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content - Centered Row */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 neon-glow text-cyan-400 glitch-text">
                ASHISH TIWARI
              </h1>
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-2xl opacity-50"></div>
                <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-semibold relative z-10">
                  AI ML Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 max-w-4xl mx-auto">
            <div className="bg-[#0f0f1a] border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group">
              <div className="flex items-start gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform">📍</span>
                <div>
                  <p className="text-xs text-purple-400 mb-1 font-medium">Location</p>
                  <p className="text-sm text-cyan-300">{contactInfo.location}</p>
                </div>
              </div>
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-[#0f0f1a] border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform">✉</span>
                <div>
                  <p className="text-xs text-purple-400 mb-1 font-medium">Email</p>
                  <p className="text-sm text-cyan-300 group-hover:text-cyan-200 transition-colors">{contactInfo.email}</p>
                </div>
              </div>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-[#0f0f1a] border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
                <div>
                  <p className="text-xs text-purple-400 mb-1 font-medium">Phone</p>
                  <p className="text-sm text-cyan-300 group-hover:text-cyan-200 transition-colors">{contactInfo.phone}</p>
                </div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href={contactInfo.linkedin}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 transform hover:scale-110 pulse-glow border border-blue-400 shadow-lg shadow-blue-500/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href={contactInfo.github}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-110 pulse-glow border border-purple-400 shadow-lg shadow-purple-500/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            <Link
              href={contactInfo.leetcode}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-400 hover:to-red-500 transition-all duration-300 transform hover:scale-110 pulse-glow border border-orange-400 shadow-lg shadow-orange-500/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center neon-glow text-cyan-400">
            <span className="text-purple-400">[</span> EDUCATION <span className="text-purple-400">]</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="hologram-card bg-[#0f0f1a] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border-2 border-cyan-500/50 hover:border-cyan-400 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 relative z-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-purple-400 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-sm md:text-base text-green-400">
                      {edu.period}
                    </p>
                    <p className="text-sm md:text-base font-medium text-pink-400">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center neon-glow text-cyan-400">
            <span className="text-purple-400">[</span> EXPERIENCE <span className="text-purple-400">]</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="hologram-card bg-[#0f0f1a] rounded-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border-2 border-cyan-500/50 hover:border-cyan-400 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 relative z-10">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-purple-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-sm md:text-base text-green-400 mt-2 md:mt-0 font-mono">
                    {exp.period}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-cyan-300 leading-relaxed mb-3 relative z-10">
                    {exp.description}
                  </p>
                )}
                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="list-none space-y-2 text-cyan-300 relative z-10">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="leading-relaxed flex items-start gap-3">
                        <span className="text-green-400 mt-1">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center neon-glow text-cyan-400">
            <span className="text-purple-400">[</span> PROJECTS <span className="text-purple-400">]</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="hologram-card bg-[#0f0f1a] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col border-2 border-purple-500/50 hover:border-purple-400 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3 relative z-10 group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-cyan-300 mb-4 flex-grow leading-relaxed relative z-10 text-sm">
                  {project.description}
                </p>
                {('achievement' in project && (project as any).achievement) && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/50 relative z-10">
                    <p className="text-xs font-semibold text-yellow-400 flex items-center gap-2">
                      <span className="text-lg">🤖</span>
                      {(project as any).achievement}
                    </p>
                  </div>
                )}
                <div className="mb-4 relative z-10">
                  <p className="text-sm font-medium text-purple-400 mb-2">
                    Tech used:
                  </p>
                  <p className="text-sm text-green-400 font-mono">
                    {project.tech}
                  </p>
                </div>
                <div className="flex gap-4 mt-auto relative z-10">
                  <Link
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 border border-purple-400 shadow-lg shadow-purple-500/50 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.live}
                    className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 border border-cyan-400 shadow-lg shadow-cyan-500/50 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center neon-glow text-cyan-400">
            <span className="text-purple-400">[</span> ACHIEVEMENTS <span className="text-purple-400">]</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              achievement.link ? (
                <Link
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hologram-card bg-[#0f0f1a] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-500/50 hover:border-yellow-400 relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-bl-full"></div>
                  <p className="text-cyan-300 font-medium relative z-10 flex items-start gap-3 group-hover:text-cyan-200 transition-colors">
                    <span className="text-yellow-400 text-xl">⚡</span>
                    <span>{achievement.name}</span>
                  </p>
                </Link>
              ) : (
                <div
                  key={index}
                  className="hologram-card bg-[#0f0f1a] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-500/50 hover:border-yellow-400 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-bl-full"></div>
                  <p className="text-cyan-300 font-medium relative z-10 flex items-start gap-3">
                    <span className="text-yellow-400 text-xl">⚡</span>
                    <span>{achievement.name}</span>
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center neon-glow text-cyan-400">
            <span className="text-purple-400">[</span> SKILLS <span className="text-purple-400">]</span>
          </h2>
          <div className="bg-[#0f0f1a] rounded-lg shadow-2xl p-6 md:p-8 space-y-6 border-2 border-cyan-500/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                <span className="text-green-400">▸</span> Programming:
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.programming.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/50 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <span className="text-green-400">▸</span> Tools and IDE:
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/50 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                <span className="text-green-400">▸</span> Others:
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.others.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-300 rounded-lg text-sm font-medium border border-green-500/50 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center neon-glow text-cyan-400">
            <span className="text-purple-400">[</span> CERTIFICATES <span className="text-purple-400">]</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              cert.link ? (
                <Link
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hologram-card bg-[#0f0f1a] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-pink-500/50 hover:border-pink-400 relative overflow-hidden group cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>
                  <p className="text-cyan-300 font-medium relative z-10 flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                    <span className="text-pink-400 text-2xl">🔮</span>
                    <span>{cert.name}</span>
                  </p>
                </Link>
              ) : (
                <div
                  key={index}
                  className="hologram-card bg-[#0f0f1a] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-pink-500/50 hover:border-pink-400 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>
                  <p className="text-cyan-300 font-medium relative z-10 flex items-center gap-3 group-hover:text-cyan-200 transition-colors">
                    <span className="text-pink-400 text-2xl">🔮</span>
                    <span>{cert.name}</span>
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center relative z-10">
        <div className="border-t border-cyan-500/30 pt-6">
          <p className="text-cyan-400/70 font-mono">
            © {new Date().getFullYear()} ASHISH TIWARI | AI/ML ENGINEER | ALL RIGHTS RESERVED
          </p>
          <p className="text-purple-400/50 text-sm mt-2 font-mono">
            {"< />"} Powered by Next.js & AI
          </p>
        </div>
      </footer>
    </div>
  );
}
