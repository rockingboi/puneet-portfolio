import FadeIn from './FadeIn';

const EXPERIENCE = [
  {
    period: 'Nov 2023 – Dec 2023',
    role: 'Python Intern',
    company: 'Abroad Pathway Immigration Consultant Pvt. Ltd.',
    location: 'Delhi, India',
    highlights: [
      'Automated data processing workflows with Python, cutting manual processing time by 40%.',
      'Cleaned and structured datasets for internal reporting and analytics.',
      'Collaborated with the team to improve data reliability and workflow efficiency.',
    ],
  },
  {
    period: 'Jun 2024 – Jul 2024',
    role: 'AI Trainee',
    company: 'GLA University',
    location: 'Remote',
    highlights: [
      'Built an AI-powered health assistant using LLM APIs for chatbot interaction and calorie estimation.',
      'Integrated external AI APIs and handled structured user input/output pipelines.',
      'Worked on prompt design and response evaluation.',
    ],
  },
];

const EDUCATION = [
  {
    period: '2022 – 2026',
    degree: 'B.Tech in Computer Science (AI & ML)',
    institution: 'GLA University',
    location: 'Mathura, India',
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl flex flex-col gap-16 sm:gap-20">
        <div>
          <FadeIn y={20}>
            <h3 className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-[#0C0C0C]/40">
              Work
            </h3>
          </FadeIn>

          <div className="flex flex-col">
            {EXPERIENCE.map((item, i) => (
              <FadeIn key={item.company} delay={i * 0.1} y={30}>
                <div
                  className="flex flex-col gap-4 py-8 sm:py-10 md:py-12 sm:flex-row sm:gap-10 md:gap-14"
                  style={{
                    borderTop: '1px solid rgba(12, 12, 12, 0.15)',
                    ...(i === EXPERIENCE.length - 1
                      ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                      : {}),
                  }}
                >
                  <div className="shrink-0 sm:w-40">
                    <span className="text-sm font-light uppercase tracking-widest text-[#0C0C0C]/50">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 min-w-0 flex-1">
                    <div>
                      <h4
                        className="font-medium uppercase text-[#0C0C0C] leading-tight"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
                      >
                        {item.role}
                      </h4>
                      <p className="mt-1 text-sm text-[#0C0C0C]/60">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {item.highlights.map((point) => (
                        <li
                          key={point}
                          className="font-light leading-relaxed text-[#0C0C0C]/70"
                          style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)' }}
                        >
                          · {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <FadeIn y={20}>
            <h3 className="mb-8 text-xs font-medium uppercase tracking-[0.35em] text-[#0C0C0C]/40">
              Education
            </h3>
          </FadeIn>

          {EDUCATION.map((item, i) => (
            <FadeIn key={item.institution} delay={i * 0.1} y={30}>
              <div
                className="flex flex-col gap-3 py-8 sm:py-10 sm:flex-row sm:gap-10 md:gap-14"
                style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)', borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
              >
                <div className="shrink-0 sm:w-40">
                  <span className="text-sm font-light uppercase tracking-widest text-[#0C0C0C]/50">
                    {item.period}
                  </span>
                </div>
                <div>
                  <h4
                    className="font-medium uppercase text-[#0C0C0C] leading-tight"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}
                  >
                    {item.degree}
                  </h4>
                  <p className="mt-1 text-sm text-[#0C0C0C]/60">
                    {item.institution} · {item.location}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
