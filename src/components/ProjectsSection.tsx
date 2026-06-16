import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  linkLabel?: string;
}

interface ProjectGroup {
  title: string;
  projects: ProjectData[];
}

const PROJECT_GROUPS: ProjectGroup[] = [
  {
    title: 'AI',
    projects: [
      {
        number: '01',
        category: 'Computer Vision',
        name: 'IntelliVision',
        description:
          'Real-time multi-object tracking and event detection platform for live video streams and smart environment monitoring.',
        highlights: [
          'Built detection and tracking with YOLOv8 and DeepSORT to analyze live streams and identify human activity.',
          'Implemented automated event logging with time-stamped video clips and snapshots for surveillance use cases.',
          'Optimized the inference pipeline for low-latency real-time performance.',
        ],
        techStack: ['PyTorch', 'OpenCV', 'YOLOv8', 'DeepSORT'],
      },
      {
        number: '02',
        category: 'LLM · RAG',
        name: 'DocuMind AI',
        description:
          'Retrieval-augmented knowledge intelligence system for context-aware Q&A over custom document collections.',
        highlights: [
          'Developed an LLM-powered RAG system with document ingestion, chunking, and embedding-based retrieval.',
          'Designed a modular retrieval–generation architecture using DSPy.',
          'Improved response relevance through prompt and retrieval optimisation.',
        ],
        techStack: ['DSPy', 'Transformers', 'Vector Retrieval', 'FAISS'],
        liveUrl: 'https://github.com/rockingboi/LLM-and-RAG-using-DSPY-FRAEWORK',
        linkLabel: 'View Project',
      },
      {
        number: '03',
        category: 'Voice AI · Coaching',
        name: 'AI Coaching Voice Assistant',
        description:
          'Production-ready AI voice coaching app where users speak questions, receive AI-generated coaching responses, and hear them spoken back.',
        highlights: [
          'Built browser speech-to-text input with OpenAI-powered coaching responses and speech synthesis output.',
          'Developed a Next.js dashboard with voice coach UI, API routes, and optional auth via Stack and Convex.',
          'Integrated Web Speech API for real-time voice interaction with a modern React 19 + Tailwind stack.',
        ],
        techStack: ['Next.js', 'React', 'OpenAI API', 'JavaScript', 'Convex'],
        liveUrl: 'https://github.com/rockingboi/ai-coaching-voice-assistance',
        linkLabel: 'View Project',
      },
    ],
  },
  {
    title: 'AI + IoT',
    projects: [
      {
        number: '01',
        category: 'Precision Farming',
        name: 'AgroSmart AI',
        description:
          'Predictive irrigation and water optimization system using sensor data and ML-based decisions for precision farming.',
        highlights: [
          'Developed AI-driven irrigation control using soil moisture and environmental sensor inputs.',
          'Automated watering decisions for efficient resource usage in agricultural settings.',
          'Integrated real-time IoT sensors with predictive scheduling to reduce water wastage.',
        ],
        techStack: ['Python', 'ML Models', 'IoT Sensors', 'Scikit-learn'],
        liveUrl: 'https://github.com/rockingboi/smart-farming-app',
        linkLabel: 'View Project',
      },
      {
        number: '02',
        category: 'Smart Home · IoT',
        name: 'Smart Home Energy Management',
        description:
          'Team-built smart home system for monitoring and managing household energy usage with sensor-driven automation.',
        highlights: [
          'Developed an IoT-integrated energy management solution for real-time home consumption tracking.',
          'Connected sensor data pipelines with automated control logic for efficient energy usage.',
          'Collaborated on end-to-end system design — from data collection to smart home optimization.',
        ],
        techStack: ['Python', 'IoT Sensors', 'Jupyter Notebook', 'ML Models'],
        liveUrl: 'https://github.com/rockingboi/Smart-Home-Energy-Management',
        linkLabel: 'View Project',
      },
    ],
  },
  {
    title: 'Data Science / Analytics',
    projects: [
      {
        number: '01',
        category: 'Time-Series Forecasting',
        name: 'SmartEnergy AI',
        description:
          'Data-driven system for forecasting and optimizing household energy consumption, built Feb 2024 – Mar 2024.',
        highlights: [
          'Performed exploratory data analysis to identify usage patterns and seasonal trends.',
          'Implemented ARIMA and LSTM models for time-series forecasting.',
          'Achieved ~92% prediction accuracy using LSTM, outperforming traditional methods.',
          'Generated insights to support energy optimization and cost reduction.',
        ],
        techStack: ['Python', 'LSTM', 'ARIMA', 'Pandas', 'NumPy', 'Data Science'],
        liveUrl: 'https://github.com/rockingboi/Smart-Home-Energy-Management',
        linkLabel: 'View Project',
      },
      {
        number: '02',
        category: 'Business Analytics',
        name: 'Coffee Sales Excel Dashboard',
        description:
          'Interactive Excel dashboard for analyzing coffee sales data and uncovering revenue, product, and trend insights.',
        highlights: [
          'Built visual dashboards to track sales performance across products, regions, and time periods.',
          'Applied data cleaning and aggregation to transform raw sales records into actionable metrics.',
          'Designed charts and KPIs to support business decisions on inventory and sales strategy.',
        ],
        techStack: ['Excel', 'Data Analysis', 'Dashboards', 'Business Intelligence'],
        liveUrl: 'https://github.com/rockingboi/Coffee-sales-Excel-Dashboard',
        linkLabel: 'View Project',
      },
      {
        number: '03',
        category: 'HR Analytics',
        name: 'HR Analytics Dashboard',
        description:
          'HR analytics dashboard for workforce insights — attrition, demographics, performance, and hiring trends.',
        highlights: [
          'Analyzed employee datasets to surface attrition patterns and department-level workforce trends.',
          'Built interactive visualizations for headcount, tenure, compensation, and performance metrics.',
          'Delivered data-driven HR insights to support retention and recruitment planning.',
        ],
        techStack: ['Excel', 'HR Analytics', 'Data Visualization', 'Power BI'],
        liveUrl: 'https://github.com/rockingboi/HR-Analytics-Dashboard',
        linkLabel: 'View Project',
      },
    ],
  },
];

