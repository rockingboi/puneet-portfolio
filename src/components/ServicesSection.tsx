import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    title: 'Computer Vision Systems',
    description:
      'Building real-time detection and tracking pipelines with YOLOv8, DeepSORT, and OpenCV — from live video analysis to event-based logging and low-latency inference.',
  },
  {
    number: '02',
    title: 'LLM & RAG Pipelines',
    description:
      'Designing retrieval-augmented systems with DSPy, LangChain, and vector stores — document ingestion, chunking, embedding retrieval, and context-aware generation.',
  },
  {
    number: '03',
    title: 'End-to-End ML Pipelines',
    description:
      'Developing complete workflows from data preprocessing and model training to evaluation and deployment — using PyTorch, Scikit-learn, and structured experimentation.',
  },
  {
    number: '04',
    title: 'API Integration & Deployment',
    description:
      'Shipping AI features via REST APIs with FastAPI and Flask, containerizing with Docker, and integrating external LLM APIs into production-ready services.',
  },
  {
    number: '05',
    title: 'Applied Deep Learning',
    description:
      'Applying transformers, custom ML models, and IoT sensor data to solve domain problems — from predictive irrigation to health assistants and surveillance analytics.',
  },
];

const ServicesSection = () => {
  return (
    <section
      id="expertise"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Expertise
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: '1px solid rgba(215, 226, 234, 0.15)',
                ...(i === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(215, 226, 234, 0.15)' }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#D7E2EA] leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </div>

              <div className="group flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
                <h3
                  className="font-medium uppercase text-[#D7E2EA] leading-tight relative inline-block w-fit"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#D7E2EA]/60 transition-all duration-500 group-hover:w-full" />
                </h3>
                <p
                  className="font-light leading-relaxed text-[#D7E2EA] max-w-2xl"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    opacity: 0.65,
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