const ALL_PROJECTS = PROJECT_GROUPS.flatMap((group) => group.projects);

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-auto min-h-[70vh] w-full"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto flex h-full w-full flex-col gap-6 sm:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-row items-start gap-4 sm:gap-6 md:gap-10 min-w-0 flex-1">
            <div
              className="shrink-0 font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
            >
              {project.number}
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1 sm:gap-3 sm:pt-3 md:pt-4">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.4rem)' }}
              >
                {project.name}
              </h3>
              <p
                className="font-light leading-relaxed text-[#D7E2EA]/75 max-w-3xl"
                style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
              >
                {project.description}
              </p>
            </div>
          </div>

          {project.liveUrl && (
            <div className="shrink-0 self-start sm:pt-3 md:pt-4">
              <LiveProjectButton
                href={project.liveUrl}
                label={project.linkLabel ?? 'Live Project'}
                className="w-full sm:w-auto"
              />
            </div>
          )}
        </div>

        <ul className="flex flex-col gap-3 pl-1 sm:pl-2">
          {project.highlights.map((point) => (
            <li
              key={point}
              className="font-light leading-relaxed text-[#D7E2EA]/70"
              style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)' }}
            >
              · {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.04] px-3 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let globalIndex = 0;

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-7xl flex flex-col gap-16 sm:gap-20 md:gap-24">
        {PROJECT_GROUPS.map((group, groupIndex) => (
          <div key={group.title} className="flex flex-col gap-8">
            <FadeIn delay={groupIndex * 0.05} y={30}>
              <div className="flex flex-col gap-3 border-b border-[#D7E2EA]/15 pb-6 sm:pb-8">
                <h3
                  className="font-black uppercase tracking-tight text-[#D7E2EA] leading-none"
                  style={{ fontSize: 'clamp(1.75rem, 5vw, 3.5rem)' }}
                >
                  {group.title}
                </h3>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-8">
              {group.projects.map((project) => {
                const index = globalIndex;
                globalIndex += 1;

                return (
                  <ProjectCard
                    key={`${group.title}-${project.name}`}
                    project={project}
                    index={index}
                    total={ALL_PROJECTS.length}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
